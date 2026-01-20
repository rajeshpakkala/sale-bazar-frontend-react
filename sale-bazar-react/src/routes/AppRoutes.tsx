import { Routes, Route, Navigate } from "react-router-dom";
import Login from "../components/auth/Login";
import RegisterCustomer from "../components/auth/RegisterCustomer";
import RegisterVendor from "../components/auth/RegisterVendor";
import AdminDashboard from "../dashboard/admin/AdminDashboard";
import ProtectedRoute from "./ProtectedRoute";

export default function AppRoutes() {
  return (
    <Routes>
      {/* LOGIN PAGE */}
      <Route
        path="/login"
        element={
          <div className="bg-salebazar">
            <div className="auth-card">
              <h2>Salebazar</h2>
              <Login />
              <RegisterCustomer />
              <RegisterVendor />
            </div>
          </div>
        }
      />

      {/* ADMIN DASHBOARD */}
      <Route
        path="/admin/dashboard"
        element={
          <ProtectedRoute roles={["ROLE_ADMIN"]}>
            <AdminDashboard />
          </ProtectedRoute>
        }
      />

      {/* DEFAULT */}
      <Route path="/" element={<Navigate to="/login" replace />} />
    </Routes>
  );
}
