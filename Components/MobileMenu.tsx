"use client"
import { Menu, Phone, X } from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";
import NavLink from "./NavLink";
import { navLinks } from "@/constants";

const MobileMenu = () => {

    const [isOpen, setIsOpen] = useState(true)

    const toggleMenu = () => {
        setIsOpen(!isOpen)
    }


  return (
    <div className="tablet:hidden">
      {/* toggle button */}
      <button className="text-gray-700 hover:text-purple transition-colors"
      onClick={toggleMenu}
      >
        <Menu />
      </button>

      {/* sidebar */}

      <div className={`w-full h-full flex flex-col bg-peach-600 fixed top-0 left-0 z-50 transition-all duration-300 ease-in-out transform ${isOpen ? "translate-x-0":"translate-x-full"}`}>
        <div className="flex w-full items-center justify-between h-20 max-width border-b border-peach">
          <Link href={"/"}>
            <h5 className="text-purple text-xl font-semibold">
              Chritian Ampeh.
            </h5>
          </Link>

          <button className="text-gray-700 hover:text-purple transition-colors"
          onClick={toggleMenu}
          >
            <X />
          </button>
        </div>


        <nav className='flex flex-col justify-center flex-1 items-center gap-10 '>
        <ul className='flex items-center gap-8'>
            
         { 
          navLinks.map((link,index) => 
(
    <li key={index}>
        <NavLink href={link.url} label={link.label}/>
    </li>
)
          )
         }
            
        </ul>
        <Link href={"/contact"} className='btn btn-primary rounded-sm '>
            <Phone size={22} />
            Contact me
        </Link>
      </nav>

      </div>
    </div>
  );
};

export default MobileMenu;
