import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { HiOutlineCheckCircle } from "react-icons/hi";
import SubjectTopSection from "../Components/SubjectTopSection";
import LessonCard from "../Components/LessonCard";
import EmptyState from "../Components/EmptyState";

const LessonSkeleton = () => (
  <div className="w-full flex flex-col gap-4">
    {[1, 2, 3].map((n) => (
      <div key={n} className="w-full p-5 bg-white border border-gray-100 rounded-2xl shadow-sm flex items-center justify-between animate-pulse">
        <div className="flex items-center gap-4 w-2/3">
          <div className="w-12 h-12 bg-gray-200 rounded-xl flex-shrink-0" />
          <div className="flex-1 space-y-2">
            <div className="h-4 bg-gray-200 rounded w-1/3" />
            <div className="h-3 bg-gray-200 rounded w-1/2" />
          </div>
        </div>
        <div className="w-24 h-8 bg-gray-200 rounded-full" />
      </div>
    ))}
  </div>
);

const AssignmentSkeleton = () => (
  <div className="w-full flex flex-col gap-4">
    {[1, 2].map((n) => (
      <div key={n} className="w-full p-5 bg-white border border-gray-100 rounded-2xl shadow-sm animate-pulse space-y-4">
        <div className="space-y-2">
          <div className="h-4 bg-gray-200 rounded w-1/4" />
          <div className="h-3 bg-gray-200 rounded w-12" />
        </div>
        <div className="space-y-2 border-b border-gray-100 pb-4">
          <div className="h-3 bg-gray-200 rounded w-full" />
          <div className="h-3 bg-gray-200 rounded w-5/6" />
        </div>
        <div className="w-36 h-9 bg-gray-200 rounded-full" />
      </div>
    ))}
  </div>
);

export default function SubjectDetails() {
  const { bookId, subjectName } = useParams();
  const navigate = useNavigate();

  const [lessons, setLessons] = useState([]);
  const [assignments, setAssignments] = useState([]);
  const [loading, setLoading] = useState(false);
  const [assignmentsLoading, setAssignmentsLoading] = useState(false);
  const [activeTab, setActiveTab] = useState("lessons");

  useEffect(() => {
    const fetchSubjectData = async () => {
      if (!bookId || !subjectName) return;

      setLoading(true);
      setAssignmentsLoading(true);

      try {
        const lessonsResponse = await fetch(
          `https://api-zyzn.onrender.com/api/lessons?bookId=${bookId}`
        );
        const lessonsData = await lessonsResponse.json();
        setLessons(lessonsData);

        const formattedSubject =
          subjectName.charAt(0).toUpperCase() +
          subjectName.slice(1).toLowerCase();

        const assignmentsResponse = await fetch(
          `https://api-zyzn.onrender.com/api/assignments?subject=${formattedSubject}`,
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("userToken")}`,
            },
          }
        );

        if (assignmentsResponse.ok) {
          const assignmentsData = await assignmentsResponse.json();
          setAssignments(assignmentsData);
        }
      } catch (error) {
        console.error("Error fetching subject data:", error);
      } finally {
        setLoading(false);
        setAssignmentsLoading(false);
      }
    };

    fetchSubjectData();
  }, [bookId, subjectName]);

  const gradeText =
    lessons.length > 0 ? lessons[0].grade : "First year of secondary school";

  return (
    <div className="max-w-7xl mx-auto py-4 md:py-8 px-4">
      <SubjectTopSection
        subjectName={subjectName}
        grade={gradeText}
        onBack={() => navigate(-1)}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />

      <div className="mt-6">
        {activeTab === "lessons" && (
          <div>
            <h3 className="text-lg font-bold text-gray-800 mb-4 capitalize text-start">
              Lessons List
            </h3>
            {loading ? (
              <LessonSkeleton />
            ) : lessons.length === 0 ? (
              <EmptyState type="lessons" />
            ) : (
              <div className="w-full flex flex-col gap-4">
                {lessons.map((lesson) => (
                  <LessonCard key={lesson.id} lesson={lesson} />
                ))}
              </div>
            )}
          </div>
        )}

        {activeTab === "assignments" && (
          <div>
            <h3 className="text-lg font-bold text-gray-800 mb-4 capitalize text-start border-b-2 border-b-gray-200 pb-2">
              Assignment List
            </h3>
            {assignmentsLoading ? (
              <AssignmentSkeleton />
            ) : assignments.length === 0 ? (
              <EmptyState type="assignments" />
            ) : (
              <div className="w-full flex flex-col gap-4">
                {assignments.map((task) => (
                  <div
                    key={task.id}
                    className="w-full p-5 bg-white border border-gray-100 rounded-2xl shadow-sm hover:shadow-md transition duration-200"
                  >
                    <div className="mb-3">
                      <h4 className="text-sm font-bold text-gray-800 mb-0.5 text-start">
                        {task.subject}
                      </h4>
                      <p className="text-base text-gray-400 font-medium text-start">
                        Task #{task.taskNumber}
                      </p>
                    </div>
                    <p className="text-base text-gray-500 leading-relaxed mb-4 border-b border-gray-200 pb-4 text-start">
                      {task.question}
                    </p>
                    <button
                      className={`flex items-center gap-2 px-6 py-1.5 rounded-full text-base font-medium transition duration-200 ${
                        task.completed
                          ? "bg-[#2CB797] text-white"
                          : "bg-white text-gray-700 border border-gray-200 hover:bg-gray-50"
                      }`}
                    >
                      <HiOutlineCheckCircle className="w-5 h-5 text-current" />
                      {task.completed ? "Completed" : "Mark as Completed"}
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {activeTab === "quizzes" && <EmptyState type="quizzes" />}
      </div>
    </div>
  );
}