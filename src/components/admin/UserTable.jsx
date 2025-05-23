import { useEffect, useState } from "react";

export default function UsersTable() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://6830b9356205ab0d6c3a379f.mockapi.io/users") 
      .then(res => res.json())
      .then(data => {
        setUsers(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  if (loading) return <p>Loading...</p>;
  if (!users.length) return <p>No data</p>;

  return (
    <table className="w-full border-collapse border">
      <thead>
        <tr className="bg-black">
          <th className="border p-2">Users</th>
          <th className="border p-2">Score</th>
          <th className="border p-2">Date</th>
        </tr>
      </thead>
      <tbody>
        {users.map(({ id, username, score, date }) => (
          <tr key={id} className="odd:bg-black even:bg-black">
            <td className="border p-2">{username}</td>
            <td className="border p-2">{score}</td>
            <td className="border p-2">{new Date(date).toLocaleString()}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
