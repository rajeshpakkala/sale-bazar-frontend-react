import { Routes, Route } from "react-router-dom";
import Login from "./components/auth/Login";
import RegisterCustomer from "./components/auth/RegisterCustomer";
import RegisterVendor from "./components/auth/RegisterVendor";
import AdminDashboard from "./dashboard/admin/AdminDashboard";
import ProtectedRoute from "./routes/ProtectedRoute";

import "./App.css";

export default function App() {
  return (
    <Routes>
      {/* LOGIN PAGE */}
      <Route
        path="/login"
        element={
          <div className="bg-salebazar">
            <div className="auth-card">
              <h2>Salebazar</h2>

              <div className="component-gap">
                <Login />
              </div>

              <div className="component-gap">
                <RegisterCustomer />
              </div>

              <div className="component-gap">
                <RegisterVendor />
              </div>
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

      {/* DEFAULT ROUTE */}
      <Route path="*" element={<Login />} />
    </Routes>
  );
}
