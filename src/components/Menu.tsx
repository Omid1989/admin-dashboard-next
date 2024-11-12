import { LuLayoutDashboard } from "react-icons/lu";
import { LuFish } from "react-icons/lu";
import { GiCaptainHatProfile } from "react-icons/gi";
import { CgProfile } from "react-icons/cg";
import { IoSettingsOutline } from "react-icons/io5";
import { GiExitDoor } from "react-icons/gi";
const menuItems = [
  {
    title: "منوی اصلی",
    items: [
      {
        icon: <LuLayoutDashboard fontSize={20} />,
        label: "داشبورد",
        href: "/",
        visible: ["admin", "teacher", "student", "parent"],
        active: true,
      },
      {
        icon: <LuFish fontSize={20} />,
        label: "اساتید",
        href: "/list/teachers",
        visible: ["admin", "teacher"],
        active: false,
      },
      {
        icon: <GiCaptainHatProfile fontSize={20} />,
        label: "دانش آموزها",
        href: "/list/students",
        visible: ["admin", "teacher"],
        active: false,
      },
    ],
  },
  {
    title: "دیگر",
    items: [
      {
        icon: <CgProfile fontSize={20} />,
        label: "پروفایل",
        href: "/profile",
        visible: ["admin", "teacher", "student", "parent"],
        active: false,
      },
      {
        icon: <IoSettingsOutline fontSize={20} />,
        label: "تنظیمات",
        href: "/settings",
        visible: ["admin", "teacher", "student", "parent"],
        active: false,
      },
      {
        icon: <GiExitDoor fontSize={20} />,
        label: "خروج",
        href: "/logout",
        visible: ["admin", "teacher", "student", "parent"],
        active: false,
      },
    ],
  },
];

import { role } from "Omid1989/lib/data";

import Link from "next/link";
const Menu = () => {
  return (
    <div className=" text-sm p-4  group  ">
      {menuItems.map((i) => (
        <div className="flex flex-col gap-2 py-2" key={i.title}>
          <span className="hidden lg:block font-bold text-gray-500 ">
            {i.title}
          </span>
          {i.items.map((item) => {
            if (item.visible.includes(role)) {
              return (
                <Link
                  key={item.label}
                  href={item.href}
                  className={`flex w-full  items-center justify-start overflow-hidden 
                    gap-2 font-bold text-gray-500  rounded-md hover:bg-lamaSkyLight  p-6 border 
                    ${item.active ? "shadow-md bg-lamaYellow" : ""} `}
                >
                  <div className=" ">{item.icon}</div>
                  <span className=" w-full  hidden group-hover:flex flex-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300  ease-in-out ">
                    {item.label}
                  </span>
                </Link>
              );
            }
          })}
        </div>
      ))}
    </div>
  );
};

export default Menu;
