import React from "react";
import { useNavigate } from "react-router-dom";

const Profile = ({ user }) => {
  const navigate = useNavigate();

  // the optional chaining ?. if for some reason the id property is not present in the response object, then no error will be given.
  // if user is logged in display the welcome message
  if (!user?.email) {
    // if email does exist in the user object
    return navigate("/");
  }

  return (
    <main>
      <div
        className="container"
        style={{ margin: "80px", color: "#262626", fontSize: "20px" }}
      >
        <h1>Welcome, {user.first_name}</h1>
        <p>Username: {user.username}</p>
        <p>First Name: {user.first_name}</p>
        <p>Last Name: {user.last_name}</p>
        <p>Email: {user.email}</p>
        <br></br>
        <h3>{user.first_name}, we are excited for you to try new recipes!</h3>
      </div>
    </main>
  );
};

export default Profile;
