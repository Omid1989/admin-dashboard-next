"use client";
import { useEffect, useState } from "react";

const Background = () => {
  const [isScrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handlescroll = () => {
      if (window.scrollY > 1) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handlescroll);
    return () => window.removeEventListener("scroll", handlescroll);
  }, []);

  useEffect(() => {
    console.log("test");
  }, [isScrolled]);
  return (
    <div
      className={` ${
        isScrolled ? "background--effect" : "before:opacity-1"
      }   fixed before:absolute w-screen before:content-[''] before:h-[370px] 
            before:w-screen before:top-0 
            before:bg-gradient-to-t   
            before:transition-[opacity,height] 
            before:ease-in-out before:duration-300
            before:from-theme-1/80 before:to-theme-2                      
            after:content-[''] 
            after:h-[370px] after:w-screen 
            after:transition-[opacity,height] 
            after:ease-in-out after:duration-300 after:top-0
            after:fixed after:bg-texture-white after:bg-contain 
            after:bg-fixed after:bg-[center_-13rem] after:bg-no-repeat -z-10 `}
    ></div>
  );
};
export default Background;
