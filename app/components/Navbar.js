"use client";
import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import Link from "next/link";
import { Link as ScrollLink } from "react-scroll";
import { useRouter } from "next/navigation";
import { FaDownload } from "react-icons/fa6";
import Image from "next/image";

const Navbar = () => {
  const navLinks = [
    {
      name: "Home",
      link: "home",
    },
    {
      name: "About ",
      link: "services",
    },
    {
      name: "Services",
      link: "howits",
    },

    {
      name: "Contact us",
      link: "contact",
    },
  ];
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState);
  };

  const HandlingNavLink = (id) => {
    setIsOpen((prevState) => !prevState);

    const element = document.getElementById(id);

    if (!element) {
      router.push("/");
      setTimeout(() => {
        const cuselement = document.getElementById(id);

        var headerOffset = 100;
        var elementPosition = cuselement.getBoundingClientRect().top;
        var offsetPosition = elementPosition + window.scrollY - headerOffset;

        window.scrollTo({ top: offsetPosition, behavior: "smooth" });
      }, 1000);
    }
  };
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(true);
    setTimeout(() => {
      setClicked(false);
    }, 1000);
  };

  return (
    <header className="shadow-md w-full bg-[red] z-[9999] fixed top-0 left-0">
      <div className="lg:flex items-center justify-between py-6 px-3 container mx-auto">
        {/* logo section */}
        <div className=" text-white cursor-pointer flex items-center text-center gap-1">
          <Link href="/">
            <Image src={"/assest/navbar/logo.jpg"} width={100} height={100} alt="logo" className=""/>
          </Link>
        </div>
        {/* Menu icon */}
        <div
          onClick={toggleDrawer}
          className="absolute right-8 top-[2.5rem] cursor-pointer lg:hidden w-7 h-7"
        >
          {isOpen ? (
            <AiOutlineClose className="text-white" size={20} />
          ) : (
            <AiOutlineMenu className="text-white" size={20} />
          )}
        </div>
        {/* links items */}
        <ul
          className={`lg:flex lg:items-center gap-2 lg:pb-0 pb-12 absolute lg:static bg-[red]  lg:z-auto z-[-1] left-0 w-full lg:w-auto lg:pl-0 pl-9 transition-all duration-500 ease-in`}
          style={{
            top: isOpen ? "5rem" : "-450px",
          }}
        >
          {navLinks.map((link) => (
            <li
              key={link.name}
              className="lg:ml-8 lg:my-0 my-7 text-[18px] hover:text-[22px] hover:font-bold font-semibold cursor-pointer"
            >
              <ScrollLink
                to={link.link}
                smooth={true}
                duration={500}
                spy={true}
                offset={-100}
                onClick={() => {
                  HandlingNavLink(link.link);
                }}
                className="text-white font-bold duration-500"
              >
                {link.name}
              </ScrollLink>
            </li>
          ))}
        </ul>
        {/* <div>
          <button
            onClick={handleClick}
            className="bg-white px-5 py-2 rounded-lg flex gap-2 items-center font-semibold "
          >
            Download Now{" "}
            <span>
              <FaDownload
                className={`
          ${clicked ? "animate-download" : ""}`}
              />
            </span>
          </button>
        </div> */}
      </div>
    </header>
  );
};

export default Navbar;
