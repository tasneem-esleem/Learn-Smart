import React, { useState, useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import { IoArrowBack } from 'react-icons/io5'

export default function OTP() {
  const [otp, setOtp] = useState(['', '', '', '', ''])
  const [timer, setTimer] = useState(59)
  const inputsRef = useRef([])
  const navigate = useNavigate()

  // Timer countdown
  useEffect(() => {
    if (timer === 0) return
    const interval = setInterval(() => {
      setTimer((prev) => prev - 1)
    }, 1000)
    return () => clearInterval(interval)
  }, [timer])

  // Handle input change
  const handleChange = (value, index) => {
    if (!/^\d*$/.test(value)) return 
    const newOtp = [...otp]
    newOtp[index] = value
    setOtp(newOtp)

    // Auto focus next input
    if (value && index < 4) {
      inputsRef.current[index + 1].focus()
    }
  }

  // Handle backspace
  const handleKeyDown = (e, index) => {
    if (e.key === 'Backspace' && !otp[index] && index > 0) {
      inputsRef.current[index - 1].focus()
    }
  }

  // Resend code
  const handleResend = () => {
    setOtp(['', '', '', '', ''])
    setTimer(59)
    inputsRef.current[0].focus()
  }

  // Verify
  const handleVerify = () => {
    const code = otp.join('')
    if (code.length === 5) {
      navigate('/ResetPassword')
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-white px-4 sm:px-6 md:px-8 relative">
      <div className="w-full max-w-sm sm:max-w-md md:max-w-lg py-10 sm:py-12 md:py-16">

        {/* Back Button */}
        <button
          onClick={() => navigate(-1)}
          className="text-gray-500 hover:text-gray-700 transition mb-6 sm:mb-8 absolute left-0"
        >
          <IoArrowBack size={20} />
        </button>

        {/* Title */}
        <div className="text-center mb-8 sm:mb-10">
          <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-2 sm:mb-3">
            OTP Authentication
          </h1>
          <p className="text-gray-400 text-sm sm:text-base leading-5">
            please enter the code that we have sent to <br /> your email
          </p>
        </div>

        {/* OTP Inputs */}
        <div className="flex items-center justify-center gap-2 sm:gap-3 md:gap-4 mb-6">
          {otp.map((digit, index) => (
            <input
              key={index}
              ref={(el) => (inputsRef.current[index] = el)}
              type="text"
              maxLength={1}
              value={digit}
              onChange={(e) => handleChange(e.target.value, index)}
              onKeyDown={(e) => handleKeyDown(e, index)}
              className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 text-center text-base sm:text-lg md:text-xl font-semibold text-gray-700 border border-gray-200 rounded-xl outline-none focus:border-teal-400 transition"
            />
          ))}
        </div>

        {/* Timer */}
        <p className="text-center text-gray-400 text-sm sm:text-base mb-2">
          00:{timer < 10 ? `0${timer}` : timer}
        </p>

        {/* Resend */}
        <p className="text-center text-gray-400 text-sm sm:text-base mb-6 sm:mb-8">
          Dont send any code?{' '}
          {timer === 0 ? (
            <button
              onClick={handleResend}
              className="text-teal-500 hover:text-teal-600 transition font-medium"
            >
              Resend code
            </button>
          ) : (
            <span className="text-teal-500 opacity-50 cursor-not-allowed">
              Resend code
            </span>
          )}
        </p>

        {/* Verify Button */}
        <button
          onClick={handleVerify}
          className="w-full bg-[#38B793] hover:bg-teal-600 transition text-white font-medium py-2 sm:py-3 rounded-full text-sm sm:text-base"
        >
          Verify now
        </button>

      </div>
    </div>
  )
}
