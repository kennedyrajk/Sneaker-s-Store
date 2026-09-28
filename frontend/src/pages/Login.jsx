import { useState, useContext ,useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import api from "../services/api";
import "../styles/Login.css";

export default function Login() {
  const navigate = useNavigate();

  const { login, user } = useContext(AuthContext);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  useEffect(() => {
  if (user) {
    if (user.isAdmin) {
      navigate("/dashboard");
    } else {
      navigate("/");
    }
  }
}, [user, navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      const res = await api.post(
        "/auth/login",
        formData
      );

      login(res.data);

      alert("Login Successful!");

      if (res.data.isAdmin) {
        navigate("/dashboard");
      } else {
        navigate("/");
      }
    } catch (err) {
      console.log(err);

      alert(
        err.response?.data?.message ||
          "Invalid Credentials"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="login-page">
      <div className="login-card">
        <h1>Welcome Back</h1>

        <p>Login to continue shopping.</p>

        <form onSubmit={handleSubmit}>
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            required
          />

          <button
            type="submit"
            disabled={loading}
          >
            {loading
              ? "Logging In..."
              : "Login"}
          </button>
        </form>

        <p className="register-link">
          Don't have an account?

          <Link to="/register">
            Register
          </Link>
        </p>
      </div>
    </section>
  );
}