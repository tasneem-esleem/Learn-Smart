import React, { useState } from "react";
import { FiArrowLeft, FiStar } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

export default function Feedback() {
  const [rating, setRating] = useState(5);
  const [enjoy, setEnjoy] = useState("");
  const [comment, setComment] = useState("");
  const [status, setStatus] = useState("idle");
  const [serverError, setServerError] = useState("");

  const navigate = useNavigate();

  const handleSend = async () => {
    if (!enjoy) {
      setServerError(
        "Please select whether you are enjoying the platform or not.",
      );
      setStatus("error");
      return;
    }

    setStatus("loading");
    setServerError("");

    try {
      const token = localStorage.getItem("userToken");

      const res = await fetch(
        "https://educational-platform-backend-935l.onrender.com/api/feedback",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({ rating, comment, enjoy }),
        },
      );

      const data = await res.json();

      if (!res.ok) {
        setServerError(data.error || "Something went wrong.");
        setStatus("error");
        return;
      }

      setStatus("success");
      // reset
      setComment("");
      setEnjoy("");
    } catch (err) {
      console.error("Feedback error:", err);
      setServerError(
        "Server is starting up, please wait 30 seconds and try again.",
      );
      setStatus("error");
    }
  };

  const handleCancel = () => {
    setRating(5);
    setComment("");
    setEnjoy("");
    setStatus("idle");
    setServerError("");
  };

  return (
    <div className="w-full min-h-screen bg-white p-4 sm:p-8 md:p-12 lg:p-16 py-12 md:py-16 lg:py-20 font-sans flex justify-center">
      <div className="bg-white w-full max-w-7xl rounded-[40px] shadow-[0_10px_60px_rgba(0,0,0,0.05)] p-6 sm:p-10 md:p-14 h-fit border border-gray-50">
        {/* Header */}
        <div className="flex items-center gap-3 mb-10">
          <button
            className="text-gray-800 hover:opacity-70 transition-opacity p-1 hover:bg-gray-50 rounded-full"
            onClick={() => navigate("/settings")}
          >
            <FiArrowLeft size={22} />
          </button>
          <h1 className="text-lg md:text-xl font-bold text-black">
            Send Feedback
          </h1>
        </div>

        {/* Title */}
        <div className="text-center mb-10">
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-1">
            Give Feedback
          </h2>
          <p className="text-xs text-gray-400">
            How to satisfy you with your experience with us
          </p>
        </div>

        {/* Success Message */}
        {status === "success" && (
          <div className="mb-8 px-5 py-4 rounded-2xl bg-teal-50 border border-teal-200 text-teal-700 text-sm font-medium">
            ✅ Your feedback has been sent successfully! Thank you.
          </div>
        )}

        {/* Error Message */}
        {status === "error" && (
          <div className="mb-8 px-5 py-4 rounded-2xl bg-red-50 border border-red-200 text-red-600 text-sm font-medium">
            ❌ {serverError}
          </div>
        )}

        {/* Star Rating */}
        <div className="mb-8">
          <h3 className="text-sm font-bold text-gray-900 mb-4 text-start">
            Rate your experience
          </h3>
          <div className="flex gap-1.5">
            {[1, 2, 3, 4, 5].map((star) => (
              <FiStar
                key={star}
                size={22}
                className={`cursor-pointer transition-all duration-200 hover:scale-110 ${
                  star <= rating
                    ? "fill-[#FFD700] text-[#FFD700]"
                    : "text-gray-300"
                }`}
                onClick={() => setRating(star)}
              />
            ))}
          </div>
        </div>

        {/* Comment */}
        <div className="mb-8">
          <h3 className="text-sm font-bold text-gray-900 mb-4 text-start">
            Do you have any thoughts you would like to share?
          </h3>
          <textarea
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            placeholder="Enter your description ...."
            className="w-full h-44 p-5 rounded-3xl border border-gray-200 bg-white shadow-[0_4px_20px_rgba(0,0,0,0.01)] outline-none focus:border-[#3BB78F] transition-all text-sm text-gray-600 resize-none placeholder:text-gray-300"
          />
        </div>

        {/* Enjoy Radio */}
        <div className="mb-10">
          <h3 className="text-sm font-bold text-gray-900 mb-5 text-start">
            Are you enjoying your experience on our platform?
          </h3>
          <div className="flex items-center gap-8">
            <label className="flex items-center gap-3 cursor-pointer group">
              <input
                type="radio"
                name="enjoy"
                className="hidden"
                checked={enjoy === "yes"}
                onChange={() => setEnjoy("yes")}
              />
              <div className="w-5 h-5 rounded-full border-2 border-[#3BB78F] flex items-center justify-center">
                <div
                  className={`w-2.5 h-2.5 rounded-full bg-[#3BB78F] transition-transform ${enjoy === "yes" ? "scale-100" : "scale-0"}`}
                ></div>
              </div>
              <span
                className={`text-sm font-medium transition-colors ${enjoy === "yes" ? "text-gray-900" : "text-gray-400 group-hover:text-gray-600"}`}
              >
                Yes
              </span>
            </label>

            <label className="flex items-center gap-3 cursor-pointer group">
              <input
                type="radio"
                name="enjoy"
                className="hidden"
                checked={enjoy === "no"}
                onChange={() => setEnjoy("no")}
              />
              <div className="w-5 h-5 rounded-full border-2 border-[#3BB78F] flex items-center justify-center">
                <div
                  className={`w-2.5 h-2.5 rounded-full bg-[#3BB78F] transition-transform ${enjoy === "no" ? "scale-100" : "scale-0"}`}
                ></div>
              </div>
              <span
                className={`text-sm font-medium transition-colors ${enjoy === "no" ? "text-gray-900" : "text-gray-400 group-hover:text-gray-600"}`}
              >
                No
              </span>
            </label>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-4">
          <button
            onClick={handleSend}
            disabled={status === "loading"}
            className="bg-[#3BB78F] hover:bg-[#34a37f] text-white font-bold py-3 px-10 rounded-full transition-all w-full sm:w-auto min-w-[200px] disabled:opacity-60 disabled:cursor-not-allowed shadow-md hover:shadow-lg active:scale-95"
          >
            {status === "loading" ? "Sending..." : "Send Feedback"}
          </button>
          <button
            onClick={handleCancel}
            disabled={status === "loading"}
            className="bg-[#EBF9F5] text-[#3BB78F] font-bold py-3 px-10 rounded-full hover:bg-[#dcf3ed] transition-all w-full sm:w-auto min-w-[200px] disabled:opacity-60 active:scale-95"
          >
            Cancel Feedback
          </button>
        </div>
      </div>
    </div>
  );
}
