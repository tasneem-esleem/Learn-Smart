import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { IoArrowBack } from 'react-icons/io5'

export default function ForgetPassword() {
  const [email, setEmail]     = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError]     = useState('')

  const navigate = useNavigate()

  const handleSend = async () => {
    if (!email.trim()) {
      setError('Please enter your email or phone number')
      return
    }

    setLoading(true)
    setError('')

    try {
      const res = await fetch('https://api-zyzn.onrender.com/api/auth/forgot-password', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      })

      const data = await res.json()

      if (!res.ok) {
        setError(data.error || 'Something went wrong')
        return
      }

      navigate('/otp', { state: { email } })

    } catch (err) {
      console.error('Forgot password error:', err)
      setError('Server is starting up, please wait 30 seconds and try again')
    } finally {
      setLoading(false)
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
          onChange={(e) => {
            setEmail(e.target.value)
            if (error) setError('')
          }}
          placeholder="Enter your Email or phone number"
          className={`w-full border rounded-full px-5 py-3 text-sm text-gray-600 outline-none transition placeholder:text-gray-300 mb-2
            ${error ? 'border-red-400 focus:border-red-400' : 'border-gray-200 focus:border-teal-400'}`}
        />

        {/* Error */}
        {error && (
          <p className="text-red-500 text-xs mb-4 ml-2">{error}</p>
        )}

        {/* Send Code Button */}
        <button
          onClick={handleSend}
          disabled={loading}
          className="w-full bg-[#38B793] hover:bg-teal-600 transition text-white font-medium py-3 rounded-full mb-4 mt-4 disabled:opacity-60 disabled:cursor-not-allowed"
        >
          {loading ? 'Sending...' : 'Send Code'}
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