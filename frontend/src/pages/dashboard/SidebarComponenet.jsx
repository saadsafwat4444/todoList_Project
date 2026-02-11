
import React, { useState } from "react";
import { FaHome, FaPlus, FaTasks, FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom"; 

export function SidebarComponenet(){
         const [isOpen, setIsOpen] = useState(false);

         const links=[
          {name:"Home",icon:<FaHome/>,path: "/dashboard"},
           {name:"Create Task",icon:<FaPlus/>,path: "create/task"},
            {name:"My Tasks",icon:<FaTasks/>,path: "mytasks"}
         ]
    return(
      <div>

           {/* Mobile Hamburger */}
      <div className="md:hidden flex justify-between items-center bg-slate-400 text-white p-4">
        <div className="text-xl font-bold">Dashboard</div>
        <button onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <FaTimes className="w-6 h-6" /> : <FaBars className="w-6 h-6" />}
        </button>
      </div>

      {/* Sidebar */}
     <div style={{height:'790px'}} className={`bg-slate-600   text-white w-64 space-y-7 py-12 px-4 absolute md:relative inset-y-0 left-0 transform 
    ${isOpen ? "translate-x-0" : "-translate-x-full"} transition-transform duration-300 ease-in-out md:translate-x-0`}>

  <h1 className="text-2xl font-bold px-4 mb-6 hidden md:block">Dashboard</h1>

  <nav className="flex flex-col space-y-4">
    {links.map((link) => (
      <Link
        key={link.name}
            to={link.path}
        className="flex items-center space-x-3  cursor-pointer px-4 py-3 hover:bg-blue-500 rounded transition-colors"
      >
        <span className="text-lg">{link.icon}</span>
        <span>{link.name}</span>
      </Link>
    ))}
  </nav>
</div>




      </div>
 
  );
}