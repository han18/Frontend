import React, { useState, useEffect } from "react";
import FoodSearch from "./components/FoodSearch";
import { Route, Routes } from "react-router-dom";
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
        // if recipe is there or return an empty array
        setSearchResults(data.meals || []);
        console.log(data);
      } catch (e) {
        console.error(e);
      }
    };

    fetchData();
  }, [searchTerm]);

  return (
    <div class="container">
      <h1>Meal Search App</h1>
      <FoodSearch setSearchTerm={setSearchTerm} />
      <ul class="meal-list">
        {searchResults.map((meal) => (
          <li key={meal.idMeal}>
            <img src={meal.strMealThumb} alt={meal.strMeal} />
            {meal.strMeal}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
