import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import AxiosInstance from "../components/AxiosInstance";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const COLORS = [
  "#2563eb",
  "#16a34a",
  "#f59e0b",
  "#ef4444",
  "#10b981",
  "#8b5cf6",
  "#ec4899",
  "#14b8a6",
  "#f97316",
  "#0ea5e9",
];

const Works = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    AxiosInstance.get("data/")
      .then((res) => setData(res.data))
      .catch((err) => console.error("Error fetching MGNREGA works data:", err));
  }, []);

  const sortedData = [...data].sort(
    (a, b) => b.total_expenditure - a.total_expenditure
  );

  const chartData = sortedData.slice(0, 10).map((item) => ({
    name: item.district_name,
    completed: item.works_completed,
    ongoing: item.ongoing_works,
    expenditure: item.total_expenditure,
  }));

  const totalCompleted = chartData.reduce((a, b) => a + b.completed, 0);
  const totalOngoing = chartData.reduce((a, b) => a + b.ongoing, 0);

  const worksSummary = [
    { name: "Completed Works", value: totalCompleted, color: "#2563eb" },
    { name: "Ongoing Works", value: totalOngoing, color: "#16a34a" },
  ];

  const expenditureData = chartData.map((d, i) => ({
    name: d.name,
    value: d.expenditure,
    color: COLORS[i % COLORS.length],
  }));

  return (
    <div className="p-12 mx-10 min-h-screen bg-gray-50">
      {/* Page Title */}
      <h1 className="text-3xl font-bold text-center mb-4 text-green-700">
        Works & Expenditure
      </h1>

      {/* Definition Section */}
      <motion.div className="max-w-4xl mx-auto text-center mb-10 text-gray-700">
        <p className="text-lg leading-relaxed">
          MGNREGA Works and Expenditure highlight the implementation and
          financial progress of rural development projects under the Mahatma
          Gandhi National Rural Employment Guarantee Act. Activities such as
          water conservation, land development, and rural connectivity help
          improve rural livelihoods. The expenditure represents the total funds
          used for wages, materials, and administration, ensuring transparency
          and accountability across Tamil Nadu districts.
        </p>
      </motion.div>

      {/* Charts Section */}
      <div className="grid lg:grid-cols-2 sm:grid-cols-1 gap-10">
        {/* Works Completed vs Ongoing */}
        <div className="bg-white p-8 rounded-2xl shadow-md border border-gray-100 hover:shadow-lg transition-shadow duration-300">
          <h2 className="text-xl font-semibold text-center mb-5 text-gray-600">
            Works Completed vs Ongoing
          </h2>
          <ResponsiveContainer width="100%" height={320}>
            <PieChart>
              <Pie
                data={worksSummary}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                outerRadius={100}
                innerRadius={60}
                labelLine={false}
                label={({ name, percent }) =>
                  `${name}: ${(percent * 100).toFixed(1)}%`
                }
              >
                {worksSummary.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip
                formatter={(value) =>
                  value.toLocaleString(undefined, { maximumFractionDigits: 0 })
                }
              />
            </PieChart>
          </ResponsiveContainer>
        </div>

        {/* Total Expenditure by Top 10 Districts */}
        <div className="bg-white p-8 rounded-2xl shadow-md border border-gray-100 hover:shadow-lg transition-shadow duration-300">
          <h2 className="text-xl font-semibold text-center mb-5 text-gray-600">
            Total Expenditure of Top 10 Districts
          </h2>
          <ResponsiveContainer width="100%" height={320}>
            <PieChart>
              <Pie
                data={expenditureData}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                outerRadius={100}
                innerRadius={60}
                labelLine={false}
                label={({ name, percent }) =>
                  `${name}: ${(percent * 100).toFixed(1)}%`
                }
              >
                {expenditureData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip
                formatter={(value) =>
                  "₹" +
                  value.toLocaleString(undefined, { maximumFractionDigits: 2 })
                }
              />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default Works;
