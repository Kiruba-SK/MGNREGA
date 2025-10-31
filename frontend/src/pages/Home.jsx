import { assets } from "../assets/assets";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <div className="bg-gray-50 text-gray-800 py-16 px-6 min-h-screen">
      <div className="max-w-6xl mx-auto text-center">
        {/* Title Section */}
        <motion.h1
          className="text-3xl md:text-4xl font-extrabold text-green-800 mb-6"
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Mahatma Gandhi National Rural Employment Guarantee Act (MGNREGA) – Tamil Nadu
        </motion.h1>

        {/* Description */}
        <motion.p
          className="text-lg md:text-xl text-gray-700 leading-relaxed max-w-3xl mx-auto mb-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          MGNREGA aims to enhance livelihood security in rural areas by providing at least{" "}
          <span className="font-semibold text-green-700">100 days of wage employment</span> 
          in a financial year to every household whose adult members volunteer to do unskilled manual work.
        </motion.p>

        {/* Hero Image */}
        <motion.div
          className="flex justify-center mb-10"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <img
            src={assets.gandhi}
            alt="MGNREGA Tamil Nadu"
            className="w-full md:w-2/3 lg:w-1/2 rounded-lg shadow-lg"
          />
        </motion.div>

        {/* Info Cards */}
        <div className="grid md:grid-cols-3 gap-8 mt-10">
          {/* Card 1 */}
          <motion.div
            className="bg-white shadow-md p-6 rounded-2xl border-t-4 border-green-600 hover:shadow-lg transition"
            whileHover={{ scale: 1.05 }}
          >
            <h3 className="text-xl font-semibold text-green-700 mb-2">Empowering Rural India</h3>
            <p className="text-gray-600 text-sm">
              Strengthening the livelihood of rural communities by guaranteeing employment and ensuring inclusive growth.
            </p>
          </motion.div>

          {/* Card 2 */}
          <motion.div
            className="bg-white shadow-md p-6 rounded-2xl border-t-4 border-orange-500 hover:shadow-lg transition"
            whileHover={{ scale: 1.05 }}
          >
            <h3 className="text-xl font-semibold text-orange-600 mb-2">Sustainable Development</h3>
            <p className="text-gray-600 text-sm">
              Promoting water conservation, afforestation, and land productivity through sustainable rural projects.
            </p>
          </motion.div>

          {/* Card 3 */}
          <motion.div
            className="bg-white shadow-md p-6 rounded-2xl border-t-4 border-blue-500 hover:shadow-lg transition"
            whileHover={{ scale: 1.05 }}
          >
            <h3 className="text-xl font-semibold text-blue-600 mb-2">Women Participation</h3>
            <p className="text-gray-600 text-sm">
              Ensuring equality by encouraging women’s participation in rural employment and empowering communities.
            </p>
          </motion.div>
        </div>
      </div>

    </div>
  );
};

export default Home;

