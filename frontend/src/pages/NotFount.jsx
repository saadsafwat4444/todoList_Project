// NotFound.jsx
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-purple-700 to-indigo-600 text-white px-4">
      <h1 className="text-9xl font-extrabold tracking-widest drop-shadow-lg">
        404
      </h1>
      <h2 className="text-3xl md:text-4xl font-bold mt-6">
        Oops! Page not found
      </h2>
      <p className="mt-4 text-lg md:text-xl text-gray-200 max-w-md text-center">
        The page you're looking for doesn't exist or has been moved.
      </p>
      <Link
        to="/"
        className="mt-8 px-6 py-3 bg-white text-purple-700 font-semibold rounded-lg shadow-lg hover:bg-gray-200 transition duration-300"
      >
        Go Back Home
      </Link>
    </div>
  );
}
