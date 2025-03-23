import React from "react";
import Link from "next/link";
import ChildProfile from "./profile";

const Header = () => {

  return (
    <header
      className={`fixed top-0 left-0 w-full h-16 bg-white shadow-md flex items-center px-4 transition-all duration-300 z-50 `}
    >
      <Link href="/">
      Logo
      </Link>

      <ul className="flex gap-3 items-center ml-auto mr-4" >
        <li><Link href={"/"} >Home</Link></li>
        <li><Link href={"/about-us"} >About Us</Link></li>
        <li><Link href={"/contact-us"} >Contact Us</Link></li>
        <li><Link href={"/appointments"} >Appointments</Link></li>
        <li><Link href={"/article"} >Article</Link></li>
        <li><Link href={"/blogs"} >Blogs</Link></li>
      </ul>

      <div className="flex items-center gap-4">    
        <ChildProfile/>  
      </div>

    </header>
  );
};

export default Header;