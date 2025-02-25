import Swal from "sweetalert2";
import { useHistory } from "react-router-dom";
import React, { useState } from "react";
import { Link } from "react-router-dom";



export default function Register() {
  const history = useHistory();
  const [formData, setFormData] = useState({
    full_name: "",
    email: "",
    phone: "",
    address: "",
    password: "",
    confirm_password: "",
    md1: "default1",
    md2: "default2",
    md3: "default3",
  });

  const [message, setMessage] = useState(null);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage(null);
    setError(null);
  
    try {
      const response = await fetch("http://127.0.0.1:8000/myapp/register/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
        },
        body: JSON.stringify(formData),
      });
  
      const contentType = response.headers.get("content-type");
      let data;
  
      if (contentType && contentType.includes("application/json")) {
        data = await response.json();
      } else {
        throw new Error("Server did not return a valid JSON response.");
      }
  
      if (response.ok) {
        Swal.fire({
          title: "Success!",
          text: "Registration successful! Redirecting to OTP verification...",
          icon: "success",
          timer: 2000,
          showConfirmButton: false,
        });
  
        setTimeout(() => {
          history.push(`/auth/VerifyOtp/${data.user_id}`);
        }, 2000);
      } else {
        Swal.fire({
          title: "Error!",
          text: data.error || "Something went wrong.",
          icon: "error",
        });
      }
    } catch (err) {
      console.error("Fetch error:", err);
      Swal.fire({
        title: "Network Error!",
        text: "Please check your connection and try again.",
        icon: "error",
      });
    }
  };


  return (
    <div className="container mx-auto px-4 h-screen flex items-center justify-center">
      <div className=" flex bg-white rounded-lg  overflow-hidden"style={{margin:'40px'}}>
        <div className=" hidden lg:block">
          <img
            src={require("assets/img/dh.jpg")}
            alt="Login"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="  px-14 py-12 flex flex-col justify-center text-center ml-6"style={{marginLeft:'60px'}}> 
          <div className="text-center mb-6">
            <h6 className="text-orange-500 text-2xl font-bold">Create an Account</h6>
          </div>

          {message && <p className="text-green-500">{message}</p>}
          {error && <p className="text-red-500">{error}</p>}

          <form onSubmit={handleSubmit} className="justify-center text-center flex flex-col">
            <div className="flex flex-row ml-3">
              <div className="mb-5 mr-3">
                <label className="block text-orange-600 text-sm font-bold mb-2">Your Name</label>
                <input
                  type="text"
                  name="full_name"
                  value={formData.full_name}
                  onChange={handleChange}
                  className="border border-orange-400 px-4 py-3 text-sm rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 bg-gray-100"
                  placeholder="Enter your full name"
                  style={{ width: "350px" }}
                />
              </div>
              <div className="mb-5">
                <label className="block text-orange-600 text-sm font-bold mb-2">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="border border-orange-400 px-4 py-3 text-sm rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 bg-gray-100"
                  placeholder="Enter your email"
                  style={{ width: "350px" }}
                />
              </div>
            </div>
            <div className="flex flex-row ml-3">
              <div className="mb-5">
                <label className="block text-orange-600 text-sm font-bold mb-2">Phone</label>
                <input
                  type="text"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="border mr-3 border-orange-400 px-4 py-3 text-sm rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 bg-gray-100"
                  placeholder="Enter your phone number"
                  style={{ width: "350px" }}
                />
              </div>
              <div className="mb-5">
                <label className="block text-orange-600 text-sm font-bold mb-2">Address</label>
                <input
                  type="text"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  className="border border-orange-400 px-4 py-3 text-sm rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 bg-gray-100"
                  placeholder="Enter your address"
                  style={{ width: "350px" }}
                />
              </div>
            </div>
            <div className="flex flex-row ml-3">
              <div className="mb-5">
                <label className="block text-orange-600 text-sm font-bold mb-2">Password</label>
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  className="border mr-3 border-orange-400 px-4 py-3 text-sm rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 bg-gray-100"
                  placeholder="Enter your password"
                  style={{ width: "350px" }}
                />
              </div>
              <div className="mb-5">
                <label className="block text-orange-600 text-sm font-bold mb-2">Confirm Password</label>
                <input
                  type="password"
                  name="confirm_password"
                  value={formData.confirm_password}
                  onChange={handleChange}
                  className="border border-orange-400 px-4 py-3 text-sm rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 bg-gray-100"
                  placeholder="Enter the password again"
                  style={{ width: "350px" }}
                />
              </div>
            </div>
            <button className="bg-orange-500 text-white py-3 rounded-lg text-sm font-bold hover:bg-orange-600 transition duration-200 mt-4" style={{ width: "350px",marginLeft:'190px' }} type="submit">Sign Up</button>
            <div className="text-center mt-6">
              <span className="text-sm text-orange-600">Already have an account? </span>
              <Link to="/auth/login" className="text-orange-500 font-bold hover:underline">Sign in</Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
