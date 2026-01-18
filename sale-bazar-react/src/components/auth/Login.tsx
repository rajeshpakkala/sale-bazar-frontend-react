import { useState } from "react";
import { authApi } from "../../services/authApi";
import type { AuthResponse, LoginResponse } from "../../types/auth";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [msg, setMsg] = useState("");

  const submit = async () => {
    try {
      const res = await authApi.post<AuthResponse<LoginResponse>>(
        "/login",
        { email, password }
      );

      localStorage.setItem("token", res.data.data.token);
      setMsg(`Login success (Role: ${res.data.data.role})`);
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
