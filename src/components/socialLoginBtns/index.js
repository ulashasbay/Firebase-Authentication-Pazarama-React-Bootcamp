import React from "react";
import "./index.css";
import { useAuth } from "../../context/authContext";

function SocialLogBtns() {
  // authContext den alınan firebase social login fonksiyonları
  const { signInWithGoogle, signInWithGithub, signInWithFacebook } = useAuth();

  return (
    <div className="social-buttons-field">
      <button className="social-buttons" onClick={signInWithGoogle}>
        <i className="iconify" data-icon="flat-color-icons:google"></i>
      </button>
      <button className="social-buttons" onClick={signInWithGithub}>
        <i className="iconify" data-icon="logos:github-icon"></i>
      </button>
      <button className="social-buttons" onClick={signInWithFacebook}>
        <i className="fab fa-facebook"></i>
      </button>
    </div>
  );
}

export default SocialLogBtns;
