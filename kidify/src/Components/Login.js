import React from "react";

const Login = ({ showLogin }) => {
  return (
    <form>
      <div className="form-group">
        <label for="inputUserName">Username</label>
        <input
          className="form-control"
          placeholder="Username"
          type="text"
          id="inputUserName"
        />
      </div>
      <div className="form-group">
        <label for="inputPassword">Password</label>
        <input
          className="form-control"
          placeholder="Password"
          type="password"
          id="inputPassword"
        />
      </div>
    </form>
  );
};

export default Login;
