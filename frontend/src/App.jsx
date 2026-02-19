import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { LoginComponenet } from "./pages/auth_pages/LoginComponenet";
import { RegisterComponenet } from "./pages/auth_pages/RegisterComponenet";
import { HomeComponenet } from "./pages/HomeComponenet";
import { DashboardComponenet } from "./pages/dashboard/dashbordComponenet";
import { DashboardHomeComponenet } from "./pages/dashboard/DashbordHomeComponenet";
import { CreateTasksComponenet } from "./pages/dashboard/CreateTasksComponent";
import { MyTasksComponenet } from "./pages/dashboard/MyTasksComponenet";
import ProtectedRoute from "./componenets/ProtectedRoute";
import NotFound from "./pages/NotFount";
import AboutComponenet from "./pages/dashboard/AboutComponenet";
import PublicOnlyRoute from "./componenets/PublicOnlyRoute";

function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <PublicOnlyRoute>
            <HomeComponenet />
          </PublicOnlyRoute>
        }
      />

      <Route path="/login" element={<LoginComponenet />} />
      <Route path="/register" element={<RegisterComponenet />} />

      {/* {Dashboard pages routes} */}

      <Route
        path="/dashboard"
        element={
          <ProtectedRoute>
            <DashboardComponenet />
          </ProtectedRoute>
        }
      >
        {/* {Nested Routes} */}
        <Route index element={<DashboardHomeComponenet />} />
        <Route path="create/task" element={<CreateTasksComponenet />} />
        <Route path="mytasks" element={<MyTasksComponenet />} />
        <Route path="about" element={<AboutComponenet />} />
      </Route>

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
