import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div className="flex flex-col justify-center items-center my-10">
      <div>
        <img
          src="https://i.ibb.co.com/DDq4wLHM/error-page-not-found-vector.jpg"
          alt=""
        />
      </div>
      <div>
        <Link to="/">
          <button className="btn bg-[#0AB99D] rounded-lg text-white">
            HOME
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Error;
