import React from "react";

function Form() {
  return (
    <div>
      <form>
        <label for="firstName">First Name:</label>
        <input type="text" id="firstName" name="firstName" required />

        <label for="lastName">Last Name:</label>
        <input type="text" id="firstName" name="firstName" required />

        <label for="email">Email:</label>
        <input type="email" id="email" name="email" required />
        <label for="password">Password:</label>
        <input type="password" id="password" name="password" required />
      </form>
    </div>
  );
}

export default Form;
