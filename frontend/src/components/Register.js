import React from "react";
import { Link } from "react-router-dom";
import AuthLayout from "./AuthLayout";

const Register = () => {
  return (
    <AuthLayout>
      <h2>🚀 Join CodeNova</h2>
      <input type="email" placeholder="Email" />
      <input type="password" placeholder="Password" />
      <input type="password" placeholder="Confirm Password" />
      <button>Register</button>
      <p className="register-link">
        Already have an account? <Link to="/login">Login</Link>
      </p>
    </AuthLayout>
  );
};

export default Register;



