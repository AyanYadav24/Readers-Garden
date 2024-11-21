import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Login from "./Login";
import { useForm } from "react-hook-form";
import axios from "axios";
import toast from "react-hot-toast";

function Signup() {
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const userInfo = {
      fullname: data.fullname,
      email: data.email,
      password: data.password,
    };

    try {
      const res = await axios.post(`${window.location.origin}/user/signup`, userInfo);
      console.log(res.data);
      if (res.data.token) { // Check for the token in the response
        toast.success("Signup Successfully");
        localStorage.setItem("token", res.data.token); // Store the token in local storage
        localStorage.setItem("Users", JSON.stringify(res.data.user)); // Store user info
        navigate(from, { replace: true });
      }
    } catch (err) {
      if (err.response) {
        console.log(err);
        toast.error("Error: " + err.response.data.message);
      }
    }
  };

  return (
    <div className="flex h-screen items-center justify-center bg-gray-900 dark:bg-gray-900">
      <div className="w-full max-w-md bg-white dark:bg-gray-800 p-8 rounded-xl shadow-xl">
        <form onSubmit={handleSubmit(onSubmit)} method="dialog">
          <Link
            to="/"
            className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
          >
            ✕
          </Link>

          <h3 className="font-bold text-2xl mb-6 text-gray-800 dark:text-white">Signup</h3>

          {/* Full Name Input */}
          <div className="mb-5">
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300" htmlFor="fullname">
              Full Name
            </label>
            <input
              type="text"
              id="fullname"
              placeholder="Enter your fullname"
              className="w-full px-4 py-3 border border-gray-300 rounded-md outline-none dark:bg-gray-700 dark:border-gray-600 dark:text-white focus:ring-2 focus:ring-teal-500 transition duration-300"
              {...register("fullname", { required: true })}
            />
            {errors.fullname && (
              <span className="text-sm text-red-500">This field is required</span>
            )}
          </div>

          {/* Email Input */}
          <div className="mb-5">
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              className="w-full px-4 py-3 border border-gray-300 rounded-md outline-none dark:bg-gray-700 dark:border-gray-600 dark:text-white focus:ring-2 focus:ring-teal-500 transition duration-300"
              {...register("email", { required: true })}
            />
            {errors.email && (
              <span className="text-sm text-red-500">This field is required</span>
            )}
          </div>

          {/* Password Input */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300" htmlFor="password">
              Password
            </label>
            <input
              type="password"
              id="password"
              placeholder="Enter your password"
              className="w-full px-4 py-3 border border-gray-300 rounded-md outline-none dark:bg-gray-700 dark:border-gray-600 dark:text-white focus:ring-2 focus:ring-teal-500 transition duration-300"
              {...register("password", { required: true })}
            />
            {errors.password && (
              <span className="text-sm text-red-500">This field is required</span>
            )}
          </div>

          <div className="flex justify-between items-center">
            <button
              type="submit"
              className="bg-teal-500 text-white rounded-md px-6 py-3 hover:bg-teal-600 transition duration-300"
            >
              Signup
            </button>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Already have an account?{" "}
              <button
                className="underline text-teal-500 hover:text-teal-600"
                onClick={() => document.getElementById("my_modal_3").showModal()}
              >
                Login
              </button>
              <Login />
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Signup;
