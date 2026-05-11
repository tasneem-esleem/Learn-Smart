import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { IoArrowBack } from 'react-icons/io5'

export default function ForgetPassword() {
  const [email, setEmail] = useState('')
  const navigate = useNavigate()

  const handleSend = () => {
    if (email) {
      navigate('/otp')
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-white px-4">
      <div className="w-full max-w-sm py-12">

        {/* Back Button */}
        <button
          onClick={() => navigate(-1)}
          className="text-gray-500 hover:text-gray-700 transition mb-8"
        >
          <IoArrowBack size={20} />
        </button>

        {/* Title */}
        <div className="text-center mb-8">
          <h1 className="text-2xl font-bold text-gray-900 mb-3">
            Recovery password
          </h1>
          <p className="text-gray-400 text-sm leading-5">
            please enter your email or phone <br /> number and follow the step
          </p>
        </div>

        {/* Input */}
        <input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your Email or phone number"
          className="w-full border border-gray-200 rounded-full px-5 py-3 text-sm text-gray-600 outline-none focus:border-teal-400 transition placeholder:text-gray-300 mb-6"
        />

        {/* Send Code Button */}
        <button
          onClick={handleSend}
          className="w-full bg-[#38B793] hover:bg-teal-600 transition text-white font-medium py-3 rounded-full mb-4"
        >
          Send Code
        </button>

        {/* Back to login */}
        <div className="text-center">
          <Link
            to="/login"
            className="text-teal-500 hover:text-teal-600 text-sm transition"
          >
            Back to login
          </Link>
        </div>

      </div>
    </div>
  )
}
