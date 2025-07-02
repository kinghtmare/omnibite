"use client";

import { useState } from "react";

function LoginForm() {
  const [loginState, setLoginState] = useState({
    email: "", // or username: "", depending on your auth system
    password: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setLoginState((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Login submitted:", loginState);
  };

  return (
    <form onSubmit={handleSubmit} className="form-container">
      <h2 className="form-title">think mark think!!</h2>
      <div>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={loginState.email}
          onChange={handleInputChange}
          required
        />
      </div>
      <div>
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          name="password"
          value={loginState.password}
          onChange={handleInputChange}
          required
        />
      </div>
      <button className="submit-button" type="submit">
        log in
      </button>
    </form>
  );
}

export default LoginForm;
