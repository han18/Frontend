// this file is where the food search component is rendered
import { useState } from "react";

function FoodSearch() {
  // State to hold the data of our form
  const [formData, setFormData] = useState({
    searchterm: "",
  });

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSubmit = (event) => {
    // Prevent page from refreshing on form submission
    event.preventDefault();
    // Pass the search term to moviesearch prop, which is App's getMovie function
    props.moviesearch(formData.searchterm);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          className="input"
          type="text"
          name="searchterm"
          placeholder="search movie here....."
          onChange={handleChange}
          value={formData.searchterm}
        />
        <input type="submit" value="submit" />
      </form>
    </div>
  );
}

export default FoodSearch;
