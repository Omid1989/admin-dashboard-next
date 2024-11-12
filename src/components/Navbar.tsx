"use client";
import { useEffect, useState } from "react";
import { LuExpand } from "react-icons/lu";
import { LuLayoutGrid } from "react-icons/lu";
import { LuBell } from "react-icons/lu";
import { LuSearch } from "react-icons/lu";
import { LuCommand } from "react-icons/lu";
import { TiThMenuOutline } from "react-icons/ti";
import { MdOutlineKeyboardDoubleArrowLeft } from "react-icons/md";
function Navbar() {
  const [isScrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handlescroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handlescroll);
    return () => window.removeEventListener("scroll", handlescroll);
  }, []);
  return (
    <div className="inset-x-0 absolute flex rounded-xl h-[69px] mt-4 justify-between items-center">
      <div className="p-4 hidden xl:block">
        <ol className="flex text-white/80 gap-2">
          <li>
            <a href="" className="font-semibold text-text-sm">
              منوی اصلی
            </a>
          </li>
          <li className="flex justify-center items-center gap-2 ">
            <MdOutlineKeyboardDoubleArrowLeft fontSize={18} />
            <a href="" className="font-semibold text-text-sm">
              داشبورد
            </a>
          </li>
        </ol>
      </div>
      <div className="p-4  hidden xl:block">
        <div className="flex justify-between w-[350px] cursor-pointer items-center rounded-[0.5rem] border border-transparent bg-white/[0.12] px-3.5 py-2 text-white/60 transition-colors duration-300 hover:bg-white/[0.15] hover:duration-100">
          <div className="flex justify-center items-center gap-2 ">
            <LuSearch fontSize="20px" />
            <span className="font-bold">جستجوی سریع...</span>
          </div>
          <div className="flex justify-center items-center">
            <LuCommand fontSize={12} />
            <span className=" text-lg">k</span>
          </div>
        </div>
      </div>
      <div className="p-0  xl:hidden ">
        <div className="flex gap-2 ">
          <div className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-400 cursor-pointer">
            <TiThMenuOutline fontSize="20px" color="white" />
          </div>
          <div className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-400 cursor-pointer">
            <LuSearch fontSize="20px" color="white" />
          </div>
        </div>
      </div>
      <div className="p-0  w-[280px] flex justify-end gap-2">
        <div className="flex gap-2 ">
          <div className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-400 cursor-pointer">
            <LuLayoutGrid fontSize="20px" color="white" />
          </div>
          <div className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-400 cursor-pointer">
            <LuExpand fontSize="20px" color="white" />
          </div>
          <div className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-400 cursor-pointer">
            <LuBell fontSize="20px" color="white" />
          </div>
        </div>
        <div className="flex">
          <div className="w-8 bg-white   border-[2px] h-8 flex items-center justify-center rounded-full hover:bg-gray-400 cursor-pointer mr-5"></div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
