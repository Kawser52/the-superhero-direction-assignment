import React from 'react';
import './Teacher.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faDollarSign } from '@fortawesome/free-solid-svg-icons'

const Teacher = (props) => {
    const element = <FontAwesomeIcon icon={faDollarSign} />
    const {name, picture, salary, age,phone,gender }=props.teacher;
    return (
        <div className="teacher">
            <div className="teacher-sub">
                <div className="teacher-details">
                    <div className="teacher-img">
                            <img src={picture} alt="" />
                    </div>
                   <div>
                    <h4>Name: {name}</h4>
                    <p>Age: {age}</p>
                    <p>Gender: {gender}</p>
                    <p>Phone: {phone}</p>
                    <h4>Salary: $ {salary}</h4>
                    <button className="custom-button" onClick={()=>props.salarryAd(props.teacher)}>{element} Salary Add</button>
                   </div>
                   
                </div>
                
            </div>
        

        </div>
    );
};

export default Teacher;