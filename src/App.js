import "./App.css";
import Form from "./components/Form";
import { useState } from "react";

function App() {
  const [activities, setActivities] = useState([]);

  function handleAddActivities(newActivity) {
    setActivities((prevActivities) => [...prevActivities, { ...newActivity }]);
  }

  return (
    <div>
      <Form onAddActivity={handleAddActivities} />
      <ul>
        {activities.map((activity) => (
          <li key={activity.id}>{activity.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
