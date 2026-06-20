import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { HiOutlineArrowNarrowLeft } from "react-icons/hi";

export default function BookDetails() {
  const { id } = useParams();
  const [book, setBook] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const fetchAllBooks = async () => {
      try {
        const token = localStorage.getItem("userToken");
        const response = await fetch(
          "https://educational-platform-backend-935l.onrender.com/api/books",
          {
            headers: {
              Authorization: `Bearer ${token}`,
               "Cache-Control": "no-cache",
            },
          }
        );

        if (!response.ok) {
          throw new Error("Failed to fetch books");
        }

        const data = await response.json();
        const booksList = data.books || data.data?.books || data || [];
        
const selectedBook = booksList.find((b) => 
  b._id === id || String(b.id) === String(id)
);
        if (selectedBook) {
          setBook(selectedBook);
        } else {
          setError("Book not found");
        }
        setLoading(false);
      } catch (err) {
        console.error("Error fetching book:", err);
        setError("Failed to load book details");
        setLoading(false);
      }
    };

    fetchAllBooks();
  }, [id]);

  if (loading) {
    return (
      <div className="max-w-7xl mx-auto px-4 md:px-10 pt-32 pb-20 animate-pulse">
        <div className="flex items-center mb-10">
          <div className="w-8 h-8 bg-gray-200 rounded-full mr-3"></div>
          <div className="w-40 h-6 bg-gray-200 rounded-md"></div>
        </div>
        <div className="flex flex-col md:flex-row items-start gap-8 mb-12">
          <div className="w-[160px] h-[230px] bg-gray-200 rounded-2xl flex-shrink-0"></div>
          <div className="pt-2 flex-grow space-y-4">
            <div className="w-64 h-8 bg-gray-200 rounded-md"></div>
            <div className="w-48 h-6 bg-gray-200 rounded-md"></div>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="max-w-7xl mx-auto px-4 md:px-10 pt-32 pb-20 text-center">
        <p className="text-red-500 text-lg">{error}</p>
        <button onClick={() => navigate(-1)} className="mt-4 text-[#42b893] hover:underline">
          Go Back
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 md:px-10 pt-20 pb-20 font-sans">
      <button
        onClick={() => navigate(-1)}
        className="flex items-center text-black hover:text-[#42b893] transition-colors mb-10 group"
      >
        <HiOutlineArrowNarrowLeft className="text-2xl mr-3 font-light transition-transform group-hover:-translate-x-1" />
        <span className="text-xl font-bold tracking-tight">
  {book ? (book.subject || book.category || "Back") : "Back"}
</span>
      </button>

      <div className="flex flex-col md:flex-row items-start gap-8 mb-12">
        <div className="w-[145px] h-[210px] md:w-[160px] md:h-[230px] flex-shrink-0 shadow-lg rounded-2xl overflow-hidden">
          <img
            src={book.thumbnail || book.cover || "https://via.placeholder.com/160x230"}
            alt={book.title || "Book cover"}
            className="w-full h-full object-cover"
          />
        </div>

        <div className="pt-12">
          <h1 className="text-2xl font-semibold text-gray-900 mb-1 text-start">
            {book.title || "Untitled Book"}
          </h1>
          <p className="text-lg text-gray-800 font-semibold mb-1">
            {book.author || book.teacher || "Unknown Author"}
          </p>
          <p className="text-gray-400 text-[13px] text-start">
            {book.category || book.subject || "General"}
          </p>
          {(book.fileUrl || book.pdfUrl) && (
            <a
              href={book.fileUrl || book.pdfUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-4 bg-[#42b893] text-white px-6 py-2 rounded-full hover:bg-[#369c7c] transition-colors text-sm"
            >
              Read PDF
            </a>
          )}
        </div>
      </div>

      <div className="max-w-4xl">
        <p className="text-gray-800 leading-[1.8] text-[15px] font-normal text-left">
{book.description || book.longDescription || book.desc || "No description available."}        </p>
      </div>
    </div>
  );
}