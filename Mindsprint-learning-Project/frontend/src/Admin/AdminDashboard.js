import React from "react";
import { AddCourse } from "./AddCourse";
import { Link, Navigate, Route, Routes } from "react-router-dom";
import { StudentManagement } from "./StudentManagement";
import { NotFound } from "../404";
import { AdminLandingPage } from "./AdminLandingPage";
import "./AdminDb.css";

function ProtectedRoute({ isAuthenticated, children }) {
  return isAuthenticated ? children : <Navigate to="/login" />;
}

export const AdminDashboard = () => {
  const isAuthenticated = localStorage.getItem('loggedIn')?true:false
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <div className='className="collapse navbar-collapse" '>
            <h1 style={{ textAlign: "center" }}>Admin Dashboard</h1>
            <ul className="navbar-nav">
              {/* <ProtectedRoute isAuthenticated={isAuthenticated}> */}

              <li className="nav-item">
                <Link className="nav-link active" to="course">
                  Course Management
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="student">
                  User Management
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to=""></Link>
              </li>

              {/* </ProtectedRoute> */}
            </ul>
          </div>
        </div>

        <Routes>
          <Route path="" element={<AdminLandingPage />} />
          <Route
            path="student"
            element={
              <ProtectedRoute isAuthenticated={isAuthenticated}>
                <StudentManagement />
              </ProtectedRoute>
            }
          />
          <Route
            path="course"
            element={
              <ProtectedRoute isAuthenticated={isAuthenticated}>
                <AddCourse />
              </ProtectedRoute>
            }
          />
          {/* <Route path='adminDashboard/addcourse' element={<AddCourse/> }/> */}
          <Route path="*" element={<NotFound />} />
        </Routes>
        {/* <AddCourse/> */}
        <br></br>
      </nav>
    </div>
  );
};
