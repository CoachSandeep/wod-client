import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [wod, setWod] = useState(null);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/wod")  // Change to your backend API URL
      .then((response) => setWod(response.data))
      .catch((err) => console.error("Error fetching WOD:", err));
  }, []);

  return (
    <div className="App">
      <h1>Workout of the Day</h1>
      {wod ? (
        <div>
          <h2>{wod.name}</h2>
          <p>{wod.description}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default App;