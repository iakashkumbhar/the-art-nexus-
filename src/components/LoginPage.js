// LoginPage.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiEye, FiEyeOff } from 'react-icons/fi';
import '../styles.css';

const LoginPage = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false); // State to toggle password visibility

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('http://127.0.0.1:8000/api/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ username, password }),
            });

            if (!response.ok) {
                const data = await response.json();
                throw new Error(data.message);
            }

            const data = await response.json();
            localStorage.setItem('user', JSON.stringify(data.user));
            localStorage.setItem('isLoggedIn', true);
            // Show toaster notification

            window.location.href = '/';
            setTimeout(() => {
                window.location.reload();
            }, 2000);


        } catch (error) {
            alert(error.message);
            console.error('Error fetching data:', error);
        }
    };


    const handleForgetPassword = async (e) => {
        try {
            const response = await fetch('http://127.0.0.1:8000/api/forgot-password', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            if (!response.ok) {
                throw new Error('Failed to login');
            }

            const data = await response.json();
            alert(data.message);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword); // Toggle the showPassword state
    };

    return (
        <div className="login-parent">
            <div className="login-container">
                <h2 className="">Login</h2>
                <form className="">
                    <input
                        type="text"
                        placeholder="Username"
                        className=""
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                    <div className="password-input-container">
                        <input
                            type={showPassword ? 'text' : 'password'}
                            placeholder="Password"
                            className=""
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        {/* Toggle password visibility icon */}
                        {showPassword ? (
                            <FiEyeOff onClick={togglePasswordVisibility} />
                        ) : (
                            <FiEye onClick={togglePasswordVisibility} />
                        )}
                    </div>
                    <Link onClick={handleForgetPassword} className="forget-password">Forget Password</Link>
                    <button type="submit" className="button" onClick={handleLogin}>Login</button>
                    <span className="description">
                        This site is protected by reCAPTCHA and the GooglePrivacy Policy andTerms of Service apply.
                    </span>
                </form>
                <div className="signup-div">
                    <span>Don't have an account?</span>
                    <Link to="/signup" className="sign-up">REGISTER</Link>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;
