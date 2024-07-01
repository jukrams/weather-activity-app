import { uid } from "uid";

export default function Form({ onAddActivity }) {
  function handleSubmit(event) {
    event.preventDefault();
    const activities = {
      id: uid(),
      name: event.target.name.value,
      isForGoodWeather: event.target.isForGoodWeather.checked,
    };
    onAddActivity(activities);
    event.target.reset();
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h2>Add new Activity</h2>
        <label htmlFor="activity-name">Name: </label>
        <input id="activity-name" name="name" type="text" required />
        <br />
        <label htmlFor="good-weather-activity">Good-weather activity </label>
        <input
          id="good-weather-activity"
          name="isForGoodWeather"
          type="checkbox"
        />
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
