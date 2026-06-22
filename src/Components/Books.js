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

const fetchWithRetry = async (url, options = {}, retries = 5, delay = 8000) => {
  for (let i = 0; i < retries; i++) {
    try {
      const res = await fetch(url, options);
      if (res.ok) return res;
    } catch (err) {
      if (i < retries - 1) await new Promise((r) => setTimeout(r, delay));
    }
  }
  return null;
};

export default function Books({
  moreBooks = false,
  data = null,
  showGradeHeader = false,
  searchQuery = "",
}) {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    if (!data) {
      const token = localStorage.getItem("userToken");
      fetchWithRetry(
        "https://educational-platform-backend-935l.onrender.com/api/books",
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Cache-Control": "no-cache",
          },
        }
      )
        .then((res) => (res ? res.json() : null))
        .then((data) => {
          if (data) {
            const booksList = Array.isArray(data)
              ? data
              : Array.isArray(data.data)
              ? data.data
              : data.books || data.data?.books || [];
            setBooks(booksList);
          }
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

  const baseBooks = data ? data : books;

  const filteredBooks = baseBooks.filter((book) => {
    if (!book) return false;
    if (!searchQuery.trim()) return true;
    const targetTitle = book.title || "";
    const targetDesc = book.description || "";

    return (
      targetTitle.toLowerCase().includes(searchQuery.toLowerCase().trim()) ||
      targetDesc.toLowerCase().includes(searchQuery.toLowerCase().trim())
    );
  });

  const finalBooks =
    moreBooks || data ? filteredBooks : filteredBooks.slice(0, 8);

  if (loading) {
    return (
      <section className="bg-white py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-center mb-12">
            <div className="h-10 w-64 bg-gray-200 animate-pulse rounded-lg"></div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[1, 2, 3, 4].map((item) => (
              <div key={item} className="bg-white rounded-[2rem] border border-gray-100 overflow-hidden p-0 shadow-sm">
                <div className="w-full h-[380px] bg-gray-200 animate-pulse"></div>
                <div className="p-6 space-y-4">
                  <div className="h-5 bg-gray-200 animate-pulse rounded w-3/4 mx-auto"></div>
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

        {filteredBooks.length === 0 ? (
          <div className="text-center py-16 text-gray-400 text-sm">
            No books found matching "{searchQuery}"
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {finalBooks.map((book) => (
              <div
                key={book._id}
                onClick={() => navigate(`/book/${book.id}`)}
                className="bg-white rounded-[2rem] shadow-md border border-gray-100 overflow-hidden flex flex-col transition-transform duration-300 hover:scale-[1.02] w-full cursor-pointer"
              >
                <div
                  className="w-full h-[380px] overflow-hidden relative group"
                  onClick={(e) => {
                    e.stopPropagation();
                    if (book.fileUrl) {
                      window.open(book.fileUrl, "_blank");
                    }
                  }}
                >
                  <img
                    src={book.cover || "https://via.placeholder.com/300x400"}
                    alt={book.title}
                    className="w-full h-full object-cover block transition-transform duration-500 group-hover:scale-[1.25]"
                    style={{ transform: "scale(1.20)", transformOrigin: "center center" }}
                  />
                  {book.fileUrl && (
                    <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <span className="bg-white/90 text-gray-800 px-4 py-2 rounded-full text-sm font-bold shadow-lg">
                        Click to Read PDF
                      </span>
                    </div>
                  )}
                </div>

                <div className="p-6 text-center flex flex-col flex-grow">
                  <h3 className="text-[17px] font-bold text-gray-800 mb-1 leading-tight line-clamp-1">
                    {book.title}
                  </h3>
                  <p className="text-[13px] text-gray-400 mb-4">{book.category || "General"}</p>
                  <p className="text-gray-500 text-[12px] leading-relaxed mb-6 line-clamp-3">
                    {book.description || "No description available"}
                  </p>
                  <div className="mt-auto">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        navigate(`/book/${book.id}`);
                      }}
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

        {!moreBooks && !data && filteredBooks.length > 0 && (
          <div className="flex justify-center mt-12">
            <button
              onClick={() => navigate("/all-books")}
              className="bg-[#42b893] hover:bg-[#369c7c] text-white font-medium py-2.5 px-10 rounded-full transition-colors duration-300 text-[14px]"
            >
              More Book
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
