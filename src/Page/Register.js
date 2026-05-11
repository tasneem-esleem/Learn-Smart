import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { HiOutlineEyeOff , HiOutlineEye } from 'react-icons/hi'
import { FiArrowLeft } from 'react-icons/fi';
export default function Register() {
  const navigate =useNavigate();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    location: "",
    gender: "",
    password: "",
    confirmPassword: "",
    agree: false,
  });
  const [password , setPassword] = useState(false);
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };
  return (
    <div className="min-h-screen flex items-center justify-center bg-white px-4 relative">
      <div className="w-full max-w-md py-12">
         <button className="text-gray-800 hover:text-gray-600 transition-colors absolute left-10 "
         onClick={()=> navigate(-1)}
         >
            <FiArrowLeft size={24} />
          </button>
        {/* Title */}
        <div className="text-center mb-8 mt-10">
          <h1 className="text-[36px] font-bold text-gray-900 mb-2">
            Register/Sign up
          </h1>
          <p className="text-black text-[18px] mb-5">
            Create new account
          </p>
        </div>

        {/* Form */}
        <div className="flex flex-col gap-4">

          {/* First Name */}
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            placeholder="First name"
            className="w-full border border-gray-200 rounded-full px-5 py-3 text-sm text-gray-600 outline-none focus:border-teal-400 transition placeholder:text-gray-300"
          />

          {/* Last Name */}
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            placeholder="Last name"
            className="w-full border border-gray-200 rounded-full px-5 py-3 text-sm text-gray-600 outline-none focus:border-teal-400 transition placeholder:text-gray-300"
          />

          {/* Email */}
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email or username"
            className="w-full border border-gray-200 rounded-full px-5 py-3 text-sm text-gray-600 outline-none focus:border-teal-400 transition placeholder:text-gray-300"
          />

          {/* Location */}
          <input
            type="text"
            name="location"
            value={formData.location}
            onChange={handleChange}
            placeholder="Location"
            className="w-full border border-gray-200 rounded-full px-5 py-3 text-sm text-gray-600 outline-none focus:border-teal-400 transition placeholder:text-gray-300"
          />

          {/* Gender */}
          <div className="flex items-center gap-6 px-2">
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="radio"
                name="gender"
                value="male"
                checked={formData.gender === "male"}
                onChange={handleChange}
                className="w-4 h-4 accent-teal-500 cursor-pointer"
              />
              <span className="text-sm text-gray-600">Male</span>
            </label>

            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="radio"
                name="gender"
                value="female"
                checked={formData.gender === "female"}
                onChange={handleChange}
                className="w-4 h-4 accent-teal-500 cursor-pointer"
              />
              <span className="text-sm text-gray-600">Female</span>
            </label>
          </div>

          {/* Password */}
          <div className='flex justify-between items-center relative'>
           <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Enter new password"
            className="w-full border border-gray-200 rounded-full px-5 py-3 text-sm text-gray-600 outline-none focus:border-teal-400 transition placeholder:text-gray-300"
          />
          <button onClick={()=> setPassword(!password)}>
            {password ? (<HiOutlineEye size={18} className=' absolute right-5  top-3.5 text-gray-300' />) :(<HiOutlineEyeOff size={18} className=' absolute right-5 top-3.5 text-gray-300' />)}
          </button>
          </div>
          

          {/* Confirm Password */}
         <div className='flex justify-between items-center relative'>
           <input
            type={password ? 'text' : 'password'}
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
             
            placeholder="Confirm password"
            className="w-full border border-gray-200 rounded-full px-5 py-3 text-sm text-gray-600 outline-none focus:border-teal-400 transition placeholder:text-gray-300"
            
          />
          <button onClick={()=> setPassword(!password)}>
            {password ? (<HiOutlineEye size={18} className=' absolute right-5  top-3.5 text-gray-300' />) :(<HiOutlineEyeOff size={18} className=' absolute right-5 top-3.5 text-gray-300' />)}
          </button>
         </div>

          {/* Terms & Conditions */}
          <label className="flex items-center gap-2 cursor-pointer px-2">
            <input
              type="checkbox"
              name="agree"
              checked={formData.agree}
              onChange={handleChange}
              className="w-4 h-4 accent-teal-500 cursor-pointer"
            />
            <span className="text-sm text-gray-600">
              I have an agree{' '}
              <Link to="/terms" className="text-[#38B793] hover:text-teal-600 transition">
                terms & condition
              </Link>
            </span>
          </label>

          {/* Register Button */}
          <button className="w-full bg-[#38B793] hover:bg-teal-600 transition text-white font-medium py-3 rounded-full mt-8">
            Register Now
          </button>

          {/* Already have account */}
          <p className="text-center text-sm text-gray-500 mt-2">
            Already have an account?{' '}
            <Link to="/login" className="text-teal-500 hover:text-teal-600 font-medium transition">
              Login
            </Link>
          </p>

        </div>
      </div>
    </div>
  )
}