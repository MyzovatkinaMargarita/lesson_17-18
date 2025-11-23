import { createBrowserRouter } from "react-router-dom";
import AppLayout from "../layouts/AppLayout";
import LoginPage from "../pages/login/LoginPage";
import StudentPage from "../pages/student/StudentPage";
import AdminPage from "../pages/admin/AdminPage";
import NotFoundPage from "../pages/errors/NotFoundPage";
import StudentTestPage from "./pages/student/StudentTestPage";
import StudentTests from "./pages/student/StudentTests";
export const router = createBrowserRouter([
{
  path: "student",
  element: <StudentLayout />,
  children: [
    { index: true, element: <Navigate to="tests" replace /> },
    { path: "tests", element: <StudentTestsPage /> },
    { path: "statistics", element: <StudentStatsPage /> },
    { path: "profile", element: <StudentProfilePage /> },
  ],
}


