import axios from 'axios';
import React from 'react'
import { toast } from 'react-toastify';

export const UpdateCourse = (props) => {

  const handleUpdateClick = async () => {
    // e.preventDefault();
    // const id = localStorage.getItem('updateId');
    const resp = await axios.put(
      "http://localhost:8080/api/courses/" + props.updateSet.id,
      props.updateSet
    );
    //localStorage.setItem("updateTrigger", false)
    console.log(resp);

    if (resp.status == 200) {
      toast("Updated Successfully");
      props.getAllCourse();
      props.setUpdateSet(null);
    } else {
      toast("error occured");
    }
  };
  return (
    <div>
      <center>

      <h2>

      updateCourse
      </h2>
      </center>
      <div className="container">
                      <input
                        type="text"
                        value={props.updateSet.courseName}
                        onChange={(e) =>
                          props.setUpdateSet({
                            ...props.updateSet,
                            courseName: e.target.value,
                          })
                        }
                      />
                      <button
                        className="btn btn-danger"
                        onClick={() => handleUpdateClick()}
                      >
                        Update{" "}
                      </button>
                    </div>
    </div>
  )
}
