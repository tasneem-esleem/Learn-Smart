import React, { useState } from "react";
import { FiEye, FiEyeOff, FiArrowLeft } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

const INITIAL_FORM = {
  email: "",
  oldPassword: "",
  newPassword: "",
  confirmPassword: "",
};

const API_BASE_URL = "https://educational-platform-backend-935l.onrender.com/api";

function validate(form) {
  const errors = {};

  if (!form.email.trim()) errors.email = "Email is required";
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
    errors.email = "Please enter a valid email";

  if (!form.oldPassword) errors.oldPassword = "Old password is required";

  if (!form.newPassword) errors.newPassword = "New password is required";
  else if (form.newPassword.length < 8)
    errors.newPassword = "Password must be at least 8 characters";
  else if (form.newPassword === form.oldPassword)
    errors.newPassword = "New password must be different from old password";

  if (!form.confirmPassword)
    errors.confirmPassword = "Please confirm your new password";
  else if (form.newPassword !== form.confirmPassword)
    errors.confirmPassword = "Passwords do not match";

  return errors;
}

export default function Privacy() {
  const [show, setShow] = useState({ old: false, new: false, confirm: false });
  const [form, setForm] = useState(INITIAL_FORM);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle");
  const [serverError, setServerError] = useState("");

  const navigate = useNavigate();

  const toggle = (field) =>
    setShow((prev) => ({ ...prev, [field]: !prev[field] }));

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const validationErrors = validate(form);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setStatus("loading");
    setServerError("");

    try {
      const token = localStorage.getItem("userToken");

      const response = await fetch(`${API_BASE_URL}/auth/update-password`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          currentPassword: form.oldPassword,
          newPassword: form.newPassword,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        setServerError(data.message || data.error || "Something went wrong");
        setStatus("error");
        return;
      }

      setStatus("success");
      setForm(INITIAL_FORM);
      setErrors({});
    } catch (err) {
      console.error("Privacy update error:", err);
      setServerError("Could not connect to the server. Please check your connection.");
      setStatus("error");
    }
  };

  const baseInput =
    "w-full px-6 py-[14px] rounded-full border outline-none transition-all placeholder:text-[#C5C5C5] text-[15px] text-gray-700";
  const inputClass = (field) =>
    `${baseInput} ${errors[field] ? "border-red-400 focus:border-red-400" : "border-[#E5E7EB] focus:border-[#38B793]"}`;

  return (
    <div className="min-h-screen bg-white px-4 py-8 md:px-28 md:py-12 font-sans text-start">
      <div className="bg-white w-full max-w-7xl mx-auto rounded-[25px] md:rounded-[35px] shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-50 p-3 sm:p-5 md:p-10">
        <div className="flex items-center gap-3 mb-6">
          <button
            onClick={() => navigate("/settings")}
            className="text-gray-800 hover:opacity-70 transition"
          >
            <FiArrowLeft size={24} />
          </button>
          <h1 className="text-2xl text-gray-900">Privacy & Security</h1>
        </div>

        {status === "success" && (
          <div className="mb-6 px-5 py-4 rounded-2xl bg-teal-50 border border-teal-200 text-teal-700 text-sm font-medium">
            ✅ Your password has been updated successfully!
          </div>
        )}

        {status === "error" && (
          <div className="mb-6 px-5 py-4 rounded-2xl bg-red-50 border border-red-200 text-red-600 text-sm font-medium">
            ❌ {serverError || "Something went wrong. Please try again later."}
          </div>
        )}

        <form
          onSubmit={handleSubmit}
          noValidate
          className="flex flex-col gap-1"
        >
          {/* Email Section */}
          <div className="flex flex-col gap-3">
            <h3 className="text-[#111111] font-bold text-[19px]">Email</h3>
            <p className="text-[#767676] text-[15px] leading-[1.6] max-w-md">
              The address used to identify your account on the educational website.
            </p>
            <div>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Enter your email"
                className={`${inputClass("email")} w-full md:w-[400px] max-w-full mt-2`}
              />
              {errors.email && <p className="text-red-500 text-xs mt-1 ml-4">{errors.email}</p>}
            </div>
          </div>

          {/* Old Password Section */}
          <div className="flex flex-col gap-3 mt-4">
            <h3 className="text-[#111111] font-bold text-[19px]">Old Password</h3>
            <div className="w-full md:w-[400px] max-w-full mt-2">
              <div className="relative">
                <input
                  type={show.old ? "text" : "password"}
                  name="oldPassword"
                  value={form.oldPassword}
                  onChange={handleChange}
                  placeholder="Enter your old password"
                  className={inputClass("oldPassword")}
                />
                <button type="button" onClick={() => toggle("old")} className="w-5 h-5 text-[#CCCCCC] absolute right-6 top-1/2 -translate-y-1/2 cursor-pointer">
                  {show.old ? <FiEye size={16} /> : <FiEyeOff size={16} />}
                </button>
              </div>
              {errors.oldPassword && <p className="text-red-500 text-xs mt-1 ml-4">{errors.oldPassword}</p>}
            </div>
          </div>

          {/* New Password Section */}
          <div className="flex flex-col gap-3 mt-4">
            <h3 className="text-[#111111] font-bold text-[19px]">New Password</h3>
            <div className="w-full md:w-[400px] max-w-full mt-2">
              <div className="relative">
                <input
                  type={show.new ? "text" : "password"}
                  name="newPassword"
                  value={form.newPassword}
                  onChange={handleChange}
                  placeholder="Enter your new password"
                  className={inputClass("newPassword")}
                />
                <button type="button" onClick={() => toggle("new")} className="w-5 h-5 text-[#CCCCCC] absolute right-6 top-1/2 -translate-y-1/2 cursor-pointer">
                  {show.new ? <FiEye size={16} /> : <FiEyeOff size={16} />}
                </button>
              </div>
              {errors.newPassword && <p className="text-red-500 text-xs mt-1 ml-4">{errors.newPassword}</p>}
            </div>
          </div>

          {/* Confirm Password Section */}
          <div className="flex flex-col gap-3 mt-4">
            <h3 className="text-[#111111] font-bold text-[19px]">Confirm New Password</h3>
            <div className="w-full md:w-[400px] max-w-full mt-2">
              <div className="relative">
                <input
                  type={show.confirm ? "text" : "password"}
                  name="confirmPassword"
                  value={form.confirmPassword}
                  onChange={handleChange}
                  placeholder="Confirm new password"
                  className={inputClass("confirmPassword")}
                />
                <button type="button" onClick={() => toggle("confirm")} className="w-5 h-5 text-[#CCCCCC] absolute right-6 top-1/2 -translate-y-1/2 cursor-pointer">
                  {show.confirm ? <FiEye size={16} /> : <FiEyeOff size={16} />}
                </button>
              </div>
              {errors.confirmPassword && <p className="text-red-500 text-xs mt-1 ml-4">{errors.confirmPassword}</p>}
            </div>
          </div>

          {/* Submit Button */}
          <div className="mt-8">
            <button
              type="submit"
              disabled={status === "loading"}
              className="w-full md:w-[400px] py-3 bg-[#38B793] text-white font-bold rounded-full hover:bg-[#2da07f] transition-all shadow-md active:scale-95 text-lg disabled:opacity-60"
            >
              {status === "loading" ? "Saving..." : "Save Changes"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}