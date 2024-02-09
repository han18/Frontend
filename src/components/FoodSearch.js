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

  return <div>FoodSearch</div>;
}

export default FoodSearch;
