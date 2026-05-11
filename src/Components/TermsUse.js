import React from 'react'
import { FiArrowLeft } from 'react-icons/fi'; 
import termsImage from '../image/use 1.png'; 
import { useNavigate } from 'react-router-dom';
export default function TermsUse() {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-white flex items-center justify-center p-6 font-sans py-16">
      <div className="bg-white w-full max-w-7xl rounded-[40px] shadow-[0_10px_60px_rgba(0,0,0,0.05)] p-8 md:p-12 relative ">
        
        <div className="flex items-center gap-3 mb-10">
          <button className="text-gray-800 hover:text-gray-600 transition-colors"
          onClick={()=>navigate('/settings')}>
            <FiArrowLeft size={24} />
          </button>
          <h1 className="text-2xl font-bold text-gray-900">Terms Of Use</h1>
        </div>

        <div className="flex justify-center mb-6">
          <img 
            src={termsImage} 
            alt="Terms Illustration" 
            loading="lazy"
            className="w-32 h-auto object-contain"
          />
        </div>

        <div className="text-center mb-6">
          <h2 className="text-[#3BB78F] text-xl font-bold">Terms Of Use</h2>
        </div>

        <div className="text-center mb-8 px-4">
          <p className="text-gray-800 font-bold text-[15px] leading-relaxed">
            By using this platform, you agree to follow the rules and use it responsibly.
          </p>
        </div>
        <div className="space-y-6 text-start max-w-6xl  mb-12">
          <p className="text-gray-400 text-[14px] leading-relaxed ">
            By using this educational website, you acknowledge and agree to abide by all its terms and conditions. 
            The website aims to provide a safe and user-friendly learning environment that helps students learn 
            and access educational content in an organized and effective manner.
          </p>
          
          <p className="text-gray-400 text-[14px] leading-relaxed">
            The website may not be used for any non-educational purposes or for any purpose that could harm the 
            website or other users. Intellectual property rights for the website's content must be respected, and it 
            may not be copied or republished without permission.
          </p>

          <p className="text-gray-400 text-[14px] leading-relaxed">
            We are constantly working to develop and improve the website's services. Therefore, we reserve the 
            right to modify or update these Terms of Use at any time without prior notice. Your continued use of 
            the website after any update constitutes your acceptance of these changes.
          </p>

          <p className="text-gray-400 text-[14px] leading-relaxed">
            We are committed to protecting user data and privacy. However, users are responsible for maintaining 
            the confidentiality of their account information and not sharing it with others. In the event of a 
            violation of any of these terms, the website administration has the right to take appropriate action, 
            including restricting or suspending the account.
          </p>

          <p className="text-gray-400 text-[14px] leading-relaxed">
            By using the website, you fully agree to these terms and conditions and undertake to abide by them to 
            ensure a safe and beneficial learning experience for everyone.
          </p>
        </div>

      
        <div className="flex justify-center">
          <button className="bg-[#3BB78F] hover:bg-[#34a37f] text-white font-bold py-1.5 px-12 rounded-full text-lg shadow-sm transition-all min-w-[280px]">
            I agree and follow
          </button>
        </div>

      </div>
    </div>
  )
}
