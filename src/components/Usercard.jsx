import React from "react";

const Usercard = React.memo(({ user, deleteUser }) => {
  
  return (
    <div className='bg-white rounded-lg shadow-md p-4'>
      <h2 className='font-bold text-lg'>
        {user.name?.firstname} {user.name?.lastname}
      </h2>

      <div className='flex justify-between items-center'>
        <p className='text-gray-700'>{user.email}</p>
        <p className='text-gray-700'>{user.phone}</p>
      </div>
      <div className='flex justify-between items-center'>
        <p className='text-gray-700'>{user.username}</p>
        <button
          onClick={() => deleteUser(user.id)}
          className='bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded'
        >
          Delete
        </button>
      </div>
    </div>
  );
});

export default Usercard;
