"use client";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "دوشنبه",
    present: 60,
    absent: 40,
  },
  {
    name: "سه شنبه",
    present: 70,
    absent: 60,
  },
  {
    name: "چهارشنبه",
    present: 90,
    absent: 75,
  },
  {
    name: "پنج شنبه",
    present: 90,
    absent: 75,
  },
  {
    name: "جمعه",
    present: 65,
    absent: 55,
  },
];

const AttendanceChart = () => {
  return (
    <div className=" w-full  h-full   ">
      <div className="pb-4 flex justify-between">
        <h1 className="font-bold text-gray-500">حضور و غیاب</h1>
      </div>
      <div
        className="w-full h-full   relative rounded-md bg-white shadow 
       flex items-center justify-center
       after:content-[''] after:w-[95%] after:h-11 after:rounded-md after:-z-10   after:bg-white after:absolute
       after:-bottom-3 after:shadow p-2"
      >
        <ResponsiveContainer width="100%" height="90%">
          <BarChart width={500} height={300} data={data} barSize={20}>
            <CartesianGrid
              strokeDasharray="3 3"
              vertical={false}
              stroke="ddd"
            />
            <XAxis
              dataKey="name"
              axisLine={false}
              tick={{ fill: "#d1d5db" }}
              tickLine={false}
            />
            <YAxis
              axisLine={false}
              tickMargin={20}
              tick={{ fill: "#d1d5db" }}
              tickLine={false}
              tickFormatter={(value) =>
                new Intl.NumberFormat("fa-IR").format(value)
              }
            />
            <Tooltip
              contentStyle={{ borderRadius: "10px", borderColor: "lightgray" }}
              formatter={(value, name) => {
                const formattedValue = new Intl.NumberFormat("fa-IR").format(
                  value
                );
                const label = name === "present" ? "حاضر" : "غایب";
                return [formattedValue, label];
              }}
            />
            <Legend
              formatter={(value, entry) => {
                if (value === "present") return "حاضر";
                if (value === "absent") return "غایب";
              }}
              align="right"
              verticalAlign="top"
              wrapperStyle={{ paddingTop: "20px", paddingBottom: "40px" }}
            />
            <Bar
              dataKey="present"
              fill="#FAE27C"
              legendType="circle"
              radius={[10, 10, 0, 0]}
            />
            <Bar
              dataKey="absent"
              fill="#83a6ed"
              legendType="circle"
              radius={[10, 10, 0, 0]}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};
export default AttendanceChart;
