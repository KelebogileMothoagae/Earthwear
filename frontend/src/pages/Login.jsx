import { useState } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [jsonData, setJsonData] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const response = axios.post("http://localhost:3000/api/auth/login", {
        email,
        userPassword: password,
      });

      // Safely access user
      const user = response.data?.user;
      if (user) {
        setJsonData(`Login successful! Welcome ${user.name || user.email}`);
      } else {
        setJsonData(response.data?.message || "Login successful!");
      }
    } catch (err) {
      console.error(err);
      setError("Invalid email or password");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="login-container">
        <h2>Login</h2>

        <form onSubmit={handleSubmit}>
          {error && <p style={{ color: "red" }}>{error}</p>}
          <div className="form-group">
            <label>Email</label>
            <input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button type="submit" disabled={loading}>
            {loading ? "Logging in..." : "Login"}
          </button>
          {jsonData && <p style={{ marginTop: "20px" }}>{jsonData}</p>}
        </form>
      </div>
    </>
  );
};

export default Login;
