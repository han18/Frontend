// import "./App.css";
import { useEffect, useState } from "react";
import Form from "./components/Form";

function App() {
  const [meals, setMeals] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async (searchTerm) => {
      try {
        const response = await fetch(
          `https://www.themealdb.com/api/json/v1/1/search.php?f=a${searchTerm}`
        );
        console.log(response);
        const data = await response.json();
        setMeals(data.meals);
        console.log(data);
        setLoading(false);
      } catch (error) {
        console.error();
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  console.log(meals);

  return <div></div>;
}
export default App;
