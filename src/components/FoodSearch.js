import "../styles/FoodForm.module.css";

const FoodSearch = ({ setSearchTerm }) => {
  // to handle the search input change
  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
  };

  // this is the input to search for recipes
  return (
    <div className="container">
      <label htmlFor="searchInput">Search:</label>
      <input
        className="items"
        type="text"
        id="searchInput"
        onChange={handleInputChange}
        placeholder="Enter a letter to search for recipes"
      />
    </div>
  );
};

export default FoodSearch;
