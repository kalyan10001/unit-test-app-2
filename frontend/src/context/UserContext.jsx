import React, { createContext, useEffect, useState, useCallback } from 'react';
import axios from 'axios';
export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [users, setUsers] = useState([]);

  const fetchUsers = useCallback(async () => {
    const res = await axios.get('http://localhost:5000/api/users');
    setUsers(res.data);
  }, []);

  const addUser = async (user) => {
    await axios.post('http://localhost:5000/api/users', user);
    fetchUsers();
  };

  const deleteUser = async (id) => {
    await axios.delete(`http://localhost:5000/api/users/${id}`);
    fetchUsers();
  };

  useEffect(() => {
    fetchUsers();
  }, [fetchUsers]);

  return (
    <UserContext.Provider value={{ users, addUser, deleteUser }}>
      {children}
    </UserContext.Provider>
  );
};
