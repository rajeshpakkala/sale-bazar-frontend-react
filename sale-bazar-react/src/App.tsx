import { Login, RegisterCustomer, RegisterVendor } from "./components/auth";
import "./App.css";

export default function App() {
  return (
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
  );
}
