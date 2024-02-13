import React from "react";
import { useNavigate } from "react-router-dom";

const Profile = ({ user }) => {
  const navigate = useNavigate();

  // if user is not logged in, redirect them to the home page.. if user is logged in display the welcoming message
  if (!user?.email) {
    return navigate("/");
  }

  return (
    <main>
      <div
        className="container"
        style={{ margin: "80px", color: "#262626", fontSize: "20px" }}
      >
        <h1>Welcome, {user.username}</h1>
        <p>First Name: {user.first_name}</p>
        <p>Last Name: {user.last_name}</p>
        <p>Email: {user.email}</p>
        <br></br>
        <p>{user.username} We are excited for you to try new recipes!</p>
      </div>
    </main>
  );
};

export default Profile;
