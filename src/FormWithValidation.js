import React, { useState } from 'react';

const FormWithValidation = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: '',
        dob: '',
    });

    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const validate = () => {
        let errors = {};
        if (!formData.firstName) errors.firstName = "First name is required";
        if (!formData.lastName) errors.lastName = "Last name is required";
        if (!formData.email) {
            errors.email = "Email is required";
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            errors.email = "Email is invalid";
        }
        if (!formData.password) errors.password = "Password is required";
        if (formData.password !== formData.confirmPassword) {
            errors.confirmPassword = "Passwords do not match";
        }
        if (!formData.dob) errors.dob = "Date of birth is required";
        setErrors(errors);
        return Object.keys(errors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validate()) {
            alert("Form submitted successfully!");
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>First Name:</label>
                <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                />
                {errors.firstName && <span style={{ color: 'red' }}>{errors.firstName}</span>}
            </div>
            <div>
                <label>Last Name:</label>
                <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                />
                {errors.lastName && <span style={{ color: 'red' }}>{errors.lastName}</span>}
            </div>
            <div>
                <label>Email:</label>
                <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                />
                {errors.email && <span style={{ color: 'red' }}>{errors.email}</span>}
            </div>
            <div>
                <label>Password:</label>
                <input
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                />
                {errors.password && <span style={{ color: 'red' }}>{errors.password}</span>}
            </div>
            <div>
                <label>Confirm Password:</label>
                <input
                    type="password"
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                />
                {errors.confirmPassword && <span style={{ color: 'red' }}>{errors.confirmPassword}</span>}
            </div>
            <div>
                <label>Date of Birth:</label>
                <input
                    type="date"
                    name="dob"
                    value={formData.dob}
                    onChange={handleChange}
                />
                {errors.dob && <span style={{ color: 'red' }}>{errors.dob}</span>}
            </div>
            <button type="submit">Submit</button>
        </form>
    );
};

export default FormWithValidation;
