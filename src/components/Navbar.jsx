import React from "react";

const Navbar = ()=>{
  return(
    <nav className="fixed top-0 w-full bg-opacity-50 bg-white backdrop-filter backdrop-blur-lg py-4 shadow-lg">
      <div className="container mx-auto px-4">
      <div className="flex justify-between items-center">
        <h1 className="text-x1 font-bold text-amber-600"> chatly</h1>
      </div>
      </div>
    </nav>
  )
}

export default Navbar