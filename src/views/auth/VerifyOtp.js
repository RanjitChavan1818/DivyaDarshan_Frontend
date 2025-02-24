import React, { useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";

export default function OTPVerification() {
  const [otp, setOtp] = useState("");
  const [error, setError] = useState("");
  const history = useHistory();
  const { userId } = useParams(); // Get user ID from route params

  const handleVerifyOTP = async () => {
    setError("");
    if (otp.length !== 6 || isNaN(otp)) {
      setError("Please enter a valid 6-digit OTP.");
      return;
    }

    try {
      const response = await axios.post(`http://127.0.0.1:8000/myapp/verify-otp/${userId}/`, {
        otp,
      });

      Swal.fire({
        icon: "success",
        title: "OTP Verified!",
        text: "Your account has been successfully verified.",
        confirmButtonColor: "#ff6600",
      }).then(() => {
        history.push("/Login"); // Redirect to login page
      });

    } catch (err) {
      Swal.fire({
        icon: "error",
        title: "Invalid OTP",
        text: err.response?.data?.error || "OTP verification failed. Try again.",
        confirmButtonColor: "#ff6600",
      });
    }
  };

  return (
    <div className="container mx-auto px-4 h-screen flex items-center justify-center">
      <div className="w-full max-w-3xl flex bg-white rounded-lg  overflow-hidden">
        {/* Left Side - Image */}
     

        {/* Right Side - OTP Verification Form */}
        <div className="w-full lg:w-1/2 px-14 py-12 flex flex-col justify-center text-center ml-6">
          <div className="text-center mb-6">
            <h6 className="text-orange-500 text-2xl font-bold">Enter OTP</h6>
          </div>
          {error && <p className="text-red-500 mb-4">{error}</p>}
          <form
            className="justify-center text-center flex flex-col"
            onSubmit={(e) => e.preventDefault()}
          >
            <div className="mb-5">
              <label className="block text-orange-600 text-sm font-bold mb-2">
                OTP
              </label>
              <input
                type="text"
                value={otp}
                onChange={(e) => setOtp(e.target.value.replace(/\D/, ""))} // Allow only digits
                className="border border-orange-400 px-4 py-3 text-sm rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 bg-gray-100 text-center tracking-widest"
                placeholder="Enter 6-digit OTP"
                style={{ width: "350px", letterSpacing: "3px" }}
                maxLength="6"
                required
              />
            </div>

            <div>
              <button
                className="bg-orange-500 text-white py-3 rounded-lg text-sm font-bold hover:bg-orange-600 transition duration-200 mt-4"
                style={{ width: "350px" }}
                type="button"
                onClick={handleVerifyOTP}
              >
                Verify OTP
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
