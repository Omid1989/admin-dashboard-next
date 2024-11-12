"use client";
import {
  RadialBarChart,
  RadialBar,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { convertToPersianNumber } from "Omid1989/lib/numberHelpers";

const data = [
  {
    name: "Total",
    count: 100,
    fill: "white",
  },
  {
    name: "Girls",
    count: 50,
    fill: "#FAE27C",
  },
  {
    name: "Boys",
    count: 50,
    fill: "#83a6ed",
  },
];

const style = {
  top: "50%",
  right: 0,
  transform: "translate(0, -50%)",
  lineHeight: "24px",
};
import Image from "next/image";

const CountChart = () => {
  return (
    <div className=" w-full h-full  ">
      <div className="pb-4 flex justify-between">
        <h1 className="font-bold text-gray-500">دانش آموز</h1>
      </div>
      <div
        className="w-full h-full   relative rounded-md bg-white shadow 
     flex items-center justify-center
     after:content-[''] after:w-[95%] after:h-11 after:rounded-md after:-z-10   after:bg-white after:absolute
     after:-bottom-3 after:shadow p-2"
      >
        <div className=" bg-white  w-full h-full p-4   relative   ">
          <div className="w-full h-[75%] relative">
            <ResponsiveContainer>
              <RadialBarChart
                cx="50%"
                cy="50%"
                innerRadius="40%"
                outerRadius="100%"
                barSize={32}
                data={data}
              >
                <RadialBar
                  label={{ position: "insideStart", fill: "#fff" }}
                  background
                  dataKey="count"
                />
              </RadialBarChart>
            </ResponsiveContainer>
            <Image
              src="/maleFemale.png"
              alt=""
              width={50}
              height={50}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
            />
          </div>
          <div className=" flex gap-16 justify-center">
            <div className="flex flex-col gap-1">
              <div className="w-5 h-5 bg-lamaSky rounded-full" />
              <div className="font-bold">{convertToPersianNumber(1234)}</div>
              <div className="text-xs text-gray-300">
                پسر ({convertToPersianNumber(55)}%)
              </div>
            </div>

            <div className="flex flex-col gap-1">
              <div className="w-5 h-5 bg-lamaYellow rounded-full" />
              <div className="font-bold">{convertToPersianNumber(1234)}</div>
              <div className="text-xs text-gray-300">
                دختر ({convertToPersianNumber(55)}%)
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CountChart;
