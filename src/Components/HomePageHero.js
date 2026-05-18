import React, { useState } from 'react';
import Hero from '../Components/Hero'; // تأكد من مسار الملف الصحيح عندك
import StudyMaterials from '../Components/StudyMaterials'; // تأكد من مسار الملف الصحيح عندك

export default function HomePage() {
  // 💡 إنشاء الـ State الأساسية للبحث هنا في الطرف الأب
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  return (
    <div>
      {/* 1. قسم الـ Hero يرسل النص المكتوب عبر الدالة */}
      <Hero
        variant="search"
        title={<>Learn flexibly ..... <br/> anytime, anywhere</>}
        description={<>Learn flexibly anytime, anywhere with the Learn <br/> Smart platform.</>}
        onSearch={handleSearch} 
      />

      {/* 2. قسم المواد يستقبل نص البحث ليفلتر الكروت داخلياً */}
      <StudyMaterials 
        searchQuery={searchQuery} 
      />
    </div>
  );
}