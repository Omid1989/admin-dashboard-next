import Announcements from "Omid1989/components/Announcements";
import AttendanceChart from "Omid1989/components/AttendanceChart";
import CountChart from "Omid1989/components/CountChart";
import EventCalendar from "Omid1989/components/EventCalendar";
import FinanceChart from "Omid1989/components/FinanceChart";
import UserCard from "Omid1989/components/UserCard";

const Home = () => {
  return (
    <div className=" flex gap-x-4 gap-y-16 flex-col md:flex-row ">
      <div className="w-full  flex flex-col gap-10 ">
        <div className="w-full ">
          <FinanceChart />
        </div>

        <div className="flex gap-x-8 gap-y-16 flex-col lg:flex-row ">
          <div className="w-full lg:w-1/3 h-[350px] ">
            <CountChart />
          </div>
          <div className="w-full lg:w-2/3 h-[350px]">
            <AttendanceChart />
          </div>
        </div>
        {/* <div className=" flex   flex-wrap">
          <UserCard type="student" caption="دانش آموز" color="bg-lamaYellow" />
          <UserCard type="teacher" caption="استاد" color="bg-lamaPruple" />
          <UserCard type="parent" caption="والدین" color="bg-lamaYellow" />
          <UserCard type="staff" caption="کارمند" color="bg-lamaPruple" />
        </div> */}
      </div>
      <div className="w-full md:w-[39%] lg:w-[30%] flex flex-col gap-8">
        <EventCalendar />
        <Announcements />
      </div>
    </div>
  );
};
export default Home;
