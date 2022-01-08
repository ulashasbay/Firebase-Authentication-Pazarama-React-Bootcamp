import {
  createUserWithEmailAndPassword,
  FacebookAuthProvider,
  GithubAuthProvider,
  GoogleAuthProvider,
  onAuthStateChanged,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import React, { useContext, useState, useEffect } from "react";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";

const AuthContext = React.createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  // Firebase den gelen kullanıcı bilgilerinin atandıgı state
  const [currentUser, setCurrentUser] = useState({});
  // email ve password inputlarına girilen bilgilerin tutuldugu state
  const [form, setForm] = useState({ email: "", password: "" });
  // sayfa yükleme ya da routing geçişlerinde kullanılan state
  const [isLoading, setIsLoading] = useState(true);

  // firebase signup islemini gerceklestiren fonksiyon
  function signup(email, password) {
    return createUserWithEmailAndPassword(auth, email, password);
  }

  // firebase signin islemini gerceklestiren fonksiyon
  function signin(email, password) {
    return signInWithEmailAndPassword(auth, email, password);
  }

  // firebase logout islemini gerceklestiren fonksiyon
  function logout() {
    return signOut(auth);
  }

  // firebase reset password islemini gerceklestiren fonksiyon
  function resetPassword(email) {
    return sendPasswordResetEmail(auth, email);
  }

  let navigate = useNavigate();

  // firebase google ile login islemini gerceklestiren fonksiyon
  async function signInWithGoogle() {
    const provider = new GoogleAuthProvider();
    try {
      await signInWithPopup(auth, provider);
      navigate("/");
    } catch (error) {
      console.log(error.message);
    }
  }

  // firebase github ile login islemini gerceklestiren fonksiyon
  async function signInWithGithub() {
    const provider = new GithubAuthProvider();
    try {
      await signInWithPopup(auth, provider);
      navigate("/");
    } catch (error) {
      console.log(error.message);
    }
  }

  // firebase facebook ile login islemini gerceklestiren fonksiyon
  async function signInWithFacebook() {
    const provider = new FacebookAuthProvider();
    try {
      await signInWithPopup(auth, provider);
      navigate("/");
    } catch (error) {
      console.log(error.message);
    }
  }

  // sayfa her yüklendiğinde ya da user state değişikliğinde çalışacak fonksiyon
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
      setIsLoading(false);
    });
    return unsubscribe;
  }, []);

  const value = {
    currentUser,
    signup,
    signin,
    logout,
    resetPassword,
    signInWithGoogle,
    signInWithGithub,
    signInWithFacebook,
    form,
    setForm,
    isLoading,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
