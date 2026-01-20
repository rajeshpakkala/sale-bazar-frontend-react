import { useEffect, useState } from "react";
import { adminDashboardApi } from "../../services/adminDashboardApi";
import type { AdminDashboardResponse } from "../../types/AdminDashboardResponse";

export default function AdminDashboard() {
  const [data, setData] = useState<AdminDashboardResponse | null>(null);
  const [error, setError] = useState("");

  useEffect(() => {
    adminDashboardApi
      .get<AdminDashboardResponse>("/home")
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        console.error(err);
        setError("Failed to load dashboard");
      });
  }, []);

  if (error) return <h3>{error}</h3>;
  if (!data) return <h3>Loading dashboard...</h3>;

  return (
    <div style={{ padding: "20px" }}>
      <h1>Admin Dashboard</h1>

      <div style={{ display: "flex", gap: "20px", marginTop: "20px" }}>
        <Card title="Total Users" value={data.totalUsers} />
        <Card title="Total Vendors" value={data.totalVendors} />
        <Card title="Total Orders" value={data.totalOrders} />
        <Card title="Total Revenue" value={`₹ ${data.totalRevenue}`} />
      </div>
    </div>
  );
}

function Card({ title, value }: { title: string; value: any }) {
  return (
    <div
      style={{
        border: "1px solid #ddd",
        padding: "16px",
        borderRadius: "8px",
        minWidth: "150px",
      }}
    >
      <h4>{title}</h4>
      <p style={{ fontSize: "20px", fontWeight: "bold" }}>{value}</p>
    </div>
  );
}
