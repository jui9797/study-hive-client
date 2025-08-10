import axios from "axios";
import { useContext, useEffect } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { useNavigate } from "react-router-dom";

const axoisInstance = axios.create({
  baseURL: "https://assignment-11-server-mu-five.vercel.app",
  withCredentials: true,
});
const useAxiosSecure = () => {
  const { logOut } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    axoisInstance.interceptors.response.use(
      (response) => {
        return response;
      },
      (error) => {
        // console.log('error caught in intercepter' ,'error')
        if (error.status === 401 || error.status === 403) {
          // console.log('need to logout user')
          logOut().then(() => {
            // console.log('logged out user')
            navigate("/login");
          });
        }
        return Promise.reject(error);
      }
    );
  }, [logOut, navigate]);

  return axoisInstance;
};

export default useAxiosSecure;
