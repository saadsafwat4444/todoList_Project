import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { LoginComponenet } from './pages/auth_pages/LoginComponenet'
import { RegisterComponenet } from './pages/auth_pages/RegisterComponenet'
import { HomeComponenet } from './pages/HomeComponenet'
import { DashboardComponenet } from "./pages/dashboard/dashbordComponenet";
import { DashboardHomeComponenet } from "./pages/dashboard/DashbordHomeComponenet";
import { CreateTasksComponenet } from "./pages/dashboard/CreateTasksComponent";
import { MyTasksComponenet } from "./pages/dashboard/MyTasksComponenet";
import ProtectedRoute from "./componenets/ProtectedRoute";

function App() {
  

  return (

    <Router>
      <Routes>
        <Route path='/' element={<HomeComponenet/>}/>
           <Route path='/login' element={<LoginComponenet/>}/>
            <Route path='/register' element={<RegisterComponenet/>}/>

            {/* {Dashboard pages routes} */}

            <Route 
            path="/dashboard"

            element={
              <ProtectedRoute>
            <DashboardComponenet/>
            </ProtectedRoute>
          }


            >

              {/* {Nested Routes} */}
            <Route index element={<DashboardHomeComponenet/>}/>
               <Route path='create/task' element={<CreateTasksComponenet/>}/>
                 <Route path='mytasks' element={<MyTasksComponenet/>}/>

            </Route>
      </Routes>


    </Router>
    
      
  )
}

export default App
