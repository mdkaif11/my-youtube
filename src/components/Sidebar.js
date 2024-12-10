import React from "react";
import Home_logo from "../assets/img/Home_logo.png";
import Shorts_logo from "../assets/img/Shorts_logo.png";
import Subs_logo from "../assets/img/Subs_logo.png";
import user_logo from "../assets/img/user_logo.jpg";
import Gaming_icon from "../assets/img/Gaming-icon.png";
import Live_icon from "../assets/img/Live_icon.png";
import Playlist_icon from "../assets/img/Playlist_icon.jpg";
import Yourvideo_icon from "../assets/img/Yourvideo_icon.png";
import History_icon from "../assets/img/History_icon.png";
import { toggleSidebar } from "../utils/appSlice";
import { useSelector } from "react-redux";

const Sidebar = () => {
  const isSidebarOpen = useSelector((store) => store.app.isSidebarOpen);

  if (!isSidebarOpen) return null;

  return (
    <div className="shadow-lg h-full ml-3 w-56">
      <div className="flex mx-3">
        <img src={Home_logo} className="h-7 mb-4" />
        <h1 className="font-normal mt-1 ml-4">Home</h1>
      </div>
      <div className="flex mx-3">
        <img src={Shorts_logo} className="h-7 mb-4" />
        <h1 className="font-normal  ml-4">Shorts</h1>
      </div>
      <div className="flex mx-3 border-b-2">
        <img src={Subs_logo} className="h-7 mb-4" />
        <h1 className="font-normal  ml-4  ">Subscriptions</h1>
      </div>

      <div className="flex mx-3 mt-8">
        <img src={user_logo} className="h-7 mb-4" />
        <h1 className="font-normal ml-4 mt-1">User &gt;</h1>
      </div>

      <div className="ml-3 mt-2">
        <div className="flex mx-3 border-b-2">
          <img src={History_icon} className="h-5 mb-4" />
          <h1 className="font-normal  ml-6  ">History</h1>
        </div>
        <div className="flex mx-3 border-b-2">
          <img src={Playlist_icon} className="h-5 mb-4" />
          <h1 className="font-normal  ml-4  ">Playlists</h1>
        </div>
        <div className="flex mx-3 border-b-2">
          <img src={Yourvideo_icon} className="h-6 mb-4" />
          <h1 className="font-normal  ml-5  ">Your Video</h1>
        </div>
        <div className="flex mx-3 border-b-2">
          <img src={Live_icon} className="h-5 mb-4" />
          <h1 className="font-normal  ml-6  ">Live</h1>
        </div>
        <div className="flex mx-3 border-b-2">
          <img src={Gaming_icon} className="h-6 mb-4" />
          <h1 className="font-normal  ml-5  ">Gaming</h1>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
