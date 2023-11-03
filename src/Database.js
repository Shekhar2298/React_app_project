import React, { useState, useEffect } from "react";
import { Table } from "react-bootstrap";
import axios from "axios";
import './Database.css';

function DatabaseTable() {
  const [registrationData, setRegistrationData] = useState([]);

  useEffect(() => {
    // Make an axios request to the Node.js API to get the registration data from the database
    async function getRegistrationData() {
      const response = await axios.get("/api/register");

      if (response.status === 200) {
        setRegistrationData(response.data);
      } else {
        alert("Failed to get registration data");
      }
    }

    getRegistrationData();
  }, []);

  return (
    <div className="table-container">
      <h1>Database Table</h1>
      <Table className="database-table" striped bordered hover>
        <thead>
          <tr>
            <th>Name</th>
            <th>Date of Birth</th>
            <th>Email</th>
            <th>Password</th>
          </tr>
        </thead>
        <tbody>
          {registrationData.map((registration, index) => (
            <tr key={index}>
              <td>{registration.name}</td>
              <td>{registration.dateOfBirth}</td>
              <td>{registration.email}</td>
              <td>{registration.password}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}

export default DatabaseTable;
