import axios from "axios";
import { useEffect, useState } from "react";
import AssignmentCard from "./AssignmentCard";
import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import Spinner from "./Spinner";

const AssignmentGrid = () => {
  const { isDarkMode } = useContext(AuthContext);

  const [assignments, setAssignments] = useState([]);

  useEffect(() => {
    axios
      .get("https://assignment-11-server-mu-five.vercel.app/limitAssignments")
      .then((res) => {
        // console.log(res.data)
        setAssignments(res.data);
      });
  }, []);

  return (
    <div className="my-10 lg:my-32">
      <h2
        className={`text-2xl lg:text-[40px] text-center font-bold mb-4 lg:mb-14 ${
          isDarkMode ? "text-white" : "text-gray-700"
        }`}
      >
        Exclusive Assignments
      </h2>
      {assignments?.length === 0 && (
        <div className="flex justify-center items-center h-[400px]">
          <Spinner></Spinner>
        </div>
      )}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {assignments.map((assign, index) => (
          <AssignmentCard key={index} assign={assign}></AssignmentCard>
        ))}
      </div>
    </div>
  );
};

export default AssignmentGrid;
