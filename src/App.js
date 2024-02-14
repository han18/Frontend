import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Form from "./Pages/Form";
// import "./styles/FoodForm.module.css";
import "./App.css";
import Home from "./Pages/Home";
import InfoPage from "./Pages/InfoPage";
import Login from "./Pages/Login";
import Profile from "./Pages/Profile";
import NavBar from "./components/NavBar";

const App = () => {
  const [user, setUser] = useState({});

  // also used to set the user in the local storage
  useEffect(() => {
    let userData = localStorage.getItem("user");
    userData = JSON.parse(userData);
    if (userData?.email) {
      setUser(userData);
    }
  }, []);

  return (
    <div className="container">
      <NavBar user={user} setUser={setUser} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/info/:id" element={<InfoPage user={user} />} />
        <Route
          path="/profile"
          element={<Profile user={user} setUser={setUser} />}
        />
        <Route path="/form" element={<Form user={user} setUser={setUser} />} />
        <Route
          path="/login"
          element={<Login user={user} setUser={setUser} />}
        />
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
