import React, { useState, useEffect } from 'react';
import Profilesidebar from './Profilesidebar';

export default function Assignments() {
  const [assignments, setAssignments] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchAssignments = async () => {
    try {
      const token = localStorage.getItem("userToken") || localStorage.getItem("token");
      const res = await fetch("https://api-zyzn.onrender.com/api/assignments", {
        headers: { Authorization: `Bearer ${token}` },
      });
      const data = await res.json();
      setAssignments(Array.isArray(data) ? data : []);
    } catch (err) {
      console.error("Error fetching assignments:", err);
    } finally {
      setLoading(false);
    }
  };

  const handleMarkAsComplete = async (id) => {
    try {
      const token = localStorage.getItem("userToken") || localStorage.getItem("token");
      const res = await fetch(`https://api-zyzn.onrender.com/api/assignments/${id}/complete`, {
        method: "PATCH",
        headers: { Authorization: `Bearer ${token}` },
      });

      if (res.ok) {
        setAssignments((prev) =>
          prev.map((a) => (a.id === id ? { ...a, completed: true } : a))
        );
      }
    } catch (err) {
      console.error("Error updating assignment:", err);
    }
  };

  useEffect(() => {
    fetchAssignments();
  }, []);

  if (loading) {
  return (
    <div className="bg-white min-h-screen flex flex-row-reverse overflow-x-hidden" dir="rtl">
      
      <main className="flex-1 pt-12 px-6 md:px-12 lg:px-24">
        <div className="max-w-4xl mr-auto" dir="ltr">
          
          <div className="h-9 w-60 bg-gray-100 rounded-lg mb-10 px-2 animate-pulse"></div>

          <div className="flex flex-col gap-8 w-full">
            {[1, 2, 3].map((item) => (
              <div key={item} className="bg-white rounded-[30px] border border-gray-100 shadow-[0_10px_40px_rgba(0,0,0,0.01)] p-8 animate-pulse text-start">
                
                <div className="h-7 w-48 bg-gray-100 rounded-md mb-2"></div>
                
                <div className="h-4 w-20 bg-gray-50 rounded-md mb-4"></div>
                
                <div className="space-y-2.5 mb-6">
                  <div className="h-4 w-full bg-gray-50 rounded"></div>
                  <div className="h-4 w-full bg-gray-50 rounded"></div>
                  <div className="h-4 w-3/4 bg-gray-50 rounded"></div>
                </div>

                <div className="h-[1px] bg-gray-100 w-full mb-6"></div>

                <div className="h-[52px] w-full sm:w-[240px] bg-gray-100 rounded-[18px]"></div>
              </div>
            ))}
          </div>
        </div>
      </main>
      
      <aside className="bg-white border-l border-gray-100 h-screen sticky top-0 z-10 w-fit lg:w-72 flex-shrink-0">
        <div className="pt-8 px-2 lg:px-4 space-y-5">
          {[1, 2, 3, 4].map(i => (
            <div key={i} className="h-12 w-full bg-gray-100 rounded-full animate-pulse"></div>
          ))}
        </div>
      </aside>
    </div>
  );
}

  return (
    <div className="bg-white min-h-screen flex flex-row-reverse overflow-x-hidden" dir="rtl">
      
      <main className="flex-1 pt-12 px-6 md:px-12 lg:px-24">
        <div className="max-w-4xl ml-auto" dir="ltr">
          <h1 className="text-[28px] font-bold text-black mb-8 px-2 text-left">Assignment</h1>

          <div className="flex flex-col gap-6 w-full">
     {assignments.length > 0 ? (
    assignments.map((item) => (
      <div key={item.id} className="bg-white rounded-[30px] border border-gray-100 shadow-[0_10px_30px_rgba(0,0,0,0.04)] p-8 transition-all hover:shadow-md text-start">
        
        <h2 className="text-[24px] font-bold text-black mb-1 text-start">{item.subject}</h2>
        
        <p className="text-[14px] text-gray-400 font-semibold mb-3">Task #{item.taskNumber}</p>
        
        <p className="text-[14px] text-[#7d7d7d] leading-[1.7] mb-6 font-normal text-start whitespace-pre-line">
          {item.question}
        </p>

        <div className="h-[1px] bg-[#f0f0f0] w-full mb-6"></div>

        {item.completed ? (
          <button className="w-full sm:w-[240px] bg-[#3ab694] text-white py-3.5 rounded-[18px] flex items-center justify-center gap-3 text-[14px] font-bold shadow-sm">
            <div className="w-5 h-5 rounded-full border-2 border-white flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            Completed
          </button>
        ) : (
          <button 
            onClick={() => handleMarkAsComplete(item.id)}
            className="w-full sm:w-[240px] bg-white text-black border border-[#eeeeee] py-3.5 rounded-[18px] flex items-center justify-center gap-3 text-[14px] font-bold hover:bg-gray-50 transition-all shadow-sm"
          >
            <div className="w-5 h-5 rounded-full border border-[#cccccc] flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            Mark as Completed
          </button>
        )}
      </div>
    ))
  ) : (
    <div className="text-center py-10 text-gray-400">No assignments found.</div>
  )}
</div>
        </div>
      </main>
      
      <aside className="bg-white border-l border-gray-100 h-screen sticky top-0 shadow-sm z-10 w-fit lg:w-72 flex-shrink-0">
        <div className="pt-6 px-2 lg:px-4" dir="ltr">
          <Profilesidebar />
        </div>
      </aside>
    </div>
  );
}