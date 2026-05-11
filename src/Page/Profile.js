import React from 'react'
import ProfilePage from '../Components/ProfilePage'

export default function Profile() {
  return (
    <div>
        <ProfilePage/>
    </div>
  )
}
// import React from 'react';
// import { NavLink } from 'react-router-dom'; // افترضت أنكِ تستخدمي React Router
// import Profilesidebar from './Profilesidebar'; // القائمة الجانبية التي عدلناها

// // أيقونة إكس (X) بسيطة لرسالة "No Exams"
// const CloseIcon = () => (
//   <svg width="60" height="60" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
//     <path d="M18 6L6 18" stroke="#E5E7EB" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
//     <path d="M6 6L18 18" stroke="#E5E7EB" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
//   </svg>
// );

// export default function QuizzesPage() {
//   return (
//     // dir="rtl" لضمان بقاء القائمة على اليمين والمحتوى على اليسار
    // <div className="min-h-screen bg-[#F9FAFB] flex flex-row-reverse" dir="rtl">
      
    //   {/* 1. القائمة الجانبية - عرض ثابت وممتد على اليمين */}
    //   <aside className="hidden lg:block w-72 bg-white border-l border-gray-100 min-h-screen sticky top-0 shadow-sm z-10">
    //     <div className="pt-24 px-4">
    //       <Profilesidebar /> {/* تأكدي أن "Quizzes" هي النشطة في كود Profilesidebar */}
    //     </div>
    //   </aside>

    //   {/* 2. المحتوى الرئيسي - المساحة المتبقية على اليسار */}
    //   <main className="flex-1 flex flex-col pt-12 px-6 lg:px-12 items-end">
        
    //     {/* عنوان الصفحة - محاذى لليمين */}
    //     <h1 className="text-3xl font-bold text-gray-800 mb-10 text-right w-full max-w-4xl">Quizzes</h1>

    //     {/* 3. كرت حالة عدم وجود امتحانات - Empty State Card */}
    //     {/* تم استخدام max-w-4xl للحجم الكبير والـ shadows المخصصة من كل الجهات */}
    //     <div className="w-full max-w-4xl">
    //       <div className="bg-white rounded-[2.5rem] p-12 lg:p-20 shadow-[0_0_50px_rgba(0,0,0,0.03)] border border-gray-50 flex flex-col items-center text-center">
            
    //         {/* أيقونة X الرمادية داخل دائرة */}
    //         <div className="mb-10 w-28 h-28 rounded-full border border-gray-100 flex items-center justify-center">
    //           <CloseIcon />
    //         </div>

    //         {/* نصوص الرسالة */}
    //         <h2 className="text-xl font-bold text-gray-600 mb-2">No Exams Available</h2>
    //         <p className="text-sm text-gray-500 max-w-xs leading-relaxed">
    //           You currently don't have any exams assigned. Please check again later.
    //         </p>

    //         {/* 4. زر العودة - Go Back Home */}
    //         <NavLink
    //           to="/home" // عدلي المسار حسب الحاجة
    //           className="mt-12 px-14 py-3.5 rounded-full bg-[#38B793] text-white font-bold text-sm hover:bg-[#2fa382] transition-colors duration-300 shadow-lg shadow-teal-100/50"
    //         >
    //           Go Back Home
    //         </NavLink>
    //       </div>
    //     </div>
    //   </main>
    // </div>
//   );
// }






// import React from 'react';
// import { FiUser, FiLock, FiHelpCircle, FiFileText, FiSend, FiTrash2 } from 'react-icons/fi';
// import Profilesidebar from './Profilesidebar';

// const settingsOptions = [
//   { id: 1, name: 'Manage Profile', icon: <FiUser />, color: 'text-gray-700' },
//   { id: 2, name: 'Privacy & Security', icon: <FiLock />, color: 'text-gray-700' },
//   { id: 3, name: 'Help & support', icon: <FiHelpCircle />, color: 'text-gray-700' },
//   { id: 4, name: 'Terms of use', icon: <FiFileText />, color: 'text-gray-700' },
//   { id: 5, name: 'Send Feedback', icon: <FiSend />, color: 'text-gray-700' },
//   { id: 6, name: 'Delete Account', icon: <FiTrash2 />, color: 'text-red-500' },
// ];

// export default function SettingsPage() {
//   return (
    // <div className="min-h-screen bg-[#F9FAFB] py-10 px-4 lg:px-10" dir="rtl">
      
    //   {/* الحاوية الكبيرة (نفس تصميم البروفايل والكويزات) */}
    //   <div className="max-w-7xl mx-auto bg-white rounded-[2.5rem] shadow-[0_0_50px_0_rgba(0,0,0,0.03)] border border-gray-50 flex flex-row min-h-[85vh] overflow-hidden">
        
    //     {/* سكشن الإعدادات - الجهة اليسرى (بسبب RTL) */}
    //     <main className="flex-1 p-8 lg:p-16">
    //       <h1 className="text-2xl font-bold text-gray-800 mb-10 text-right">Settings</h1>

    //       <div className="flex flex-col gap-4 max-w-xl">
    //         {settingsOptions.map((option) => (
    //           <button
    //             key={option.id}
    //             className="flex items-center gap-4 bg-white border border-gray-100 rounded-full px-6 py-4 shadow-sm hover:shadow-md transition-all duration-300 w-full group"
    //           >
    //             {/* الأيقونة داخل الدائرة أو بدون حسب رغبتك، هنا جعلتها بسيطة كما الصورة */}
    //             <span className={`text-xl ${option.color} group-hover:scale-110 transition-transform`}>
    //               {option.icon}
    //             </span>
    //             <span className={`text-[15px] font-semibold ${option.color}`}>
    //               {option.name}
    //             </span>
    //           </button>
    //         ))}
    //       </div>
    //     </main>

    //     {/* القائمة الجانبية - الجهة اليمنى */}
    //     <aside className="hidden lg:block w-80 bg-white border-r border-gray-100 py-12">
    //       <Profilesidebar />
    //     </aside>

    //   </div>
    // </div>
//   );
// }