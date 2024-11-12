"use client";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
const persianMonths = [
  "فروردین",
  "اردیبهشت",
  "خرداد",
  "تیر",
  "مرداد",
  "شهریور",
  "مهر",
  "آبان",
  "آذر",
  "دی",
  "بهمن",
  "اسفند",
];
const data = [
  {
    name: "Jan",
    income: 4000,
    expense: 2400,
  },
  {
    name: "Feb",
    income: 3000,
    expense: 1398,
  },
  {
    name: "Mar",
    income: 2000,
    expense: 9800,
  },
  {
    name: "Apr",
    income: 2780,
    expense: 3908,
  },
  {
    name: "May",
    income: 1890,
    expense: 4800,
  },
  {
    name: "Jun",
    income: 2390,
    expense: 3800,
  },
  {
    name: "Jul",
    income: 3490,
    expense: 4300,
  },
  {
    name: "Aug",
    income: 3490,
    expense: 4300,
  },
  {
    name: "Sep",
    income: 3490,
    expense: 4300,
  },
  {
    name: "Oct",
    income: 3490,
    expense: 4300,
  },
  {
    name: "Nov",
    income: 3490,
    expense: 4300,
  },
  {
    name: "Dec",
    income: 3490,
    expense: 4300,
  },
].map((item, index) => ({ ...item, name: persianMonths[index] }));
const FinanceChart = () => {
  return (
    <div className=" w-full h-[350px] md:h-[300px]   ">
      <div
        className="w-full h-full  border  relative rounded-lg bg-white shadow-md 
      flex items-center justify-center
      after:content-[''] after:w-[95%] after:h-4 after:rounded-lg after:-z-10  after:border  after:bg-white after:absolute
      after:-bottom-3 after:shadow p-1"
      >
        <div className="flex   w-full h-full rounded-lg ">
          <ResponsiveContainer width="100%" height="90%">
            <LineChart
              width={500}
              height={300}
              data={data}
              margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis
                dataKey="name"
                axisLine={false}
                tick={{ fill: "gray" }}
                tickLine={false}
                tickMargin={10}
              />
              <YAxis
                axisLine={false}
                tick={{ fill: "gray" }}
                tickLine={false}
                tickMargin={40}
                tickFormatter={(value) =>
                  new Intl.NumberFormat("fa-IR").format(value)
                }
              />
              <Tooltip
                formatter={(value, name) => {
                  const formattedValue = new Intl.NumberFormat("fa-IR").format(
                    value
                  );
                  const label = name === "income" ? "درآمد" : "هزینه";
                  return [formattedValue, label]; // Returns an array to display value and label
                }}
                contentStyle={{
                  borderRadius: "10px",
                  borderColor: "lightgray",
                }}
              />
              <Legend
                align="center"
                verticalAlign="top"
                wrapperStyle={{ paddingTop: "10px", paddingBottom: "30px" }}
                formatter={(value, entry) => {
                  // Customize legend labels here
                  if (value === "income") return "مالی";
                  if (value === "expense") return "هزینه";
                }}
              />
              <Line
                type="monotone"
                dataKey="income"
                stroke="rgb(97, 209, 251)"
                strokeWidth={5}
              />
              <Line
                type="monotone"
                dataKey="expense"
                stroke="rgb(149, 147, 255)"
                strokeWidth={5}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default FinanceChart;
