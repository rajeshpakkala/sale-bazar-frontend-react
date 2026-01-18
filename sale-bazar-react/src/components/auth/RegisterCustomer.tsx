import { useState } from "react";
import { authApi } from "../../services/authApi";
import type{ AuthResponse } from "../../types/auth";

export default function RegisterCustomer() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [msg, setMsg] = useState("");

  const submit = async () => {
    try {
      const res = await authApi.post<AuthResponse<any>>(
        "/register/customer",
        { email, password }
      );
      setMsg(res.data.message);
    } catch (err: any) {
      setMsg(err.response?.data?.message || "Error");
    }
  };

  return (
    <section>
      <h3>Register Customer</h3>

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

      <button onClick={submit}>Register</button>
      <p>{msg}</p>
    </section>
  );
}
