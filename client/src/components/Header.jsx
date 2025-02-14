import React from "react";
import { Avatar, Button, Dropdown, DropdownDivider, Navbar, TextInput } from "flowbite-react";
import { Link, useLocation } from "react-router-dom";
import { IoIosSearch } from "react-icons/io";
import { IoMoon,IoSunny } from "react-icons/io5";
import {useSelector,useDispatch} from "react-redux"
import { toggleTheme } from "../redux/theme/themeSlice";

export default function Header() {
  const path = useLocation().pathname;
  const {currentUser} = useSelector((state) => state.user);
  const {theme} = useSelector((state) => state.theme);
  const dispatch = useDispatch();
  return (
    // <Navbar className="border-b-2">
    //   <Link
    //     to="/"
    //     className="self-center whitespace-nowrap text-sm sm:text-base font-semibold dark:text-white"
    //   >
    //     <span className="px-2 py-1 rounded-lg bg-gradient-to-r from-[#EF233D] to-[#F48F2A] text-white">
    //       Pratyaksh's
    //     </span>
    //     Blog
    //   </Link>
    //   <form>
    //     <TextInput
    //       placeholder="Search..."
    //       type="text"
    //       rightIcon={IoIosSearch}
    //       className="hidden lg:inline focus:border-none"
    //       color={"gray"}
    //     />
    //   </form>
    //   <Button
    //     className="w-12 h-10 lg:hidden hover:text-black"
    //     color={"gray"}
    //     pill
    //   >
    //     <IoIosSearch />
    //   </Button>
    //   <div className="flex gap-2 md:order-2">
    //     <Button className="w-12 h-10 sm:inline hidden" color={"gray"} pill>
    //       <FaMoon />
    //     </Button>
    //     <Link to="/signin">
    //       <Button gradientDuoTone="pinkToOrange" outline>
    //         Sign In
    //       </Button>
    //     </Link>
    //     <Navbar.Toggle />
    //   </div>
    //   <Navbar.Collapse>
    //     <Navbar.Link active={path === "/"} as={"div"}>
    //       <Link to="/">Home</Link>
    //     </Navbar.Link>
    //     <Navbar.Link active={path === "/about"} as={"div"}>
    //       <Link to="/about">About</Link>
    //     </Navbar.Link>
    //     <Navbar.Link active={path === "/projects"} as={"div"}>
    //       <Link to="/projects">Projects</Link>
    //     </Navbar.Link>
    //   </Navbar.Collapse>
    // </Navbar>
    <div className="h-16 w-full border-b border-solid border-gray-200 p-6 flex justify-between items-center">
      <Link
        to="/"
        className="items-center whitespace-nowrap text-base sm:text-lg font-semibold text-gray-700 hover:text-black dark:text-white flex gap-1"
      >
        <span className="px-3 py-1 rounded-lg bg-gradient-to-r from-[#EF233D] to-[#F48F2A] text-white">
          Pratyaksh's
        </span>
        Blog
      </Link>
      <div className="flex justify-center items-center w-[20%] h-10 border border-solid border-gray-300 rounded-full px-2 bg-gray-100 dark:bg-inherit">
        <input
          type="text"
          placeholder="Search..."
          className="w-[90%] h-full outline-none rounded-l-full px-4 border-none bg-gray-100 focus:outline-none dark:bg-inherit"
        />
        <div className="text-gray-700 bg-gray-100 outline-none rounded-r-full w-[10%] h-full flex justify-center cursor-pointer dark:bg-inherit">
          <IoIosSearch size={20} className="self-center dark:text-white" />
        </div>
      </div>
      <div className="flex gap-10">
        <Link
          to="/"
          className="text-sm font-semibold cursor-pointer text-gray-700 hover:text-black dark:text-white"
        >
          Home
        </Link>
        <Link
          to="/about"
          className="text-sm font-semibold cursor-pointer text-gray-700 hover:text-black dark:text-white"
        >
          About
        </Link>
        <Link
          to="/projects"
          className="text-sm font-semibold cursor-pointer text-gray-700 hover:text-black dark:text-white"
        >
          Projects
        </Link>
      </div>
      <div className="flex gap-4 items-center">
        <div onClick={()=>dispatch(toggleTheme())} className="rounded-full border border-solid border-gray-300 px-4 py-3 cursor-pointer text-gray-700 hover:text-black dark:text-white">
          {theme === "dark" ? <IoSunny /> : <IoMoon />}
        </div>
        <div className="flex justify-center items-center">
          {currentUser ? (
            <Dropdown arrowIcon={false} inline label={<Avatar alt="user" img={currentUser?.profilePicture} rounded/>}>
              <Dropdown.Header>
                <span className="block text-sm font-bold mb-1">Username: <span className="font-medium">@{currentUser?.username}</span></span>
                <span className="block text-sm font-bold truncate">Email: <span className="font-medium">{currentUser?.email}</span></span>
              </Dropdown.Header>
              <Link to={'/dashboard?tab=profile'}>
                <Dropdown.Item className="font-semibold">Profile</Dropdown.Item>
              </Link>
              <Dropdown.Divider/>
              <Dropdown.Item className="font-semibold">Sign Out</Dropdown.Item>
            </Dropdown>
          ):(
            <Link
            to="/signin"
            className="font-semibold cursor-pointer px-4 py-2 bg-gradient-to-r from-[#EF233D] to-[#F48F2A] text-white rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:bg-gradient-to-l"
          >
            Sign In
          </Link>
          )}
          
        </div>
      </div>
    </div>
  );
}
