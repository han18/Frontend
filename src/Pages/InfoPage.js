// this is the info page that displays the info about the recipes
import { Link } from "react-router-dom";

const Info = ({ searchResults }) => {
  return (
    <div>
      <ul>
        {searchResults.map((meal) => (
          <li key={meal.idMeal}>{meal.strMeal}</li>
        ))}
      </ul>
    </div>
  );
};

export default Info;
