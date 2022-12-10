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

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomePage />,
    },
    {
      path: "/admin",
      element: <AdminPage />,
    },
    {
      path: "/council",
      element: <CouncilPage />,
    },
    {
      path: "/council/student-score",
      element: <StudentScore />,
    },
    {
      path: "/council/system-feedback",
      element: <SystemFeedback />,
    },
    {
      path: "/council/chat",
      element: <CouncilChat />,
    },
    {
      path: "/council/profile",
      element: <CouncilProfile />,
    },
  ]);

  return (
    <div>
      <NavBar />
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
