// import React, { useState } from 'react'
// import { Link, useNavigate } from 'react-router-dom'
// import { HiOutlineEyeOff , HiOutlineEye } from 'react-icons/hi'
// import { FiArrowLeft } from 'react-icons/fi';
// export default function Register() {
//   const navigate =useNavigate();
//   const [formData, setFormData] = useState({
//     firstName: "",
//     lastName: "",
//     email: "",
//     location: "",
//     gender: "",
//     password: "",
//     confirmPassword: "",
//     agree: false,
//   });
//   const [password , setPassword] = useState(false);
//   const handleChange = (e) => {
//     const { name, value, type, checked } = e.target;
//     setFormData((prev) => ({
//       ...prev,
//       [name]: type === "checkbox" ? checked : value,
//     }));
//   };
//   return (
//     <div className="min-h-screen flex items-center justify-center bg-white px-4 relative">
//       <div className="w-full max-w-md py-12">
//          <button className="text-gray-800 hover:text-gray-600 transition-colors absolute left-10 "
//          onClick={()=> navigate(-1)}
//          >
//             <FiArrowLeft size={24} />
//           </button>
//         {/* Title */}
//         <div className="text-center mb-8 mt-10">
//           <h1 className="text-[36px] font-bold text-gray-900 mb-2">
//             Register/Sign up
//           </h1>
//           <p className="text-black text-[18px] mb-5">
//             Create new account
//           </p>
//         </div>

//         {/* Form */}
//         <div className="flex flex-col gap-4">

//           {/* First Name */}
//           <input
//             type="text"
//             name="firstName"
//             value={formData.firstName}
//             onChange={handleChange}
//             placeholder="First name"
//             className="w-full border border-gray-200 rounded-full px-5 py-3 text-sm text-gray-600 outline-none focus:border-teal-400 transition placeholder:text-gray-300"
//           />

//           {/* Last Name */}
//           <input
//             type="text"
//             name="lastName"
//             value={formData.lastName}
//             onChange={handleChange}
//             placeholder="Last name"
//             className="w-full border border-gray-200 rounded-full px-5 py-3 text-sm text-gray-600 outline-none focus:border-teal-400 transition placeholder:text-gray-300"
//           />

//           {/* Email */}
//           <input
//             type="email"
//             name="email"
//             value={formData.email}
//             onChange={handleChange}
//             placeholder="Enter your email or username"
//             className="w-full border border-gray-200 rounded-full px-5 py-3 text-sm text-gray-600 outline-none focus:border-teal-400 transition placeholder:text-gray-300"
//           />

//           {/* Location */}
//           <input
//             type="text"
//             name="location"
//             value={formData.location}
//             onChange={handleChange}
//             placeholder="Location"
//             className="w-full border border-gray-200 rounded-full px-5 py-3 text-sm text-gray-600 outline-none focus:border-teal-400 transition placeholder:text-gray-300"
//           />

//           {/* Gender */}
//           <div className="flex items-center gap-6 px-2">
//             <label className="flex items-center gap-2 cursor-pointer">
//               <input
//                 type="radio"
//                 name="gender"
//                 value="male"
//                 checked={formData.gender === "male"}
//                 onChange={handleChange}
//                 className="w-4 h-4 accent-teal-500 cursor-pointer"
//               />
//               <span className="text-sm text-gray-600">Male</span>
//             </label>

//             <label className="flex items-center gap-2 cursor-pointer">
//               <input
//                 type="radio"
//                 name="gender"
//                 value="female"
//                 checked={formData.gender === "female"}
//                 onChange={handleChange}
//                 className="w-4 h-4 accent-teal-500 cursor-pointer"
//               />
//               <span className="text-sm text-gray-600">Female</span>
//             </label>
//           </div>

//           {/* Password */}
//           <div className='flex justify-between items-center relative'>
//            <input
//             type="password"
//             name="password"
//             value={formData.password}
//             onChange={handleChange}
//             placeholder="Enter new password"
//             className="w-full border border-gray-200 rounded-full px-5 py-3 text-sm text-gray-600 outline-none focus:border-teal-400 transition placeholder:text-gray-300"
//           />
//           <button onClick={()=> setPassword(!password)}>
//             {password ? (<HiOutlineEye size={18} className=' absolute right-5  top-3.5 text-gray-300' />) :(<HiOutlineEyeOff size={18} className=' absolute right-5 top-3.5 text-gray-300' />)}
//           </button>
//           </div>
          

