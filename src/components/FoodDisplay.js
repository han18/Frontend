// this is where the food data will be displayed
import "../styles/FoodForm.module.css";

import { Link } from "react-router-dom";

const FoodDisplay = ({ searchResults }) => {
  return (
    <div className="foods">
      <ul className="meal-list">
        {searchResults.map((meal) => (
          <li key={meal.idMeal}>
            <img src={meal.strMealThumb} alt={meal.strMeal} />
            {meal.strMeal}
            {/* linking to the info page when the view button is clicked */}
            <br />
            <Link to={`/info/${meal?.idMeal}`}>
              <button>View Recipe</button>
            </Link>
          </li>
        ))}
      </ul>
      <div>
        {searchResults.map((link) => (
          <div key={link.idMeal}>{/* <h>{link.strArea}</h> */}</div>
        ))}
      </div>
    </div>
  );
};

export default FoodDisplay;

{
  // this is old code
  /* <Link to="/info">
  <button>info</button>
</Link>;

{
  <ul className="meal-list">
    {searchResults.map((meal) => (
      <li key={meal.idMeal}>
        <img src={meal.strMealThumb} alt={meal.strMeal} />
        {meal.strMeal}
        <br />
        <Link to="/info">
          <h1>Hello</h1>
        </Link>
      </li>
    ))}
  </ul>;
} */
}
