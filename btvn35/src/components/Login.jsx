import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();

        if (!email || !password || password.length < 6) {
            alert('Vui lòng nhập đúng email và password (ít nhất 6 ký tự)');
            return;
        }

        try {
            const res = await axios.post('https://8fty49z8qb.execute-api.ap-southeast-1.amazonaws.com/login/', {
                email,
                password,
            });
            localStorage.setItem('access', res.data.access);
            localStorage.setItem('refresh', res.data.refresh);
            navigate('/post');
        } catch (err) {
            alert('Sai tài khoản hoặc mật khẩu!');
        }
    };

    return (
        <div style={{ padding: '50px', maxWidth: '400px', margin: 'auto', textAlign: 'center' }}>
            <h2>Đăng Nhập</h2>
            <form onSubmit={handleLogin}>
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    required
                    onChange={(e) => setEmail(e.target.value)}
                    style={{ width: '100%', padding: '10px', marginBottom: '10px' }}
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    required
                    minLength={6}
                    onChange={(e) => setPassword(e.target.value)}
                    style={{ width: '100%', padding: '10px', marginBottom: '10px' }}
                />
                <button type="submit" style={{ width: '100%', padding: '12px', background: '#ef5350', color: 'white' }}>
                    Login
                </button>
            </form>
        </div>
    );
};

export default Login;
