import axios from "axios";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import "./DisplayAll.css";
import { UpdateCourse } from "../updateCourse";
export const DisplayAllCourses = () => {
  const [Courses, setCourses] = useState([
    {
      id: "",
      courseName: "",
    },
  ]);
  const [updateSet, setUpdateSet] = useState(null);
  // const [updatedCourse, setUpdatedCourse] = useState({
  //   courseName: "",
  // });

  // console.log(updateSet);

  const getAllCourse = async () => {
    try {
      const fetchData = await axios.get("http://localhost:8080/api/courses/");
      setCourses(fetchData.data);
      // console.log(Courses);
    } catch (error) {
      console.log(error);
    }
  };

  const registerNewCourse = async (cid, sid) => {
    try {
      const resp = await axios.post(
        `http://localhost:3000/api/students/${sid}/addCourse/${cid}`
      );
      console.log(resp);
    } catch (error) {
      console.log(error);
    }
  };
  const removeCourse = async (id) => {
    try {
      const resp = await axios.delete(
        `http://localhost:8080/api/courses/${id}`
      );
      console.log(resp);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getAllCourse();
  }, []);
  return (
    <div>
      <h1 className="head_available">Available Courses</h1>
      <table class="table table-light container">
        <thead>
          <tr>
            <th scope="col">Course Id</th>
            <th scope="col">Course Name</th>
            <th scope="col">Price</th>
            <th scope="col colspan-2">Operration</th>
          </tr>
        </thead>
        <tbody>
          {Courses.map((item, indx) => {
            return (
              <tr key={indx} className="d-flex flex-col " id="course">
                <td>{indx}</td>
                <td className="card-title">{item.courseName}</td>
                <td className="card-text">Course</td>

                {localStorage.getItem("role") == 1 && (
                  <td>
                    {" "}
                    <button
                      className="btn btn-success"
                      onClick={(e) =>
                        registerNewCourse(
                          item.id,
                          localStorage.getItem("userId")
                        )
                      }
                    >
                      Buy This course
                    </button>
                  </td>
                )}
                <td>
                  {localStorage.getItem("role") == 2 && (
                    <button
                      className="btn btn-success"
                      onClick={(e) => removeCourse(item.id)}
                    >
                      Remove This Course
                    </button>
                  )}
                </td>
                <td>
                  {localStorage.getItem("role") == 2 && (
                    <button
                      className="btn btn-success"
                      onClick={() => setUpdateSet(item)}
                    >
                      Update Course
                    </button>
                  )}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      {updateSet && <UpdateCourse setUpdateSet={setUpdateSet} getAllCourse={getAllCourse} updateSet={updateSet}/>}
    </div>
  );
};
