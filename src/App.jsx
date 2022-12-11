//utilities
import { createBrowserRouter, RouterProvider } from "react-router-dom";

//components
import NavBar from "./components/NavBar";

//Pages
import HomePage from "./pages/HomePage";
import AdminPage from "./pages/admin/AdminPage";

import CouncilPage from "./pages/council/CouncilPage";
import StudentScore from "./pages/council/StudentScore";
import SystemFeedback from "./pages/council/SystemFeedback";
import CouncilChat from "./pages/council/CouncilChat";
import CouncilProfile from "./pages/council/CouncilProfile";
import CouncilRegister from "./pages/council/CouncilRegister";


import AddCounselor from "./pages/admin/adminComponents/AddCounselor";
import AddQuestion from "./pages/admin/adminComponents/AddQuestion";
import DeleteCounselor from "./pages/admin/adminComponents/DeleteCounselor";
import DeleteQuestion from "./pages/admin/adminComponents/DeleteQuestion";
import ViewCounselor from "./pages/admin/adminComponents/ViewCounselor";
import ViewQuestion from "./pages/admin/adminComponents/ViewQuestion";
import ViewStudent from "./pages/admin/adminComponents/ViewStudent";
import AddStudent from "./pages/admin/adminComponents/AddStudent";
import DeleteStudent from "./pages/admin/adminComponents/DeleteStudent";
import Home from "./pages/Home";


import LoginStudent from "./pages/student/LoginStudent";
import StudentDashboard from "./pages/student/StudentDashboard";
import StudentProfile from "./pages/student/StudentProfile";
import ViewScore from "./pages/student/ViewScore";
import Feedback from "./pages/student/Feedback";
import ViewChat from "./pages/student/ViewChat";
import Test from "./pages/student/Test";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <> <NavBar /> <HomePage /></>,
    },
    {
      path: "/home",
      element:<> <Home /></>,
    },
    {
      path: "/admin",
      element: <> <NavBar /> <AdminPage /></>,
    },
    {
      path: "/admin/AddCounselor",
      element: <> <NavBar /> <AddCounselor /></>,
    },
    {
      path: "/admin/AddQuestion",
      element: <> <NavBar /> <AddQuestion /></>,
    },
    {
      path: "/admin/AddStudent",
      element: <> <NavBar /> <AddStudent /></>,
    },
    {
      path: "/admin/DeleteCounselor",
      element: <> <NavBar /> <DeleteCounselor /></>,
    },
    {
      path: "/admin/DeleteQuestion",
      element: <> <NavBar /> <DeleteQuestion /></>,
    },
    {
      path: "/admin/DeleteStudent",
      element: <> <NavBar /> <DeleteStudent /></>,
    },
    {
      path: "/admin/ViewCounselor",
      element: <> <NavBar /> <ViewCounselor /></>,
    },
    {
      path: "/admin/ViewQuestion",
      element: <> <NavBar /> <ViewQuestion /></>,
    },
    {
      path: "/admin/ViewStudent",
      element: <>  <NavBar /> <ViewStudent /></>,
    },
    {
      path: "/council",
      element: <> <NavBar /> <CouncilPage /></>,
    },
    {
      path: "/council/student-score",
      element: <> <NavBar /> <StudentScore /></>,
    },
    {
      path: "/council/system-feedback",
      element: <> <NavBar /> <SystemFeedback /></>,
    },
    {
      path: "/council/chat",
      element: <> <NavBar /> <CouncilChat /></>,
    },
    {
      path: "/council/profile",
      element: <> <NavBar /> <CouncilProfile /></>,
    },
    {
      path: "/councilregister",
      element: <> <NavBar /> <CouncilRegister /></>,
    },
    {
      path: "/loginstudent",
      element: <> <NavBar /> <LoginStudent /></>,
    },
    {
      path: "/studentprofile",
      element: <><StudentProfile /></>,
    },
    {
      path: "/studentdashboard",
      element: <><StudentDashboard /></>,
    },
    {
      path: "/studentdashboard/viewscore",
      element: <><ViewScore /></>,
    },
    {
      path: "/studentdashboard/test",
      element: <><Test /></>,
    },
    {
      path: "/studentdashboard/viewchat",
      element: <><ViewChat /></>,
    },
    {
      path: "/studentdashboard/feedback",
      element: <><Feedback /></>,
    },
  ]);

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
