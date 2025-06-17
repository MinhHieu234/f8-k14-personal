import React from 'react';
import StudentItem from './StudentItem';

function StudentList({ students }) {
    return (
        <div>
            {students.map((student) => (
                <StudentItem
                    key={student.id}
                    name={student.name}
                    age={student.age}
                    major={student.major}
                />
            ))}
        </div>
    );
}
export default StudentList;
