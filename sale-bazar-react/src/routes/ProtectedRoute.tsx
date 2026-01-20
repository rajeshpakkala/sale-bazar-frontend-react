import { Navigate } from "react-router-dom";
import { authStorage } from "../storage/authStorage";

export default function ProtectedRoute({ roles, children }: any) {
  const userRoles = authStorage.getRoles();

  console.log("ProtectedRoute → required:", roles);
  console.log("ProtectedRoute → stored:", userRoles);

  if (!roles.some((r: string) => userRoles.includes(r))) {
    return <Navigate to="/login" replace />;
  }

  return children;
}
