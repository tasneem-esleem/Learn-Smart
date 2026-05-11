// import React, { useState } from 'react'
// import { FiArrowLeft, FiStar } from 'react-icons/fi';
// import { useNavigate } from 'react-router-dom';

// export default function Feedback() {
//   const [rating, setRating] = useState(5);
//   const [enjoy, setEnjoy] = useState("");
//   const [comment, setComment] = useState("");
//   const navigate = useNavigate();

//   return (
//     <div className="min-h-screen bg-white flex items-center justify-center p-4 md:p-10 font-sans lg:py-10 md:-mt-28">
//       <div className="bg-white w-full max-w-7xl rounded-[40px] shadow-[0_10px_60px_rgba(0,0,0,0.05)] p-8 md:p-14">

//         <div className="flex items-center gap-3 mb-12">
//           <button className="text-gray-800 hover:opacity-70 transition-opacity"
//           onClick={()=>navigate('/settings')}
//           >
//             <FiArrowLeft size={22} />
//           </button>
//           <h1 className="text-xl font-bold text-black">Send Feedback</h1>
//         </div>

//         <div className="text-center mb-12">
//           <h2 className="text-lg font-bold text-gray-900 mb-1">Give Feedback</h2>
//           <p className="text-[11px] text-gray-400">How to satisfy you with your experience with us</p>
//         </div>

//         <div className="mb-8">
//           <h3 className="text-sm font-bold text-gray-900 mb-4 text-start">Rate your experience</h3>
//           <div className="flex gap-1">
//             {[1, 2, 3, 4, 5].map((star) => (
//               <FiStar
//                 key={star}
//                 size={20}
//                 className={`cursor-pointer transition-colors ${star <= rating ? 'fill-[#FFD700] text-[#FFD700]' : 'text-gray-300'}`}
//                 onClick={() => setRating(star)}
//               />
//             ))}
//           </div>
//         </div>

//         <div className="mb-8">
//           <h3 className="text-sm font-bold text-gray-900 mb-4 text-start">Do you have any thoughts you would like to share ?</h3>
//           <textarea
//             value={comment}
//             onChange={(e)=>setComment(e.target.value)}
//             placeholder="Enter your description ...."
//             className="w-full h-44 p-5 rounded-3xl border border-gray-100 bg-white shadow-[0_4px_20px_rgba(0,0,0,0.02)] outline-none focus:border-[#3BB78F] transition-all text-sm text-gray-600 resize-none placeholder:text-gray-300"
//           />
//         </div>

//         <div className="mb-12">
//           <h3 className="text-sm font-bold text-gray-900 mb-5 text-start">Are you enjoying your experience on our platform?</h3>
//           <div className="flex items-center gap-8">

//             <label className="flex items-center gap-3 cursor-pointer group">
//               <input
//                 type="radio"
//                 name="enjoy"
//                 className="hidden"
//                 checked={enjoy === "yes"}
//                 onChange={() => setEnjoy("yes")}
//               />
//               <div className="w-5 h-5 rounded-full border-2 border-[#3BB78F] flex items-center justify-center">
//                 <div className={`w-2.5 h-2.5 rounded-full bg-[#3BB78F] transition-transform ${enjoy === "yes" ? "scale-100" : "scale-0"}`}></div>
//               </div>
//               <span className="text-gray-400 text-sm group-hover:text-gray-600 transition-colors">Yes</span>
//             </label>

//             <label className="flex items-center gap-3 cursor-pointer group">
//               <input
//                 type="radio"
//                 name="enjoy"
//                 className="hidden"
//                 checked={enjoy === "no"}
//                 onChange={() => setEnjoy("no")}
//               />
//               <div className="w-5 h-5 rounded-full border-2 border-[#3BB78F] flex items-center justify-center">
//                 <div className={`w-2.5 h-2.5 rounded-full bg-[#3BB78F] transition-transform ${enjoy === "no" ? "scale-100" : "scale-0"}`}></div>
//               </div>
//               <span className="text-gray-400 text-sm group-hover:text-gray-600 transition-colors">No</span>
//             </label>

//           </div>
//         </div>

//         <div className="flex flex-col md:flex-row items-center gap-4">
//           <button className="bg-[#3BB78F] hover:bg-[#34a37f] text-white font-bold py-2 px-10 rounded-full transition-all w-full md:w-auto min-w-[220px]">
//             Send Feedback
//           </button>
//           <button className="bg-[#EBF9F5] text-[#3BB78F] font-bold py-2 px-10 rounded-full hover:bg-[#dcf3ed] transition-all w-full md:w-auto min-w-[220px]">
//             Cancel Feedback
//           </button>
//         </div>

//       </div>
//     </div>
//   )
// }


import React, { useState } from 'react'
import { FiArrowLeft, FiStar } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';

