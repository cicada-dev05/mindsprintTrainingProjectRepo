import "./App.css";
import { DisplayAllCourses } from "./Course/CourseList/DisplayAllCourses";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./Component/Home";
import ReactDOM from "react-dom/client";
import LoginPage from "./Admin/LoginPage";
import { StudentLogged } from "./Students/StudentLogged";
import { useState } from "react";
import { ViewRegisteredCourses } from "./Students/ViewRegisteredCourses";
import { AdminDashboard } from "./Admin/AdminDashboard";

import { ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
import { NotFound } from "./404";

export default function App() {
  const [Logged, setLogged] = useState(false);
  // console.log(Logged);
  const role = localStorage.getItem("role");
  // console.log(role);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home Logged={Logged} />}>
          <Route path="courses" element={<DisplayAllCourses />} />
          {role === "2" && (
            <Route path="adminDashboard/*" element={<AdminDashboard />} />
          )}
          <Route path="/rCourse" element={<ViewRegisteredCourses />} />

          <Route path="/login" element={<LoginPage setLogged={setLogged} />} />
          {role === "1" && (
            <Route
              path="/students/"
              element={<StudentLogged Logged={Logged} />}
            />
          )}
      
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>

      <ToastContainer />
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
