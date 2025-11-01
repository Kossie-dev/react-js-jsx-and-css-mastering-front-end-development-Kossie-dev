import React from "react";
import ThemeToggle from "./ToggleButton";
import {Link} from "react-router-dom";


function Navbar(){
    return (
        <header className="bg-[var(--card)] text-[var(--card-foreground)] shadow border-b border-[var(--border)]">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-4">
            <h1 className="text-3xl font-bold">PLP Task Manager </h1>
            <ThemeToggle />
          </div>
          
          {/* Navigation links section */}
        <nav className="flex gap-4 mt-2">
          <ul>
            <Link to="/" className="text-blue-600 hover:underline">
                <h3>Home</h3>
            </Link>
            <Link to="/about" className="text-blue-600 hover:underline">
                <h3>About</h3>
            </Link>                  
            <Link to="/dashboard" className="text-blue-600 hover:underline">
                <h3>Dashboard</h3>
            </Link>
            <Link to="/api" className="text-blue-600 hover:underline">
                <h3>API Data</h3>
            </Link>
          </ul>
          
        </nav>

        
        </div>
      </header>
    )
}

export default Navbar;