// import React, { useState } from 'react'
// import { useNavigate } from 'react-router-dom'
// import { IoArrowBack } from 'react-icons/io5'
// import { HiOutlineEyeOff, HiOutlineEye } from 'react-icons/hi'
// import { BsCheckCircleFill } from 'react-icons/bs'
// import chang from '../image/Group (2).png'

// export default function ResetPassword() {
//   const [password, setPassword] = useState('')
//   const [confirmPassword, setConfirmPassword] = useState('')
//   const [showPassword, setShowPassword] = useState(false)
//   const [showConfirmPassword, setShowConfirmPassword] = useState(false)
//   const [saved, setSaved] = useState(false)
//   const navigate = useNavigate()

//   // Check if passwords match
//   const isMatch = password && confirmPassword && password === confirmPassword
//   const isNotMatch = password && confirmPassword && password !== confirmPassword

//   const handleSave = () => {
//     if (isMatch) {
//       setSaved(true)
//     }
//   }

//   // Password Changed screen
//   if (saved) {
//     return (
//       <div className="min-h-screen flex items-center justify-center bg-white px-4">
//         <div className="w-full max-w-sm py-12 flex flex-col items-center text-center">

//           {/* Icon */}
//           <div className="bg-teal-50 rounded-2xl p-8 mb-6">
//             <img
//               src="/password-changed-icon.png"
//               alt="password changed"
//               className="w-20 h-20 object-contain"
//               onError={(e) => {
//                 e.target.style.display = 'none'
//               }}
//             />
//             {/* Fallback icon if image not found */}
//             <div className="text-[#38B793] text-4xl w-20 h-20">
//               <img src={chang} alt="chang"/>
//             </div>
//           </div>

//           {/* Title */}
//           <h1 className="text-2xl font-bold text-gray-900 mb-3">
//             Password Changed!
//           </h1>

//           {/* Description */}
//           <p className="text-gray-400 text-sm mb-6">
//             Your password has been changed successfully
//           </p>

//           {/* Check Icon */}
//           <BsCheckCircleFill className="text-[#38B793] text-4xl mb-8" />

//           {/* Go to Login Button */}
//           <button
//             onClick={() => navigate('/login')}
//             className="w-full bg-[#38B793] hover:bg-teal-600 transition text-white font-medium py-2 rounded-xl mt-6"
//           >
//             Go to Login
//           </button>

//         </div>
//       </div>
//     )
//   }

//   // Reset Password screen
//   return (
//     <div className="min-h-screen flex items-center justify-center bg-white px-4 relative">
//       <div className="w-full max-w-sm py-12">

//         <button
//           onClick={() => navigate(-1)}
//           className="text-gray-500 hover:text-gray-700 transition mb-8 absolute left-10 top-8 text-start"
//         >
//           <IoArrowBack size={20} />
//         </button>

//         <div className="text-center mb-8">
//           <h1 className="text-2xl font-bold text-gray-900 mb-3">
//             Reset password
//           </h1>
//           <p className="text-black text-[15px] leading-5">
//             Enter a password that must be at least 6 <br />
//             characters long and contain numbers <br />
//             and symbols
//           </p>
//         </div>

//         {/* Form */}
//         <div className="flex flex-col gap-4">

//           {/* New Password */}
//           <div className="relative">
//             <input
//               type={showPassword ? 'text' : 'password'}
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               placeholder="Enter new Password"
//               className="w-full border border-gray-200 rounded-full px-5 py-3 text-sm text-gray-600 outline-none focus:border-teal-400 transition placeholder:text-gray-300"
//             />
//             <button
//               onClick={() => setShowPassword(!showPassword)}
//               className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-300 hover:text-gray-500 transition"
//             >
//               {showPassword ? <HiOutlineEye size={18} /> : <HiOutlineEyeOff size={18} />}
//             </button>
//           </div>

//           {/* Confirm Password */}
//           <div className="relative">
//             <input
//               type={showConfirmPassword ? 'text' : 'password'}
//               value={confirmPassword}
//               onChange={(e) => setConfirmPassword(e.target.value)}
//               placeholder="Confirm new Password"
//               className="w-full border border-gray-200 rounded-full px-5 py-3 text-sm text-gray-600 outline-none focus:border-teal-400 transition placeholder:text-gray-300"
//             />
//             <button
//               onClick={() => setShowConfirmPassword(!showConfirmPassword)}
//               className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-300 hover:text-gray-500 transition"
//             >
//               {showConfirmPassword ? <HiOutlineEye size={18} /> : <HiOutlineEyeOff size={18} />}
//             </button>
//           </div>

//           {/* Match Message */}
//           {isMatch && (
//             <p className="text-teal-500 text-xs px-2">Both passwords are match</p>
//           )}
//           {isNotMatch && (
//             <p className="text-red-400 text-xs px-2">Both passwords didn't match</p>
//           )}

//           {/* Save Button */}
//           <button
//             onClick={handleSave}
//             disabled={!isMatch}
//             className={`w-full transition text-white font-medium py-3 rounded-full mt-4 ${
//               isMatch
//                 ? 'bg-[#38B793] hover:bg-teal-600 cursor-pointer'
//                 : 'bg-gray-300 cursor-not-allowed'
//             }`}
//           >
//             Save
//           </button>

//         </div>
//       </div>
//     </div>
//   )
// }


