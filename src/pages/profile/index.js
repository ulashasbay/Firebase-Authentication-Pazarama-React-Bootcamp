import React from "react";
import "./index.css";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/authContext";

function ProfilePage() {
  // authContext den alınan fonksiyon ve state ler
  const { logout } = useAuth();

  let navigate = useNavigate();
  // Logout butonuna basıldıgında calısacak fonksiyon
  const handleLogout = async (e) => {
    e.preventDefault();
    try {
      await logout();
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="profile-container">
      <div className="profile-field">
        <h2 className="profile-header">Welcome</h2>
        <span className="profile-intro">
          The earliest credible evidence of the drinking of coffee in the form
          of the modern beverage appears in modern-day Yemen from the middle of
          the 15th century in Sufi shrines, where coffee seeds were first
          roasted and brewed in a manner similar to current methods. The Yemenis
          procured the coffee beans from the Ethiopian Highlands via coastal
          Somali intermediaries and began cultivation. By the 16th century, the
          drink had reached the rest of the Middle East and North Africa, later
          spreading to Europe
        </span>
        <button className="profile-button" onClick={handleLogout}>
          Logout
        </button>
      </div>
      <div className="img-coffee-profile">
        <img src={"./profile-coffee-img.png"} alt="coffee" />
      </div>
    </div>
  );
}

export default ProfilePage;