//           {/* Confirm Password */}
//          <div className='flex justify-between items-center relative'>
//            <input
//             type={password ? 'text' : 'password'}
//             name="confirmPassword"
//             value={formData.confirmPassword}
//             onChange={handleChange}
             
//             placeholder="Confirm password"
//             className="w-full border border-gray-200 rounded-full px-5 py-3 text-sm text-gray-600 outline-none focus:border-teal-400 transition placeholder:text-gray-300"
            
//           />
//           <button onClick={()=> setPassword(!password)}>
//             {password ? (<HiOutlineEye size={18} className=' absolute right-5  top-3.5 text-gray-300' />) :(<HiOutlineEyeOff size={18} className=' absolute right-5 top-3.5 text-gray-300' />)}
//           </button>
//          </div>

//           {/* Terms & Conditions */}
//           <label className="flex items-center gap-2 cursor-pointer px-2">
//             <input
//               type="checkbox"
//               name="agree"
//               checked={formData.agree}
//               onChange={handleChange}
//               className="w-4 h-4 accent-teal-500 cursor-pointer"
//             />
//             <span className="text-sm text-gray-600">
//               I have an agree{' '}
//               <Link to="/terms" className="text-[#38B793] hover:text-teal-600 transition">
//                 terms & condition
//               </Link>
//             </span>
//           </label>

//           {/* Register Button */}
//           <button className="w-full bg-[#38B793] hover:bg-teal-600 transition text-white font-medium py-3 rounded-full mt-8">
//             Register Now
//           </button>

//           {/* Already have account */}
//           <p className="text-center text-sm text-gray-500 mt-2">
//             Already have an account?{' '}
//             <Link to="/login" className="text-teal-500 hover:text-teal-600 font-medium transition">
//               Login
//             </Link>
//           </p>

//         </div>
//       </div>
//     </div>
//   )
// }

import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { HiOutlineEyeOff, HiOutlineEye } from 'react-icons/hi'
import { FiArrowLeft } from 'react-icons/fi'
import { useAuth } from '../Context/UserContext'

const INITIAL_FORM = {
  firstName: '',
  lastName: '',
  email: '',
  location: '',
  gender: '',
  password: '',
  confirmPassword: '',
  agree: false,
}

function validate(form) {
  const errors = {}

  if (!form.firstName.trim())   errors.firstName = 'First name is required'
  if (!form.lastName.trim())    errors.lastName  = 'Last name is required'

  if (!form.email.trim())
    errors.email = 'Email is required'
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
    errors.email = 'Please enter a valid email'

  if (!form.location.trim())    errors.location = 'Location is required'
  if (!form.gender)             errors.gender   = 'Please select your gender'

  if (!form.password)
    errors.password = 'Password is required'
  else if (form.password.length < 6)
    errors.password = 'Password must be at least 6 characters'

  if (!form.confirmPassword)
    errors.confirmPassword = 'Please confirm your password'
  else if (form.password !== form.confirmPassword)
    errors.confirmPassword = 'Passwords do not match'

  if (!form.agree)
    errors.agree = 'You must agree to the terms & conditions'

  return errors
}

