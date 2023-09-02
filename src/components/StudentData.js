import React, { useState } from 'react';
import './styles.css'
import { useAppContext } from '../AppContext';
import { Link } from 'react-router-dom';
import Dues from './Dues';
import Paid  from './Paid';
const StudentData = () => {
    const studentData = [
        { id: 1, name: 'John Doe', age: 20 },
        { id: 2, name: 'Jane Smith', age: 22 },
        { id: 3, name: 'Bob Johnson', age: 21 },
      ];
      const[dues,setDues] = useState(false);
      const[paid,setPaid] = useState(false);
    
      const showDuesTab =()=>{
          setDues(true);
          setPaid(false)
      }
      const showPaidTab =()=>{
        setPaid(true);
        setDues(false);
    }

      
      
    
      return (
        <div className="student-data-container">
          <div className="header">
            <img src="school-logo.png" alt="School Logo" />
            <h1>School Name</h1>
          </div>
          <h2>Student Data</h2>
          <ul>
            {studentData.map((student) => (
              <li key={student.id}>
                <strong>Name:</strong> {student.name}, <strong>Age:</strong> {student.age}
              </li>
            ))}
          </ul>

          <div className="button-container">
          
            <button className="student-button" onClick={showDuesTab}>Dues</button>
            
            <button className="student-button" onClick={showPaidTab}>Paid</button>
            
          </div>
          {dues ? <Dues />:null}
          {paid ? <Paid />:null}
        </div>
      );
};

export default StudentData;