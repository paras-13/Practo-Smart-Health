import React, { useState } from "react";
import "./register.css";

const Register = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simple validation
    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match!");
      setSuccess("");
      return;
    }

    if (!formData.username || !formData.email || !formData.password) {
      setError("All fields are required!");
      setSuccess("");
      return;
    }

    setError("");

    // Store user data in localStorage
    const userData = {
      username: formData.username,
      email: formData.email,
      password: formData.password,
    };

    // Check if the user already exists in localStorage
    const existingUsers = JSON.parse(localStorage.getItem("users")) || [];
    if (existingUsers.find((user) => user.email === formData.email)) {
      setError("User already exists!");
      setSuccess("");
      return;
    }

    // Add new user to localStorage
    existingUsers.push(userData);
    localStorage.setItem("users", JSON.stringify(existingUsers));

    setSuccess("Registration successful!");
    console.log("User Registered:", userData);

    // Reset form
    setFormData({
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
    });
  };

  return (
    <div className="d-flex">
      <img
        src="https://accounts.practo.com/static/images/illustration.png"
        className="w-50"
        alt="Illustration"
      />
      <div className="register">
        <h2>Register</h2>
        <form onSubmit={handleSubmit} className="mx-4">
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              name="username"
              value={formData.username}
              onChange={handleChange}
              placeholder="Enter your username"
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter your password"
            />
          </div>

          <div className="form-group">
            <label htmlFor="confirmPassword">Confirm Password</label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              placeholder="Confirm your password"
            />
          </div>

          {error && <p className="error">{error}</p>}
          {success && <p className="success">{success}</p>}

          <button type="submit" className="btn-submit">
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
