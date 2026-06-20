import React, { useState, useEffect } from "react";
import Profilesidebar from "./Profilesidebar";

export default function Assignments() {
  const [assignments, setAssignments] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchAssignments = async () => {
    try {
      const token = localStorage.getItem("userToken") || localStorage.getItem("token");
      const res = await fetch(
        "https://educational-platform-backend-935l.onrender.com/api/assignments",
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      const data = await res.json();

      const list = data.assignments || data.data?.assignments || [];
      const userString = localStorage.getItem("user");
      const userId = userString ? JSON.parse(userString)._id : null;

      const mapped = list.map((a, index) => ({
        _id: a._id,
        subject: a.title,
        taskNumber: index + 1,
        question: a.description,
        dueDate: a.dueDate,
        completed: a.submissions?.some((s) => s.student === userId) ?? false,
      }));

      setAssignments(mapped);
    } catch (err) {
      console.error("Error fetching assignments:", err);
    } finally {
      setLoading(false);
    }
  };

  const handleMarkAsComplete = async (_id) => {
    try {
      const token = localStorage.getItem("userToken") || localStorage.getItem("token");
      const res = await fetch(
        `https://educational-platform-backend-935l.onrender.com/api/assignments/${_id}/complete`,
        {
          method: "PATCH",
          headers: { Authorization: `Bearer ${token}` },
        }
      );

      if (res.ok) {
        setAssignments((prev) =>
          prev.map((a) => (a._id === _id ? { ...a, completed: true } : a))
        );
      }
    } catch (err) {
      console.error("Error updating assignment:", err);
    }
  };

  useEffect(() => {
    fetchAssignments();
  }, []);

  const SkeletonCard = () => (
    <div className="bg-white rounded-[30px] border border-gray-100 p-6 md:p-8 animate-pulse">
      <div className="h-7 w-48 bg-gray-100 rounded-md mb-2"></div>
      <div className="h-4 w-20 bg-gray-50 rounded-md mb-4"></div>
      <div className="space-y-3 mb-6">
        <div className="h-4 w-full bg-gray-50 rounded"></div>
        <div className="h-4 w-5/6 bg-gray-50 rounded"></div>
      </div>
      <div className="h-[1px] bg-gray-100 w-full mb-6"></div>
      <div className="h-12 w-full sm:w-[240px] bg-gray-100 rounded-[18px]"></div>
    </div>
  );

  return (
    <div className="bg-white min-h-screen flex flex-row-reverse" dir="rtl">
      <main className="flex-1 flex justify-start pt-8 md:pt-12 px-4 md:px-12 lg:px-48">
        <div className="max-w-4xl w-full" dir="ltr">
          {loading ? (
            <div className="h-9 w-48 bg-gray-100 rounded-lg mb-10 animate-pulse"></div>
          ) : (
            <h1 className="text-[24px] md:text-[28px] font-bold text-black mb-8 px-2 text-left">
              Assignment
            </h1>
          )}

          <div className="flex flex-col gap-6 w-full pb-10">
            {loading ? (
              [1, 2, 3].map((i) => <SkeletonCard key={i} />)
            ) : assignments.length > 0 ? (
              assignments.map((item) => (
                <div
                  key={item._id}
                  className="bg-white rounded-[30px] border border-gray-100 shadow-[0_10px_30px_rgba(0,0,0,0.04)] p-6 md:p-8 transition-all hover:shadow-md text-left"
                >
                  <h2 className="text-[20px] md:text-[24px] font-bold text-black mb-1">
                    {item.subject}
                  </h2>
                  <p className="text-[13px] md:text-[14px] text-gray-400 font-semibold mb-3">
                    Task #{item.taskNumber}
                  </p>
                  <p className="text-[14px] text-[#7d7d7d] leading-[1.7] mb-6 font-normal whitespace-pre-line">
                    {item.question}
                  </p>

                  {item.dueDate && (
                    <p className="text-[12px] text-gray-400 mb-4">
                      Due: {new Date(item.dueDate).toLocaleDateString()}
                    </p>
                  )}

                  <div className="h-[1px] bg-[#f0f0f0] w-full mb-6"></div>

                  <button
                    onClick={() => !item.completed && handleMarkAsComplete(item._id)}
                    disabled={item.completed}
                    className={`w-full sm:w-[240px] py-3.5 rounded-[18px] flex items-center justify-center gap-3 text-[14px] font-bold transition-all shadow-sm ${
                      item.completed
                        ? "bg-[#3ab694] text-white cursor-default"
                        : "bg-white text-black border border-[#eeeeee] hover:bg-gray-50"
                    }`}
                  >
                    <div
                      className={`w-5 h-5 rounded-full border flex items-center justify-center ${item.completed ? "border-white" : "border-[#cccccc]"}`}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-3 w-3"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={4}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                    {item.completed ? "Completed" : "Mark as Completed"}
                  </button>
                </div>
              ))
            ) : (
              <div className="text-center py-20 text-gray-400">
                No assignments found.
              </div>
            )}
          </div>
        </div>
      </main>

      <aside className="bg-white border-l border-gray-100 h-screen sticky top-0 shadow-sm z-10 w-[70px] lg:w-72 flex-shrink-0">
        <div className="pt-6 px-2 lg:px-4" dir="ltr">
          <Profilesidebar />
        </div>
      </aside>
    </div>
  );
}