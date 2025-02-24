import React from "react";
import { Link } from "react-router-dom";
import main from "../assets/img/vithu.jpg"
import IndexNavbar from "components/Navbars/IndexNavbar.js";

import v1 from "assets/img/v4.jpg";
import Footer from "components/Footers/Footer.js";
import c1 from "assets/img/vithal.jpg";
import c2 from "assets/img/mukhdarshan.jpg";
import c3 from "assets/img/Pandurang.jpg";
import c4 from "../assets/img/namdev.jpg";
import c7 from "../assets/img/History.jpg"
import c8 from "../assets/img/i1.png"
import c9 from "../assets/img/i2.png"
import c10 from "../assets/img/i3.png"
import c11 from "../assets/img/pheader.jpg";

export default function Index() {
  return (
    <>
      <IndexNavbar fixed />
      <section id="home"
      className="header relative pt-16 items-center flex h-screen max-h-860-px">
        <div className="container mx-auto items-center flex flex-wrap">
          <div className="w-full md:w-8/12 lg:w-6/12 xl:w-6/12 px-4">
            <div className="pt-32 sm:pt-0">
            <h2 className="font-semibold text-4xl text-blueGray-600">
              <img src={c11} alt="Description of Image" className="w-full h-auto" />
            </h2>

              <p className="mt-4 text-lg font-bold leading-relaxed text-blueGray-500"style={{marginLeft:'90px'}}>
             Book your slot and..get peaceful ,
                {" "}
                <a
                  href="https://tailwindcss.com/?ref=creativetim"
                  className="text-blueGray-600"
                  target="_blank"
                >
                Divya Darshan
                </a>
               
              </p>
              <div className="mt-12">
                <a
                  href="https://www.creative-tim.com/learning-lab/tailwind/react/overview/notus?ref=nr-index"
                  target="_blank"
                  className="get-started text-white font-bold px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-1 bg-orange-500 active:bg-lightBlue-600 uppercase text-sm shadow hover:shadow-lg ease-linear transition-all duration-150"
                  style={{marginLeft:'220px'}}
                >
                  Get started
                </a>
              
              </div>
            </div>
          </div>
        </div>

        <img
          className="absolute top-0 b-auto right-0 pt-16 sm:w-6/12 -mt-48 sm:mt-0 w-10/12 max-h-860px"
          src={main}
          alt="..."
        />
      </section>

      <section 
       className="mt-48 md:mt-40 pb-40 relative bg-blueGray-100">
        <div
          className="-mt-20 top-0 bottom-auto left-0 right-0 w-full absolute h-20"
          style={{ transform: "translateZ(0)" }}
        >
          <svg
            className="absolute bottom-0 overflow-hidden"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            version="1.1"
            viewBox="0 0 2560 100"
            x="0"
            y="0"
          >
            <polygon
              className="text-blueGray-100 fill-current"
              points="2560 0 2560 100 0 100"
            ></polygon>
          </svg>
        </div>
        <div className="container mx-auto"id="aboutus">
          <div className="flex flex-wrap items-center">
            <div className="w-10/12 md:w-6/12 lg:w-4/12 px-12 md:px-4 mr-auto ml-auto -mt-32">
              <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg bg-orange-500">
                <img
                  alt="..."
                  src={v1}
                  className="w-full align-middle rounded-t-lg"
                />
                <blockquote className="relative p-8 mb-4">
                  <svg
                    preserveAspectRatio="none"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 583 95"
                    className="absolute left-0 w-full block h-95-px -top-94-px"
                  >
                    <polygon
                      points="-30,95 583,95 583,65"
                      className="text-orange-500 fill-current"
                    ></polygon>
                  </svg>
                  <h4 className="text-xl font-bold text-white">
                    DivyaDarshan
                  </h4>
                  <p className="text-md font-light mt-2 text-white">
                  Mandir Darshan is a web platform offering slot booking, queue tracking, virtual darshan, and essential services to enhance the temple visit experience, ensuring convenience and a seamless spiritual journey.
                  </p>
                </blockquote>
              </div>
            </div>

            <div className="w-full md:w-6/12 px-4">
              <div className="flex flex-wrap">
                <div className="w-full md:w-6/12 px-4">
                  <div className="relative flex flex-col mt-4">
                    <div className="px-4 py-5 flex-auto">
                      <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white">
                      <i class="fas fa-calendar-check"></i>
                      </div>
                      <h6 className="text-xl mb-1 font-semibold">
                        Slot Booking
                      </h6>
                      <p className="mb-4 text-blueGray-500">
                      Book your preferred time slot easily with our seamless scheduling system. Select, enter details, and confirm in just a few clicks!
                      </p>
                    </div>
                  </div>
                  <div className="relative flex flex-col min-w-0">
                    <div className="px-4 py-5 flex-auto">
                      <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white">
                      <i class="fas fa-users"></i>
                      </div>
                      <h6 className="text-xl mb-1 font-semibold">
                        Queue tracking
                      </h6>
                      <p className="mb-4 text-blueGray-500">
                      Track real-time queue status and wait times for a hassle-free darshan experience.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="w-full md:w-6/12 px-4">
                  <div className="relative flex flex-col min-w-0 mt-4">
                    <div className="px-4 py-5 flex-auto">
                      <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white">
                      <i class="fas fa-eye"></i>
                      {/* <i class="fas fa-eye"></i> */}
                      </div>
                      <h6 className="text-xl mb-1 font-semibold">Virtual Darshan</h6>
                      <p className="mb-4 text-blueGray-500">
                      Virtual Darshan lets devotees experience live temple rituals and aartis from anywhere, ensuring spiritual connection and convenience. 
                      </p>
                    </div>
                  </div>
                  <div className="relative flex flex-col min-w-0">
                    <div className="px-4 py-5 flex-auto">
                      <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white">
                      <i class="fas fa-handshake"></i>
                      </div>
                      <h6 className="text-xl mb-1 font-semibold">
                        Services
                      </h6>
                      <p className="mb-4 text-blueGray-500">
                      Explore our services for a seamless and fulfilling darshan experience.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container mx-auto overflow-hidden pb-20"id="darshantypes">
          <div className="flex flex-wrap items-center">
            <div className="w-full md:w-4/12 px-12 md:px-4 ml-auto mr-auto mt-48 ">
              <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-white"style={{marginTop:'-10px'}}>
              <i className="fas fa-praying-hands text-xl"></i>
              </div>
              <h3 className="text-3xl mb-2 font-semibold leading-normal">
                Darshan Types
              </h3>
              <p className="text-lg font-light leading-relaxed mt-4 mb-4 text-blueGray-600">
              Our Mandir Darshan platform offers a seamless experience for devotees with multiple darshan options, including Namdev Payari Darshan, Pundalik Darshan, and Mukh Darshan. Each darshan provides a unique spiritual connection, allowing devotees to experience the divine presence of Lord Vitthal in their preferred way.
              </p>
             
         
            </div>

            <div className="w-full md:w-5/12 px-4 mr-auto ml-auto mt-32">
              <div className="relative flex flex-col min-w-0 w-full mb-6 mt-48 md:mt-0">
              
                <img
                  alt="..."
                  src={c1}
                  className="w-full align-middle rounded absolute shadow-lg max-w-100-px z-3 left-145-px -top-29-px"
                />
                <img
                  alt="..."
                  src={c2}
                  className="w-full align-middle rounded-lg absolute shadow-lg -top-160-px left-260-px max-w-210-px"
                />
                <img
                  alt="..."
                  src={c3}
                  className="w-full align-middle rounded-lg absolute shadow-lg max-w-180-px -top-225-px left-40-px z-2"
                />
                <img
                  alt="..."
                  src={c4}
                  className="w-full align-middle rounded-lg absolute shadow-2xl max-w-200-px -left-50-px top-25-px"
                  style={{marginLeft:'70px'}}
                />
         
              </div>
            </div>
          </div>

          
        </div>

        <div className="container mx-auto px-4 pb-32 pt-48"id="history">
          <div className="items-center flex flex-wrap">
            <div className="w-full md:w-5/12 ml-auto px-12 md:px-4">
              <div className="md:pr-12">
                <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-white">
                  <i className="fas fa-file-alt text-xl"></i>
                </div>
                <h3 className="text-3xl font-semibold">
                  History
                </h3>
                <p className="mt-4 text-lg leading-relaxed text-blueGray-500">
                The temple was built by King Vishnuvardhana of Hoysala Empire between 1108 and 1152 CE upon being convinced by the historical figure Pundalik. Also, there is an inscription in the temple, of a Hoysala King Vira Someshwara dating back to 1237 CE, which grants the temple a village for its upkeep..
                </p>
                <ul className="list-none mt-6">
                  <li className="py-2">
                    <div className="flex items-center">
                      <div>
                      
                      </div>
                      <div>
                        <h4 className="text-blueGray-500">
                        Constructed In 1929 By Sri Bhakta Narasimham. 
                        </h4>
                      </div>
                    </div>
                  </li>
                  <li className="py-2">
                    <div className="flex items-center">
                    <div>
  <span className="w-3 h-3 flex items-center justify-center rounded-full bg-gray-500 text-white">
    <div className="w-1 h-1 rounded-full bg-white"></div>
  </span>
</div>

                      <div>
                        <h4 className="text-blueGray-500">
                        built in the 15th century by the Vijayanagara Empire. 
                        </h4>
                      </div>
                    </div>
                  </li>
                  <li className="py-2">
                    <div className="flex items-center space-x-3">
                      <div>
                        <span className="w-5 h-5 flex items-center justify-center rounded-full bg-black-500 text-white" >
                        <i className="w-2 h-2 rounded-full bg-white"></i> {/* Changed inner dot color for visibility */}
                        </span>
                      </div>
                     
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            <div className="w-full md:w-6/12 mr-auto px-4 pt-24 md:pt-0">
              <img
                alt="..."
                className="max-w-full rounded-lg shadow-xl"
                style={{
                  transform:
                    "scale(1) perspective(1040px) rotateY(-11deg) rotateX(2deg) rotate(2deg)",
                }}
                src={c7}
              />
            </div>
          </div>
        </div>

        <div className="justify-center text-center flex flex-wrap mt-24">
          <div className="w-full md:w-6/12 px-12 md:px-4">
            <h2 className="font-semibold text-4xl">Inside the Experience</h2>
            <p className="text-lg leading-relaxed mt-4 mb-4 text-blueGray-500">
            Discover how our dashboard brings simplicity and efficiency to your fingertips with a clean, intuitive interface.
            </p>
          </div>
        </div>
      </section>

      <section id="webpage"
      className="block relative z-1 bg-blueGray-600">
        <div className="container mx-auto">
          <div className="justify-center flex flex-wrap">
            <div className="w-full lg:w-12/12 px-4  -mt-24">
              <div className="flex flex-wrap">
                <div className="w-full lg:w-4/12 px-4">
                  <h5 className="text-xl font-semibold pb-4 text-center">
                    Login Page
                  </h5>
                  <Link to="/auth/login">
                    <div className="hover:-mt-4 relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg ease-linear transition-all duration-150">
                      <img
                        alt="..."
                        className="align-middle border-none max-w-full h-auto rounded-lg"
                        src={c8}
                      />
                    </div>
                  </Link>
                </div>

                <div className="w-full lg:w-4/12 px-4">
                  <h5 className="text-xl font-semibold pb-4 text-center">
                    Profile Page
                  </h5>
                  <Link to="/profile">
                    <div className="hover:-mt-4 relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg ease-linear transition-all duration-150">
                      <img
                        alt="..."
                        className="align-middle border-none max-w-full h-auto rounded-lg"
                        src={c9}
                      />
                    </div>
                  </Link>
                </div>

                <div className="w-full lg:w-4/12 px-4">
                  <h5 className="text-xl font-semibold pb-4 text-center">
                    Landing Page
                  </h5>
                  <Link to="/landing">
                    <div className="hover:-mt-4 relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg ease-linear transition-all duration-150">
                      <img
                        alt="..."
                        className="align-middle border-none max-w-full h-auto rounded-lg"
                        src={c10}
                      />
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-blueGray-600 overflow-hidden">
        <div className="container mx-auto pb-64">
          <div className=" flex-wrap justify-center">
            <div className=""style={{marginBottom:'-200px'}}>
           
             
            
          
          
            </div>

         
          </div>
        </div>
      </section>

      <section className="pb-16 bg-blueGray-200 relative pt-32">
        <div
          className="-mt-20 top-0 bottom-auto left-0 right-0 w-full absolute h-20"
          style={{ transform: "translateZ(0)" }}
        >
          <svg
            className="absolute bottom-0 overflow-hidden"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            version="1.1"
            viewBox="0 0 2560 100"
            x="0"
            y="0"
          >
            <polygon
              className="text-blueGray-200 fill-current"
              points="2560 0 2560 100 0 100"
            ></polygon>
          </svg>
        </div>

        <div className="container mx-auto">
          <div className="flex flex-wrap justify-center bg-white shadow-xl rounded-lg -mt-64 py-16 px-12 relative z-10">
            <div className="w-full text-center lg:w-8/12">
              <p className="text-4xl text-center">
                <span role="img" aria-label="love">
                  
                </span>
              </p>
              <h3 className="font-semibold text-3xl">
               Book your slots now !!!
              </h3>
              <p className="text-blueGray-500 text-lg leading-relaxed mt-4 mb-4">
              Book your slot by selecting an available time, confirming your details, and receiving a confirmation. 








              </p>
              <div className="sm:block flex flex-col mt-10">
                <a
                  href="https://www.creative-tim.com/learning-lab/tailwind/react/overview/notus?ref=nr-index"
                  target="_blank"
                  className="get-started text-white font-bold px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-2 bg-orange-500 active:bg-lightBlue-600 uppercase text-sm shadow hover:shadow-lg ease-linear transition-all duration-150"
                >
                  Get started
                </a>
              
              </div>
              <div className="text-center mt-16"></div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}