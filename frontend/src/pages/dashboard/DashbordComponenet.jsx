import { Outlet } from "react-router-dom";
import { FooterComponenet } from "../shared_pages/FooterComponenet";
import { HeaderComponenet } from "../shared_pages/HeaderComponenet";
 
import { SidebarComponenet } from "./SidebarComponenet";
import { MainComponenet } from "./mainComponenet";
 
 


export function DashboardComponenet(){
    return (
    <div className="flex flex-col min-h-screen">
      {/* Header ثابت */}
       <HeaderComponenet/>

      {/* Body: Sidebar + Main */}
      <div className="flex flex-1">
        {/* Sidebar ثابت */}
        <SidebarComponenet className="w-64 bg-indigo-600 text-white" />

        {/* Main content */}
        <MainComponenet className="flex-1 p-6 bg-gray-50">
          <Outlet />
        </MainComponenet>
      </div>

      {/* Footer ثابت */}
      <FooterComponenet />
    </div>
  );
}