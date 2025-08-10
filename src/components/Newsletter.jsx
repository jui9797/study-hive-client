import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import Swal from "sweetalert2";

const Newsletter = () => {
  const { isDarkMode } = useContext(AuthContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;

    Swal.fire({
      title: "Congrates",
      text: `${form.email.value} subscribed successfuly`,
      icon: "success",
    });
    form.reset();
  };

  return (
    <div
      className={`text-center my-10 lg:my-28  border-2 border-[#0AB99D] rounded-lg p-4 lg:p-8 ${
        isDarkMode ? "bg-gray-800 text-white" : "bg-[#2bbda5e5] text-white"
      }`}
    >
      <h2 className="font-bold text-3xl lg:text-5xl  mb-2">Subscribe</h2>
      <p>
        Stay in the loop with every new assignment, deadline reminder, and
        important class announcement, all in one place.
      </p>
      <div className="lg:p-4">
        <form
          onSubmit={handleSubmit}
          className="flex w-full lg:w-2/3 mx-auto mt-2 "
        >
          <input
            type="email"
            name="email"
            placeholder="Type your email"
            className="input w-full rounded-r-none text-gray-500"
            required
          />
          <input
            type="submit"
            value="Submit"
            className="btn bg-[#0AB99D] text-white hover:text-[#0AB99D] rounded-l-none"
          />
        </form>
      </div>
    </div>
  );
};

export default Newsletter;
