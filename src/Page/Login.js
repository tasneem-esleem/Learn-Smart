import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { HiOutlineEyeOff, HiOutlineEye } from "react-icons/hi";
import welcome from "../image/Frame (4).png";
import google from "../image/Group 26690.png";
import { useAuth } from "../Context/UserContext";
import api from "../api"; 

export default function Login() {
  const [email, setEmail] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const { login } = useAuth();
  const navigate = useNavigate();

  const handleLogin = async () => {
    if (!email || !password) return;

    setLoading(true);
    setError("");

    try {
      const res = await api.post("/auth/login", { email, password });

      if (res?.token && res?.user) {
        const { token, user } = res;

        localStorage.setItem("userToken", token);
        localStorage.setItem("user", JSON.stringify(user));
        login(user, token);

        window.dispatchEvent(new Event("authChange"));
        navigate("/home");
      } else {
        setError("Login failed: Incomplete data received from server.");
      }
    } catch (err) {
      setError(err.message || "Invalid email or password");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-white px-4 sm:px-6 md:px-8">
      <div className="w-full max-w-md py-16 sm:py-20 md:py-24">
        <div className="text-center mb-8">
          <div className="flex flex-col sm:flex-row justify-center items-center gap-2">
            <h1 className="text-3xl sm:text-4xl md:text-[48px] font-bold text-gray-900 mb-2 text-center">
              Welcome Back
            </h1>
            <img src={welcome} alt="welcome" className="w-8 sm:w-12 md:w-16" />
          </div>
          <p className="text-base sm:text-lg md:text-[20px] text-black text-center">
            Login to your account
          </p>
        </div>

        <div className="flex flex-col gap-4">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your Email"
            className="w-full border border-gray-200 rounded-full px-5 py-3 text-sm sm:text-base text-gray-600 outline-none focus:border-teal-400 transition placeholder:text-gray-300"
          />
          <div className="relative">
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type={showPassword ? "text" : "password"}
              placeholder="Enter your Password"
              className="w-full border border-gray-200 rounded-full px-5 py-3 text-sm sm:text-base text-gray-600 outline-none focus:border-teal-400 transition placeholder:text-gray-300"
            />
            <button
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-300 hover:text-gray-500 transition"
            >
              {showPassword ? (
                <HiOutlineEye size={18} />
              ) : (
                <HiOutlineEyeOff size={18} />
              )}
            </button>
          </div>

          <div className="flex items-center justify-between px-1">
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                checked={rememberMe}
                onChange={() => setRememberMe(!rememberMe)}
                className="w-4 h-4 accent-teal-500 cursor-pointer"
              />
              <span className="text-sm text-gray-600">Remember me</span>
            </label>
            <Link
              to="/forget-password"
              className="text-sm text-teal-500 hover:text-teal-600 transition underline"
            >
              Forget password?
            </Link>
          </div>

          {error && <p className="text-red-500 text-sm text-center">{error}</p>}

          <button
            className="w-full bg-[#38B793] hover:bg-teal-600 transition text-white font-medium py-3 rounded-full mt-9 disabled:opacity-50"
            onClick={handleLogin}
            disabled={loading}
          >
            {loading ? "Logging in..." : "Login"}
          </button>

          <p className="text-center text-gray-400 text-sm">Or</p>
          <button
            onClick={() =>
              (window.location.href =
                "https://educational-platform-backend-935l.onrender.com/api/auth/google")
            }
            className="w-full border border-gray-200 rounded-full py-3 text-sm sm:text-base text-gray-600 font-medium flex items-center justify-center gap-3 hover:bg-gray-50 transition"
          >
            <img src={google} alt="google" className="w-4 sm:w-5" /> Login With
            Google
          </button>

          <p className="text-center text-sm sm:text-base text-gray-500 mt-2">
            Dont have an account ?{" "}
            <Link
              to="/Register"
              className="text-teal-500 hover:text-teal-600 font-medium transition"
            >
              Register
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}