import React, { useState } from 'react'
import mail from "../image/Vector (5).png"
import website from "../image/Vector (6).png"
import call from "../image/Vector (7).png"

const INITIAL_FORM = {
  fullName: "",
  email: "",
  phone: "",
  message: "",
};

function validate(form) {
  const errors = {};
  if (!form.fullName.trim())
    errors.fullName = "Full name is required";
  if (!form.email.trim())
    errors.email = "Email is required";
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
    errors.email = "Please enter a valid email";
  if (!form.message.trim())
    errors.message = "Message is required";
  return errors;
}

export default function ContactUs() {
  const [form, setForm]       = useState(INITIAL_FORM);
  const [errors, setErrors]   = useState({});
  const [status, setStatus]   = useState("idle"); 

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  // ─── Handle submit ────────────────────────────────────────────────────────
  const handleSubmit = async (e) => {
    e.preventDefault();

    // 1. Validate
    const validationErrors = validate(form);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setStatus("loading");

    try {
      // ✅ TODO: Replace the URL below with your real API endpoint when ready
      // const response = await fetch("https://your-api.com/api/contact", {
      //   method: "POST",
      //   headers: { "Content-Type": "application/json" },
      //   body: JSON.stringify({
      //     full_name: form.fullName,
      //     email:     form.email,
      //     phone:     form.phone,
      //     message:   form.message,
      //   }),
      // });
      // if (!response.ok) throw new Error("Server error");

      await new Promise((resolve) => setTimeout(resolve, 1200));

      setStatus("success");
      setForm(INITIAL_FORM);
      setErrors({});
    } catch (err) {
      console.error("Contact form error:", err);
      setStatus("error");
    }
  };

  return (
    <section className="py-36 px-6 bg-white font-sans">
      <div className="max-w-full bg-[#38B7930D] rounded-[40px] p-8 md:p-16 flex flex-col lg:flex-row gap-16 lg:gap-24 shadow-sm">

        <div className="flex-1 text-start">
          <h2 className="text-4xl font-semibold text-black mb-4">Contact Us</h2>
          <p className="text-gray-500 text-lg mb-12 leading-relaxed">
            Contact us if you have any questions or need help.<br />
            We are always here to support you
          </p>

          <div className="space-y-8">
            <div className="flex items-center gap-4 text-[#38B793]">
              <img src={mail} loading="lazy" alt="Email icon" className="w-6 h-6 object-contain" />
              <a
                href="mailto:LearnSmartplatform@gmail.com"
                className="text-lg font-medium hover:underline"
              >
                LearnSmartplatform@gmail.com
              </a>
            </div>

            <div className="flex items-center gap-4 text-[#38B793]">
              <img src={website} loading="lazy" alt="Website icon" className="w-6 h-6 object-contain" />
              <a
                href="https://www.LearnSmart.com"
                target="_blank"
                rel="noreferrer"
                className="text-lg font-medium hover:underline"
              >
                www.LearnSmart.com
              </a>
            </div>

            <div className="flex items-center gap-4 text-[#38B793]">
              <img src={call} alt="Phone icon" className="w-6 h-6 object-contain" loading="lazy" />
              <span className="text-lg font-medium">+99954839621</span>
            </div>
          </div>
        </div>

        <div className="flex-1 w-full">

          {status === "success" && (
            <div className="mb-6 px-5 py-4 rounded-2xl bg-teal-50 border border-teal-200 text-teal-700 text-sm font-medium">
              ✅ Your message has been sent successfully! We will get back to you soon.
            </div>
          )}

          {/* Error message */}
          {status === "error" && (
            <div className="mb-6 px-5 py-4 rounded-2xl bg-red-50 border border-red-200 text-red-600 text-sm font-medium">
              ❌ Something went wrong. Please try again later.
            </div>
          )}

          <form onSubmit={handleSubmit} noValidate className="space-y-3">

            {/* Full Name */}
            <div>
              <input
                type="text"
                name="fullName"
                value={form.fullName}
                onChange={handleChange}
                placeholder="Full Name"
                aria-label="Full Name"
                aria-invalid={!!errors.fullName}
                className={`w-full px-6 py-4 rounded-full border bg-transparent focus:outline-none transition-all placeholder:text-gray-400
                  ${errors.fullName
                    ? "border-red-400 focus:border-red-400"
                    : "border-gray-200 focus:border-[#38B793]"
                  }`}
              />
              {errors.fullName && (
                <p className="text-red-500 text-xs mt-1 ml-4">{errors.fullName}</p>
              )}
            </div>

            {/* Email */}
            <div>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Email Address"
                aria-label="Email Address"
                aria-invalid={!!errors.email}
                className={`w-full px-6 py-4 rounded-full border bg-transparent focus:outline-none transition-all placeholder:text-gray-400
                  ${errors.email
                    ? "border-red-400 focus:border-red-400"
                    : "border-gray-200 focus:border-[#38B793]"
                  }`}
              />
              {errors.email && (
                <p className="text-red-500 text-xs mt-1 ml-4">{errors.email}</p>
              )}
            </div>

            {/* Phone (optional) */}
            <div>
              <input
                type="tel"
                name="phone"
                value={form.phone}
                onChange={handleChange}
                placeholder="Phone Number (optional)"
                aria-label="Phone Number"
                className="w-full px-6 py-4 rounded-full border border-gray-200 bg-transparent focus:outline-none focus:border-[#38B793] transition-all placeholder:text-gray-400"
              />
            </div>

            {/* Message */}
            <div>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="Message"
                rows="5"
                aria-label="Message"
                aria-invalid={!!errors.message}
                className={`w-full px-6 py-5 rounded-[30px] border bg-transparent focus:outline-none transition-all placeholder:text-gray-400 resize-none
                  ${errors.message
                    ? "border-red-400 focus:border-red-400"
                    : "border-gray-200 focus:border-[#38B793]"
                  }`}
              />
              {errors.message && (
                <p className="text-red-500 text-xs mt-1 ml-4">{errors.message}</p>
              )}
            </div>

            {/* Submit button */}
            <div className="mt-6">
              <button
                type="submit"
                disabled={status === "loading"}
                className="w-full py-3 bg-[#38B793] text-white font-bold rounded-full hover:bg-[#2da07f] transition-all shadow-md active:scale-95 text-lg disabled:opacity-60 disabled:cursor-not-allowed disabled:active:scale-100"
              >
                {status === "loading" ? "Sending..." : "Submit"}
              </button>
            </div>

          </form>
        </div>

      </div>
    </section>
  );
}