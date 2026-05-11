import React , {useState ,useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom';
import { HiOutlineArrowNarrowLeft } from "react-icons/hi";
export default function BookDetails() {
    const { id } = useParams();
  const [book, setBook] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {

    fetch("https://api-zyzn.onrender.com/api/books")
      .then(res => res.json())
      .then(allBooks => {
        const selectedBook = allBooks.find(b => b.id === parseInt(id));
        setBook(selectedBook);
      })
      .catch(err => console.error("Error:", err));
  }, [id]);

  if (!book) {
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
          <div className="w-32 h-4 bg-gray-100 rounded-md"></div>
        </div>
      </div>

      <div className="max-w-4xl space-y-4 mt-16">
        <div className="w-full h-4 bg-gray-100 rounded"></div>
        <div className="w-full h-4 bg-gray-100 rounded"></div>
        <div className="w-full h-4 bg-gray-100 rounded"></div>
        <div className="w-3/4 h-4 bg-gray-100 rounded"></div>
        <div className="w-1/2 h-4 bg-gray-100 rounded"></div>
      </div>
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
    {book.subject}
  </span>
</button>

  <div className="flex flex-col md:flex-row items-start gap-8 mb-12">
    
    <div className="w-[145px] h-[210px] md:w-[160px] md:h-[230px] flex-shrink-0 shadow-lg rounded-2xl overflow-hidden ">
      <img 
        src={book.cover} 
        alt={book.title} 
        className="w-full h-full object-cover" 
      />
    </div>

    <div className="pt-12">
      <h1 className="text-2xl font-semibold text-gray-900 mb-1 text-start">
        {book.subject.replace('Book', '').trim()}
      </h1>
      <p className="text-lg text-gray-800 font-semibold mb-1">
        {book.teacher}
      </p>
      <p className="text-gray-400 text-[13px] text-start">
        {book.gradeLabel}
      </p>
    </div>
  </div>

  <div className="max-w-4xl">
    <p className="text-gray-800 leading-[1.8] text-[15px] font-normal text-left">
      {book.longDescription}
    </p>
  </div>
</div>
  )
}
