import { createBrowserRouter } from "react-router-dom";
import MainLayOut from "../mainLayout/MainLayOut";
import Error from "../components/Error";
import Home from "../components/Home";
import Assignments from "../pages/Assignments";
import CreateAssignments from "../pages/CreateAssignments";
import PdAssignments from "../pages/PdAssignments";
import MyAssignments from "../pages/MyAssignments";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Private from "../Private/Private";
import UpdateAssignment from "../pages/UpdateAssignment";

const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayOut></MainLayOut>,
      errorElement:<Error></Error>,
      children:[
        {
            path:'/',
            element:<Home></Home>
        },
        {
          path:'/login',
          element:<Login></Login>
        },
        {
          path:'/register',
          element:<Register></Register>
        },
        {
          path:'/assignments',
          element:<Assignments></Assignments>
        },
        {
          path:'/update/:id',
          element:<UpdateAssignment></UpdateAssignment>
        },
        {
          path:'/pdAssignments',
          element:<Private><PdAssignments></PdAssignments></Private>
        },
        {
          path:'/createAssignment',
          element:<Private><CreateAssignments></CreateAssignments></Private>
        },
        {
          path:'/myAssignments',
          element:<Private><MyAssignments></MyAssignments></Private>
        }
      ]
    },
  ]);
  export default router;