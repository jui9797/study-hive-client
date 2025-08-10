import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import Spinner from "../components/Spinner";

const Private = ({ children }) => {
  const { loading, user } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  if (loading) {
    return (
      <>
        <Spinner></Spinner>
      </>
    );
  }

  if (user && user?.email) {
    return children;
  }

  return (
    <div>
      <Navigate to="/login" state={location.pathname}></Navigate>
    </div>
  );
};

export default Private;
