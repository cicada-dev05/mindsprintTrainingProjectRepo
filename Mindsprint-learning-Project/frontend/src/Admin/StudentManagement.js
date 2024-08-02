import axios from 'axios';
import React, { useEffect, useState } from 'react'

export const StudentManagement = () => {
const [StudentList , setStudentList ] = useState(null)
    const getAllStudent = async () => {
        try {
            
          const fetchData = await axios.get("http://localhost:8080/api/students");
          setStudentList(fetchData.data);
          // console.log(Courses);
        } catch (error) {
          console.log(error);
        }
      };

      useEffect(() => {
        getAllStudent();
      }, []);
    // console.log(StudentList);
    
  return (
    <div className='container'>
        <table class="table">
  <thead>
    <tr>
      <th scope="col">User Id</th>
      <th scope="col">User name</th>
      <th scope="col">user Email</th>
      <th scope="col">No of course Registered</th>
    </tr>
  </thead>
  <tbody class="table-group-divider">
   {StudentList && StudentList.map((item,indx)=>  (

    <tr key={indx}>
      <th scope="row">{item.id}</th>
      <td>{item.studentName}</td>
      <td>{item.email}</td>
      <td>{item.courses.length}</td>
    </tr>)
    
   )}
   
  </tbody>
</table>
    </div>
  )
}
