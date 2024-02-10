// this is where the food data will be displayed

const FoodDisplay = ({ searchResults }) => {
  return (
    <ul className="meal-list">
      {searchResults.map((meal) => (
        <li key={meal.idMeal}>
          <img src={meal.strMealThumb} alt={meal.strMeal} />
          {meal.strMeal}
        </li>
      ))}
    </ul>
  );
};

export default FoodDisplay;
