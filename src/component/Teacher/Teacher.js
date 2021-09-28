import React from 'react';
import './Teacher.css'

const Teacher = (props) => {
    const {name, picture, salary, age,phone,gender }=props.teacher;
    return (
        <div className="teacher">
            <div className="teacher-sub">
                <div className="teacher-details">
                    <div className="teacher-img">
                    <img src={picture} alt="" />
                    </div>
                   
                    <h2>Name: {name}</h2>
                    <h3>Age: {age}</h3>
                    <h4>Gender: {gender}</h4>
                    <h4>Phone: {phone}</h4>
                    <h4>Salary: {salary}</h4>
                    <button onClick={()=>props.salarryAd(props.teacher)}>Salary Add</button>
                </div>
                
            </div>
        

        </div>
    );
};

export default Teacher;