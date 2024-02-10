import React from "react";

const FoodSearch = ({ setSearchTerm }) => {
  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div className="container">
      <label htmlFor="searchInput">Search:</label>
      <input
        className="items"
        type="text"
        id="searchInput"
        onChange={handleInputChange}
        placeholder="Enter search query"
      />
    </div>
  );
};

export default FoodSearch;
