import React from "react";
import { useState } from 'react';
import { useSpring, animated } from "react-spring";

const Login = ({ showLogin }) => {
  const [registrationFormStatus, setRegistartionFormStatus] = useState(true);
  const loginProps = useSpring({ 
    left: registrationFormStatus ? 500 : 0, // Login form sliding positions
  });
  const registerProps = useSpring({
    left: registrationFormStatus ? 0 : -500, // Register form sliding positions 
  });

  const loginBtnProps = useSpring({
    borderBottom: registrationFormStatus 
      ? "solid 0px transparent"
      : "solid 2px #1059FF",  //Animate bottom border of login button
  });
  const registerBtnProps = useSpring({
    borderBottom: registrationFormStatus
      ? "solid 2px #1059FF"
      : "solid 0px transparent", //Animate bottom border of register button
  });

  function registerClicked() {
    setRegistartionFormStatus(true);
  }
  function loginClicked() {
    setRegistartionFormStatus(false);
  }

  function LoginForm() {
    return (
      <React.Fragment>
        <label for="username">USERNAME</label>
        <input type="text" id="username" />
        <label for="password">PASSWORD</label>
        <input type="text" id="password" />
        <input type="submit" value="submit" className="submit" />
      </React.Fragment>
    );
  }
  
  function RegisterForm() {
    return (
      <React.Fragment>
        <label for="firstname">first name</label>
        <input type="text" id="firstname" />
        <label for="lastname">last name</label>
        <input type="text" id="lastname" />
        <label for="email">email</label>
        <input type="text" id="email" />
        <label for="username">username</label>
        <input type="text" id="username" />
        <label for="password">password</label>
        <input type="text" id="password" />
        <label for="confirmpassword">confirm password</label>
        <input type="text" id="confirmpassword" />
        <label for="birthdate">Birth Date</label>    
        <input type="date" id="birthdate" placeholder="DD/MM/YYYY.."/>    
        <input type="submit" value="submit" class="submit" />
      </React.Fragment>
    );
  }

  return (
    <div>
    <div className="container">
        <div className="login-register-wrapper">
            <div className="nav-buttons">
            <animated.button
          onClick={registerClicked}
          id="registerBtn"
          style={registerBtnProps}
        >
          Register
        </animated.button>
        <animated.button
          onClick={loginClicked}
          id="loginBtn"
          style={loginBtnProps}
        >
          Login
        </animated.button>
      </div>
      <div className="form-group">
        <animated.form action="" id="loginform" style={loginProps}>
          <LoginForm />
        </animated.form>
        <animated.form action="" id="registerform" style={registerProps}>
          <RegisterForm />
        </animated.form>
      </div>
      <animated.div className="forgot-panel" style={loginProps}>
        <a href="#">Forgot your password</a>
      </animated.div>
        </div>
    </div>

    </div>
  );
};

export default Login;
