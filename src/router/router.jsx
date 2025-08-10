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
import DetailsPage from "../pages/DetailsPage";
import Submission from "../pages/Submission";
import Marks from "../pages/Marks";

import Contact from "../pages/Contact";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayOut></MainLayOut>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/assignments",
        element: <Assignments></Assignments>,
      },
      {
        path: "/contact",
        element: <Contact></Contact>,
      },
      {
        path: "/details/:id",
        element: (
          <Private>
            <DetailsPage></DetailsPage>
          </Private>
        ),
      },
      {
        path: "/submission/:id",
        element: (
          <Private>
            <Submission></Submission>
          </Private>
        ),
      },
      {
        path: "/update/:id",
        element: <UpdateAssignment></UpdateAssignment>,
      },
      {
        path: "/pdAssignments",
        element: (
          <Private>
            <PdAssignments></PdAssignments>
          </Private>
        ),
      },
      {
        path: "/marks/:id",
        element: (
          <Private>
            <Marks></Marks>
          </Private>
        ),
      },
      {
        path: "/createAssignment",
        element: (
          <Private>
            <CreateAssignments></CreateAssignments>
          </Private>
        ),
      },
      {
        path: "/myAssignments",
        element: (
          <Private>
            <MyAssignments></MyAssignments>
          </Private>
        ),
      },
    ],
  },
]);
export default router;