export default function Register() {
  const navigate  = useNavigate()
  const { login } = useAuth()

  const [formData, setFormData]       = useState(INITIAL_FORM)
  const [errors, setErrors]           = useState({})
  const [showPassword, setShowPassword] = useState(false)
  const [loading, setLoading]         = useState(false)
  const [serverError, setServerError] = useState('')

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }))
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }))
    }
  }

  const handleSubmit = async () => {
    const validationErrors = validate(formData)
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors)
      return
    }

    setLoading(true)
    setServerError('')

    try {
      const res = await fetch('https://api-zyzn.onrender.com/api/auth/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          firstName:       formData.firstName,
          lastName:        formData.lastName,
          email:           formData.email,
          location:        formData.location,
          gender:          formData.gender,
          password:        formData.password,
        }),
      })

      const data = await res.json()

      if (!res.ok) {
        setServerError(data.error || 'Something went wrong')
        return
      }

      localStorage.setItem('userToken', data.token)
      login(data.user)
      window.dispatchEvent(new Event('authChange'))
      navigate('/home')

    } catch (err) {
      console.error('Register error:', err)
      setServerError('Server is starting up, please wait 30 seconds and try again')
    } finally {
      setLoading(false)
    }
  }

  const inputClass = (field) =>
    `w-full border rounded-full px-5 py-3 text-sm text-gray-600 outline-none transition placeholder:text-gray-300
    ${errors[field] ? 'border-red-400 focus:border-red-400' : 'border-gray-200 focus:border-teal-400'}`

  return (
    <div className="min-h-screen flex items-center justify-center bg-white px-4 relative">
      <div className="w-full max-w-md py-12">

        {/* Back Button */}
        <button
          className="text-gray-800 hover:text-gray-600 transition-colors absolute left-10"
          onClick={() => navigate(-1)}
        >
          <FiArrowLeft size={24} />
        </button>

        {/* Title */}
        <div className="text-center mb-8 mt-10">
          <h1 className="text-[36px] font-bold text-gray-900 mb-2">Register/Sign up</h1>
          <p className="text-black text-[18px] mb-5">Create new account</p>
        </div>

        {/* Server Error */}
        {serverError && (
          <div className="mb-4 px-5 py-3 rounded-2xl bg-red-50 border border-red-200 text-red-600 text-sm font-medium">
            ❌ {serverError}
          </div>
        )}

        <div className="flex flex-col gap-4">

          {/* First Name */}
          <div>
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              placeholder="First name"
              className={inputClass('firstName')}
            />
            {errors.firstName && <p className="text-red-500 text-xs mt-1 ml-4">{errors.firstName}</p>}
          </div>

          {/* Last Name */}
          <div>
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              placeholder="Last name"
              className={inputClass('lastName')}
            />
            {errors.lastName && <p className="text-red-500 text-xs mt-1 ml-4">{errors.lastName}</p>}
          </div>

          {/* Email */}
          <div>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email or username"
              className={inputClass('email')}
            />
            {errors.email && <p className="text-red-500 text-xs mt-1 ml-4">{errors.email}</p>}
          </div>

          {/* Location */}
          <div>
            <input
              type="text"
              name="location"
              value={formData.location}
              onChange={handleChange}
              placeholder="Location"
              className={inputClass('location')}
            />
            {errors.location && <p className="text-red-500 text-xs mt-1 ml-4">{errors.location}</p>}
          </div>

          {/* Gender */}
          <div>
            <div className="flex items-center gap-6 px-2">
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  name="gender"
                  value="male"
                  checked={formData.gender === 'male'}
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
                  checked={formData.gender === 'female'}
                  onChange={handleChange}
                  className="w-4 h-4 accent-teal-500 cursor-pointer"
                />
                <span className="text-sm text-gray-600">Female</span>
              </label>
            </div>
            {errors.gender && <p className="text-red-500 text-xs mt-1 ml-2">{errors.gender}</p>}
          </div>

          {/* Password */}
          <div>
            <div className="relative">
              <input
                type={showPassword ? 'text' : 'password'}
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Enter new password"
                className={inputClass('password')}
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-5 top-3.5 text-gray-300"
              >
                {showPassword ? <HiOutlineEye size={18} /> : <HiOutlineEyeOff size={18} />}
              </button>
            </div>
            {errors.password && <p className="text-red-500 text-xs mt-1 ml-4">{errors.password}</p>}
          </div>

          {/* Confirm Password */}
          <div>
            <div className="relative">
              <input
                type={showPassword ? 'text' : 'password'}
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                placeholder="Confirm password"
                className={inputClass('confirmPassword')}
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-5 top-3.5 text-gray-300"
              >
                {showPassword ? <HiOutlineEye size={18} /> : <HiOutlineEyeOff size={18} />}
              </button>
            </div>
            {errors.confirmPassword && <p className="text-red-500 text-xs mt-1 ml-4">{errors.confirmPassword}</p>}
          </div>

          {/* Terms & Conditions */}
          <div>
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
            {errors.agree && <p className="text-red-500 text-xs mt-1 ml-2">{errors.agree}</p>}
          </div>

          {/* Register Button */}
          <button
            onClick={handleSubmit}
            disabled={loading}
            className="w-full bg-[#38B793] hover:bg-teal-600 transition text-white font-medium py-3 rounded-full mt-8 disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {loading ? 'Registering...' : 'Register Now'}
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