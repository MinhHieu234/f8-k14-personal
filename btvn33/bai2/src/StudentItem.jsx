import React from 'react';

function StudentItem({ name, age, major }) {
    return (
        <div className="student-item">
            <div className="student-name">{name}</div>
            <div className="student-info">Tuổi: {age}</div>
            <div className="student-info">Ngành học: {major}</div>
        </div>
    );
}
export default StudentItem;
