import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login.jsx";
import Register from "./pages/Register.jsx";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Landing from "./pages/Landing.jsx";
import ProtectedRoute from "./components/ProtectedRoute.jsx";
import UserDashboard from "./pages/UserDashboard.jsx";
import AdminDashboard from "./pages/AdminDashboard.jsx";
import NotAuthorized from "./pages/NotAuthorized.jsx";
import AdminJobForm from "./pages/AdminJobForm.jsx";



function App() {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />    
        
        <Route path="/admin/dashboard" element= {
              <ProtectedRoute allowedRoles={["admin"]}>
                <AdminDashboard />
              </ProtectedRoute> 
            } />
        <Route path="/admin-job-form" element={
            <ProtectedRoute allowedRoles={["admin"]}>
             <AdminJobForm />
            </ProtectedRoute>
          } />

        <Route path="/dashboard" element={
          <ProtectedRoute allowedRoles={["user", "admin"]}>
            <UserDashboard />
          </ProtectedRoute> 
        } />
          <Route path="/not-authorized" element={<NotAuthorized />} />
      </Routes>
      <ToastContainer position="top-center" autoClose={3000} hideProgressBar={false} newestOnTop
         closeOnClick pauseOnHover draggable theme="colored"
      />
    </Router>
    
  );
}

export default App;

