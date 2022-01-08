import React from "react";
import "./index.css";
import AuthInput from "../../components/authinputs";
import SocialLogBtns from "../../components/socialLoginBtns";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/authContext";

function SignIn() {
  let navigate = useNavigate();
  // authContext den alınan fonksiyon ve state
  const { signin, form } = useAuth();

  // sign in butonuna tıklandıgında calısacak fonksiyon
  const handleSignInSubmit = async (e) => {
    e.preventDefault();
    try {
      await signin(form.email, form.password);
      navigate("/");
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div className="login-container">
      <div className="login-field">
        <div className="login-form-area">
          <span className="your-logo">Your Logo</span>
          <span className="login-header">Login</span>
          <form onSubmit={handleSignInSubmit}>
            <AuthInput
              type="email"
              placeholder="username@gmail.com"
              labelClassName="login-email"
              labelText="Email"
            />
            <AuthInput
              type="password"
              placeholder="password"
              labelClassName="login-password"
              labelText="Password"
            />
            <Link to="/forgotpassword">
              <span className="forgot-password">Forgot Password?</span>
            </Link>
            <button className="login-button" type="submit">
              Sign in
            </button>
          </form>
          <span className="continue-with">or continue with</span>
          <SocialLogBtns />
          <div className="dont-have-account">
            Don't have an account yet?
            <Link to="/signup">
              <span className="register-link">Register for free</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignIn;
