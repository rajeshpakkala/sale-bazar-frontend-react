import { useState } from "react";
import { authApi } from "../../services/authApi";
import type { AuthResponse } from "../../types/auth";

export default function RegisterVendor() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [businessName, setBusinessName] = useState("");
  const [msg, setMsg] = useState("");

  const submit = async () => {
    try {
      const res = await authApi.post<AuthResponse<any>>(
        "/register/vendor",
        { email, password, businessName }
      );

      setMsg(res.data.message);
    } catch (err: any) {
      setMsg(err.response?.data?.message || "Registration failed");
    }
  };

  return (
    <section>
      <h3>Register Vendor</h3>

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

      <input
        placeholder="Business Name"
        value={businessName}
        onChange={(e) => setBusinessName(e.target.value)}
      />

      <button onClick={submit}>Register</button>
      <p>{msg}</p>
    </section>
  );
}
