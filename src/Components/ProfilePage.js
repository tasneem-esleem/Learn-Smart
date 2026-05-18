import React, { useState } from "react";
import { FiEye, FiEyeOff, FiEdit2 } from "react-icons/fi";
import { LuCamera } from "react-icons/lu";
import Profilesidebar from "../Components/Profilesidebar";
import { useAuth } from "../Context/UserContext";

export default function ProfilePage() {
  const { user } = useAuth();
  const [isEditing, setIsEditing] = useState(false);
  const [hasData, setHasData] = useState(!!user);
  const [showPassword, setShowPassword] = useState(false);
  const [avatar, setAvatar] = useState(null);

  const [form, setForm] = useState({
    firstName: user?.name?.split(" ")[0] || "",
    lastName: user?.name?.split(" ")[1] || "",
    email: user?.email || "",
    dateOfBirth: "",
    gender: "",
    contactNumber: "",
    address: "",
    city: "",
    country: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleAvatarChange = (e) => {
    const file = e.target.files[0];
    if (file) setAvatar(URL.createObjectURL(file));
  };

  const handleSave = async (e) => {
  if (e) {
    e.preventDefault();
    e.stopPropagation();
  }

  // تحديث الحالة فوراً
  setIsEditing(false);
  setHasData(true);

  try {
    const token = localStorage.getItem("userToken");
    await fetch("https://api-zyzn.onrender.com/api/auth/me", {
      method: "GET",
      headers: { Authorization: `Bearer ${token}` },
    });
  } catch (err) {
    console.error("Save failed:", err);
  }
};

  const inputClass =
    "w-full border border-gray-200 rounded-full px-5 py-3 text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:border-[#38B793] transition-all bg-white";

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

  const ViewField = ({ value, label }) => (
    <div className="w-full border border-gray-200 rounded-full px-6 py-3 text-sm text-gray-700 bg-white truncate">
      {value || <span className="text-gray-300">{label}</span>}
    </div>
  );

  return (
    <div className="min-h-screen bg-[#F9FAFB] flex flex-row-reverse items-stretch overflow-x-hidden">
      <aside className="bg-white border-l border-gray-100 min-h-screen sticky top-0 shadow-sm pt-10 px-2 lg:px-4 w-fit lg:w-64 flex-shrink-0 ">
        <Profilesidebar />
      </aside>

      <main className="flex-1">
        <div className="w-full bg-white md:bg-transparent min-h-screen">
          <div className="bg-white p-4 md:p-8 lg:px-24 xl:px-32 shadow-[0_0_40px_rgba(0,0,0,0.03)] border-gray-50 min-h-full">
            <h1 className="text-xl md:text-2xl font-bold text-gray-800 mb-8 md:mb-10 text-start lg:text-start">
              {isEditing ? "Edit Profile" : "My Profile"}
            </h1>

            {/* Avatar Section */}
            <div className="flex justify-center mb-10">
              <div className="relative">
                <div className="w-24 h-24 md:w-28 md:h-28 rounded-full bg-gray-100 border-2 border-dashed border-gray-200 overflow-hidden flex items-center justify-center">
                  <div className="w-24 h-24 md:w-28 md:h-28 rounded-full bg-gray-100 ...">
                    {avatar || user?.avatar ? (
                      <img
                        src={avatar || user?.avatar}
                        alt="Profile"
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <LuCamera className="text-3xl text-gray-300" />
                    )}
                  </div>
                </div>
                {(!hasData || isEditing) && (
                  <label className="absolute bottom-1 right-1 bg-white rounded-full p-1.5 shadow-md cursor-pointer border border-gray-200">
                    <LuCamera className="text-sm text-[#38B793]" />
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleAvatarChange}
                      className="hidden"
                    />
                  </label>
                )}
              </div>
            </div>

            {/* Form Section */}
            <form
              onSubmit={handleSave}
              className="flex flex-col gap-5 max-w-4xl mx-auto"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {!hasData || isEditing ? (
                  <>
                    <EditField
                      name="firstName"
                      value={form.firstName}
                      onChange={handleChange}
                      placeholder="First Name"
                    />
                    <EditField
                      name="lastName"
                      value={form.lastName}
                      onChange={handleChange}
                      placeholder="Last Name"
                    />
                  </>
                ) : (
                  <>
                    <ViewField value={form.firstName} label="First Name" />
                    <ViewField value={form.lastName} label="Last Name" />
                  </>
                )}
              </div>

              {!hasData || isEditing ? (
                <>
                  <input
                    type="date"
                    name="dateOfBirth"
                    value={form.dateOfBirth}
                    onChange={handleChange}
                    className={inputClass}
                  />
                  <select
                    name="gender"
                    value={form.gender}
                    onChange={handleChange}
                    className={inputClass}
                  >
                    <option value="">Gender</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                  </select>
                  <EditField
                    name="contactNumber"
                    value={form.contactNumber}
                    onChange={handleChange}
                    placeholder="Contact Number"
                    type="tel"
                  />
                  <EditField
                    name="address"
                    value={form.address}
                    onChange={handleChange}
                    placeholder="Address"
                  />

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <EditField
                      name="city"
                      value={form.city}
                      onChange={handleChange}
                      placeholder="City"
                    />
                    <EditField
                      name="country"
                      value={form.country}
                      onChange={handleChange}
                      placeholder="Country"
                    />
                  </div>

                  <EditField
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="Email"
                    type="email"
                  />
                </>
              ) : (
                <>
                  <ViewField value={form.dateOfBirth} label="Date of Birth" />
                  <ViewField value={form.gender} label="Gender" />
                  <ViewField
                    value={form.contactNumber}
                    label="Contact Number"
                  />
                  <ViewField value={form.address} label="Address" />
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <ViewField value={form.city} label="City" />
                    <ViewField value={form.country} label="Country" />
                  </div>
                  <ViewField value={form.email} label="Email" />
                </>
              )}

              <div className="relative">
                <div
                  className={`${inputClass} pr-12 overflow-hidden flex items-center`}
                >
                  {!hasData || isEditing ? (
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
      type="button" 
      onClick={handleSave}
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
