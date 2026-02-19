import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import api from "../../api/axios";
import Swal from "sweetalert2";

export function EditTaskModal({ task, isOpen, onClose, onTaskUpdated }) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: task || {
      title: "",
      desc: "",
      status: "todo",
      priority: "low",
    },
    mode: "onTouched",
  });

  useEffect(() => {
    if (task) {
      reset(task); // تعبية بيانات المهمة
    }
  }, [task, reset]);

  if (!isOpen) return null;

  const onSubmit = async (data) => {
    try {
      const res = await api.put(`/tasks/${task._id}`, data);
      onTaskUpdated(res.data.task);
      onClose();
      Swal.fire({
        icon: "success",
        title: "Updated!",
        text: "Task has been updated",
        timer: 1500,
        showConfirmButton: false,
      });
    } catch (err) {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: err.response?.data?.message || "Operation failed",
      });
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg w-full max-w-md relative">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
        >
          ✖
        </button>
        <h2 className="text-xl font-bold mb-4">Edit Task</h2>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-3">
          <div>
            <label className="block font-medium">Title</label>
            <input
              type="text"
              {...register("title", {
                required: "Title is required",
                minLength: { value: 3, message: "At least 3 characters" },
              })}
              className={`w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 ${
                errors.title
                  ? "border-red-500 focus:ring-red-500"
                  : "border-slate-300 focus:ring-blue-500"
              }`}
            />
            {errors.title && (
              <p className="text-red-500 text-sm">{errors.title.message}</p>
            )}
          </div>

          <div>
            <label className="block font-medium">Description</label>
            <textarea
              {...register("desc", {
                required: "Description is required",
                minLength: { value: 8, message: "At least 8 characters" },
              })}
              rows={3}
              className={`w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 ${
                errors.desc
                  ? "border-red-500 focus:ring-red-500"
                  : "border-slate-300 focus:ring-blue-500"
              }`}
            />
            {errors.desc && (
              <p className="text-red-500 text-sm">{errors.desc.message}</p>
            )}
          </div>

          <div>
            <label className="block font-medium">Status</label>
            <select
              {...register("status")}
              className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="todo">Todo</option>
              <option value="doing">Doing</option>
              <option value="done">Done</option>
            </select>
          </div>

          <div>
            <label className="block font-medium">Priority</label>
            <select
              {...register("priority")}
              className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="low">Low</option>
              <option value="medium">Medium</option>
              <option value="high">High</option>
            </select>
          </div>

          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-500 text-white px-4 py-2 rounded shadow w-full"
          >
            Update Task
          </button>
        </form>
      </div>
    </div>
  );
}
