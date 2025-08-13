import { createContext, useState } from 'react';
import { useGetUsers, useAddUser, useDeleteUser } from '../hooks/useUsers';

export const UserContext = createContext();

const UserContextProvider = ({ children }) => {
  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);
  const { data: usersData, isLoading, isError } = useGetUsers();
  const { mutate: addUserMutate, isLoading: isAdding } = useAddUser();
  const { mutate: deleteUserMutate, isLoading: isDeleting } = useDeleteUser();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error: {usersData.error.message}</div>;
  }
  const getUser = async () => {
    setUsers(usersData);
    setFilteredUsers(usersData);
  }
  const addUser = async (user) => {
    await addUserMutate(user);
    setUsers((prevUsers) => [...prevUsers, user]);
    setFilteredUsers((prevFilteredUsers) => [...prevFilteredUsers, user]);
  };

  const deleteUser = async (id) => {
    await deleteUserMutate(id);
    setUsers((prevUsers) => prevUsers.filter((user) => user.id !== id));
    setFilteredUsers((prevFilteredUsers) =>
      prevFilteredUsers.filter((user) => user.id !== id)
    );
  };

  return (
    <UserContext.Provider value={{ users, isLoading ,isError,filteredUsers, setFilteredUsers, getUser, addUser, deleteUser }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;