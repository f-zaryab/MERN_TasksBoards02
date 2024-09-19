import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RegisterPage from "./pages/(auth)/register";
import LoginPage from "./pages/(auth)/login";
import DashboardPage from "./pages/(dashboard)/dashbaord";
import AddTaskPage from "./pages/(dashboard)/addNewTask";
import DashboardLayout from "./layouts/dashboard";
import HomeLayout from "./layouts/home";
import ErrorPage from "./pages/error";
import "./App.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <RegisterPage />,
      },
      {
        path: "login",
        element: <LoginPage />,
      },
      {
        path: "dashboard",
        element: <DashboardLayout />,
        children: [
          {
            index: true,
            element: <DashboardPage />,
          },
          {
            path: "add",
            element: <AddTaskPage />,
          },
        ],
      },
    ],
  },
  {},
]);

function App() {
  return (
    <div className="app">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;

/*
 <Routes>
        <Route path="/" element={<HomePage />}>
          <Route index element={<RegisterPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="*" element={<ErrorPage />} />
        </Route>
      </Routes>
*/
