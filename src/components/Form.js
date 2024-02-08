// this file is the form file from that reflect the users collection schema
import "../styles/button.css";

import React, { useState } from "react";

const Form = () => {
  const [formData, setFormData] = useState({});

  return (
    <div>
      <form onSubmit={handleSubmit}>
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
        />

        <label htmlFor="firstName">First Name:</label>
        <input
          type="text"
          id="firstName"
          name="first_name"
          required
          value={formData.first_name}
          onChange={handleChange}
        />

        <label htmlFor="lastName">Last Name:</label>
        <input
          type="text"
          id="lastName"
          name="last_name"
          required
          value={formData.last_name}
          onChange={handleChange}
        />

        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          required
          value={formData.email}
          onChange={handleChange}
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
        />

        <button onClick={setFormData} type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Form;
