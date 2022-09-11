import React from "react";
import { Link } from "react-router-dom";
const SideMenu = () => {
  return (
    <div className="w-full h-screen flex flex-col px-2 py-3 bg-jm-blue">
      <Link
        className="w-full bg-jm-yellow rounded-md text-center my-2 hover:text-white"
        to="/"
      >
        Home
      </Link>
      <Link
        className="bg-jm-yellow rounded-md text-center my-2 hover:text-white"
        to="/masterruas"
      >
        Master Ruas
      </Link>
    </div>
  );
};

export default SideMenu;
