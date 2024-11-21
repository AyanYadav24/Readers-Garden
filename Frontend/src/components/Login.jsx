import React from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";
import toast from "react-hot-toast";

function Login() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const navigate = useNavigate();
  const location = useLocation();

  const onSubmit = async (data) => {
    const userInfo = {
      email: data.email,
      password: data.password,
    };
    await axios
      .post(`${window.location.origin}/user/login`, userInfo)
      .then((res) => {
        if (res.data.token) {
          toast.success("Logged in Successfully");
          localStorage.setItem("token", res.data.token);
          localStorage.setItem("Users", JSON.stringify(res.data.user));
          document.getElementById("my_modal_3").close();

          const from = location.state?.from?.pathname || "/";
          navigate(from, { replace: true });

          setTimeout(() => {
            window.location.reload();
          }, 1000);
        }
      })
      .catch((err) => {
        if (err.response) {
          toast.error("Error: " + err.response.data.message);
        }
      });
  };

  return (
    <div>
      {/* Ensure <dialog> is not inside <p> or any invalid parent */}
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box p-6 bg-white dark:bg-gray-800 text-gray-800 dark:text-white rounded-lg shadow-lg">
          <form onSubmit={handleSubmit(onSubmit)} method="dialog">
            <Link
              to="/"
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
              onClick={() => document.getElementById("my_modal_3").close()}
            >
              ✕
            </Link>

            <h3 className="font-bold text-2xl mb-6 text-gray-800 dark:text-white">Login</h3>

            {/* Email Input */}
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300" htmlFor="email">
                Email
              </label>
              <input
                type="email"
                id="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 border border-gray-300 rounded-md outline-none dark:bg-gray-700 dark:border-gray-600 dark:text-white focus:ring-2 focus:ring-teal-500"
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
                className="w-full px-4 py-2 border border-gray-300 rounded-md outline-none dark:bg-gray-700 dark:border-gray-600 dark:text-white focus:ring-2 focus:ring-teal-500"
                {...register("password", { required: true })}
              />
              {errors.password && (
                <span className="text-sm text-red-500">This field is required</span>
              )}
            </div>

            {/* Submit Button and SignUp Link */}
            <div className="flex justify-between items-center">
              <button
                type="submit"
                className="bg-teal-500 text-white rounded-md px-4 py-2 hover:bg-teal-700 duration-300"
              >
                Login
              </button>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Not registered?{" "}
                <Link
                  to="/signup"
                  className="underline text-blue-500 hover:text-blue-700"
                >
                  Signup
                </Link>
              </p>
            </div>
          </form>
        </div>
      </dialog>
    </div>
  );
}

export default Login;
