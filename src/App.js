import "./App.css";
import Form from "./components/Form";
import { useEffect, useState } from "react";
import List from "./components/List";
import useLocalStorageState from "use-local-storage-state";

export default function App() {
  const [activities, setActivities] = useLocalStorageState("activities", {
    defaultValue: [],
  });
  const [weather, setWeather] = useState(true);

  function handleAddActivities(newActivity) {
    console.log("handle add activates");
    setActivities((prevActivities) => [...prevActivities, { ...newActivity }]);
  }

  function handleDeleteActivity(id) {
    console.log("handle delete activates");
    setActivities(activities.filter((activity) => activity.id !== id));
  }

  useEffect(() => {
    async function startFetching() {
      const response = await fetch(
        "https://example-apis.vercel.app/api/weather/europe"
      );
      const data = await response.json();
      console.log(data);
      setWeather(data);
    }
    startFetching();
  }, []);

  return (
    <div>
      <h1>
        {weather.condition} {weather.temperature}°C
      </h1>
      <ul>
        <List
          activities={activities}
          weather={weather.isGoodWeather}
          onDeleteActivity={handleDeleteActivity}
        />
      </ul>
      <Form onAddActivity={handleAddActivities} />
    </div>
  );
}
