export default function List({ activities }) {
  return activities.map((activity) => (
    <li key={activity.id}>{activity.name}</li>
  ));
}
