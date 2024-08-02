import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export const StudentLogged = (props) => {
  const [UserData, setUserData] = useState();
const id = localStorage.getItem('userId')
const getAllRegisteredCourse = async () => {
    try {
      const fetchData = await axios.get(
        `http://localhost:8080/api/students/` + id
      );
      setUserData(fetchData.data);
      // console.log(UserData);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    setTimeout(() => {
        getAllRegisteredCourse();
      }, 1000);

  }, [])
  
  return (
    <>
      {UserData && <h1>Welcome, {UserData.studentName}</h1>}
      {UserData && <h4>{UserData.email}</h4>}
      {UserData &&
        UserData.courses.map((item, indx) => {
          return (
            <div key={indx} className="d-flex flex-col ">
              <div className="card " style={{ width: "18rem" }}>
                <div className="card-body">
                  <h5 className="card-title">{item.courseName}</h5>
                  <p className="card-text">lorem</p>
                </div>
              </div>
            </div>
          );
        })}
    </>
  );
};
