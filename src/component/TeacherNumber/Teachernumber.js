import React from 'react';

const Teachernumber = (props) => {
    const {teacherNumber} = props;
    let total = 0;

    for (const product of teacherNumber){
        total = total + product.salary; 
    }
    return (
        <div>
            <h5>Total People: {props.teacherNumber.length}</h5>
            {
                teacherNumber.map(teacherName =><p>Name: {teacherName.name}</p>)
            }
            <h5>Total Salary: {total}</h5>

        </div>
    );
};

export default Teachernumber;