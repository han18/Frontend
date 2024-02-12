import React from "react";
import { useNavigate } from "react-router-dom";

const Profile = ({ user }) => {
  const navigate = useNavigate();

  if (!user?.email) {
    return navigate("/");
  }

  return (
    <main>
      <div className="container">
        <h1>Welcome, {user.username}</h1>
        <p>First Name: {user.first_name}</p>
        <p>Last Name: {user.last_name}</p>
        <p>Email: {user.email}</p>
      </div>
    </main>
  );
};

export default Profile;
