import React, { useState, useEffect } from "react";
import FoodSearch from "./components/FoodSearch";
import "./styles/FoodForm.module.css";

const App = () => {
  const [searchTerm, setSearchTerm] = useState("a");
  const [searchResults, setSearchResults] = useState([]);
};

export default App;
