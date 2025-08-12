import React, { lazy, Suspense, useContext, useEffect } from "react";
import { useGetUsers } from "../hooks/useUsers";
import { UserContext } from "../context/UserContext";
const Usercard = lazy(() => import("./Usercard"));

const Users = () => {
  const { users, isLoading, isError, getUser } = useContext(UserContext);
  useEffect(() => {
    if (users.length === 0) {
      getUser();
    }
  }, []);
  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className='container d-flex flex-wrap justify-content-center gap-3'>
      {users?.map((user) => (
        <Suspense fallback={<div>Loading card...</div>} key={user.id}>
          <Usercard user={user} />
        </Suspense>
      ))}
    </div>
  );
};

export default Users;
