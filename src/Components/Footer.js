import React from 'react'
import logo from '../image/logo.png'
import { Link } from 'react-router-dom'
import { FaTwitter, FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa'

export default function Footer() {
  return (
    <footer className="w-full">
      <div 
        className="bg-white rounded-t-3xl px-4 sm:px-8 md:px-16 lg:px-28 py-6"
        style={{ boxShadow: "0 -4px 15px rgba(0,0,0,0.05)" }}
      >

        {/* Top Section */}
        <div className="flex flex-col md:flex-row flex-wrap items-start justify-between gap-8 md:gap-10 mb-10">

          {/* Logo */}
          <div className="w-40 text-start">
            <img src={logo} alt="Learn Smart" loading="lazy" className="w-32" />
          </div>

          {/* Menu */}
          <div className="flex flex-col gap-3 text-start mt-3 flex-1 min-w-[120px]">
            <p className="text-gray-900 font-semibold text-sm mb-2">Menu</p>
            <Link to="/" className="text-black text-sm hover:text-teal-500 transition">Home</Link>
            <Link to="/about" className="text-black text-sm hover:text-teal-500 transition">About</Link>
            <Link to="" className="text-black text-sm hover:text-teal-500 transition">Destination</Link>
            <Link to="" className="text-black text-sm hover:text-teal-500 transition">Reviews</Link>
            <Link to="" className="text-black text-sm hover:text-teal-500 transition">Community</Link>
          </div>

          {/* Company */}
          <div className="flex flex-col gap-3 text-start mt-3 flex-1 min-w-[120px]">
            <p className="text-gray-900 font-semibold text-sm mb-2">Company</p>
            <Link to="/terms" className="text-black text-sm hover:text-teal-500 transition">Terms & Conditions</Link>
            <Link to="/privacy-security" className="text-black text-sm hover:text-teal-500 transition">Privacy Policy</Link>
            <Link to="/contact" className="text-black text-sm hover:text-teal-500 transition">Careers</Link>
          </div>

          {/* Support */}
          <div className="flex flex-col gap-3 text-start mt-3 flex-1 min-w-[120px]">
            <p className="text-gray-900 font-semibold text-sm mb-2">Support</p>
            <Link to="/contact" className="text-black text-sm hover:text-teal-500 transition">Contact Us</Link>
            <Link to="" className="text-black text-sm hover:text-teal-500 transition">FAQ/Help</Link>
            <Link to="" className="text-black text-sm hover:text-teal-500 transition">Resources</Link>
          </div>

          {/* Contact Us */}
          <div className="flex flex-col gap-3 text-start mt-3 flex-1 min-w-[250px]">
            <p className="text-gray-900 font-semibold text-sm mb-2">Contact Us</p>
            <p className="text-black text-sm">0912345678</p>
            <p className="text-black text-sm">support@amazingtaiwan.com</p>

            {/* Email Input */}
            <div className="mt-4 w-full">
              <input
                type="email"
                placeholder="Your email here"
                className="border border-[#767676] rounded-full px-4 sm:px-5 py-2 text-sm text-black outline-none
                focus:border-teal-400 transition w-full"
              />
            </div>
          </div>

        </div>

        {/* Divider */}
        <div className="border-t-2 border-gray-200 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">

          {/* Copyright */}
          <p className="text-center flex-1 text-sm text-[#38B793] order-2 md:order-1">
            Copyright and All rights reserved.
          </p>

          {/* Social Icons */}
          <div className="flex items-center justify-center gap-4 order-1 md:order-2">
            <a href="https://twitter.com" target="_blank" rel="noreferrer" 
              className="text-teal-500 hover:text-teal-600 transition text-lg" aria-label='Twitter'>
              <FaTwitter />
            </a>
            <a href="https://facebook.com" target="_blank" rel="noreferrer" 
              className="text-teal-500 hover:text-teal-600 transition text-lg" aria-label='Facebook'>
              <FaFacebook />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer" 
              className="text-teal-500 hover:text-teal-600 transition text-lg" aria-label='Instagram'>
              <FaInstagram />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" 
              className="text-teal-500 hover:text-teal-600 transition text-lg" aria-label='Linkedin'>
              <FaLinkedin />
            </a>
          </div>

        </div>

      </div>
    </footer>
  )
}