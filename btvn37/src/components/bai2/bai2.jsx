import React, { useState } from 'react';
import '../../App.css';

const users = [
    { id: 1, name: 'Nguyễn Văn A' },
    { id: 2, name: 'Trần Thị B' },
    { id: 3, name: 'Lê Văn C' },
];

const UserItem = React.memo(({ user }) => {
    console.log('Render:', user.name);
    return <li className="user-item">{user.name}</li>;
});

function UserListApp() {
    const [score, setScore] = useState(0);

    return (
        <div className="user-list-container"> {/* ✅ Thêm class */}
            <h2 className="user-list-title">📋 Danh sách người dùng</h2>
            <button className="score-button" onClick={() => setScore(score + 1)}>
                Tăng điểm: {score}
            </button>
            <ul className="user-list">
                {users.map((u) => (
                    <UserItem key={u.id} user={u} />
                ))}
            </ul>
        </div>
    );
}

export default UserListApp;