export default function Feedback() {
  const [rating, setRating] = useState(5);
  const [enjoy, setEnjoy] = useState("");
  const [comment, setComment] = useState(""); // إضافة state للتعليق
  const [isSubmitting, setIsSubmitting] = useState(false); // لحالة التحميل
  
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // التحقق من أن المستخدم اختار "Yes" أو "No" على الأقل
    if (!enjoy) {
      alert("Please tell us if you enjoyed your experience (Yes/No)");
      return;
    }

    setIsSubmitting(true);

    // تجهيز البيانات للإرسال
    const feedbackData = {
      rating,
      enjoy,
      comment,
      submittedAt: new Date().toISOString()
    };

    try {
      // هنا يتم الربط مع الـ API الخاص بك مستقبلاً
      console.log("Sending Feedback:", feedbackData);
      
      // محاكاة عملية إرسال (تأخير بسيط)
      await new Promise(resolve => setTimeout(resolve, 1000));

      alert("Thank you for your feedback!");
      navigate('/settings'); // العودة لصفحة الإعدادات بعد النجاح
    } catch (error) {
      console.error("Error sending feedback:", error);
      alert("Something went wrong, please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-white flex items-center justify-center p-4 md:p-10 font-sans lg:py-10 md:-mt-28">
      <div className="bg-white w-full max-w-7xl rounded-[40px] shadow-[0_10px_60px_rgba(0,0,0,0.05)] p-8 md:p-14">

        {/* زر الرجوع */}
        <div className="flex items-center gap-3 mb-12">
          <button 
            className="text-gray-800 hover:opacity-70 transition-opacity"
            onClick={() => navigate('/settings')}
          >
            <FiArrowLeft size={22} />
          </button>
          <h1 className="text-xl font-bold text-black">Send Feedback</h1>
        </div>

        <div className="text-center mb-12">
          <h2 className="text-lg font-bold text-gray-900 mb-1">Give Feedback</h2>
          <p className="text-[11px] text-gray-400">How satisfied are you with your experience with us?</p>
          
          {/* نجوم التقييم */}
          <div className="flex justify-center gap-2 mt-4">
            {[1, 2, 3, 4, 5].map((star) => (
              <button
                key={star}
                onClick={() => setRating(star)}
                className={`transition-colors ${star <= rating ? 'text-yellow-400' : 'text-gray-200'}`}
              >
                <FiStar size={30} fill={star <= rating ? "currentColor" : "none"} />
              </button>
            ))}
          </div>
        </div>

        {/* قسم التعليق (Textarea) */}
        <div className="mb-10">
           <textarea 
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              placeholder="Write your comment here..." 
              className="w-full p-6 rounded-[30px] border border-gray-100 bg-[#F9FAFB] focus:outline-none focus:border-[#3BB78F] min-h-[150px] resize-none transition-all"
           />
        </div>

        {/* سؤال الإعجاب (Enjoy) */}
        <div className="mb-12">
          <p className="text-sm font-semibold text-gray-700 mb-4 text-center md:text-left">
            Did you enjoy the experience?
          </p>
          <div className="flex justify-center md:justify-start gap-8">
            <label className="flex items-center gap-3 cursor-pointer group">
              <input
                type="radio"
                name="enjoy"
                className="hidden"
                checked={enjoy === "yes"}
                onChange={() => setEnjoy("yes")}
              />
              <div className="w-5 h-5 rounded-full border-2 border-[#3BB78F] flex items-center justify-center">
                <div className={`w-2.5 h-2.5 rounded-full bg-[#3BB78F] transition-transform ${enjoy === "yes" ? "scale-100" : "scale-0"}`}></div>
              </div>
              <span className="text-gray-400 text-sm group-hover:text-gray-600 transition-colors">Yes</span>
            </label>

            <label className="flex items-center gap-3 cursor-pointer group">
              <input
                type="radio"
                name="enjoy"
                className="hidden"
                checked={enjoy === "no"}
                onChange={() => setEnjoy("no")}
              />
              <div className="w-5 h-5 rounded-full border-2 border-[#3BB78F] flex items-center justify-center">
                <div className={`w-2.5 h-2.5 rounded-full bg-[#3BB78F] transition-transform ${enjoy === "no" ? "scale-100" : "scale-0"}`}></div>
              </div>
              <span className="text-gray-400 text-sm group-hover:text-gray-600 transition-colors">No</span>
            </label>
          </div>
        </div>

        {/* أزرار الإرسال */}
        <div className="flex flex-col md:flex-row items-center gap-4">
          <button 
            onClick={handleSubmit}
            disabled={isSubmitting}
            className={`bg-[#3BB78F] hover:bg-[#34a37f] text-white font-bold py-2 px-10 rounded-full transition-all w-full md:w-auto min-w-[220px] ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}
          >
            {isSubmitting ? "Sending..." : "Send Feedback"}
          </button>
          <button 
            onClick={() => navigate('/settings')}
            className="text-gray-400 hover:text-gray-600 font-medium transition-colors"
          >
            Maybe later
          </button>
        </div>

      </div>
    </div>
  )
}