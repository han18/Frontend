import React, { useState, useEffect } from "react";
import FoodSearch from "./components/FoodSearch";
import "./styles/FoodForm.module.css";

const App = () => {
  const [searchTerm, setSearchTerm] = useState("a");
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://www.themealdb.com/api/json/v1/1/search.php?f=${searchTerm}`
        );
        const data = await response.json();
        setSearchResults(data.meals || []);
        console.log(data);
      } catch (error) {
        console.error("Error");
      }
    };

    fetchData();
  }, [searchTerm]);
};

export default App;
