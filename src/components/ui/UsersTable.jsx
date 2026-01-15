import { useEffect, useState } from "react";
import { Eye, Pencil, Trash2 } from "lucide-react";

export default function UsersTable() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => {
        setUsers(data);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading...</p>;

  return (
    <>
      <div className="flex justify-between mb-4">
        <h2 className="text-xl font-bold">Utilisateurs</h2>
        <button className="bg-blue-600 text-white px-4 py-2 rounded">
          Ajouter
        </button>
      </div>

      <table className="w-full border">
        <thead className="bg-gray-100">
          <tr>
            <th className="p-2 text-left">Nom</th>
            <th className="p-2 text-left">Email</th>
            <th className="p-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id} className="border-t">
              <td className="p-2">{user.name}</td>
              <td className="p-2">{user.email}</td>
              <td className="p-2 flex gap-3 justify-center">
                <Eye className="text-blue-600 cursor-pointer" />
                <Pencil className="text-green-600 cursor-pointer" />
                <Trash2 className="text-red-600 cursor-pointer" />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
  