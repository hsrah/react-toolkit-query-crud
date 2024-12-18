import React from 'react'
import { useGetStudentsQuery,useDeleteStudentMutation } from '../features/studentSlice';
import { Link } from 'react-router-dom';


function Read() {
    const {data: students, isError,isFetching,isLoading,isSuccess, error} = useGetStudentsQuery();
    
    const [ deleteStudent ] = useDeleteStudentMutation();
  return (
    <div class="row">
        {isLoading && <span>Loading...</span>}
        {isError && <span>Something went wrong</span>}

        {isSuccess &&
          students?.map((student) => (
            <div key={student?.id} className="col-3">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">{student?.studentName}</h5>
                  <h6 className="card-subtitle mb-2 text-muted">
                    {student?.studentEmail}
                  </h6>
                  <button className="card-link" onClick={()=>deleteStudent(student?.id)}> Delete</button>
                  <button className="card-link">
                    <Link to={`edit/${student?.id}`}>Edit</Link>
                  </button>
                </div>
              </div>
            </div>
          ))}
      
    </div>
  )
}

export default Read
