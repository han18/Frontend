const FoodSearch = ({ setSearchTerm }) => {
  // to handle the search input change
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
        placeholder="Enter a letter search query"
      />
    </div>
  );
};

export default FoodSearch;
