import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();

  const handleLogin = async () => {
    try {
      const response = await axios.post("http://127.0.0.1:8000/myapp/login/", {
        email,
        password,
      });

      // Store tokens in local storage
      localStorage.setItem("access_token", response.data.access);
      localStorage.setItem("refresh_token", response.data.refresh);

      // SweetAlert success message
      Swal.fire({
        title: "Login Successful!",
        text: "Redirecting to dashboard...",
        icon: "success",
        timer: 2000,
        showConfirmButton: false,
      });

      setTimeout(() => {
        history.push("/admin/dashboard"); // Redirect after success
      }, 2000);
    } catch (err) {
      Swal.fire({
        title: "Login Failed!",
        text: err.response?.data?.error || "Invalid email or password.",
        icon: "error",
      });
    }
  };

  return (
    <div className="container mx-auto px-4 h-screen flex items-center justify-center">
      <div className="w-full max-w-3xl flex bg-white rounded-lg ml-32 overflow-hidden">
        {/* Left Side - Image */}
        <div className="w-1/2 hidden lg:block">
          <img
            src={require("assets/img/tukaram.jpg")}
            alt="Login"
            className="w-full h-full object-cover"style={{marginLeft:'50px'}}
          />
        </div>

        {/* Right Side - Login Form */}
        <div className="w-full lg:w-1/2 px-14 py-12 flex flex-col justify-center text-center ml-6">
          <div className="text-center mb-6">
            <h6 className="text-orange-500 text-2xl font-bold">
              Sign in to your account
            </h6>
          </div>
          <form
            className="justify-center text-center flex flex-col"
            onSubmit={(e) => e.preventDefault()}
          >
            <div className="mb-5">
              <label className="block text-orange-600 text-sm font-bold mb-2">
                Email
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="border border-orange-400 px-4 py-3 text-sm rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 bg-gray-100"
                placeholder="Enter your email"
                style={{ width: "350px" }}
                required
              />
            </div>

            <div className="mb-5">
              <label className="block text-orange-600 text-sm font-bold mb-2">
                Password
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="border border-orange-400 px-4 py-3 text-sm rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 bg-gray-100"
                placeholder="Enter your password"
                style={{ width: "350px" }}
                required
              />
            </div>

            <div>
              <button
                className="bg-orange-500 text-white py-3 rounded-lg text-sm font-bold hover:bg-orange-600 transition duration-200 mt-4"
                style={{ width: "350px" }}
                type="button"
                onClick={handleLogin}
              >
                Sign In
              </button>
            </div>
            <div className="text-center mt-6">
              <span className="text-sm text-orange-600">Don't have an account? </span>
              <Link to="/auth/register" className="text-orange-500 font-bold hover:underline">
                Sign up
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
