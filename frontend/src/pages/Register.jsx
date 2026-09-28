import { useState, useContext, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";

import { AuthContext } from "../context/AuthContext";
import api from "../services/api";

import "../styles/Register.css";

export default function Register() {
  const navigate = useNavigate();

  const { login, user } = useContext(AuthContext);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (user) {
      if (user.isAdmin) {
        navigate("/dashboard");
      } else {
        navigate("/");
      }
    }
  }, [user, navigate]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      const res = await api.post(
        "/auth/register",
        formData
      );

      login(res.data);

      alert("Registration Successful!");

      if (res.data.isAdmin) {
        navigate("/dashboard");
      } else {
        navigate("/");
      }
    } catch (err) {
      console.log(err);

      alert(
        err.response?.data?.message ||
          "Registration Failed"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="register-page">
      <div className="register-card">
        <h1>Create Account</h1>

        <p>
          Join SneakerX and start shopping.
        </p>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
            required
          />

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
              ? "Creating..."
              : "Create Account"}
          </button>
        </form>

        <p className="login-link">
          Already have an account?

          <Link to="/login">
            Login
          </Link>
        </p>
      </div>
    </section>
  );
}