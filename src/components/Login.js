import React from "react";

const Login = () => {
  return (
    <>
      <div className="header">Welcome Back!</div>
      <div className="login center">
        <label for="email">Email</label>
        <input type="text" name="email" id="email" placeholder="stonks@stalk.com" />

        <label for="password">Password</label>

        <input type="password" name="password" id="password" placeholder="stonks@stalk.com" />
        <a href="/forgot" className="right">
          Forgot password?
        </a>
        <input type="submit" value="Sign In"></input>
        <a href="/forgot">
          New User? <span>Sign Up</span>
        </a>
      </div>
    </>
  );
};

export default Login;
