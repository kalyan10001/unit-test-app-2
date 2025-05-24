import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../context/UserContext';

const AddUser = () => {
  const [form, setForm] = useState({ name: '', email: '' });
  const { addUser } = useContext(UserContext);
  const navigate = useNavigate();

  const handleSubmit = async e => {
    e.preventDefault();
    await addUser(form);
    navigate('/');
  };

  return (
    <form onSubmit={handleSubmit} className="p-6 max-w-md mx-auto space-y-4">
      <input
        value={form.name}
        onChange={e => setForm({ ...form, name: e.target.value })}
        placeholder="Name"
        className="w-full border p-2 rounded"
        required
      />
      <input
        value={form.email}
        onChange={e => setForm({ ...form, email: e.target.value })}
        placeholder="Email"
        className="w-full border p-2 rounded"
        required
      />
      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        Submit
      </button>
    </form>
  );
};
export default AddUser;
