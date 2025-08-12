import { useForm } from "react-hook-form";
import { UserContext } from "../context/UserContext";
import { useNavigate } from "react-router";
import { useContext } from "react";

const Addusers = () => {
  const { addUser } = useContext(UserContext);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm();

  const onSubmit = async (data) => {
    await addUser(data);
    reset();
    navigate("/users");
  };

  return (
    <form className='flex flex-col gap-4' onSubmit={handleSubmit(onSubmit)}>
      <label className='flex flex-col'>
        Firstname:
        <input
          className='border rounded p-1'
          type='text'
          {...register("name.firstname", {
            required: "First name is required",
            minLength: { value: 2, message: "First name must be at least 2 characters" },
          })}
        />
        {errors.name?.firstname && (
          <p className='text-red-500'>{errors.name.firstname.message}</p>
        )}
      </label>

      <label className='flex flex-col'>
        Lastname:
        <input
          className='border rounded p-1'
          type='text'
          {...register("name.lastname", {
            required: "Last name is required",
            minLength: { value: 2, message: "Last name must be at least 2 characters" },
          })}
        />
        {errors.name?.lastname && (
          <p className='text-red-500'>{errors.name.lastname.message}</p>
        )}
      </label>

      <label className='flex flex-col'>
        Email:
        <input
          className='border rounded p-1'
          type='email'
          {...register("email", {
            required: "Email is required",
            pattern: { value: /^\S+@\S+$/i, message: "Invalid email address" },
          })}
        />
        {errors.email && <p className='text-red-500'>{errors.email.message}</p>}
      </label>

      <label className='flex flex-col'>
        Phone:
        <input
          className='border rounded p-1'
          type='tel'
          {...register("phone", {
            required: "Phone number is required",
            pattern: { value: /^[0-9+-]+$/, message: "Invalid phone number" },
          })}
        />
        {errors.phone && <p className='text-red-500'>{errors.phone.message}</p>}
      </label>

      <label className='flex flex-col'>
        Username:
        <input
          className='border rounded p-1'
          type='text'
          {...register("username", {
            required: "Username is required",
            minLength: { value: 4, message: "Username must be at least 4 characters" },
          })}
        />
        {errors.username && <p className='text-red-500'>{errors.username.message}</p>}
      </label>

      <button
        className='bg-blue-500 cursor-pointer hover:bg-blue-700 text-white font-bold py-2 px-4 rounded disabled:bg-gray-400'
        type='submit'
        disabled={isSubmitting}
      >
        {isSubmitting ? "Adding User..." : "Add User"}
      </button>
    </form>
  );
};

export default Addusers;