import React, { useState } from "react";
import "./login.css";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  };

  const handleLogin = (e) => {
    e.preventDefault();

    if (!user.email || !user.password) {
      setError("Both fields are required!");
      setSuccess("");
      return;
    }

    // Get users from localStorage
    const users = JSON.parse(localStorage.getItem("users")) || [];

    // Find the matching user in localStorage
    const registeredUser = users.find(
      (u) => u.email === user.email && u.password === user.password
    );

    if (registeredUser) {
      setSuccess("Login successful!");
      setError("");

      // Navigate to home/dashboard after successful login
      setTimeout(() => {
        navigate("/");
      }, 1500);
    } else {
      setError("Invalid credentials or user not registered.");
      setSuccess("");
    }
  };

  return (
    <div className="d-flex">
      <img
        src="https://accounts.practo.com/static/images/illustration.png"
        alt="Illustration"
        className="w-50"
      />
      <div className="login-container">
        <div className="login">
          <form className="login-form" onSubmit={handleLogin}>
            <span className="fs-6">Email Address</span>
            <br />
            <input
              type="email"
              name="email"
              value={user.email}
              placeholder="Enter your email"
              onChange={handleChange}
              className="p-2 w-75"
            />
            <br />
            <span className="fs-6">Password</span>
            <br />
            <input
              type="password"
              name="password"
              value={user.password}
              placeholder="Enter your password"
              onChange={handleChange}
              className="p-2 w-75"
            />
            <br />
            <input type="checkbox" />
            <label className="label">Remember me for 30 days</label>
            <br />
            {error && <p className="error">{error}</p>}
            {success && <p className="success">{success}</p>}
            <button type="submit" className="btn btn-primary">
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
