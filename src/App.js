import React, { useState, useEffect } from "react";
import FoodSearch from "./components/FoodSearch";
import FoodDisplay from "./components/FoodDisplay";
import { Route, Routes, Switch } from "react-router-dom";
import Form from "./Pages/Form";
// import "./styles/FoodForm.module.css";
import InfoPage from "./Pages/InfoPage";
import NavBar from "./components/NavBar";
import Profile from "./Pages/Profile";
import Comments from "./components/Comments";

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
    <div className="container">
      <NavBar />
      <h1>Recipe Search App</h1>
      <FoodSearch setSearchTerm={setSearchTerm} />
      <FoodDisplay searchResults={searchResults} />
      <Routes>
        <Route path="/info" element={<InfoPage />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/form" element={<Form />} />
      </Routes>
    </div>
  );
};

export default App;

// return (
//   <div class="container">
//     <h1>Meal Search App</h1>
//     <FoodSearch setSearchTerm={setSearchTerm} />
//     <ul class="meal-list">
//       {searchResults.map((meal) => (
//         <li key={meal.idMeal}>
//           <img src={meal.strMealThumb} alt={meal.strMeal} />
//           {meal.strMeal}
//         </li>
//       ))}
//     </ul>
//     <Routes>
//       <Route path="/info" element={<InfoPage />} />
//     </Routes>
//   </div>
// );
