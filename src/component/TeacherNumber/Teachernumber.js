import React from 'react';
import './Teachernumber.css'
const Teachernumber = (props) => {
    const {teacherNumber} = props;
    let total = 0;

    for (const teacher of teacherNumber){
        total = total + teacher.salary; 
    }
    return (
        <div className="slary-section"> 
            <h5 className="">Total People: {props.teacherNumber.length}</h5>
            {
                teacherNumber.map(teacherName =><p>Name: {teacherName.name}</p>)
            }
            <h5 className="custom-style">Total Salary:$ {total}</h5>

        </div>
    );
};

export default Teachernumber;