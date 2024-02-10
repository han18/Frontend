// this is where the food data will be displayed
import { Link } from "react-router-dom";

const FoodDisplay = ({ searchResults }) => {
  return (
    <ul className="meal-list">
      {searchResults.map((meal) => (
        <li key={meal.idMeal}>
          <img src={meal.strMealThumb} alt={meal.strMeal} />
          {meal.strMeal}
          <Link to={`/info`}>
            <button>info</button>
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default FoodDisplay;
