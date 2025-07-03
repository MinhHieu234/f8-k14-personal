import React, { useEffect, useState } from 'react';
import api from '../services/api';

const Post = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        api.get('/post/')
            .then((res) => setPosts(res.data))
            .catch((err) => console.error('Lỗi :', err));
    }, []);

    return (
        <div style={{ padding: '40px' }}>
            <h1>Post</h1>
            {posts.length > 0 ? (
                <ul>
                    {posts.map((item, idx) => (
                        <li key={idx}>{JSON.stringify(item)}</li>
                    ))}
                </ul>
            ) : (
                <p>Abc...</p>
            )}
        </div>
    );
};

export default Post;
