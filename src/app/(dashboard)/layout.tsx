import Background from "Omid1989/components/Background";
import Menu from "Omid1989/components/Menu";
import Navbar from "Omid1989/components/Navbar";
import Image from "next/image";

const adminlayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div className="flex h-svh ">
      <Background />
      <div className=" group hidden z-50 xl:flex hover:w-[20%] w-[140px] transition-[opacity,width] ease-in-out duration-300  fixed top-0 bottom-0 right-0 ">
        <div className="w-[80%] bg-white border  m-4 shadow rounded-xl z-10 absolute top-0 bottom-0 left-1 overflow-y-scroll  no-scrollbar  ">
          <div className="p-4 flex justify-center items-center w-full h-[100px] group-hover:rotate-[360deg] transition-[transform] ease-in-out duration-300 ">
            <Image src="/logo.png" alt="log" width={100} height={100} />
          </div>
          <Menu />
        </div>
      </div>
      <div className="h-full flex absolute  xl:w-[88%] inset-x-0 mx-[30px] xl:mr-[140px]">
        <Navbar />
        <div className="w-full mt-[130px]">{children}</div>
      </div>
    </div>
  );
};
export default adminlayout;
