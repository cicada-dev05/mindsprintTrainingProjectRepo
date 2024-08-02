import axios from 'axios';
import React, { useState } from 'react'

// import './LoginSignUp.css'

import {  toast } from "react-toastify";
export const AddCourse = () => {

    const [course, setCourse ] = useState({
        courseName:''
    })
    const handleAddCourse = async(e)=>{
        
        e.preventDefault();
        try {
            const resp = await axios.post('http://localhost:8080/api/courses/',course);
            if(resp.status == 200) toast("Course Added Successfully")
                setCourse({
                    courseName:''
                })
            console.log(resp);
        } catch (error) {
            
        }
    }
  return (
    <div>
        <div className='container'>
            <h2>Add Course</h2>
            <form onSubmit={handleAddCourse}>
                <input type='text'
                onChange={(e)=>setCourse({...course,courseName:e.target.value})}
                value={course.courseName}
                 placeholder='enter course name'/>

                <button className='btn btn-danger'>Add </button>
            </form>
        </div>
    </div>
  )
}
