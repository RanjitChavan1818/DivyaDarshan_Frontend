import React from "react";

// components


import Sidebar from "components/Sidebar/Sidebar";
import AdminNavbar from "components/Navbars/AdminNavbar.js";
import HeaderStats from "components/Headers/HeaderStats";
import FooterAdmin from "components/Footers/FooterAdmin";
import Queue from "components/Cards/Queue";



export default function Dashboard() {
  return (
    <>
    <Sidebar/>
    <div className="relative md:ml-64 bg-white ">
  <HeaderStats/>
    
      <div className="flex flex-wrap">
      <AdminNavbar/>
        
    
      </div>
      <div className="flex flex-wrap mt-4">
      
       
      {/* Service1 */}
     
     <Queue/>
      </div>
      <FooterAdmin/>
      </div>
    </>
  );
}