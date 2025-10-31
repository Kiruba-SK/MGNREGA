
import { FaUsers, FaTools, FaChartLine } from "react-icons/fa";

const About = () => {
  return (
    <div className="bg-gray-50 min-h-screen py-12 px-6 lg:px-20">
      <div className="max-w-5xl mx-auto bg-white p-8 rounded-2xl shadow-md border border-gray-100">
        <h1 className="text-3xl font-bold text-center text-green-700 mb-6">
          About
        </h1>

        <p className="text-gray-700 leading-relaxed mb-6 text-justify">
          The <strong>Mahatma Gandhi National Rural Employment Guarantee Act (MGNREGA)</strong>,
          enacted in 2005, is a flagship program of the Government of India that aims to
          provide livelihood security to rural households by guaranteeing at least
          <strong> 100 days of wage employment</strong> in a financial year to every rural
          household whose adult members volunteer to do unskilled manual work.
        </p>

        <p className="text-gray-700 leading-relaxed mb-6 text-justify">
          The <strong>MGNREGA - Tamil Nadu</strong> provides a transparent and
          data-driven overview of the program's implementation across Tamil Nadu districts.
          It visualizes district-wise data such as works completed, ongoing projects, and
          total expenditure under the scheme, helping citizens and policymakers monitor
          progress efficiently.
        </p>

        <div className="grid md:grid-cols-3 sm:grid-cols-1 gap-6 mt-10">
          {/* Employment */}
          <div className="bg-green-100 p-6 rounded-xl text-center hover:shadow-lg transition">
            <FaUsers className="text-green-600 text-4xl mx-auto mb-3" />
            <h3 className="font-semibold text-lg text-gray-800 mb-2">Employment Guarantee</h3>
            <p className="text-gray-600 text-sm">
              Ensures livelihood security for rural households by providing 100 days of guaranteed wage employment.
            </p>
          </div>

          {/* Rural Development */}
          <div className="bg-blue-100 p-6 rounded-xl text-center hover:shadow-lg transition">
            <FaTools className="text-blue-600 text-4xl mx-auto mb-3" />
            <h3 className="font-semibold text-lg text-gray-800 mb-2">Rural Development</h3>
            <p className="text-gray-600 text-sm">
              Focuses on water conservation, land development, afforestation, and sustainable rural infrastructure.
            </p>
          </div>

          {/* Transparency */}
          <div className="bg-yellow-100 p-6 rounded-xl text-center hover:shadow-lg transition">
            <FaChartLine className="text-yellow-600 text-4xl mx-auto mb-3" />
            <h3 className="font-semibold text-lg text-gray-800 mb-2">Transparency & Monitoring</h3>
            <p className="text-gray-600 text-sm">
              Real-time data tracking and public accessibility ensure accountability and effective implementation.
            </p>
          </div>
        </div>

        <div className="mt-10">
          <h2 className="text-xl font-semibold text-gray-700 mb-4">
            Data Source
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4 text-justify">
            The data displayed in this dashboard is sourced from the{" "}
            <a
              href="https://www.data.gov.in/catalog/mahatma-gandhi-national-rural-employment-guarantee-act-mgnrega"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 underline"
            >
              Open Government Data (OGD) Platform, India
            </a>
            — a government initiative that provides open access to data published by various
            Ministries, Departments, and Organizations of the Government of India.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
