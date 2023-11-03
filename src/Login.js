import React, { useState } from "react";
import { Button, Form, FormControl } from "react-bootstrap";
import axios from "axios";
import './Login.css';

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Send the login request to the Node.js API
    const response = await axios.post("/api/login", {
      email,
      password,
    });

    // If the login is successful, save the JWT token to local storage
    if (response.status === 200) {
      localStorage.setItem("token", response.data.token);
      // Redirect the user to the protected page
      window.location.href = "/protected";
    } else {
      // Display an error message to the user
      alert("Invalid login credentials");
    }
  };

  return (
    <div className="login-container">
      <Form className="login-form" onSubmit={handleSubmit}>
        <Button className="signin-button" type="button">
          Sign In
        </Button>
        <div className="avatar-container">
          <img className="avatar" src="https://previews.123rf.com/images/robuart/robuart1812/robuart181201644/127190522-social-networking-male-isolated-rounded-circle-icon-vector-persons-avatar-man-profile-of-face.jpg" alt="Avatar" />
        </div>
        <div className="input-container">
          <i className="fas fa-user input-icon"></i>
          <FormControl
            className="form-input"
            type="email"
            placeholder="Username"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="input-container">
          <i className="fas fa-lock input-icon"></i>
          <FormControl
            className="form-input"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <Button className="submit-button" type="submit">
          Login
        </Button>
      </Form>
    </div>
  );
};

export default LoginForm;
