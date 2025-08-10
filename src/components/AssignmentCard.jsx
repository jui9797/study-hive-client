import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const AssignmentCard = ({ assign }) => {
  const { _id, title, thumbnailUrl, description } = assign || {};

  return (
    <motion.div
      initial={{ opacity: 0, y: 30, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      whileHover={{ scale: 1.02, boxShadow: "0px 10px 20px rgba(0,0,0,0.1)" }}
      className="rounded-lg"
    >
      <div className="card bg-gray-100 shadow-xl">
        <div className="p-4">
          <img
            className="h-[250px] object-cover w-full rounded-lg"
            src={thumbnailUrl}
            alt="assignment image"
          />
        </div>
        <div className="card-body h-[288px]">
          <div className="h-[150px] mb-4">
            <h2 className="card-title">{`${title.substring(0, 50)}...`}</h2>
            <div className="text-gray-500">
              <p>{`${description.substring(0, 80)}...`}</p>
            </div>
          </div>
          <div className="flex justify-center items-center">
            <motion.button
              whileTap={{ scale: 0.95 }}
              className="relative overflow-hidden rounded-lg bg-[#0AB99D] text-white px-6 py-3 uppercase tracking-wider transition-all duration-300 hover:bg-white hover:text-[#0AB99D] hover:border-2 hover:border-[#0AB99D] font-bold"
            >
              <Link to={`/details/${_id}`}>See More</Link>
            </motion.button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default AssignmentCard;
