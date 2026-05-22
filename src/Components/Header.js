import React, { useEffect, useRef, useState } from "react";
import { IoMdArrowDropdown } from "react-icons/io";
import { IoCloseOutline } from "react-icons/io5";
import { HiMenuAlt3 } from "react-icons/hi";
import { RxCross2 } from "react-icons/rx";
import { FiSearch } from "react-icons/fi";
import { MdOutlineNotificationsActive } from "react-icons/md";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../Context/UserContext";

const NavLinks = ({
  isMobile = false,
  closeMenu = () => {},
  isLoggedIn,
  desktopDropdownOpen,
  mobileDropdownOpen,
  setDesktopDropdownOpen,
  setMobileDropdownOpen,
  selectedYear,
  setSelectedYear,
  years,
  desktopDropdownRef,
  mobileDropdownRef,
}) => {
  const navigate = useNavigate();

  const dropdownOpen = isMobile ? mobileDropdownOpen : desktopDropdownOpen;
  const setDropdownOpen = isMobile
    ? setMobileDropdownOpen
    : setDesktopDropdownOpen;
  const dropdownRef = isMobile ? mobileDropdownRef : desktopDropdownRef;
  const { user } = useAuth();

  return (
    <ul
      className={`${
        isMobile ? "flex flex-col gap-6 w-full" : "flex items-center gap-10"
      }`}
    >
      {/* Home */}
      <NavLink
        to="/home"
        end
        onClick={() => isMobile && closeMenu()}
        className={({ isActive }) =>
          `cursor-pointer transition text-[15px] font-medium ${
            isActive
              ? "text-primary-green underline decoration-2 underline-offset-4"
              : "text-gray-700 hover:text-primary-green"
          }`
        }
      >
        <li>Home</li>
      </NavLink>

      <li className={`${isMobile ? "w-full" : "relative"}`}>
        <button
          onClick={() => setDropdownOpen(!dropdownOpen)}
          aria-haspopup="listbox"
          aria-expanded={dropdownOpen}
          aria-label="Select study year"
          className="flex items-center gap-1 hover:text-primary-green transition cursor-pointer text-[15px] text-gray-700 font-medium w-full justify-between"
        >
          Study Year
          <span className="text-xs mt-0.5 text-black">
            <IoMdArrowDropdown />
          </span>
        </button>

        {dropdownOpen && (
          <ul
            role="listbox"
            aria-label="Study year options"
            className={`${
              isMobile
                ? "mt-2 mb-4 bg-white border border-gray-100 rounded-lg shadow-md w-full py-2"
                : "absolute top-8 left-0 bg-white border border-gray-100 rounded-lg shadow-md w-60 py-2 z-50"
            }`}
            ref={dropdownRef}
          >
            <div className="flex justify-between items-start px-3">
              <h3 className="pb-3 text-sm font-semibold text-gray-700">
                Study Year
              </h3>
              <button
                aria-label="Close dropdown"
                className="text-[#272727] cursor-pointer hover:text-primary-green transition"
                onClick={() => {
                  setDropdownOpen(false);
                  setSelectedYear(null);
                }}
              >
                <IoCloseOutline />
              </button>
            </div>

            {!selectedYear &&
              years.map((year) => (
                <li
                  key={year}
                  role="option"
                  aria-selected={false}
                  onClick={() => {
                    setSelectedYear(year);
                    if (year === "First year of secondary school") {
                      navigate("/studyYear");
                      setDropdownOpen(false);
                      setSelectedYear(null);
                      if (isMobile) closeMenu();
                    }
                  }}
                  className="py-2 px-3 mx-2 hover:bg-teal-50 hover:text-primary-dark cursor-pointer text-sm border border-gray-200 rounded-full mb-3 text-center"
                  style={{
                    boxShadow:
                      "0 -4px 6px -1px rgba(0,0,0,0.1), 0 4px 6px -1px rgba(0,0,0,0.1)",
                  }}
                >
                  {year}
                </li>
              ))}

            {selectedYear && (
              <>
                <li
                  role="option"
                  aria-selected={false}
                  onClick={() => setSelectedYear(null)}
                  className="py-2 px-3 mx-2 hover:bg-teal-50 hover:text-primary-dark cursor-pointer text-sm border border-gray-200 rounded-full mb-3 text-center"
                  style={{
                    boxShadow:
                      "0 -4px 6px -1px rgba(0,0,0,0.1), 0 4px 6px -1px rgba(0,0,0,0.1)",
                  }}
                >
                  ← {selectedYear}
                </li>

                {/* Literary */}
                <li
                  role="option"
                  aria-selected={false}
                  onClick={() => {
                    if (selectedYear === "Second year of secondary school") {
                      navigate("/secondLiterary");
                    } else if (
                      selectedYear === "Third year of secondary school"
                    ) {
                      navigate("/thirdLiterary");
                    }
                    setDropdownOpen(false);
                    setSelectedYear(null);
                    if (isMobile) closeMenu();
                  }}
                  className="py-2 px-3 mx-2 hover:bg-teal-50 hover:text-primary-dark cursor-pointer text-sm border border-gray-200 rounded-full mb-3 text-center"
                  style={{
                    boxShadow:
                      "0 -4px 6px -1px rgba(0,0,0,0.1), 0 4px 6px -1px rgba(0,0,0,0.1)",
                  }}
                >
                  Literary
                </li>

                {/* Scientific */}
                <li
                  role="option"
                  aria-selected={false}
                  onClick={() => {
                    if (selectedYear === "Second year of secondary school") {
                      navigate("/secondScientific");
                    } else if (
                      selectedYear === "Third year of secondary school"
                    ) {
                      navigate("/thirdScientific");
                    }
                    setDropdownOpen(false);
                    setSelectedYear(null);
                    if (isMobile) closeMenu();
                  }}
                  className="py-2 px-3 mx-2 hover:bg-teal-50 hover:text-primary-dark cursor-pointer text-sm border border-gray-200 rounded-full mb-3 text-center"
                  style={{
                    boxShadow:
                      "0 -4px 6px -1px rgba(0,0,0,0.1), 0 4px 6px -1px rgba(0,0,0,0.1)",
                  }}
                >
                  Scientific
                </li>
              </>
            )}
          </ul>
        )}
      </li>

      {/* About Us */}
      <NavLink
        to="/about"
        end
        onClick={() => isMobile && closeMenu()}
        className={({ isActive }) =>
          `cursor-pointer transition text-[15px] font-medium ${
            isActive
              ? "text-primary-green underline decoration-2 underline-offset-4"
              : "text-gray-700 hover:text-primary-green"
          }`
        }
      >
        <li>About Us</li>
      </NavLink>

      {/* Contact */}
      <NavLink
        to="/contact"
        end
        onClick={() => isMobile && closeMenu()}
        className={({ isActive }) =>
          `cursor-pointer transition text-[15px] font-medium ${
            isActive
              ? "text-primary-green underline decoration-2 underline-offset-4"
              : "text-gray-700 hover:text-primary-green"
          }`
        }
      >
        <li>Contact</li>
      </NavLink>

      {/* Mobile-only: auth buttons or user icons */}
      {isMobile && (
        <div className="flex flex-col gap-3 w-full mt-4 pt-4 border-t border-gray-200">
          {isLoggedIn ? (
            <div className="flex items-center gap-4">
              <NavLink
                to="/search"
                end
                className={({ isActive }) =>
                  `cursor-pointer transition text-[15px] font-medium ${
                    isActive
                      ? "text-primary-green underline decoration-2 underline-offset-4"
                      : "text-gray-700 hover:text-primary-green"
                  }`
                }
                aria-label="Search"
              >
                <FiSearch className="text-xl cursor-pointer text-gray-600" />
              </NavLink>
              <NavLink
                to="/notifications"
                className={({ isActive }) =>
                  `cursor-pointer transition ${
                    isActive
                      ? "text-primary-green"
                      : "text-gray-600 hover:text-primary-green"
                  }`
                }
              >
                <button aria-label="Notifications" className="transition">
                  <MdOutlineNotificationsActive className="text-xl cursor-pointer text-current" />
                </button>
              </NavLink>

              <Link to="/profile" aria-label="Go to profile">
                <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-gray-200">
                  <img
                    src={user?.avatar || "/user-avatar.jpg"}
                    alt={user?.name || "User profile picture"}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
              </Link>
            </div>
          ) : (
            <>
              <Link to="/login" onClick={closeMenu}>
                <button className="px-5 py-2 rounded-full border-2 border-gray-800 text-gray-800 text-sm font-medium hover:bg-gray-50 transition w-full">
                  Log in
                </button>
              </Link>
              <Link to="/register" onClick={closeMenu}>
                <button className="px-5 py-2 rounded-full bg-[#38B793] text-white text-sm font-medium hover:bg-primary-dark transition w-full">
                  Sign up
                </button>
              </Link>
            </>
          )}
        </div>
      )}
    </ul>
  );
};

