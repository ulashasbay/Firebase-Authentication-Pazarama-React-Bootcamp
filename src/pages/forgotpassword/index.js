import React from "react";
import "./index.css";
import AuthInput from "../../components/authinputs";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/authContext";

function ForgotPassword() {
  let navigate = useNavigate();
  // authContext den alınan fonksiyon ve state ler
  const { resetPassword, form } = useAuth();

  // reset password butonuna tıklandıgında calısacak fonksiyon
  const handleResetPassword = async (e) => {
    e.preventDefault();
    try {
      await resetPassword(form.email);
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
          <span className="login-header">Reset Password</span>
          <form onSubmit={handleResetPassword}>
            <AuthInput
              type="email"
              placeholder="username@gmail.com"
              labelClassName="login-email"
              labelText="Email"
            />
            <br />
            <button className="login-button" type="submit">
              Reset Password
            </button>
          </form>
          <div className="dont-have-account-signup">
            Already have an account?
            <Link to="/signin">
              <span className="register-link">Login here!</span>
            </Link>
          </div>
          <div className="dont-have-account-fp">
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

export default ForgotPassword;
