import React from "react";

const Profile = ({ user }) => {
  return (
    <div>
      <hi>This is the profile page</hi>
      <h1>Welcome, {user.username}</h1>
      <p>First Name: {user.first_name}</p>
      <p>Last Name: {user.last_name}</p>
      <p>Email: {user.email}</p>
    </div>
  );
};

export default Profile;
