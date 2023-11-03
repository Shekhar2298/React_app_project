import React, { useState } from "react";
import { Button, Form, FormControl } from "react-bootstrap";
import axios from "axios";
import './Registration.css';

function RegistrationForm() {
  const [name, setName] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Send the registration request to the Node.js API
    try {
      const response = await axios.post("/api/register", {
        name,
        dateOfBirth,
        email,
        password,
      });
  
      if (response.status === 200) {
        // Registration was successful, redirect the user to the database page
        window.location.href = "/database";
      } else {
        // Registration failed
        alert("Registration failed");
      }
    } catch (error) {
      console.error(error);
      alert("Registration failed");
    }
  
  };

  return (
    <div className="form-container"> {/* Apply the background color */}
      <Form onSubmit={handleSubmit}>
        <div className="form-group">
          <label className="label-text">Name:</label>
          <FormControl
            type="text"
            id="name"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="form-control" 
          />
        </div>
        <div className="form-group">
          <label className="label-text">Date of Birth:</label>
          <FormControl
            type="date"
            id="dateOfBirth"
            placeholder="Date of Birth"
            value={dateOfBirth}
            onChange={(e) => setDateOfBirth(e.target.value)}
            className="form-control" 
          />
        </div>
        <div className="form-group">
          <label className="label-text">Email:</label>
          <FormControl
            type="email"
            id="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="form-control" 
          />
        </div>
        <div className="form-group">
          <label className="label-text">Password:</label>
          <FormControl
            type="password"
            id="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="form-control" 
          />
        </div>
        <Button type="submit" className="btn-register">Register</Button> {/* Apply the button styles */}
      </Form>
    </div>
  );
}

export default RegistrationForm;
