import React, { useEffect, useState } from 'react'
import { Student } from '../models/students.model';
import { useCreateStudentMutation, useGetStudentsQuery,useGetStudentbyidQuery, useUpdateStudentMutation } from '../features/studentSlice';
import { useNavigate, useParams } from 'react-router-dom';


const AddEdit = () => {
  const [students, setStudents]= useState<Student>(Object)
  const [createStudent] = useCreateStudentMutation()
  const [updateStudent] = useUpdateStudentMutation()

  const [editMode, setEditMode] = useState<boolean>(false);
  
  const navigate = useNavigate();
  const {id} = useParams();
  console.log(id)
  const {data} = useGetStudentbyidQuery(id!);

  console.log(data);
  const handleChange = (e:any) => {
    setStudents({...students, [e.target.name]:e.target.value})
  }
  const handleSubmit = async (e:any) => {
      e.preventDefault();
      if(editMode) {
        await updateStudent(students)
      } else {
        await createStudent(students);
      }
      
      navigate('/');
  }

  useEffect(()=>{
    if(id && data){
      setEditMode(true);
      setStudents({...data})
    } else {
      setEditMode(false);
    }
  }, [id, data]);
  return (
     <div className="container mx-auto">
      <h2>{editMode ? "Update Form" : "Create Form"} </h2>

      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Student Name</label>
          <input
            type="text"
            name="studentName"
            className="form-control"
            onChange={handleChange}
            value={students?.studentName || ""}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Student Email</label>
          <input
            type="email"
            name="studentEmail"
            className="form-control"
            onChange={handleChange}
            value={students?.studentEmail || ""}
          />
        </div>

        <button type="submit" className="btn btn-primary">
          {editMode ? "Update " : "Add "}
        </button>
      </form>
    </div>
  );
  
}

export default AddEdit