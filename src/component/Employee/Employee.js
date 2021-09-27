import React, { useEffect, useState } from 'react';
import Teacher from '../Teacher/Teacher';
import './Employee.css'

const Employee = () => {
const [teachers, setTeacher] = useState([]);
useEffect(()=>{
    fetch('./teacher.json')
    .then(res => res.json())
    .then(data => setTeacher(data))
},[])

    return (
        <div className="container">
            <div className="header">
                <h1>Teachers are the real heroes</h1>
                <p>the ones who went the extra mile to motivate us and tell us that we were special.</p>
                <h1>Total Salary : 5 Milion</h1>
            </div>
            <div className="teacher-section">
                    <div className="teachers">
                {
                    teachers.map(teacher => <Teacher 
                        key = {teacher._id}
                        teacher ={teacher}
                        ></Teacher>)
                }
                </div>
                <div className="teacher-sallary">
                    <h2>kita</h2>
                </div>
            </div>
            

        </div>
    );
};

export default Employee;