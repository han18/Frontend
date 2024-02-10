const FoodSearch = ({ setSearchTerm }) => {
  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
  };
};

export default FoodSearch;
