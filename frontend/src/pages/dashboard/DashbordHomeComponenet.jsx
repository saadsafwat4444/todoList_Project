import { useEffect } from "react";
import { Link } from "react-router-dom";
import api from "../../api/axios";
import { useState } from "react";

export function DashboardHomeComponenet() {
  const [Tasks, setTasks] = useState([]);
  const [totalTasks, setTotalTasks] = useState(0);
  const [completedTasks, setCompletedTasks] = useState(0);
  const [pendingTasks, setPendingTasks] = useState(0);

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const res = await api.get("/tasks");

        const tasksData = res.data.tasks;

        setTasks(tasksData);

        setTotalTasks(tasksData.length);
        setCompletedTasks(
          tasksData.filter((task) => task.status === "done").length
        );
        setPendingTasks(
          tasksData.filter(
            (task) => task.status === "todo" || task.status === "doing"
          ).length
        );
      } catch (err) {
        console.log(err);
      }
    };
    fetchTasks();
  }, []);
  return (
    <div className="p-6 bg-slate-50 min-h-screen">
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-3xl md:text-4xl font-bold text-slate-800">
          Welcome to Your Dashboard
        </h1>
        <p className="text-slate-600 mt-2">
          Here's a quick overview of your tasks and progress.
        </p>
      </div>

      {/* Cards Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Card 1 */}
        <div className="bg-white rounded-lg shadow p-6 hover:shadow-lg transition-shadow">
          <h2 className="text-lg font-semibold text-slate-700 mb-2">
            Total Tasks
          </h2>
          <p className="text-3xl font-bold text-blue-600">{totalTasks}</p>
        </div>

        {/* Card 2 */}
        <div className="bg-white rounded-lg shadow p-6 hover:shadow-lg transition-shadow">
          <h2 className="text-lg font-semibold text-slate-700 mb-2">
            Completed
          </h2>
          <p className="text-3xl font-bold text-green-600">{completedTasks}</p>
        </div>

        {/* Card 3 */}
        <div className="bg-white rounded-lg shadow p-6 hover:shadow-lg transition-shadow">
          <h2 className="text-lg font-semibold text-slate-700 mb-2">Pending</h2>
          <p className="text-3xl font-bold text-yellow-500">{pendingTasks}</p>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="mt-10">
        <h2 className="text-2xl font-bold text-slate-800 mb-4">
          Quick Actions
        </h2>
        <div className="flex flex-col sm:flex-row gap-4">
          <Link
            to="create/task"
            className="flex-1 bg-blue-600 hover:bg-blue-500 text-white px-6 py-3 rounded shadow transition"
          >
            Create New Task
          </Link>
          <Link
            to="mytasks"
            className="flex-1 bg-green-600 hover:bg-green-500 text-white px-6 py-3 rounded shadow transition"
          >
            View My Tasks
          </Link>
        </div>
      </div>
    </div>
  );
}
