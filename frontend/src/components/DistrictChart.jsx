import React, { useState, useMemo } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Legend,
  CartesianGrid,
} from "recharts";

const DistrictChart = ({ data }) => {
  const [selectedState, setSelectedState] = useState("All");
  const [selectedYear, setSelectedYear] = useState("All");
  const [selectedMonth, setSelectedMonth] = useState("All");

  // Get unique filter options
  const states = ["All", ...new Set(data.map((d) => d.state_name))];
  const years = ["All", ...new Set(data.map((d) => d.financial_year))];
  const months = ["All", ...new Set(data.map((d) => d.month))];

  // Filter data based on selections
  const filteredData = useMemo(() => {
    return data.filter((item) => {
      return (
        (selectedState === "All" || item.state_name === selectedState) &&
        (selectedYear === "All" || item.financial_year === selectedYear) &&
        (selectedMonth === "All" || item.month === selectedMonth)
      );
    });
  }, [data, selectedState, selectedYear, selectedMonth]);

  // Group & average filtered data
  const groupedData = useMemo(() => {
    const grouped = filteredData.reduce((acc, item) => {
      const district = item.district_name;
      if (!acc[district]) {
        acc[district] = { district_name: district, total_days: 0, total_wage: 0, count: 0 };
      }
      acc[district].total_days += item.avg_days_employment || 0;
      acc[district].total_wage += item.avg_wage_rate || 0;
      acc[district].count += 1;
      return acc;
    }, {});

    const averaged = Object.values(grouped).map((d) => ({
      district_name: d.district_name,
      avg_days_employment: d.total_days / d.count,
      avg_wage_rate: d.total_wage / d.count,
    }));

    return averaged.sort((a, b) => b.avg_days_employment - a.avg_days_employment).slice(0, 10);
  }, [filteredData]);

  return (
    <div className="w-full h-[40rem] bg-gradient-to-b from-white to-gray-50 p-10 rounded-2xl shadow-lg border border-gray-200">
      <h2 className="text-2xl font-bold mb-8 text-center text-gray-700 tracking-wide">
        Employment & Wage Analytics (Top 10 Districts Across All States)
      </h2>

      {/* Filter Section */}
      <div className="flex flex-wrap justify-center gap-6 mb-8">
        <select
          value={selectedState}
          onChange={(e) => setSelectedState(e.target.value)}
          className="px-4 py-2 border border-gray-300 rounded-xl shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
        >
          {states.map((state) => (
            <option key={state} value={state}>
              {state}
            </option>
          ))}
        </select>

        <select
          value={selectedYear}
          onChange={(e) => setSelectedYear(e.target.value)}
          className="px-4 py-2 border border-gray-300 rounded-xl shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
        >
          {years.map((year) => (
            <option key={year} value={year}>
              {year}
            </option>
          ))}
        </select>

        <select
          value={selectedMonth}
          onChange={(e) => setSelectedMonth(e.target.value)}
          className="px-4 py-2 border border-gray-300 rounded-xl shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
        >
          {months.map((month) => (
            <option key={month} value={month}>
              {month}
            </option>
          ))}
        </select>
      </div>

      {/* Chart Section */}
      <div className="w-full h-[32rem]">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={groupedData}
            margin={{ top: 30, right: 40, left: 10, bottom: 100 }}
            barGap={12}
          >
            <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
            <XAxis
              dataKey="district_name"
              angle={-35}
              textAnchor="end"
              interval={0}
              height={90}
              tick={{ fontSize: 13, fill: "#374151", fontWeight: 500 }}
              tickMargin={10}
            />
            <YAxis
              tick={{ fontSize: 13, fill: "#4b5563" }}
              label={{
                value: "Employment / Wage (Average)",
                angle: -90,
                position: "outsideLeft",
                fill: "#6b7280",
                fontSize: 12,
              }}
              axisLine={false}
              tickLine={false}
            />
            <Tooltip
              cursor={{ fill: "rgba(0,0,0,0.05)" }}
              contentStyle={{
                backgroundColor: "#fff",
                border: "1px solid #e5e7eb",
                borderRadius: "12px",
                boxShadow: "0px 4px 15px rgba(0,0,0,0.1)",
                padding: "10px 12px",
              }}
              formatter={(value, name) => [
                value.toLocaleString(undefined, { maximumFractionDigits: 2 }),
                name.replaceAll("_", " "),
              ]}
            />
            <Legend
              verticalAlign="bottom"
              align="center"
              wrapperStyle={{ paddingTop: "25px", fontSize: 13 }}
              iconType="circle"
            />
            <Bar
              dataKey="avg_days_employment"
              name="Avg Days Employment"
              fill="#16a34a"
              radius={[8, 8, 0, 0]}
              barSize={40}
            />
            <Bar
              dataKey="avg_wage_rate"
              name="Avg Wage Rate"
              fill="#2563eb"
              radius={[8, 8, 0, 0]}
              barSize={40}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default DistrictChart;


// import {
//   BarChart,
//   Bar,
//   XAxis,
//   YAxis,
//   Tooltip,
//   ResponsiveContainer,
//   Legend,
//   CartesianGrid,
// } from "recharts";

// const DistrictChart = ({ data }) => {
//   const groupedData = data.reduce((acc, item) => {
//     const district = item.district_name;
//     if (!acc[district]) {
//       acc[district] = {
//         district_name: district,
//         total_days: 0,
//         total_wage: 0,
//         count: 0,
//       };
//     }

//     acc[district].total_days += item.avg_days_employment || 0;
//     acc[district].total_wage += item.avg_wage_rate || 0;
//     acc[district].count += 1;
//     return acc;
//   }, {});

//   const averagedData = Object.values(groupedData).map((district) => ({
//     district_name: district.district_name,
//     avg_days_employment: district.total_days / district.count,
//     avg_wage_rate: district.total_wage / district.count,
//   }));

//   const sortedData = averagedData.sort(
//     (a, b) => b.avg_days_employment - a.avg_days_employment
//   );

//   const chartData = sortedData.slice(0, 10);

//   return (
//     <div className="w-full h-[34rem] bg-gradient-to-b from-white to-gray-50 p-10 rounded-2xl shadow-lg border border-gray-200">
//       <h2 className="text-2xl font-bold mb-6 text-center text-gray-700 tracking-wide">
//         Employment & Wage Analytics (Top 10 Districts)
//       </h2>

//       <div className="w-full h-[32rem] overflow-hidden">
//         <ResponsiveContainer width="100%" height="100%">
//           <BarChart
//             data={chartData}
//             margin={{ top: 30, right: 40, left: 10, bottom: 100 }}
//             barGap={12}
//           >
//             {/* Grid */}
//             <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />

//             {/* X-Axis */}
//             <XAxis
//               dataKey="district_name"
//               angle={-35}
//               textAnchor="end"
//               interval={0}
//               height={90}
//               tick={{ fontSize: 13, fill: "#374151", fontWeight: 500 }}
//               tickMargin={10}
//             />

//             {/* Y-Axis */}
//             <YAxis
//               tick={{ fontSize: 13, fill: "#4b5563" }}
//               label={{
//                 value: "Employment / Wage (Average)",
//                 angle: -90,
//                 position: "outsideLeft",
//                 fill: "#6b7280",
//                 fontSize: 12,
//               }}
//               axisLine={false}
//               tickLine={false}
//             />

//             {/* Tooltip */}
//             <Tooltip
//               cursor={{ fill: "rgba(0,0,0,0.05)" }}
//               contentStyle={{
//                 backgroundColor: "#fff",
//                 border: "1px solid #e5e7eb",
//                 borderRadius: "12px",
//                 boxShadow: "0px 4px 15px rgba(0,0,0,0.1)",
//                 padding: "10px 12px",
//               }}
//               formatter={(value, name) => [
//                 value.toLocaleString(undefined, { maximumFractionDigits: 2 }),
//                 name.replaceAll("_", " "),
//               ]}
//             />

//             {/* Legend */}
//             <Legend
//               verticalAlign="bottom"
//               align="center"
//               wrapperStyle={{
//                 paddingTop: "25px",
//                 fontSize: 13,
//               }}
//               iconType="circle"
//             />

//             {/* Bars */}
//             <Bar
//               dataKey="avg_days_employment"
//               name="Avg Days Employment"
//               fill="#16a34a"
//               radius={[8, 8, 0, 0]}
//               barSize={40}
//             />
//             <Bar
//               dataKey="avg_wage_rate"
//               name="Avg Wage Rate"
//               fill="#2563eb"
//               radius={[8, 8, 0, 0]}
//               barSize={40}
//             />
//           </BarChart>
//         </ResponsiveContainer>
//       </div>
//     </div>
//   );
// };

// export default DistrictChart;







