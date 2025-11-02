import { useEffect, useState } from "react";
import axiosInstance from "../components/AxiosInstance";
import DistrictChart from "../components/DistrictChart";

const Districts = () => {
  const [data, setData] = useState([]); 
  const [filteredData, setFilteredData] = useState([]); 

  const [selectedDistrict, setSelectedDistrict] = useState("");
  const [selectedYear, setSelectedYear] = useState("");
  const [selectedMonth, setSelectedMonth] = useState("");

  // Tamil Nadu Districts
  const districts = [
    "Ariyalur",
    "Chengalpattu",
    "Chennai",
    "Coimbatore",
    "Cuddalore",
    "Dharmapuri",
    "Dindigul",
    "Erode",
    "Kallakurichi",
    "Kancheepuram",
    "Karur",
    "Krishnagiri",
    "Madurai",
    "Mayiladuthurai",
    "Nagapattinam",
    "Namakkal",
    "Nilgiris",
    "Perambalur",
    "Pudukkottai",
    "Ramanathapuram",
    "Ranipet",
    "Salem",
    "Sivagangai",
    "Tenkasi",
    "Thanjavur",
    "Theni",
    "Thoothukudi (Tuticorin)",
    "Tiruchirappalli",
    "Tirunelveli",
    "Tirupathur",
    "Tiruppur",
    "Tiruvallur",
    "Tiruvannamalai",
    "Tiruvarur",
    "Vellore",
    "Viluppuram",
    "Virudhunagar",
    "Kanyakumari",
  ];

  const years = [
    "2018-2019",
    "2019-2020",
    "2020-2021",
    "2021-2022",
    "2022-2023",
    "2023-2024",
    "2024-2025",
    "2025-2026",
  ];

  // Fetch all MGNREGA data once
  useEffect(() => {
    axiosInstance
      .get("/data/")
      .then((res) => {
        setData(res.data);
        setFilteredData(res.data); 
      })
      .catch((err) => console.error("Error fetching MGNREGA data:", err));
  }, []);

  // Handle filter logic
  const handleFilter = () => {
    let filtered = data;

    if (selectedDistrict) {
      filtered = filtered.filter(
        (item) =>
          item.district_name.toLowerCase() ===
          selectedDistrict.toLowerCase()
      );
    }

    if (selectedYear) {
      filtered = filtered.filter(
        (item) => item.fin_year === selectedYear
      );
    }

    if (selectedMonth) {
      filtered = filtered.filter(
        (item) => item.month.toLowerCase() === selectedMonth.toLowerCase()
      );
    }

    setFilteredData(filtered);
  };

  // Reset filters and show all data again
  const resetFilters = () => {
    setSelectedDistrict("");
    setSelectedYear("");
    setSelectedMonth("");
    setFilteredData(data);
  };

  return (
    <div className="p-12">
      <h1 className="text-3xl font-bold mb-6 text-center text-green-700">
        District-Wise Data
      </h1>

      {/* Filter Section */}
      <div className="flex flex-wrap justify-center gap-4 mb-6 bg-gray-100 p-4 rounded-lg shadow-sm">
        {/* District Dropdown */}
        <select
          value={selectedDistrict}
          onChange={(e) => setSelectedDistrict(e.target.value)}
          className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-600"
        >
          <option value="">Select District</option>
          {districts.map((district, index) => (
            <option key={index} value={district}>
              {district}
            </option>
          ))}
        </select>

        {/* Year Dropdown */}
        <select
          value={selectedYear}
          onChange={(e) => setSelectedYear(e.target.value)}
          className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-600"
        >
          <option value="">Select Year</option>
          {years.map((year, index) => (
            <option key={index} value={year}>
              {year}
            </option>
          ))}
        </select>

        {/* Month Dropdown */}
        <select
          value={selectedMonth}
          onChange={(e) => setSelectedMonth(e.target.value)}
          className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-600"
        >
          <option value="">Select Month</option>
          <option value="Jan">January</option>
          <option value="Feb">February</option>
          <option value="Mar">March</option>
          <option value="Apr">April</option>
          <option value="May">May</option>
          <option value="Jun">June</option>
          <option value="Jul">July</option>
          <option value="Aug">August</option>
          <option value="Sep">September</option>
          <option value="Oct">October</option>
          <option value="Nov">November</option>
          <option value="Dec">December</option>
        </select>

        {/* Buttons */}
        <button
          onClick={handleFilter}
          className="bg-green-700 text-white px-4 py-2 rounded-md hover:bg-green-800 transition"
        >
          Apply
        </button>
        <button
          onClick={resetFilters}
          className="bg-gray-400 text-white px-4 py-2 rounded-md hover:bg-gray-500 transition"
        >
          Reset
        </button>
      </div>

      {/* Table Section */}
      <div className="relative max-h-[1000px] overflow-y-scroll border rounded-lg shadow-md pt-2 mb-10">
        <table className="min-w-full border-collapse">
          <thead className="sticky top-0 bg-gray-200 text-gray-700 z-10">
            <tr>
              <th className="px-4 pb-2 border">District</th>
              <th className="px-4 pb-2 border">Financial Year</th>
              <th className="px-4 pb-2 border">Month</th>
              <th className="px-4 pb-2 border">Avg Wage Rate</th>
              <th className="px-4 pb-2 border">Avg Days Employment</th>
              <th className="px-4 pb-2 border">Total Wages</th>
              <th className="px-4 pb-2 border">Total Expenditure</th>
            </tr>
          </thead>
          <tbody>
            {filteredData.length > 0 ? (
              filteredData.map((row, i) => (
                <tr
                  key={i}
                  className={`text-center border-b ${
                    i % 2 === 0 ? "bg-white" : "bg-gray-50"
                  } hover:bg-gray-100 transition`}
                >
                  <td className="px-4 py-2">{row.district_name}</td>
                  <td className="px-4 py-2">{row.fin_year}</td>
                  <td className="px-4 py-2">{row.month}</td>
                  <td className="px-4 py-2">{row.avg_wage_rate}</td>
                  <td className="px-4 py-2">{row.avg_days_employment}</td>
                  <td className="px-4 py-2">{row.total_wages}</td>
                  <td className="px-4 py-2">{row.total_expenditure}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td
                  colSpan="7"
                  className="text-center text-gray-500 py-4 italic"
                >
                  No data found for selected filters.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Chart Section */}
      <DistrictChart data={filteredData} />
    </div>
  );
};

export default Districts;

