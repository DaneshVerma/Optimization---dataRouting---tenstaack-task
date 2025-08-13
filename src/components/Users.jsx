import { lazy, Suspense, useContext, useEffect } from "react";
import { UserContext } from "../context/UserContext";
const Usercard = lazy(() => import("./Usercard"));

const Users = () => {
  const {
    users,
    isLoading,
    isError,
    getUser,
    filteredUsers,
    setFilteredUsers,
  } = useContext(UserContext);
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
  function filterUsers(filter) {
    if (filter === "all") {
      setFilteredUsers(users);
    } else {
      setFilteredUsers(
        users.filter((user) => user.name.firstname.startsWith(filter))
      );
    }
  }

  return (
    <>
      <div className='w-[80%] flex justify-center'>
        <div className='container w-[90%] flex flex-wrap mt-5  justify-left gap-5'>
          <Suspense fallback={<div className="w-full h-full flex justify-center items-center">Loading...</div>}>
            {filteredUsers.map((user) => (
              <Usercard  key={user.id} user={user} />
            ))}
          </Suspense>
        </div>
        <div className='w-[10%]'>
          <select
            onChange={(e) => filterUsers(e.target.value)}
            name='filter'
            id='filter'
          >
            <option value='all'>All</option>
            <option value='j'>starts with j</option>
            <option value='w'>starts with w</option>
            <option value='w'>starts with w</option>
          </select>
        </div>
      </div>
    </>
  );
};

export default Users;
