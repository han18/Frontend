// this file is the form file from that reflect the users collection schema
import "../styles/button.css";

import React, { useState } from "react";
import axios from "axios";

const Form = () => {
  const [formData, setFormData] = useState({
    username: "",
    first_name: "",
    last_name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:3100/api/users",
        formData
      );

      if (response.status === 201) {
        console.log("User added successfully", response.data.user);
        // You may redirect or perform other actions upon successful user addition
      } else {
        console.error("Failed to add user");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div>
      <form>
        <h1>Create an account</h1>
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          name="username"
          minLength="3"
          maxLength="15"
          required
          value={formData.username}
          onChange={handleChange}
          placeholder="Enter Username"
          title="minimum 3 characters, maximum 15 characters"
        />

        <label htmlFor="firstName">First Name:</label>
        <input
          type="text"
          id="firstName"
          name="first_name"
          required
          value={formData.first_name}
          onChange={handleChange}
          placeholder="Enter First Name"
        />

        <label htmlFor="lastName">Last Name:</label>
        <input
          type="text"
          id="lastName"
          name="last_name"
          required
          value={formData.last_name}
          onChange={handleChange}
          placeholder="Enter Last Name"
        />

        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          required
          value={formData.email}
          onChange={handleChange}
          placeholder="Enter Email"
        />

        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          name="password"
          minLength="8"
          maxLength="50"
          required
          value={formData.password}
          onChange={handleChange}
          placeholder="Enter Password"
          title="minimum 8 characters, maximum 50 characters"
        />

        <button onSubmit={handleSubmit} type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Form;
