/*eslint-disable*/
import React from "react";
import {Link, useHistory } from "react-router-dom"; // ✅ For React Router v5

// components
import logo from "../../assets/img/imgg.png"
import IndexDropdown from "components/Dropdowns/IndexDropdown.js";
import l1 from "assets/img/logo.png"
export default function Navbar(props) {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  const history = useHistory(); // ✅ useHistory() for navigation
  return (
    <>
      <nav className="top-0 fixed z-50 w-full flex flex-wrap items-center justify-between px-2 py-3 navbar-expand-lg bg-white shadow">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <Link
              to="/"
              className="text-blueGray-700 text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase"
            >
              DivyaDarshan
            </Link>
            <button
              className="cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <i className="fas fa-bars"></i>
            </button>
          </div>
          <div
            className={
              "lg:flex flex-grow items-center bg-white lg:bg-opacity-0 lg:shadow-none" +
              (navbarOpen ? " block" : " hidden")
            }
            id="example-navbar-warning"
          >
         
            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
            
              <li className="flex items-center">
               
              </li>

              <div 
                    className="cursor-pointer text-blue-500 font-bold text-sm uppercase hover:underline text-center py-2"
                    style={{ marginRight: '20px' }}
                    onClick={() => {
                      document.getElementById('home')?.scrollIntoView({ behavior: 'smooth' });
                    }}
                  >
                    Home
                  </div>

                  <div 
                          className="cursor-pointer text-blue-500 font-bold text-sm uppercase hover:underline text-center py-2"
                          style={{ marginRight: '20px' }}
                          onClick={() => {
                            document.getElementById('aboutus')?.scrollIntoView({ behavior: 'smooth' });
                          }}
                        >
                          Seva
                        </div>
                        <div 
                              className="cursor-pointer text-blue-500 font-bold text-sm uppercase hover:underline text-center py-2"
                              style={{ marginRight: '20px' }}
                              onClick={() => {
                                document.getElementById('darshantypes')?.scrollIntoView({ behavior: 'smooth' });
                              }}
                            >
                              Darshan 
                            </div>
                            <div 
                                      className="cursor-pointer text-blue-500 font-bold text-sm uppercase hover:underline text-center py-2"
                                      style={{ marginRight: '20px' }}
                                      onClick={() => {
                                        document.getElementById('history')?.scrollIntoView({ behavior: 'smooth' });
                                      }}
                                    >
                                      History
                                    </div>
                                    <a href="/auth/register" className="text-green-500 font-bold text-sm uppercase hover:underline text-center py-2">
                            Register
                          </a>
                                  

              <li className="flex items-center">
               
              </li>

              <li className="flex items-center">
              
              </li>
              <li className="flex items-center">
            
               
                
              <a href="/auth/login" className="text-green-500 font-bold text-sm uppercase hover:underline text-center py-2"style={{marginLeft:'15px'}}>
                    Login
                  </a>
                                          </li>
                        </ul>
                      </div>
                    </div>
                  </nav>
                </>
              );
            }