import React, { useEffect, useState } from "react";
import Books, { GradeHeader } from "../Components/Books";

export default function AllBooks() {
  const [allData, setAllData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://educational-platform-backend-935l.onrender.com/api/books")
      .then((res) => res.json())
      .then((data) => {
        setAllData(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  const BooksSkeleton = () => (
    <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-20 animate-pulse">
      {[1, 2, 3, 4].map((i) => (
        <div key={i} className="space-y-4">
          <div className="bg-gray-200 h-[380px] rounded-[2rem] w-full"></div>
          <div className="h-6 bg-gray-200 rounded w-3/4 mx-auto"></div>
          <div className="h-4 bg-gray-100 rounded w-1/2 mx-auto"></div>
        </div>
      ))}
    </div>
  );

  if (loading) {
    return (
      <div className="pt-20">
        <div className="flex justify-center mb-16 animate-pulse">
          <div className="h-10 w-2/3 md:w-1/3 bg-gray-200 rounded-lg"></div>
        </div>

        {[1, 2].map((section) => (
          <div key={section} className="mb-10">
            <div className="max-w-7xl mx-auto px-10 mb-10 h-6 bg-gray-100 rounded w-1/4 animate-pulse"></div>
            <BooksSkeleton />
          </div>
        ))}
      </div>
    );
  }

  // ✅ تجميع الكتب حسب الحقل grade
  const groupedBooks = allData.reduce((acc, book) => {
    const grade = book.grade || "Unknown";
    if (!acc[grade]) acc[grade] = [];
    acc[grade].push(book);
    return acc;
  }, {});

  return (
    <div className="pt-20">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-10">
        Explore Books for Every Subject
      </h2>

      {Object.keys(groupedBooks).map((grade) => (
        <div key={grade} className="mb-10">
          <GradeHeader title={grade} />
          <div className="-mt-20">
            <Books data={groupedBooks[grade]} moreBooks={true} showGradeHeader={true} />
          </div>
        </div>
      ))}
    </div>
  );
}
