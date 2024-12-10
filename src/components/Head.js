import React from "react";
import hamburger from "../assets/img/Hamburger_icon.svg.png";
import youtubeLogo from "../assets/img/YouTube_Logo.jpg";
import searchLogo from "../assets/img/search_logo.png";
import UserLogo from "../assets/img/user_logo.jpg";
import NotificationLogo from "../assets/img/Notification_Bell_Icon.png";
import { useDispatch } from "react-redux";
import { toggleSidebar } from "../utils/appSlice";

const Head = () => {
  const dispatch = useDispatch();

  const handleToggle = () => {
    dispatch(toggleSidebar());
  };

  return (
    <div className="grid grid-flow-col">
      <div className="flex col-span-1">
        <img
          onClick={() => handleToggle()}
          className="h-8 mx-6 my-4 p-1"
          alt="ham"
          src={hamburger}
        />
        <img className="h-16 " alt="YouTube_Logo" src={youtubeLogo} />
      </div>
      <div className=" flex col-span-10 m-3 h-11   ">
        <input
          className="border border-gray-400 w-7/12 p-2 rounded-l-full "
          type="text"
          placeholder="Search Here..."
        />
        <button className="p-2 w-20 rounded-r-full border border-gray-400">
          <img className="h-5 mt-1 pl-5" alt="logo-Search" src={searchLogo} />
        </button>
      </div>
      <div className="flex col-span-1 ">
        <img className="h-7 mt-5 " alt="logo" src={NotificationLogo} />
        <img className="h-8 mt-5 pl-4 " alt="logo" src={UserLogo} />
      </div>
    </div>
  );
};

export default Head;
