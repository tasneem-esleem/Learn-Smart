import React from 'react';

export default function LessonCard({ lesson }) {
  const handleClick = () => {
    if (lesson.videoUrl && lesson.videoUrl !== "#") {
      window.open(lesson.videoUrl, "_blank");
    }
  };

  return (
    <div
      onClick={handleClick}
      className="flex flex-row bg-white border border-gray-100 rounded-2xl overflow-hidden hover:shadow-md transition duration-200 cursor-pointer shadow-sm items-center"
    >
      
      <div className="relative w-40 h-28 flex-shrink-0 bg-gray-100">
        {lesson.thumbnail ? (
          <img
            src={lesson.thumbnail}
            alt={lesson.title}
            className="absolute inset-0 w-full h-full object-cover"
            loading="lazy"
          />
        ) : (
          <div className="w-full h-full bg-gray-200" />
        )}
        <div className="absolute inset-0 bg-black/10 flex items-center justify-center">
          <div className="w-8 h-8 bg-white/90 rounded-full flex items-center justify-center shadow-md">
            <svg className="w-3 h-3 text-[#2CB797] fill-current ml-0.5" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z" />
            </svg>
          </div>
        </div>
      </div>

      <div className="flex flex-col justify-center gap-1 px-4">
        <h4 className="text-sm font-bold text-gray-800 text-start">{lesson.title}</h4>
        <p className="text-xs text-gray-400 text-start">{lesson.subject} - {lesson.grade}</p>
        {lesson.teacher && (
          <p className="text-xs text-gray-400 text-start">{lesson.teacher}</p>
        )}
        <p className="text-xs text-gray-400 text-start mt-1">{lesson.duration}</p>
        {lesson.watched && (
          <span className="text-[10px] bg-green-50 text-[#2CB797] px-1.5 py-0.5 rounded-md font-medium w-fit">
            Watched
          </span>
        )}
      </div>

    </div>
  );
}