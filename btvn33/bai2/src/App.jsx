import React, { useState } from 'react';
import StudentList from './StudentList';
import './App.css';

function App() {
    const [students] = useState([
        { id: 1, name: 'Nguyễn Văn An', age: 20, major: 'CNTT' },
        { id: 2, name: 'Lê Thị Bích', age: 21, major: 'Marketing' },
        { id: 3, name: 'Trần Quốc Cường', age: 22, major: 'Kế toán' }
    ]);

    return (
        <div className="app-container">
            <h1 className="title">Danh sách sinh viên</h1>
            <StudentList students={students} />
        </div>
    );
}
export default App;
