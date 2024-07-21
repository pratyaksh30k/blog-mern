import React from "react";
import { useSelector } from "react-redux";
export default function DashProfile() {
  const { currentUser } = useSelector((state) => state.user);
  return (
    <div className="max-w-lg mx-auto p-3 w-full">
      <h1 className="text-3xl font-bold my-3 text-center">Profile</h1>
      <form className="flex flex-col">
        <div className="w-32 h-32 border-4 border-solid border-gray-300 rounded-full shadow-md self-center mb-4">
          <img
            src={currentUser?.profilePicture}
            alt="user"
            className="rounded-full w-full h-full"
          />
        </div>
        <label htmlFor="username" className="font-semibold mb-1">Username:</label>
        <input type="text" id="username" placeholder="Username" defaultValue={currentUser?.username} className="border border-gray-300 py-2 px-4 mb-2 rounded-md bg-gray-100 font-medium focus:outline-none"/>
        <label htmlFor="email" className="font-semibold mb-1">Email:</label>
        <input type="email" id="email" placeholder="Email" defaultValue={currentUser?.email} className="border border-gray-300 py-2 px-4 mb-2 rounded-md bg-gray-100 font-medium focus:outline-none"/>
        <label htmlFor="password" className="font-semibold mb-1">Password:</label>
        <input type="password" id="password" placeholder="Password" className="border border-gray-300 py-2 px-4 mb-4 rounded-md bg-gray-100 font-medium focus:outline-none"/>
        <button type="submit" className="bg-gradient-to-r from-[#EF233D] to-[#F48F2A] text-white transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:bg-gradient-to-l py-2 px-4 rounded-md font-semibold">Update</button>
      </form>
      <div className="text-red-700 font-semibold hover:text-red-500 flex justify-between mt-4">
        <span className="cursor-pointer">Delete Account</span>
        <span className="cursor-pointer">Sign Out</span>
      </div>
    </div>
  );
}
