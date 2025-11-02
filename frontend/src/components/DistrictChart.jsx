import { useState, useMemo } from "react";
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
  const [selectedMetric, setSelectedMetric] = useState("both"); 

  // --- Group & average data ---
  const groupedData = useMemo(() => {
    const result = data.reduce((acc, item) => {
      const district = item.district_name;
      if (!acc[district]) {
        acc[district] = {
          district_name: district,
          total_days: 0,
          total_wage: 0,
          count: 0,
        };
      }
      acc[district].total_days += item.avg_days_employment || 0;
      acc[district].total_wage += item.avg_wage_rate || 0;
      acc[district].count += 1;
      return acc;
    }, {});

    const averaged = Object.values(result).map((d) => ({
      district_name: d.district_name,
      avg_days_employment: d.total_days / d.count,
      avg_wage_rate: d.total_wage / d.count,
    }));

    return averaged.sort((a, b) => b.avg_days_employment - a.avg_days_employment).slice(0, 10);
  }, [data]);

  // --- Chart title text ---
  const titleText =
    selectedMetric === "employment"
      ? "Employment Analytics (Top 10 Districts)"
      : selectedMetric === "wage"
      ? "Wage Rate Analytics (Top 10 Districts)"
      : "Employment & Wage Analytics (Top 10 Districts)";

  return (
    <div className="w-full h-[36rem] bg-gradient-to-b from-white to-gray-50 p-10 rounded-2xl shadow-lg border border-gray-200">
      {/* Title and Filter */}
      <div className="flex flex-col md:flex-row justify-between items-center mb-8">
        <h2 className="text-2xl font-bold text-gray-700 tracking-wide text-center md:text-left">
          {titleText}
        </h2>

        {/* Filter Dropdown */}
        <div className="flex items-center gap-3 mt-4 md:mt-0">
          <label className="text-gray-600 font-medium text-sm">Show:</label>
          <select
            value={selectedMetric}
            onChange={(e) => setSelectedMetric(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-xl shadow-sm text-gray-700 focus:ring-2 focus:ring-blue-500 focus:outline-none"
          >
            <option value="both">Employment & Wage Rate</option>
            <option value="employment">Avg Days Employment</option>
            <option value="wage">Avg Wage Rate</option>
          </select>
        </div>
      </div>

      {/* Chart */}
      <div className="w-full h-[30rem]">
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
                value:
                  selectedMetric === "employment"
                    ? "Avg Days Employment"
                    : selectedMetric === "wage"
                    ? "Avg Wage Rate"
                    : "Employment / Wage (Average)",
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

            {(selectedMetric === "both" || selectedMetric === "employment") && (
              <Bar
                dataKey="avg_days_employment"
                name="Avg Days Employment"
                fill="#16a34a"
                radius={[8, 8, 0, 0]}
                barSize={40}
              />
            )}
            {(selectedMetric === "both" || selectedMetric === "wage") && (
              <Bar
                dataKey="avg_wage_rate"
                name="Avg Wage Rate"
                fill="#2563eb"
                radius={[8, 8, 0, 0]}
                barSize={40}
              />
            )}
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default DistrictChart;









