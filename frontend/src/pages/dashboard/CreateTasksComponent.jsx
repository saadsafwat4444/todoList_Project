import { useForm } from "react-hook-form";
import api from "../../api/axios";
import Swal from "sweetalert2";
import axios from "axios";

import { useNavigate } from "react-router-dom";

export function CreateTasksComponenet() {
  const {
    register,
    handleSubmit,
    trigger,
    formState: { errors },
  } = useForm({
    mode: "onTouched",
  });

  const navigate = useNavigate();

  const onSubmit = async (data) => {
    try {
      const pos = await new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(resolve, reject);
      });

      data.latitude = pos.coords.latitude;
      data.longitude = pos.coords.longitude;

      const res = await api.post("/tasks", data);

      console.log(res.data.task);

      Swal.fire({
        icon: "success",
        title: "Created Successfully!",
        text: "Task has been updated",
        timer: 1500,
        showConfirmButton: false,
      });

      navigate("/dashboard/mytasks");
    } catch (err) {
      console.log(err);
    }
  };

  const onFormSubmit = async (data) => {
    await trigger();
    onSubmit(data);
  };

  return (
    <div className="p-6 bg-slate-50 min-h-screen">
      <h1 className="text-3xl font-bold text-slate-800 mb-6">
        Create New Task
      </h1>

      <form
        onSubmit={handleSubmit(onFormSubmit)}
        className="bg-white p-6 rounded shadow-md  space-y-4"
      >
        {/* Title */}
        <div>
          <label className="block text-slate-700 font-medium mb-1">Title</label>
          <input
            type="text"
            placeholder="Task title"
            className={`w-full px-4 py-2 border border-slate-300 rounded focus:outline-none focus:ring-2 
                ${errors.title ? "border-red-500 focus:ring-red-500" : "border-slate-300 focus:ring-blue-500"}`}
            {...register("title", {
              required: "Title Is required",
              minLength: {
                value: 3,
                message: "Title must be at least 3 characters",
              },
            })}
          />
          {errors.title && (
            <p className="text-red-500 text-sm mt-1">{errors.title.message}</p>
          )}
        </div>

        {/* Description */}
        <div>
          <label className="block text-slate-700 font-medium mb-1">
            Description
          </label>

          <textarea
            placeholder="Task description"
            rows={4}
            className={`w-full px-4 py-2 border border-slate-300 rounded focus:outline-none focus:ring-2 
                ${errors.desc ? "border-red-400 focus:ring-red-800" : "border-slate-300 focus:ring-blue-500"}`}
            {...register("desc", {
              required: "Description Is required",
              minLength: {
                value: 8,
                message: "Description must be at least 8 characters",
              },
            })}
          />
          {errors.desc && (
            <p className="text-red-500 text-sm mt-1">{errors.desc.message}</p>
          )}
        </div>

        {/* Status */}
        <div>
          <label className="block text-slate-700 font-medium mb-1">
            Status
          </label>
          <select
            {...register("status", { required: "Status is required" })}
            className={`w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 ${
              errors.status
                ? "border-red-500 focus:ring-red-500"
                : "border-slate-300 focus:ring-blue-500"
            }`}
          >
            <option value="">Select Status</option>
            <option value="todo">Todo</option>
            <option value="doing">Doing</option>
            <option value="done">Done</option>
          </select>
          {errors.status && (
            <p className="text-red-500 text-sm mt-1">{errors.status.message}</p>
          )}
        </div>

        {/* Priority */}
        <div>
          <label className="block text-slate-700 font-medium mb-1">
            Priority
          </label>

          <select
            {...register("priority", { required: "Priority is required" })}
            className={`w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 ${
              errors.priority
                ? "border-red-500 focus:ring-red-500"
                : "border-slate-300 focus:ring-blue-500"
            }`}
          >
            <option value="">Select Priority</option>

            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
          </select>
          {errors.priority && (
            <p className="text-red-500 text-sm mt-1">
              {errors.priority.message}
            </p>
          )}
        </div>

        {/* Created At */}
        <div>
          <label className="block text-slate-700 font-medium mb-1">
            Created At
          </label>
          <input
            type="date"
            {...register("createdAt", { required: "Date is required" })}
            className={`w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 ${
              errors.createdAt
                ? "border-red-500 focus:ring-red-500"
                : "border-slate-300 focus:ring-blue-500"
            }`}
          />
        </div>
        {errors.createdAt && (
          <p className="text-red-500 text-sm mt-1">
            {errors.createdAt.message}
          </p>
        )}

        {/* Submit Button */}
        <button
          type="submit"
          className="bg-blue-600 hover:bg-blue-500 text-white px-6 py-3 rounded shadow transition w-full mt-4"
        >
          Create Task
        </button>
      </form>
    </div>
  );
}
