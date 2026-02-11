import React, { useEffect, useState } from "react";
import api from "../../api/axios";
 import Swal from "sweetalert2";

 
import { EditTaskModal } from "../dashboard/EditTaskModal";
import WeatherAlert from "./WeatherAleart";

export function MyTasksComponenet() {


  const [tasks, setTasks] = useState([]);
  const [editingTask, setEditingTask] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentWeather, setCurrentWeather] = useState(null);


 

  useEffect(() => {
  const fetchTasks = async () => {
    try {
      const res = await api.get("/tasks");
 const tasksData = res.data.tasks;
          setTasks(tasksData);

      // لو في مهام، خلي currentWeather يساوي الطقس لأول مهمة
      if (tasksData.length > 0 && tasksData[0].weather) {
        setCurrentWeather(tasksData[0].weather);
      }
    } catch (err) {
      console.log(err);
    }
  };

  fetchTasks();
}, []);
  const handleTaskUpdated = (updatedTask) => {
    setTasks(prev => prev.map(t => (t._id === updatedTask._id ? updatedTask : t)));
  };
const handleDelete = async (id) => {
   
  const result = await Swal.fire({
    title: "Are you sure?",
    text: "You won't be able to revert this!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Yes, delete it!"
  });

  if (result.isConfirmed) {
    try {
      await api.delete(`/tasks/${id}`);
      setTasks(prev => prev.filter(task => task._id !== id));

      
      Swal.fire({
        icon: "success",
        title: "Deleted!",
        text: "Task has been deleted.",
        timer: 1500,
        showConfirmButton: false,
      });
    } catch (err) {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: err.response?.data?.message || "Delete failed",
      });
    }
  }
};
  const openEditModal = (task) => {
    setEditingTask(task);
    setIsModalOpen(true);
  };
  return (
    <div className="p-6 min-h-screen bg-slate-50">
      <h1 className="text-3xl font-bold mb-6">Dashboard</h1>

     

      {/* Tasks Table */}
      <WeatherAlert currentWeather={currentWeather} />

      <div className="mt-8 overflow-x-auto">
        <table className="min-w-full bg-white rounded shadow">
          <thead className="bg-slate-200">
            <tr>
              <th className="px-4 py-2 text-left">Title</th>
              <th className="px-4 py-2 text-left">Description</th>
              <th className="px-4 py-2 text-left">Status</th>
              <th className="px-4 py-2 text-left">Priority</th>
                              <th className="px-4 py-2 text-left">Weather</th>

              <th className="px-4 py-2 text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {tasks.map(task => (
              <tr key={task._id} className="border-b hover:bg-slate-50">
                <td className="px-4 py-2">{task.title}</td>
                <td className="px-4 py-2">{task.desc}</td>
                <td className="px-4 py-2">{task.status}</td>
 
                <td className="px-4 py-2">{task.priority}</td>

                   {/* Weather Column */}
      <td className="px-4 py-2">
        {task.weather ? (
          <span>
            🌡 {task.weather.temperature}°C | 🌬 {task.weather.windspeed} km/h | 
            {task.weather.is_day ? "Day" : "Night"}
          </span>
        ) : (
          <span className="text-gray-400">N/A</span>
        )}
      </td>
       
                <td className="px-4 py-2 text-center space-x-2">
                    <button
                className="px-3 py-1 bg-yellow-400 text-white rounded"
                onClick={() => openEditModal(task)}
              >
                Edit
              </button>
              
                   <button 
                  onClick={() => handleDelete(task._id)}
                  className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600">
                  Delete
                </button>
                </td>
              
              </tr>
            ))}
            {tasks.length === 0 && (
              <tr>
                <td colSpan={5} className="px-4 py-4 text-center text-gray-500">
                  No tasks found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
       <EditTaskModal
        task={editingTask}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onTaskUpdated={handleTaskUpdated}
      />
    </div>
  );
}
