import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { authApi } from "../../services/authApi";
import type { AuthResponse, LoginResponse } from "../../types/auth";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [msg, setMsg] = useState("");

  const navigate = useNavigate();

  const submit = async () => {
    try {
      const res = await authApi.post<AuthResponse<LoginResponse>>(
        "/login",
        { email, password }
      );

      const { token, role } = res.data.data;
      const roles = [role]; // convert single role → array

      localStorage.setItem("token", token);
      localStorage.setItem("roles", JSON.stringify(roles));

      setMsg("Login successful");

      // ✅ REAL NAVIGATION
      if (role === "ROLE_ADMIN") {
        navigate("/admin/dashboard");
      }

    } catch (err: any) {
      setMsg(err.response?.data?.message || "Login failed");
    }
  };

  return (
    <section>
      <h3>Login</h3>

      <input
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <button onClick={submit}>Login</button>
      <p>{msg}</p>
    </section>
  );
}
