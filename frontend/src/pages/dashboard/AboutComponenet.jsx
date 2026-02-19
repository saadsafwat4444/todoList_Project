import React from "react";
import { FaCode, FaCloudSun, FaTasks, FaUserTie } from "react-icons/fa";

export default function AboutComponenet() {
  return (
    <div className="bg-slate-50 min-h-screen">
      {/* ===== Hero Section ===== */}
      <section className="bg-slate-800 text-white py-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            About Our Task Manager
          </h1>
          <p className="text-lg md:text-xl text-slate-300 max-w-3xl mx-auto">
            A modern productivity app that helps you manage your daily tasks
            with smart weather integration and a clean user experience.
          </p>
        </div>
      </section>

      {/* ===== Features Section ===== */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            Why Choose Our App?
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
              <FaTasks className="text-indigo-600 text-4xl mb-4" />
              <h3 className="text-xl font-semibold mb-2">Task Management</h3>
              <p className="text-gray-600">
                Create, update, and track your tasks easily with a smooth UI.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
              <FaCloudSun className="text-yellow-500 text-4xl mb-4" />
              <h3 className="text-xl font-semibold mb-2">Weather Smart</h3>
              <p className="text-gray-600">
                Get real-time weather updates linked with your tasks.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
              <FaCode className="text-green-600 text-4xl mb-4" />
              <h3 className="text-xl font-semibold mb-2">Modern Stack</h3>
              <p className="text-gray-600">
                Built with React, Tailwind CSS, and secure backend APIs.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
              <FaUserTie className="text-pink-500 text-4xl mb-4" />
              <h3 className="text-xl font-semibold mb-2">User Friendly</h3>
              <p className="text-gray-600">
                Clean design, responsive layout, and easy navigation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== About Developer Section ===== */}
      <section className="bg-white py-16 px-6">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          <div>
            <img
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c"
              alt="Developer"
              className="rounded-xl shadow-lg"
            />
          </div>

          <div>
            <h2 className="text-3xl font-bold mb-4">Built With Passion</h2>
            <p className="text-gray-600 mb-4">
              This project was built to demonstrate full-stack development
              skills, combining frontend UI design with secure backend
              architecture.
            </p>
            <p className="text-gray-600">
              The goal is to create a simple yet powerful productivity tool that
              integrates weather awareness into daily task planning.
            </p>
          </div>
        </div>
      </section>

      {/* ===== Footer ===== */}
      <footer className="bg-slate-800 text-white py-6 text-center">
        <p className="text-sm">
          © {new Date().getFullYear()} Task Manager App. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
