import React from "react";
import "./Form.css";

const AuthLayout = ({ children }) => {
  return (
    <div className="auth-container">
      <div className="logo">
        <h1 className="logo-text">⚡ CodeNova</h1>
        <p className="tagline">Empowering Coders, One Line at a Time</p>
      </div>
      <div className="form-card">
        {children}
      </div>
    </div>
  );
};

export default AuthLayout;

