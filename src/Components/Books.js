import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const GradeHeader = ({ title }) => (
  <div className="flex items-center my-10 px-4 md:px-28">
    <div className="flex-grow h-[1px] bg-gray-300"></div>
    <span className="px-4 text-gray-400 text-sm font-medium tracking-wider text-center">
      {title}
    </span>
    <div className="flex-grow h-[1px] bg-gray-300"></div>
  </div>
);

export default function Books({
  moreBooks = false,
  data = null,
  showGradeHeader = false,
  searchQuery = "", // 💡 إضافة prop البحث لربط المكون بالـ Hero أو الـ Searchbar
}) {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    if (!data) {
      fetch("https://api-zyzn.onrender.com/api/books")
        .then((res) => res.json())
        .then((data) => {
          setBooks(data);
          setLoading(false);
        })
        .catch((err) => {
          console.error("Error fetching books:", err);
          setLoading(false);
        });
    } else {
      setLoading(false);
    }
  }, [data]);

  // 1. تحديد المصدر الأساسي للبيانات (سواء Prop خارجي أو جلب من الـ API)
  const baseBooks = data ? data : books;

  // 2. 💡 التصفية الذكية بناءً على نص البحث (البحث في العنوان أو الوصف)
  const filteredBooks = baseBooks.filter((book) => {
    if (!book) return false;
    if (!searchQuery.trim()) return true; // إذا كان البحث فارغاً، تعرض الكتب كاملة

    const targetTitle = book.title || "";
    const targetDesc = book.description || "";

    return (
      targetTitle.toLowerCase().includes(searchQuery.toLowerCase().trim()) ||
      targetDesc.toLowerCase().includes(searchQuery.toLowerCase().trim())
    );
  });

  // 3. تحديد الكمية المراد عرضها (عرض الكل أو أول 8 عناصر فقط في الرئيسة)
  const finalBooks = moreBooks || data ? filteredBooks : filteredBooks.slice(0, 8);

  // حالة التحميل (Skeleton Loader)
  if (loading) {
    return (
      <section className="bg-white py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-center mb-12">
            <div className="h-10 w-64 bg-gray-200 animate-pulse rounded-lg"></div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[1, 2, 3, 4].map((item) => (
              <div
                key={item}
                className="bg-white rounded-[2rem] border border-gray-100 overflow-hidden p-0 shadow-sm"
              >
                <div className="w-full h-[380px] bg-gray-200 animate-pulse"></div>
                <div className="p-6 space-y-4">
                  <div className="h-5 bg-gray-200 animate-pulse rounded w-3/4 mx-auto"></div>
                  <div className="h-4 bg-gray-100 animate-pulse rounded w-1/2 mx-auto"></div>
                  <div className="space-y-2">
                    <div className="h-3 bg-gray-100 animate-pulse rounded w-full"></div>
                    <div className="h-3 bg-gray-100 animate-pulse rounded w-5/6 mx-auto"></div>
                  </div>
                  <div className="h-10 bg-gray-200 animate-pulse rounded-full w-32 mx-auto mt-4"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="bg-white py-20 px-4 mb-10">
      <div className="max-w-7xl mx-auto w-full">
        
        {/* العناوين الرئيسية */}
        {!data && (
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Explore Books for Every Subject
            </h2>
          </div>
        )}

        {showGradeHeader && (
          <div className="-mt-20">
            <GradeHeader title="First year of secondary school" />
          </div>
        )}

        {/* 💡 التعامل مع حالة عدم وجود نتائج مطابقة للبحث */}
        {filteredBooks.length === 0 ? (
          <div className="text-center py-16 text-gray-400 text-sm">
            No books found matching "{searchQuery}"
          </div>
        ) : (
          /* شبكة عرض الكتب المفلترة */
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {finalBooks.map((book) => (
              <div
                key={book.id}
                className="bg-white rounded-[2rem] shadow-md border border-gray-100 overflow-hidden flex flex-col transition-transform duration-300 hover:scale-[1.02] w-full"
              >
                {/* غلاف الكتاب وقراءة الـ PDF */}
                <div
                  className="w-full h-[380px] overflow-hidden cursor-pointer relative group"
                  onClick={() => window.open(book.pdfUrl, "_blank")}
                >
                  <img
                    src={book.cover}
                    alt={book.title}
                    className="w-full h-full object-cover block transition-transform duration-500 group-hover:scale-[1.25]"
                    style={{
                      transform: "scale(1.20)",
                      transformOrigin: "center center",
                    }}
                  />
                  <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="bg-white/90 text-gray-800 px-4 py-2 rounded-full text-sm font-bold shadow-lg">
                      Click to Read PDF
                    </span>
                  </div>
                </div>

                {/* تفاصيل الكتاب */}
                <div className="p-6 text-center flex flex-col flex-grow">
                  <h3 className="text-[17px] font-bold text-gray-800 mb-1 leading-tight line-clamp-1">
                    {book.title}
                  </h3>
                  <p className="text-[13px] text-gray-400 mb-4">{book.grade}</p>

                  <p className="text-gray-500 text-[12px] leading-relaxed mb-6 line-clamp-3">
                    {book.description}
                  </p>

                  <div className="mt-auto">
                    <button
                      onClick={() => navigate(`/book/${book.id}`)}
                      className="bg-[#42b893] hover:bg-[#369c7c] text-white font-medium py-2.5 px-10 rounded-full transition-colors duration-300 text-[14px]"
                    >
                      View details
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* زر عرض المزيد من الكتب */}
        {!moreBooks && !data && filteredBooks.length > 0 && (
          <div className="flex justify-center mt-12">
            <button
              onClick={() => navigate("/all-books")}
              className="bg-[#42b893] hover:bg-[#369c7c] text-white font-bold py-3 px-14 rounded-full transition-all duration-300 ease-in-out shadow-[0_4px_14px_0_rgba(66,184,147,0.39)] hover:shadow-[0_6px_20px_rgba(66,184,147,0.23)] hover:scale-105 active:scale-95"
            >
              More Books
            </button>
          </div>
        )}
      </div>
    </section>
  );
}