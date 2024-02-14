import React, { useEffect, useState } from "react";
import FoodDisplay from "../components/FoodDisplay";
import FoodSearch from "../components/FoodSearch";

const Home = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://www.themealdb.com/api/json/v1/1/search.php?f=${searchTerm}`
        );
        const data = await response.json();
        console.log("data", data);
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
    <>
      <h1 style={{ color: "green", fontFamily: "fantasy", marginLeft: "30px" }}>
        Recipe Search App
      </h1>
      <FoodSearch setSearchTerm={setSearchTerm} />
      <FoodDisplay searchResults={searchResults} />
    </>
  );
};

export default Home;
