import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { IoArrowBack } from "react-icons/io5";
import api from "../api";
export default function ForgetPassword() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async () => {
    if (!email.trim()) {
      setError("الرجاء إدخال البريد الإلكتروني");
      return;
    }

    setLoading(true);
    setError("");

    try {
      await api.post("/auth/forgot-password", { email });
      navigate("/otp", { state: { email } });
    } catch (err) {
      setError(err.message || "تعذر إرسال رمز التحقق، تأكد من البريد الإلكتروني");
    } finally {
      setLoading(false);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") handleSubmit();
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-white px-4 sm:px-6 md:px-8 relative">
      <div className="w-full max-w-sm sm:max-w-md py-12">
        <button
          onClick={() => navigate(-1)}
          className="text-gray-500 hover:text-gray-700 transition mb-8 absolute left-6 top-8"
        >
          <IoArrowBack size={20} />
        </button>

        <div className="text-center mb-10">
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
            Forgot Password?
          </h1>
          <p className="text-gray-400 text-sm sm:text-base leading-5">
            Enter your email address and we'll send you <br />
            a code to reset your password
          </p>
        </div>

        {error && (
          <div className="mb-4 px-5 py-3 rounded-2xl bg-red-50 border border-red-200 text-red-600 text-sm font-medium text-center">
            {error}
          </div>
        )}

        <div className="flex flex-col gap-4">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Enter your Email"
            className="w-full border border-gray-200 rounded-full px-5 py-3 text-sm sm:text-base text-gray-600 outline-none focus:border-teal-400 transition placeholder:text-gray-300"
          />

          <button
            onClick={handleSubmit}
            disabled={loading}
            className="w-full bg-[#38B793] hover:bg-teal-600 transition text-white font-medium py-3 rounded-full mt-4 disabled:opacity-50"
          >
            {loading ? "Sending..." : "Send Code"}
          </button>

          <p className="text-center text-sm text-gray-500 mt-2">
            Remembered your password?{" "}
            <Link to="/login" className="text-teal-500 hover:text-teal-600 font-medium transition">
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
