import "./App.css";
import Form from "./components/Form";
// import { useState } from "react";
import List from "./components/List";
import useLocalStorageState from "use-local-storage-state";

export default function App() {
  const [activities, setActivities] = useLocalStorageState("activities", {
    defaultValue: [],
  });

  function handleAddActivities(newActivity) {
    setActivities((prevActivities) => [...prevActivities, { ...newActivity }]);
  }

  return (
    <div>
      <Form onAddActivity={handleAddActivities} />
      <ul>
        <List activities={activities} />
      </ul>
    </div>
  );
}
