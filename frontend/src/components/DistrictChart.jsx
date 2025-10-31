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
  // ✅ 1. Group data by district_name (to merge duplicates from multiple states)
  const groupedData = data.reduce((acc, item) => {
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

  // ✅ 2. Calculate average values per district
  const averagedData = Object.values(groupedData).map((district) => ({
    district_name: district.district_name,
    avg_days_employment: district.total_days / district.count,
    avg_wage_rate: district.total_wage / district.count,
  }));

  // ✅ 3. Sort districts by average employment (you can switch to avg_wage_rate if needed)
  const sortedData = averagedData.sort(
    (a, b) => b.avg_days_employment - a.avg_days_employment
  );

  // ✅ 4. Take top 10 districts
  const chartData = sortedData.slice(0, 10);

  // ✅ 5. Chart UI
  return (
    <div className="w-full h-[34rem] bg-gradient-to-b from-white to-gray-50 p-10 rounded-2xl shadow-lg border border-gray-200">
      <h2 className="text-2xl font-bold mb-6 text-center text-gray-800 tracking-wide">
        Employment & Wage Analytics (Top 10 Districts Across All States)
      </h2>

      <div className="w-full h-[32rem] overflow-hidden">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={chartData}
            margin={{ top: 30, right: 40, left: 10, bottom: 100 }}
            barGap={12}
          >
            {/* Grid */}
            <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />

            {/* X-Axis */}
            <XAxis
              dataKey="district_name"
              angle={-35}
              textAnchor="end"
              interval={0}
              height={90}
              tick={{ fontSize: 13, fill: "#374151", fontWeight: 500 }}
              tickMargin={10}
            />

            {/* Y-Axis */}
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

            {/* Tooltip */}
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

            {/* Legend */}
            <Legend
              verticalAlign="bottom"
              align="center"
              wrapperStyle={{
                paddingTop: "25px",
                fontSize: 13,
              }}
              iconType="circle"
            />

            {/* Bars */}
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