import React, { useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { IoArrowBack } from 'react-icons/io5'
import { HiOutlineEyeOff, HiOutlineEye } from 'react-icons/hi'
import { BsCheckCircleFill } from 'react-icons/bs'
import chang from '../image/Group (2).png'

export default function ResetPassword() {
  const [password, setPassword]                   = useState('')
  const [confirmPassword, setConfirmPassword]     = useState('')
  const [showPassword, setShowPassword]           = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [saved, setSaved]                         = useState(false)
  const [loading, setLoading]                     = useState(false)
  const [serverError, setServerError]             = useState('')

  const navigate  = useNavigate()
  const location  = useLocation()

  // الإيميل الجاي من صفحة OTP
  const email = location.state?.email || ''

  const isMatch    = password && confirmPassword && password === confirmPassword
  const isNotMatch = password && confirmPassword && password !== confirmPassword

  const handleSave = async () => {
    if (!isMatch) return

    if (password.length < 6) {
      setServerError('Password must be at least 6 characters')
      return
    }

    setLoading(true)
    setServerError('')

    try {
      const res = await fetch('https://api-zyzn.onrender.com/api/auth/reset-password', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email,
          new_password: password,
        }),
      })

      const data = await res.json()

      if (!res.ok) {
        setServerError(data.error || 'Something went wrong')
        return
      }

      setSaved(true)

    } catch (err) {
      console.error('Reset password error:', err)
      setServerError('Server is starting up, please wait 30 seconds and try again')
    } finally {
      setLoading(false)
    }
  }

  // ─── Password Changed Screen ──────────────────────────────────────────────
  if (saved) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white px-4">
        <div className="w-full max-w-sm py-12 flex flex-col items-center text-center">

          <div className="bg-teal-50 rounded-2xl p-8 mb-6">
            <div className="text-[#38B793] text-4xl w-20 h-20">
              <img src={chang} alt="chang" />
            </div>
          </div>

          <h1 className="text-2xl font-bold text-gray-900 mb-3">
            Password Changed!
          </h1>

          <p className="text-gray-400 text-sm mb-6">
            Your password has been changed successfully
          </p>

          <BsCheckCircleFill className="text-[#38B793] text-4xl mb-8" />

          <button
            onClick={() => navigate('/login')}
            className="w-full bg-[#38B793] hover:bg-teal-600 transition text-white font-medium py-2 rounded-xl mt-6"
          >
            Go to Login
          </button>

        </div>
      </div>
    )
  }

  // ─── Reset Password Screen ────────────────────────────────────────────────
  return (
    <div className="min-h-screen flex items-center justify-center bg-white px-4 relative">
      <div className="w-full max-w-sm py-12">

        {/* Back Button */}
        <button
          onClick={() => navigate(-1)}
          className="text-gray-500 hover:text-gray-700 transition mb-8 absolute left-10 top-8 text-start"
        >
          <IoArrowBack size={20} />
        </button>

        {/* Title */}
        <div className="text-center mb-8">
          <h1 className="text-2xl font-bold text-gray-900 mb-3">
            Reset password
          </h1>
          <p className="text-black text-[15px] leading-5">
            Enter a password that must be at least 6 <br />
            characters long and contain numbers <br />
            and symbols
          </p>
        </div>

        {/* Server Error */}
        {serverError && (
          <div className="mb-4 px-5 py-3 rounded-2xl bg-red-50 border border-red-200 text-red-600 text-sm font-medium">
            ❌ {serverError}
          </div>
        )}

        <div className="flex flex-col gap-4">

          {/* New Password */}
          <div className="relative">
            <input
              type={showPassword ? 'text' : 'password'}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter new Password"
              className="w-full border border-gray-200 rounded-full px-5 py-3 text-sm text-gray-600 outline-none focus:border-teal-400 transition placeholder:text-gray-300"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-300 hover:text-gray-500 transition"
            >
              {showPassword ? <HiOutlineEye size={18} /> : <HiOutlineEyeOff size={18} />}
            </button>
          </div>

          {/* Confirm Password */}
          <div className="relative">
            <input
              type={showConfirmPassword ? 'text' : 'password'}
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="Confirm new Password"
              className="w-full border border-gray-200 rounded-full px-5 py-3 text-sm text-gray-600 outline-none focus:border-teal-400 transition placeholder:text-gray-300"
            />
            <button
              type="button"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-300 hover:text-gray-500 transition"
            >
              {showConfirmPassword ? <HiOutlineEye size={18} /> : <HiOutlineEyeOff size={18} />}
            </button>
          </div>

          {/* Match Message */}
          {isMatch && (
            <p className="text-teal-500 text-xs px-2">✅ Both passwords are match</p>
          )}
          {isNotMatch && (
            <p className="text-red-400 text-xs px-2">❌ Both passwords didn't match</p>
          )}

          {/* Save Button */}
          <button
            onClick={handleSave}
            disabled={!isMatch || loading}
            className={`w-full transition text-white font-medium py-3 rounded-full mt-4 ${
              isMatch && !loading
                ? 'bg-[#38B793] hover:bg-teal-600 cursor-pointer'
                : 'bg-gray-300 cursor-not-allowed'
            }`}
          >
            {loading ? 'Saving...' : 'Save'}
          </button>

        </div>
      </div>
    </div>
  )
}