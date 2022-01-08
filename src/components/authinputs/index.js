import React, { useState } from "react";
import "./index.css";
import { useAuth } from "../../context/authContext";
import EyeIcon from "../eyeicon";

function AuthInput({ type, placeholder, labelClassName, labelText, ...args }) {
  // authContext den alınan fonksiyon ve stateler
  const { form, setForm } = useAuth();
  // input type bilgisinin atandıgı fonksiyon
  const [inputType, setInputType] = useState(type);

  // input alanına girilen bilgilerin state e atanmasını sağlayan fonksiyon
  const onChangeInput = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  // password eye iconuna tıklandıgında calisan fonksyion
  const handlePasswordIconClick = () => {
    if (inputType === "text") {
      setInputType("password");
    } else {
      setInputType("text");
    }
  };

  return (
    <>
      <label className={labelClassName} htmlFor={type}>
        {labelText}
      </label>
      <input
        className="login-input-email"
        name={type}
        id={type}
        type={inputType}
        placeholder={placeholder}
        onChange={onChangeInput}
      />
      {type === "password" && (
        <i className="eye-icon" onClick={handlePasswordIconClick}>
          <EyeIcon />
        </i>
      )}
    </>
  );
}

export default AuthInput;
