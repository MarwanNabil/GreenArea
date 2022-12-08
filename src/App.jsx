//utilities
import { createBrowserRouter, RouterProvider } from "react-router-dom";

//components
import NavBar from "./components/NavBar";

//Pages
import HomePage from "./pages/HomePage";
import AdminPage from "./pages/admin/AdminPage";

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
  ]);

  return (
    <div>
      <NavBar />
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
