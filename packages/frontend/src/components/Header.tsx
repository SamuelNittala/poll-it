import React from "react";
import { useNavigate } from "react-router-dom";

export const Header = () => {
  const naviagate = useNavigate();
  return (
    <div className="p-5 flex mt-3 bg-green-100">
      <div
        className="text-purple-500 flex-auto font-extrabold text-3xl cursor-pointer"
        onClick={() => naviagate("/")}
      >
        Poll It
      </div>
      <div
        onClick={() => naviagate("/create")}
        className="mr-5 text-black text-2xl cursor-pointer hover:text-red-500" 
      >
        Create Poll
      </div>
    </div>
  );
};
