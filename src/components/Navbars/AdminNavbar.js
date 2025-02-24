import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import Swal from "sweetalert2"; // Import SweetAlert2
import UserDropdown from "components/Dropdowns/UserDropdown.js";

export default function Navbar() {
  const [language, setLanguage] = useState("English");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const history = useHistory(); // useHistory instead of useNavigate

  const handleLanguageChange = (lang) => {
    setLanguage(lang);
    setIsDropdownOpen(false);
  };

  const handleLogout = async () => {
    try {
      const refreshToken = localStorage.getItem("refresh_token"); // Get refresh token from local storage

      // Send a request to the logout API to expire the refresh token
      const response = await fetch("http://localhost:8000/myapp/logout/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("access_token")}`,
        },
        body: JSON.stringify({ refresh: refreshToken }),
      });

      const data = await response.json();

      if (response.ok) {
        // Clear tokens from local storage
        localStorage.removeItem("access_token");
        localStorage.removeItem("refresh_token");

        // Show SweetAlert message for logout success
        Swal.fire({
          icon: "success",
          title: "Logged out successfully!",
          text: "You have been logged out.",
          confirmButtonColor: "#3085d6",
          confirmButtonText: "OK",
        }).then(() => {
          history.push("/login"); // Redirect to login page after closing alert
        });
      } else {
        Swal.fire({
          icon: "error",
          title: "Logout Failed",
          text: data.error,
          confirmButtonColor: "#d33",
        });
      }
    } catch (error) {
      console.error("Logout error:", error);
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "An error occurred during logout.",
        confirmButtonColor: "#d33",
      });
    }
  };

  return (
    <>
      <nav className="absolute top-0 left-0 w-full z-10 bg-transparent md:flex-row md:flex-nowrap md:justify-start flex items-center p-4 ml-12">
        <div className="w-full mx-auto items-center flex justify-between md:flex-nowrap flex-wrap md:px-10 px-4"style={{marginLeft:'30px'}}>
          {/* Brand */}
          <Link className="text-white text-sm uppercase hidden lg:inline-block font-semibold " to="/admin/dashboard">
            Slot Booking
          </Link>

          {/* Links */}
          <ul className="flex items-center space-x-6 md:ml-6"style={{marginLeft:'30px'}}>
            <li>
            <Link className="text-white text-sm uppercase hidden lg:inline-block font-semibold " to="/queue">
            Queue
          </Link>  
            </li>
            <li>
              <Link className="text-white text-sm uppercase font-semibold hover:text-blue-400 transition duration-300"style={{marginLeft:'30px'}}
                to="/virtual">
                Virtual Darshan
              </Link>
            </li>
            <li>
              <Link className="text-white text-sm uppercase font-semibold hover:text-blue-400 transition duration-300"style={{marginLeft:'30px'}}
                to="/services">
                Services
              </Link>
            </li>
          </ul>

          {/* Language Dropdown */}
          <div className="relative ml-6">
            <button className="text-white text-sm uppercase font-semibold flex items-center hover:text-blue-400 transition duration-300"style={{marginLeft:'30px'}}
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
              <i className="fas fa-globe text-lg mr-2"></i> {language}
            </button>

            {isDropdownOpen && (
              <div className="absolute mt-2 bg-white text-black rounded shadow-md w-32">
                <ul className="text-sm">
                  <li className="p-2 hover:bg-gray-200 cursor-pointer" onClick={() => handleLanguageChange("English")}>
                    English
                  </li>
                  <li className="p-2 hover:bg-gray-200 cursor-pointer" onClick={() => handleLanguageChange("Hindi")}>
                    हिंदी
                  </li>
                  <li className="p-2 hover:bg-gray-200 cursor-pointer" onClick={() => handleLanguageChange("Marathi")}>
                    मराठी
                  </li>
                </ul>
              </div>
            )}
          </div>

          {/* Search Form */}
          <form className="md:flex hidden flex-row flex-wrap items-center lg:ml-auto mr-3">
            <div className="relative flex w-full flex-wrap items-stretch">
              <span className="z-10 h-full leading-snug font-normal absolute text-center text-blueGray-300 bg-transparent rounded text-base items-center justify-center w-8 pl-3 py-3">
                <i className="fas fa-search"></i>
              </span>
              <input
                type="text"
                placeholder="Search here..."
                className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 relative bg-white rounded text-sm shadow outline-none focus:outline-none focus:ring w-full pl-10"
              />
            </div>
          </form>

          {/* User Dropdown and Logout Button */}
          <div className="flex items-center space-x-4">
            <UserDropdown />
            <button onClick={handleLogout} className="text-white text-sm uppercase font-semibold  px-4 py-2 rounded hover:bg-red-700 transition duration-300">
              Logout
            </button>
          </div>
        </div>
      </nav>
    </>
  );
}
