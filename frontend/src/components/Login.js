import React from "react";
import AuthLayout from "./AuthLayout";

const Login = () => {
  return (
    <AuthLayout>
      <h2>🔒 Welcome Back</h2>
      <input type="email" placeholder="Email" />
      <input type="password" placeholder="Password" />
      <button>Login</button>
      <p className="register-link">Don’t have an account? <a href="/register">Register</a></p>
    </AuthLayout>
  );
};

export default Login;


