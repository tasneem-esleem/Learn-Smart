import React, { useState, useEffect, useRef } from "react";
import { FiEye, FiEyeOff, FiEdit2 } from "react-icons/fi";
import { LuCamera } from "react-icons/lu";
import Profilesidebar from "../Components/Profilesidebar";
import { useAuth } from "../Context/UserContext";

const API_BASE_URL = "https://educational-platform-backend-935l.onrender.com";

// ── localStorage helpers للصورة ──
const AVATAR_KEY = "userAvatar";

function saveAvatarToStorage(dataUrl) {
  try {
    localStorage.setItem(AVATAR_KEY, dataUrl);
  } catch (e) {
    console.warn("Could not persist avatar to localStorage:", e);
  }
}

function loadAvatarFromStorage() {
  return localStorage.getItem(AVATAR_KEY) || null;
}

function fileToDataUrl(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = (e) => resolve(e.target.result);
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
}

export default function ProfilePage() {
  const { user: authUser } = useAuth();
  const [isEditing, setIsEditing] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [avatar, setAvatar] = useState(() => loadAvatarFromStorage());
  const [avatarFile, setAvatarFile] = useState(null);
  const fileInputRef = useRef(null);

  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    dateOfBirth: "",
    gender: "",
    contactNumber: "",
    address: "",
    city: "",
    country: "",
    password: "",
    confirmPassword: "",
  });

  const fetchLatestProfile = async () => {
    try {
      const token = localStorage.getItem("userToken") || localStorage.getItem("token");
      if (!token) return;

      const response = await fetch(`${API_BASE_URL}/api/auth/me`, {
        headers: { Authorization: `Bearer ${token}` },
      });

      if (response.ok) {
        const resData = await response.json();
        const profile = resData.user || resData.data?.user;

        if (profile) {
          setForm({
            firstName: profile.name?.split(" ")[0] || authUser?.name?.split(" ")[0] || "",
            lastName: profile.name?.split(" ")[1] || authUser?.name?.split(" ")[1] || "",
            email: profile.email || authUser?.email || "",
            dateOfBirth: profile.dateOfBirth ? profile.dateOfBirth.split("T")[0] : "",
            gender: profile.gender || "",
            contactNumber: profile.contactNumber || "",
            address: profile.address || "",
            city: profile.city || "",
            country: profile.country || "",
            password: "",
            confirmPassword: "",
          });
          console.log("Avatar received from server:", profile.avatar);
          if (profile.avatar) {
            const storedAvatar = loadAvatarFromStorage();
            if (!storedAvatar) {
              const freshAvatar = `${profile.avatar}?t=${new Date().getTime()}`;
              setAvatar(freshAvatar);
            }
          } else {
            console.log("No avatar found in profile object!");
          }
        }
      }
    } catch (err) {
      console.error("Error fetching profile:", err);
    }
  };

  useEffect(() => {
    fetchLatestProfile();
  }, [authUser]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleAvatarChange = async (e) => {
    const file = e.target.files[0];
    if (file) {
      setAvatarFile(file);
      try {
        const dataUrl = await fileToDataUrl(file);
        setAvatar(dataUrl);
        saveAvatarToStorage(dataUrl);
      } catch (err) {
        console.error("Failed to read avatar file:", err);
        setAvatar(URL.createObjectURL(file));
      }
    }
  };

  const handleSave = async (e) => {
    if (e) {
      e.preventDefault();
      e.stopPropagation();
    }

    setIsEditing(false);

    try {
      const token = localStorage.getItem("userToken") || localStorage.getItem("token");

      const formData = new FormData();
      formData.append("name", `${form.firstName} ${form.lastName}`.trim());
      formData.append("dateOfBirth", form.dateOfBirth);
      formData.append("gender", form.gender);
      formData.append("contactNumber", form.contactNumber);
      formData.append("address", form.address);
      formData.append("city", form.city);
      formData.append("country", form.country);

      if (avatarFile) {
        formData.append("avatar", avatarFile);
      }

      const response = await fetch(`${API_BASE_URL}/api/auth/me`, {
        method: "PATCH",
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body: formData,
      });

      if (response.ok) {
        setAvatarFile(null);
        await fetchLatestProfile();
      }
    } catch (err) {
      console.error("Save failed:", err);
    }
  };

  const inputClass =
    "w-full border border-gray-200 rounded-full px-5 py-3 text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:border-[#38B793] transition-all bg-white";

  // ── EditField: input قابل للتعديل مع أيقونة القلم ──
  const EditField = ({ name, value, onChange, type = "text", placeholder }) => (
    <div className="relative w-full">
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={`${inputClass} pr-10`}
      />
      <FiEdit2 className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 text-sm" />
    </div>
  );

  // ── ViewField: عرض فقط بدون قلم ──
  const ViewField = ({ value, label }) => (
    <div className="w-full border border-gray-200 rounded-full px-6 py-3 text-sm text-gray-700 bg-white truncate">
      {value || <span className="text-gray-300">{label}</span>}
    </div>
  );

  return (
    <div className="min-h-screen bg-[#F9FAFB] flex flex-row-reverse items-stretch overflow-x-hidden">
      <aside className="bg-white border-l border-gray-100 min-h-screen sticky top-0 shadow-sm pt-10 px-2 lg:px-4 w-fit lg:w-64 flex-shrink-0">
        <Profilesidebar />
      </aside>

      <main className="flex-1">
        <div className="w-full bg-white md:bg-transparent min-h-screen">
          <div className="bg-white p-4 md:p-8 lg:px-24 xl:px-32 shadow-[0_0_40px_rgba(0,0,0,0.03)] border-gray-50 min-h-full">
            <h1 className="text-xl md:text-2xl font-bold text-gray-800 mb-8 md:mb-10 text-start lg:text-start">
              {isEditing ? "Edit Profile" : "My Profile"}
            </h1>

            <div className="flex justify-center mb-10">
              <div className="relative">
                <div className="w-24 h-24 md:w-28 md:h-28 rounded-full bg-gray-100 border-2 border-dashed border-gray-200 overflow-hidden flex items-center justify-center">
                  <div className="w-24 h-24 md:w-28 md:h-28 rounded-full bg-gray-100">
                    {avatar || authUser?.avatar ? (
                      <img
                        src={avatar || authUser?.avatar}
                        alt="Profile"
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center">
                        <LuCamera className="text-3xl text-gray-300" />
                      </div>
                    )}
                  </div>
                </div>
                {/* ── زر الكاميرا يظهر بس في وضع Edit ── */}
                {isEditing && (
                  <label className="absolute bottom-1 right-1 bg-white rounded-full p-1.5 shadow-md cursor-pointer border border-gray-200">
                    <LuCamera className="text-sm text-[#38B793]" />
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleAvatarChange}
                      ref={fileInputRef}
                      className="hidden"
                    />
                  </label>
                )}
              </div>
            </div>

            <form onSubmit={handleSave} className="flex flex-col gap-5 max-w-4xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* ── isEditing بس يحدد EditField أو ViewField ── */}
                {isEditing ? (
                  <>
                    <EditField name="firstName" value={form.firstName} onChange={handleChange} placeholder="First Name" />
                    <EditField name="lastName" value={form.lastName} onChange={handleChange} placeholder="Last Name" />
                  </>
                ) : (
                  <>
                    <ViewField value={form.firstName} label="First Name" />
                    <ViewField value={form.lastName} label="Last Name" />
                  </>
                )}
              </div>

              {isEditing ? (
                <>
                  <input
                    type="date"
                    name="dateOfBirth"
                    value={form.dateOfBirth}
                    onChange={handleChange}
                    className={inputClass}
                  />
                  <select name="gender" value={form.gender} onChange={handleChange} className={inputClass}>
                    <option value="">Gender</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                  </select>
                  <EditField name="contactNumber" value={form.contactNumber} onChange={handleChange} placeholder="Contact Number" type="tel" />
                  <EditField name="address" value={form.address} onChange={handleChange} placeholder="Address" />
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <EditField name="city" value={form.city} onChange={handleChange} placeholder="City" />
                    <EditField name="country" value={form.country} onChange={handleChange} placeholder="Country" />
                  </div>
                  <EditField name="email" value={form.email} onChange={handleChange} placeholder="Email" type="email" />
                </>
              ) : (
                <>
                  <ViewField value={form.dateOfBirth} label="Date of Birth" />
                  <ViewField value={form.gender} label="Gender" />
                  <ViewField value={form.contactNumber} label="Contact Number" />
                  <ViewField value={form.address} label="Address" />
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <ViewField value={form.city} label="City" />
                    <ViewField value={form.country} label="Country" />
                  </div>
                  <ViewField value={form.email} label="Email" />
                </>
              )}

              <div className="relative">
                <div className={`${inputClass} pr-12 overflow-hidden flex items-center`}>
                  {isEditing ? (
                    <input
                      type={showPassword ? "text" : "password"}
                      name="password"
                      value={form.password}
                      onChange={handleChange}
                      placeholder="Password"
                      className="w-full outline-none"
                    />
                  ) : (
                    <span className="pt-1">••••••••••••</span>
                  )}
                </div>
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400"
                >
                  {showPassword ? <FiEye /> : <FiEyeOff />}
                </button>
              </div>

              <div className="flex justify-center lg:justify-start mt-6">
                {isEditing ? (
                  <button
                    key="save-btn"
                    type="submit"
                    className="w-full md:w-auto md:px-24 py-3 rounded-full bg-[#38B793] text-white font-bold hover:bg-[#2fa382] transition-all shadow-lg"
                  >
                    Save Changes
                  </button>
                ) : (
                  <button
                    key="edit-btn"
                    type="button"
                    onClick={() => setIsEditing(true)}
                    className="w-full md:w-auto md:px-24 py-3 rounded-full bg-[#38B793] text-white font-bold hover:bg-[#2fa382] transition-all shadow-lg"
                  >
                    Edit Profile
                  </button>
                )}
              </div>
            </form>
          </div>
        </div>
      </main>
    </div>
  );
}