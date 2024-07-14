import React from "react";
import { Button, Navbar, TextInput } from "flowbite-react";
import { Link, useLocation } from "react-router-dom";
import { IoIosSearch } from "react-icons/io";
import { FaMoon } from "react-icons/fa";

export default function Header() {
  const path = useLocation().pathname;
  return (
    <Navbar className="border-b-2">
      <Link
        to="/"
        className="self-center whitespace-nowrap text-sm sm:text-base font-semibold dark:text-white"
      >
        <span className="px-2 py-1 rounded-lg bg-gradient-to-r from-[#EF233D] to-[#F48F2A] text-white">
          Pratyaksh's
        </span>
        Blog
      </Link>
      <form>
        <TextInput
          placeholder="Search..."
          type="text"
          rightIcon={IoIosSearch}
          className="hidden lg:inline focus:border-none"
          color={"gray"}
        />
      </form>
      <Button
        className="w-12 h-10 lg:hidden hover:text-black"
        color={"gray"}
        pill
      >
        <IoIosSearch />
      </Button>
      <div className="flex gap-2 md:order-2">
        <Button className="w-12 h-10 sm:inline hidden" color={"gray"} pill>
          <FaMoon />
        </Button>
        <Link to="/signin">
          <Button gradientDuoTone="pinkToOrange" outline>
            Sign In
          </Button>
        </Link>
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <Navbar.Link active={path === "/"} as={"div"}>
          <Link to="/">Home</Link>
        </Navbar.Link>
        <Navbar.Link active={path === "/about"} as={"div"}>
          <Link to="/about">About</Link>
        </Navbar.Link>
        <Navbar.Link active={path === "/projects"} as={"div"}>
          <Link to="/projects">Projects</Link>
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
}
