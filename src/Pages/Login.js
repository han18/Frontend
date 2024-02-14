// this file is the form reflects the users collection schema
import "../styles/Signup.module.css";

import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = ({ setUser }) => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "https://howedible-backend.onrender.com/api/users/login",
        formData
      );
      console.log(response?.data);

      // If success it saves user information to the local storag sets the state, and redirects the user to the profile
      if (response.data?.user?._id) {
        localStorage.setItem("user", JSON.stringify(response.data?.user));
        setUser(response.data?.user);

        // taking the user id from the response and redirecting them to the profile page
        // window.location.href = `/profile/${response.data.user._id}`;
        navigate("/profile");
      } else {
        console.error("Failed to login");
        alert("Incorrect Email or Password.");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="container-auth">
      <form onSubmit={handleSubmit}>
        <h1>Welcome Back</h1>

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
          minLength="5"
          maxLength="50"
          required
          value={formData.password}
          onChange={handleChange}
          placeholder="Enter Password"
          title="minimum 8 characters, maximum 50 characters"
        />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Login;
