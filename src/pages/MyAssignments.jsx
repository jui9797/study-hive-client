import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";
import useAxiosSecure from "../hooks/useAxiosSecure";

const MyAssignments = () => {
  const { user, isDarkMode } = useContext(AuthContext);
  const axiosSecure = useAxiosSecure();
  const [submits, setSubmits] = useState([]);
  const [load, setLoad] = useState(true);

  useEffect(() => {
    axiosSecure
      .get(`/submittedAssignments/email?email=${user.email}`)
      .then((res) => {
        setSubmits(res.data);
        setLoad(false);
      });
  }, [user.email, axiosSecure]);

  return (
    <div className="my-10 lg:my-20 p-4 px-4 lg:px-8">
      {load ? (
        <>
          <div className="flex justify-center items-center my-10 lg:my-20">
            <div className="flex w-52 flex-col gap-4">
              <div className="skeleton h-32 w-full"></div>
              <div className="skeleton h-4 w-28"></div>
              <div className="skeleton h-4 w-full"></div>
              <div className="skeleton h-4 w-full"></div>
            </div>
          </div>
        </>
      ) : (
        <>
          <h2
            className={`text-3xl font-bold mt-16 ${
              isDarkMode ? "text-white" : "text-[#0AB99D]"
            }`}
          >
            My attempt assignment:{submits.length}
          </h2>
          <div className="my-4 p-2 bg-[#0AB99D] rounded-lg">
            <div className="overflow-x-auto">
              <table
                className={`table  rounded-none ${
                  isDarkMode ? "bg-gray-300" : "bg-gray-50"
                }`}
              >
                {/* head */}
                <thead className="bg-gray-300 font-bold">
                  <tr>
                    <th></th>
                    <th>Title</th>
                    <th>Status</th>
                    <th>Highest Marks</th>
                    <th>Obtained Marks</th>
                    <th>Feedback</th>
                  </tr>
                </thead>
                <tbody>
                  {/* row 1 */}
                  {submits.map((item, index) => (
                    <tr key={index}>
                      <th>{index + 1}</th>
                      <td className="font-bold text-gray-600">{item.title}</td>
                      <td
                        className={`${
                          (item.status === "Pending" && "text-amber-700") ||
                          (item.status === "Completed" && "text-green-800")
                        }`}
                      >
                        {item.status}
                      </td>
                      <td>{item.marks}</td>
                      <td
                        className={`${
                          item.status === "Pending" && "text-amber-700"
                        }`}
                      >
                        {item.obtainedMarks}
                      </td>
                      <td
                        className={`${
                          item.status === "Pending" && "text-amber-700"
                        }`}
                      >
                        {item.feedback}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default MyAssignments;
