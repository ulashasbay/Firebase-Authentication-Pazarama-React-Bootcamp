import React from "react";
import AuthInput from "../../components/authinputs";
import { Link, useNavigate } from "react-router-dom";
import "./index.css";
import { useAuth } from "../../context/authContext";

function SignUp() {
  let navigate = useNavigate();
  // authContext den alınan fonksiyon ve state
  const { signup, form } = useAuth();

  // sign up butonuna basıldıgında calısacak fonksiyon
  const handleSignUpSubmit = async (e) => {
    e.preventDefault();
    try {
      await signup(form.email, form.password);
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
          <span className="login-header">Sign Up</span>
          <form onSubmit={handleSignUpSubmit}>
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
            <br />
            <button className="login-button" type="submit">
              Sign up
            </button>
          </form>
          <div className="dont-have-account-signup">
            Already have an account?
            <Link to="/signin">
              <span className="register-link">Login here!</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
