import React from 'react';
import './Teacher.css'

const Teacher = (props) => {
    const {name, picture, salary, age,phone,gender }=props.teacher;
    console.log(props.teacher);
    return (
        <div className="teacher">
            <div className="teacher-sub">
                <div className="teacher-details">
                    <img src={picture} alt="" />
                    <h2>Name: {name}</h2>
                    <h3>Age: {age}</h3>
                    <h4>Gender: {gender}</h4>
                    <h4>Phone: {phone}</h4>
                    <h4>Salary: {salary}</h4>
                </div>
                
            </div>
            <div className="teacher-salary">
               
            </div>

        </div>
    );
};

export default Teacher;