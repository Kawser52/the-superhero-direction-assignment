import React, { useEffect, useState } from 'react';
import Teacher from '../Teacher/Teacher';
import Teachernumber from '../TeacherNumber/Teachernumber';
import './Employee.css'

const Employee = () => {
const [teachers, setTeacher] = useState([]);
const [teacherNumber, setteacherNumber] =useState([]);
useEffect(()=>{
    fetch('./teacher.json')
    .then(res => res.json())
    .then(data => setTeacher(data))
},[])
const salaryAd = (teacher) =>{
 const newCart = [...teacherNumber, teacher];
 setteacherNumber(newCart);
}

    return (
        <div className="container">
            <div className="teacher-section">
                <div className="teachers">
                {
                    teachers.map(teacher => <Teacher 
                        key = {teacher._id}
                        teacher ={teacher}
                        salarryAd = {salaryAd}
                        ></Teacher>)
                }
                </div>
                <div className="teacher-salary">
                    <Teachernumber teacherNumber = {teacherNumber}></Teachernumber>
                </div>
            </div>
            

        </div>
    );
};

export default Employee;