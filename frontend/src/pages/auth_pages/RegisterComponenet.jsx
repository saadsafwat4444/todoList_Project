import { useForm } from "react-hook-form";
import api from "../../api/axios";
import { Link } from "react-router-dom";

import { useAuth } from "../../hooks/useAuth";
import { useNavigate } from "react-router-dom";

export function RegisterComponenet() {
  const {
    register,
    handleSubmit,
    trigger,
    formState: { errors },
  } = useForm({
    mode: "onTouched",
  });

  const { login } = useAuth();
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    try {
      const res = await api.post("auth/register", data);
      login(res.data.token);
      navigate("/dashboard");
    } catch (error) {
      console.log(error.response?.data?.message);
      // alert(error.response?.data?.message |);
    }
  };

  const onFormSubmit = async (data) => {
    await trigger();
    onSubmit(data);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-black to-gray-800 px-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8">
        <h2 className="text-2xl font-bold text-center text-gray-800">
          Create Account 🚀
        </h2>
        <p className="text-center text-gray-500 mt-2 text-sm">
          Register to get started
        </p>

        <form onSubmit={handleSubmit(onFormSubmit)} className="mt-6 space-y-5">
          <div>
            <label className="block text-sm font-medium text-gray-600 mb-1">
              Name
            </label>
            <input
              {...register("name", { required: "Name Is required" })}
              type="text"
              placeholder="Enter your name"
              className={`w-full px-4 py-2 border border-slate-300 rounded focus:outline-none focus:ring-2 
                ${errors.name ? "border-red-500 focus:ring-red-500" : "border-slate-300 focus:ring-blue-500"}`}
            />
          </div>
          {errors.name && (
            <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
          )}

          <div>
            <label className="block text-sm font-medium text-gray-600 mb-1">
              Email
            </label>
            <input
              {...register("email", {
                required: "Email Is required",
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: "Invalid email address",
                },
              })}
              type="email"
              placeholder="Enter your email"
              className={`w-full px-4 py-2 border border-slate-300 rounded focus:outline-none focus:ring-2 
                ${errors.email ? "border-red-500 focus:ring-red-500" : "border-slate-300 focus:ring-blue-500"}`}
            />

            {errors.email && (
              <p className="text-red-500 text-sm mt-1">
                {errors.email.message}
              </p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-600 mb-1">
              Password
            </label>
            <input
              {...register("password", { required: "Password Is required" })}
              type="password"
              placeholder="Enter your password"
              className={`w-full px-4 py-2 border border-slate-300 rounded focus:outline-none focus:ring-2 
                ${errors.password ? "border-red-500 focus:ring-red-500" : "border-slate-300 focus:ring-blue-500"}`}
            />
            {errors.password && (
              <p className="text-red-500 text-sm mt-1">
                {errors.password.message}
              </p>
            )}
          </div>

          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-2 rounded-lg font-medium hover:bg-indigo-700 transition duration-300"
          >
            Register
          </button>
        </form>

        <p className="text-center text-sm text-gray-500 mt-6">
          Already have an account?{" "}
          <Link
            to="/login"
            className="text-indigo-600 font-medium cursor-pointer hover:underline"
          >
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}
