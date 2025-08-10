import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import Swal from "sweetalert2";
import { FcGoogle } from "react-icons/fc";
import Lottie from "lottie-react";
import loginImg from "../assets/lottie/Animation - 1735162196944.json";

const Login = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { userlogin, setUser, googleLogin } = useContext(AuthContext);

  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    const loginUser = { email, password };

    userlogin(email, password)
      .then((res) => {
        const user = res.user;
        setUser(user);

        Swal.fire({
          title: "Congrates",
          text: "login successful",
          icon: "success",
        });
        navigate(location?.state ? location.state : "/");
      })
      .catch((err) => {
        Swal.fire({
          title: "Sorry",
          text: "Invalid credential",
          icon: "error",
        });
      });
  };

  const handleGoogleLogin = () => {
    googleLogin().then((res) => {
      Swal.fire({
        title: "Great",
        text: "Google login successful",
        icon: "success",
      });
      navigate(location?.state ? location.state : "/");
    });
  };

  return (
    <div>
      <div className="hero min-h-screen my-10 rounded-lg lg:px-6">
        <div className="hero-content flex-col lg:flex-row">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold text-[#0AB99D]">Login now!</h1>
            <p className="py-6 text-gray-500">
              Welcome back! Access your account to continue exploring endless
              opportunities. Enter your credentials to enjoy a seamless
              experience. Don,t have an account yet? Sign up today and join our
              community!
            </p>
            <div>
              <Lottie
                animationData={loginImg}
                style={{
                  width: "100%",
                  height: "350px",
                  backgroundColor: "white",
                }}
              ></Lottie>
            </div>
          </div>
          <div className="card bg-base-100 bg-opacity-50 w-full max-w-sm shrink-0 shadow-2xl">
            <form onSubmit={handleLogin} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-white">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text text-white">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control mt-6">
                <button className="btn border-none text-white ml-2 bg-[#0AB99D]">
                  Login
                </button>
              </div>
            </form>
            <p className="ml-2 text-gray-700">
              {" "}
              New to this website? Please
              <Link to="/register" className="text-[#071d19] font-bold ml-2">
                Register
              </Link>
            </p>
            <button
              onClick={handleGoogleLogin}
              className="btn m-4 bg-slate-200 text-2xl"
            >
              <FcGoogle />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
