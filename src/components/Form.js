// this file is the form file from that reflect the users collection schema
import "../styles/button.css";

function Form() {
  return (
    <div>
      <form>
        <label for="username">Username:</label>
        <input
          type="text"
          id="username"
          name="username"
          minlength="3"
          maxlength="15"
          required
        />

        <label for="firstName">First Name:</label>
        <input type="text" id="firstName" name="first_name" required />

        <label for="lastName">Last Name:</label>
        <input type="text" id="lastName" name="last_name" required />

        <label for="email">Email:</label>
        <input type="email" id="email" name="email" required />

        <label for="password">Password:</label>
        <input
          type="password"
          id="password"
          name="password"
          minlength="8"
          maxlength="50"
          required
        />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Form;