// ─────────────────────────────────────────────
// Main Header Component
// ─────────────────────────────────────────────
export default function Header() {
  const [desktopDropdownOpen, setDesktopDropdownOpen] = useState(false);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState(false);
  const [selectedYear, setSelectedYear] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { user } = useAuth();
  const [isLoggedIn, setIsLoggedIn] = useState(
    () => !!localStorage.getItem("userToken"),
  );

  const desktopDropdownRef = useRef(null);
  const mobileDropdownRef = useRef(null);

  const years = [
    "First year of secondary school",
    "Second year of secondary school",
    "Third year of secondary school",
  ];

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        desktopDropdownRef.current &&
        !desktopDropdownRef.current.contains(e.target)
      ) {
        setDesktopDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    const handleAuth = () => {
      setIsLoggedIn(!!localStorage.getItem("userToken"));
    };
    window.addEventListener("authChange", handleAuth);
    window.addEventListener("storage", handleAuth);
    return () => {
      window.removeEventListener("authChange", handleAuth);
      window.removeEventListener("storage", handleAuth);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [mobileMenuOpen]);

  const openMobileMenu = () => {
    setDesktopDropdownOpen(false);
    setMobileDropdownOpen(false);
    setMobileMenuOpen(true);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
    setMobileDropdownOpen(false);
    setSelectedYear(null);
  };

  const navLinksProps = {
    isLoggedIn,
    desktopDropdownOpen,
    mobileDropdownOpen,
    setDesktopDropdownOpen,
    setMobileDropdownOpen,
    selectedYear,
    setSelectedYear,
    years,
    desktopDropdownRef,
    mobileDropdownRef,
  };

  return (
    <>
      <nav
        role="navigation"
        aria-label="Main navigation"
        style={{
          WebkitTransform: "translateZ(0)",
          transform: "translateZ(0)",
          WebkitBackfaceVisibility: "hidden",
          backfaceVisibility: "hidden",
        }}
        className="w-full fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md shadow-sm h-20 px-4 sm:px-8 lg:px-28 flex items-center justify-between"
      >
        <div className="flex items-center">
          <Link to="/" aria-label="Learn Smart - Go to homepage">
            <img
              src="/logo.png"
              alt="Learn Smart Logo"
              className="h-14 w-auto"
              loading="lazy"
            />
          </Link>
        </div>

        <div className="hidden lg:block">
          <NavLinks {...navLinksProps} isMobile={false} />
        </div>

        <div className="flex items-center gap-3">
          <div className="hidden sm:flex items-center gap-3">
            {isLoggedIn ? (
              <div className="flex items-center gap-4 sm:gap-5">
                <NavLink
                  to="/search"
                  end
                  aria-label="Search"
                  className={({ isActive }) =>
                    `cursor-pointer transition ${
                      isActive
                        ? "text-primary-green"
                        : "text-gray-600 hover:text-primary-green"
                    }`
                  }
                >
                  <FiSearch className="text-xl" />
                </NavLink>
                <NavLink
                  to="/notifications"
                  className={({ isActive }) =>
                    `cursor-pointer transition ${
                      isActive
                        ? "text-primary-green"
                        : "text-gray-600 hover:text-primary-green"
                    }`
                  }
                >
                  <button aria-label="Notifications" className="transition">
                    <MdOutlineNotificationsActive className="text-xl cursor-pointer text-current" />
                  </button>
                </NavLink>
                <Link to="/profile" aria-label="Go to profile">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full overflow-hidden border-2 border-gray-200 cursor-pointer">
                    <img
                      src={user?.avatar || "/user-avatar.jpg"}
                      alt={user?.name || "User profile picture"}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                </Link>
              </div>
            ) : (
              <>
                <Link to="/login">
                  <button className="px-4 sm:px-5 py-2 rounded-full border-2 border-gray-800 text-gray-800 text-xs sm:text-sm font-medium hover:bg-gray-50 transition">
                    Log in
                  </button>
                </Link>
                <Link to="/register">
                  <button className="px-4 sm:px-5 py-2 rounded-full bg-[#38B793] text-white text-xs sm:text-sm font-medium hover:bg-teal-600 transition">
                    Sign up
                  </button>
                </Link>
              </>
            )}
          </div>

          <button
            onClick={openMobileMenu}
            aria-label="Open navigation menu"
            aria-expanded={mobileMenuOpen}
            className="lg:hidden p-2 hover:bg-gray-100 rounded-lg transition"
          >
            <HiMenuAlt3 className="w-6 h-6 text-gray-700" />
          </button>
        </div>
      </nav>

      <div className="h-20 w-full" />

      {/* Mobile sidebar */}
      <div
        className={`fixed inset-0 z-50 transition-all duration-300 lg:hidden ${
          mobileMenuOpen ? "visible" : "invisible"
        }`}
        role="dialog"
        aria-modal="true"
        aria-label="Mobile navigation menu"
      >
        <div
          className={`absolute inset-0 bg-black transition-opacity duration-300 ${
            mobileMenuOpen ? "opacity-50" : "opacity-0"
          }`}
          onClick={closeMobileMenu}
          aria-hidden="true"
        />

        <div
          className={`absolute top-0 right-0 h-full w-80 bg-white shadow-2xl transition-transform duration-300 transform ${
            mobileMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex items-center justify-between p-4 border-b border-gray-200">
            <img
              src="/logo.png"
              alt="Learn Smart Logo"
              loading="lazy"
              className="h-10 w-auto"
            />
            <button
              onClick={closeMobileMenu}
              aria-label="Close navigation menu"
              className="p-2 hover:bg-gray-100 rounded-lg transition"
            >
              <RxCross2 className="w-5 h-5 text-gray-700" />
            </button>
          </div>

          <div className="p-4 overflow-y-auto h-full pb-24">
            <NavLinks
              {...navLinksProps}
              isMobile={true}
              closeMenu={closeMobileMenu}
            />
          </div>
        </div>
      </div>
    </>
  );
}