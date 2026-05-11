import React from 'react';
import HelpSearch from "../Components/HelpSearch";
import { useNavigate } from 'react-router-dom';
import BrowseTopics from '../Components/BrowseTopics';
import FeatuesSection from '../Components/FeaturesSection';
import ContactSection from '../Components/ContactSection';
import { FiArrowLeft } from 'react-icons/fi'; 

export default function HelpSupportPage() {
  const navigate = useNavigate();
  return (
    <div className='min-h-screen bg-[#F9FAFB] flex items-start justify-center py-6 md:py-10 px-0 md:px-4'>

      <div className='bg-white rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 px-6 md:px-28 py-8 w-[95%] md:w-full max-w-7xl'>
                <button
          onClick={() => navigate('/settings')}
          className="flex items-center gap-2 text-gray-800 font-semibold text-base hover:text-gray-600 transition-colors mb-7 md:-ml-20"
        >
          <FiArrowLeft size={24} /> Help & Support
        </button>
      
        <HelpSearch />
        <BrowseTopics />
        <FeatuesSection />
        <ContactSection />
      </div>
    </div>
  );
}