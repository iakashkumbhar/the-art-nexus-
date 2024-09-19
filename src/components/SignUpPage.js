import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const SignUpPage = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        name: '',
        username: '',
        email: '',
        phone_number: '',
        role: '',
        password: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('http://127.0.0.1:8000/api/signup', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    ...formData,
                    is_artist: formData.role === 'artist' ? true : false
                })
            });
            if (!response.ok) {
                throw new Error('Failed to sign up');
            }
            const data = await response.json();
            toast.success('Registered successfully');
            navigate('/login');
            console.log('Signup successful:', data);
            // Redirect or show success message
        } catch (error) {
            console.error('Error signing up:', error);
            // Show error message
        }
    };

    return (    
        <div className="login-parent">
            <div className="sign-up-container">
                <h2 className="sign-up-heading">Sign Up</h2>
                <form className="sign-up-form" onSubmit={handleSubmit}>
                    <input type="text" placeholder="Full Name" className="sign-up-input" name="name" value={formData.name} onChange={handleChange} />
                    <input type="text" placeholder="Username" className="sign-up-input" name="username" value={formData.username} onChange={handleChange} />
                    <input type="email" placeholder="Email" className="sign-up-input" name="email" value={formData.email} onChange={handleChange} />
                    <input type="text" placeholder="Contact No" className="sign-up-input" name="phone_number" value={formData.phone_number} onChange={handleChange} />
                    <select className="sign-up-input" name="role" value={formData.role} onChange={handleChange}>
                        <option value="">Select Role</option>
                        <option value="artist">Artist</option>
                        <option value="user">User</option>
                    </select>
                    <input type="password" placeholder="Password" className="sign-up-input" name="password" value={formData.password} onChange={handleChange} />
                    <input type="password" placeholder="Confirm Password" className="sign-up-input" name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} />
                    <button type="submit" className="sign-up-button">Sign Up</button>
                </form>
            </div>
        </div>
    );
}

export default SignUpPage;
