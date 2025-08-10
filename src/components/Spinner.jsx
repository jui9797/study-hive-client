import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";

const Spinner = () => {
  const { isDarkMode } = useContext(AuthContext);
  return (
    <div className="flex items-center">
      <div className="flex flex-col items-center space-y-4">
        <div
          className={`w-12 h-12 border-4 ${
            isDarkMode ? "border-white " : " text-gray-800"
          }  border-dashed rounded-full animate-spin`}
        ></div>
      </div>
    </div>
  );
};

export default Spinner;
