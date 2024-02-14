// this is the info page that displays the info about the recipes

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Comments from "../components/Comments";
import styles from "../styles/FoodInfo.module.css";

const Info = ({ user }) => {
  const [meal, setMeal] = useState({});
  const { id } = useParams();

  useEffect(() => {
    if (id) {
      const fetchData = async () => {
        try {
          // get single meal using meal id
          const response = await fetch(
            `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
          );
          const data = await response.json();
          // if recipe is there or return an empty array
          setMeal(data.meals[0] || {});
        } catch (e) {
          console.error(e);
        }
      };

      fetchData();
    }
  }, [id]);

  return (
    <div className={styles.container}>
      <div>
        <img src={meal?.strMealThumb} alt={meal?.strMeal} />
      </div>
      <br />
      <h1>{meal?.strMeal}</h1>
      <span>Country: {meal?.strArea}</span>
      <br />
      <p>Instructions:</p>
      <p>{meal?.strInstructions}</p>

      {/* user id comments */}
      <Comments id={id} user={user} />
    </div>
  );
};

export default Info;

// <ul>
//   {searchResults.map((meal) => (
//     <li key={meal.idMeal}>{meal.strMeal}</li>
//   ))}
// </ul>
