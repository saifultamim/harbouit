"use client";

import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";

import { useRouter, usePathname } from "next/navigation";
import Image from "next/image";
import logo from "@/public/images/logo/logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);
  const buttonRef = useRef(null);
  const router = useRouter();
  const pathname = usePathname();

  const handleNavigate = () => {
    router.push("/");
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  const navLinks = [
    { label: "ABOUT", href: "/about" },
    { label: "COURSES", href: "/course" },
    { label: "EVENT", href: "/events" },
    { label: "CAREER", href: "/career" },
    { label: "CONTACT", href: "/contact" },
  ];

  return (
    <div className="fixed top-0 left-0 w-full z-50  md:mt-5 lg:mt-12">
      <div className="md:max-w-6xl px-2 mx-auto">
        <nav className="md:py-4 py-[0.3rem] px-3 sm:px-6 flex items-center justify-between bg-white shadow-md rounded-lg">
          <div className="flex items-center  w-32 sm:w-56">
            <Link href="/">
              <Image src={logo} alt="Logo" className="" />
            </Link>
          </div>

          <div className="flex gap-5">
            {/* Desktop Menu */}
            <div className="hidden lg:flex space-x-16 items-center text-xs lg:text-[15px] font-base font-montserrat_sans_serif">
              {navLinks.map(({ label, href }) => (
                <Link
                  key={label}
                  href={href}
                  className={`hover:text-[#046938]  hover:text-primary`}
                >
                  {label}
                </Link>
              ))}
            </div>

            {/* Desktop Auth Link */}
            <div className="hidden lg:flex space-x-6 text-sm">
              <Link
                href="/login"
                onClick={handleLinkClick}
                className="text-xs font-semibold font-montserrat_sans_serif text-white px-14 py-3 rounded-lg bg-[#0F75BC]"
              >
                LOG IN
              </Link>
            </div>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            ref={buttonRef}
            className="lg:hidden text-2xl"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? "✖" : "☰"}
          </button>
        </nav>

        {/* Mobile Menu */}
        <div className="relative">
          {isOpen && (
            <div
              ref={menuRef}
              id="mobileMenu"
              className="lg:hidden absolute top-2 md:top-2 left-0 w-full bg-white shadow-md rounded-lg px-4 py-4 text-sm space-y-3"
            >
              {navLinks.map(({ label, href }) => (
                <Link
                  key={label}
                  href={href}
                  onClick={handleLinkClick}
                  className={`hover:text-[#046938] block font-normal hover:text-primary ${
                    pathname === href ? "text-[#00A659]" : "text-black"
                  }`}
                >
                  {label}
                </Link>
              ))}

              <div className="pt-3 border-t border-gray-200 space-y-2">
                <Link
                  href="/login"
                  onClick={handleLinkClick}
                  className="text-xs font-semibold font-montserrat_sans_serif text-white px-14 py-3 rounded-lg bg-[#0F75BC]"
                >
                  LOG IN
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
