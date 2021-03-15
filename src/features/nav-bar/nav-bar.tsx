import React from "react";

const NavBar = () => {
  return (
    <div
      className={
        "bg-gradient-to-b from-gray-800  to-gray-900 text-white postion:absolute top-0 left-0 right-0 h-12 grid grid-cols-12 sm:h-16" 
      }
    >
      <span className={'col-span-2'}/>
      <span className={"pt-1 font-semibold text-center col-span-8 text-3xl"}>Beat Chart</span>
    </div>
  );
};

export default NavBar;
