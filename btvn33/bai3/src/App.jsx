import React, { useState, useEffect } from 'react';
import PostList from './PostList';
import './App.css';
function App() {
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        const fakeData = [
            { id: 1, title: 'Giới thiệu React', content: 'React là thư viện JavaScript giúp xây dựng giao diện.' },
            { id: 2, title: 'useState là gì?', content: 'useState dùng để quản lý state trong function component.' },
            { id: 3, title: 'useEffect là gì?', content: 'useEffect dùng để xử lý side-effect như gọi API.' }
        ];

        setTimeout(() => {
            setPosts(fakeData);
        }, 1000);
    }, []);

    return (
        <div className="app-container">
            <h1 className="title">Danh sách bài viết</h1>
            <PostList posts={posts} />
        </div>
    );
}
export default App;
