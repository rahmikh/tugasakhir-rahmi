import React from 'react'
import { NavLink } from "react-router-dom";
import App from "../App";


const SideBar = () => {
  return (
    <aside className="w-full h-full shadow-md col-start-1 col-end-2 bg-white rounded-4xl p-3">
      <div className="p-6 border-b ">
        <h2 className="text-xl font-bold text-red-300">MyDashboard</h2>
      </div>

      <nav className="flex-1 p-4 space-y-2">
        <NavLink to="/" className={({ isActive }) => `flex items-center px-4 py-2 text-red-300 hover:bg-red-300 hover:text-white rounded-lg ${ isActive ? "bg-red-300 text-white" : ""}`}>
          Dokumen
        </NavLink>
        <NavLink to="/mahar" className={({ isActive }) => `flex items-center px-4 py-2 text-red-300 hover:bg-red-300 hover:text-white rounded-lg ${ isActive ? "bg-red-300 text-white" : ""}`}>
          Mahar & Seserahan
        </NavLink>
        <NavLink to="/acara" className={({ isActive }) => `flex items-center px-4 py-2 text-red-300 hover:bg-red-300 hover:text-white rounded-lg ${ isActive ? "bg-red-300 text-white" : ""}`}>
          Persiapan Acara
        </NavLink>
        <NavLink to="/konsumsi" className={({ isActive }) => `flex items-center px-4 py-2 text-red-300 hover:bg-red-300 hover:text-white rounded-lg ${ isActive ? "bg-red-300 text-white" : ""}`}>
          Konsumsi
        </NavLink>
        <NavLink to="/lainnya" className={({ isActive }) => `flex items-center px-4 py-2 text-red-300 hover:bg-red-300 hover:text-white rounded-lg ${ isActive ? "bg-red-300 text-white" : ""}`}>
          Lainnya
        </NavLink>
      </nav>

      
    </aside>
  )
}

export default SideBar