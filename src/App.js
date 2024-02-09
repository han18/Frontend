// import "./App.css";
import { useEffect, useState } from "react";
import Form from "./components/Form";

function App() {
  const [recipes, setRecipes] = useState(null);

  return (
    <div className="App">
      <h1>Howedible</h1>
      <Form />
    </div>
  );
}

export default App;
