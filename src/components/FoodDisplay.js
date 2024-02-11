// this is where the food data will be displayed
import { Link } from "react-router-dom";

const FoodDisplay = ({ searchResults }) => {
  return (
    <div>
      <ul className="meal-list">
        {searchResults.map((meal) => (
          <li key={meal.idMeal}>
            <img src={meal.strMealThumb} alt={meal.strMeal} />
            {meal.strMeal}

            <br />
            <Link to="/info">
              <button>Info</button>
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
