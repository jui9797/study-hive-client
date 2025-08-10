import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import faqimg from "../assets/lottie/Animation - 1735161654916.json";
import Lottie from "lottie-react";

const Faq = () => {
  const { isDarkMode } = useContext(AuthContext);
  return (
    <div
      className={`p-6 rounded-lg my-10 lg:my-28 ${
        isDarkMode ? "bg-gray-800 text-white" : "bg-white text-gray-700"
      }`}
    >
      <h2
        className={`text-2xl lg:text-[40px] mb-8 lg:mb-12 font-bold text-center`}
      >
        Got Questions? We have Got Answers!
      </h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className=" h-[300px] lg:h-[400px]">
          <Lottie
            animationData={faqimg}
            style={{ width: "100%", height: "100%" }}
          ></Lottie>
        </div>

        <div className="">
          <div
            className={`collapse collapse-arrow my-2 rounded-lg ${
              isDarkMode
                ? "bg-gray-700 text-white"
                : "bg-gray-200 text-gray-600"
            }`}
          >
            <input type="radio" name="faq-accordion" defaultChecked />
            <div className="collapse-title text-xl font-medium">
              How can I create an assignment?
            </div>
            <div className="collapse-content">
              <p className="font-bold text-[#0AB99D]">
                Go to Create Assignment, fill in details, and click Submit.
              </p>
            </div>
          </div>
          <div
            className={`collapse collapse-arrow my-2 rounded-lg ${
              isDarkMode
                ? "bg-gray-700 text-white"
                : "bg-gray-200 text-gray-600"
            }`}
          >
            <input type="radio" name="faq-accordion" />
            <div className="collapse-title text-xl font-medium">
              How do I submit a completed assignment?
            </div>
            <div className="collapse-content">
              <p className="font-bold text-[#0AB99D]">
                Select the assignment, upload your work, and click Submit.
              </p>
            </div>
          </div>
          <div
            className={`collapse collapse-arrow my-2 rounded-lg ${
              isDarkMode
                ? "bg-gray-700 text-white"
                : "bg-gray-200 text-gray-600"
            }`}
          >
            <input type="radio" name="faq-accordion" />
            <div className="collapse-title text-xl font-medium">
              How does grading work?
            </div>
            <div className="collapse-content">
              <p className="font-bold text-[#0AB99D]">
                Friends can grade submissions, and the average grade is
                auto-calculated.
              </p>
            </div>
          </div>
          <div
            className={`collapse collapse-arrow my-2 rounded-lg ${
              isDarkMode
                ? "bg-gray-700 text-white"
                : "bg-gray-200 text-gray-600"
            }`}
          >
            <input type="radio" name="faq-accordion" />
            <div className="collapse-title text-xl font-medium">
              Can I edit an assignment after it is created?
            </div>
            <div className="collapse-content">
              <p className="font-bold text-[#0AB99D]">
                Yes, you can edit it before the due date.
              </p>
            </div>
          </div>
          <div
            className={`collapse collapse-arrow my-2 rounded-lg ${
              isDarkMode
                ? "bg-gray-700 text-white"
                : "bg-gray-200 text-gray-600"
            }`}
          >
            <input type="radio" name="faq-accordion" />
            <div className="collapse-title text-xl font-medium">
              Is there a limit to the number of assignments I can create?
            </div>
            <div className="collapse-content">
              <p className="font-bold text-[#0AB99D]">
                No, you can create unlimited assignments.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;
