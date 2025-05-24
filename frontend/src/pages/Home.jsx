import React, { useContext } from 'react';
import { UserContext } from '../context/UserContext';

const Home = () => {
  const { users, deleteUser } = useContext(UserContext);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Users</h1>
      <ul className="space-y-2">
        {users.map(u => (
          <li key={u._id} className="border p-2 rounded shadow">
            <div className="flex justify-between items-center">
              <span>{u.name} - {u.email}</span>
              <button
                onClick={() => deleteUser(u._id)}
                className="text-red-500 hover:underline"
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default Home;