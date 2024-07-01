export default function List({ activities, weather, onDeleteActivity }) {
  const filteredActivities = activities.filter(
    (activity) => activity.isForGoodWeather === weather
  );
  const goodWeatherMsg = "The weather is awesome! Here are some activities: ";
  const badWeatherMsg = "Bad weather outside! Here's what you can do now: ";

  return (
    <>
      <p>{weather ? goodWeatherMsg : badWeatherMsg}</p>
      {filteredActivities.map((activity) => (
        <li key={activity.id}>
          {activity.name}
          <button
            className="button--delete"
            onClick={() => onDeleteActivity(activity.id)}
          >
            X
          </button>
        </li>
      ))}
    </>
  );
}
