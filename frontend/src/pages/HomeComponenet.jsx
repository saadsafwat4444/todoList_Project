
import { useNavigate } from "react-router-dom";
export function HomeComponenet(){
      const navigate = useNavigate();
      return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-black to-gray-800 px-4">
      <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 text-center">
        Welcome to Smart Tasks 🚀
      </h1>
      <p className="text-center text-white text-lg md:text-xl mb-10 max-w-md">
        Manage your tasks smartly and efficiently. Get started now!
      </p>

      <div className="flex flex-col md:flex-row gap-6">
        <button
          onClick={() => navigate("/login")}
          className="px-8 py-4 bg-white text-indigo-600 font-semibold rounded-xl shadow-lg hover:shadow-2xl transition transform hover:-translate-y-1 hover:scale-105"
        >
          Login
        </button>

        <button
          onClick={() => navigate("/register")}
          className="px-8 py-4 bg-indigo-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-2xl transition transform hover:-translate-y-1 hover:scale-105"
        >
          Register
        </button>
      </div>
    </div>
  );
}