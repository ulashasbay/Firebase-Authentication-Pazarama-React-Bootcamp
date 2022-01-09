import { Routes, Route } from "react-router-dom";
import SignUp from "./pages/signup";
import SignIn from "./pages/signin";
import LandingPage from "./pages/landing";
import ProfilePage from "./pages/profile";
import PrivateRoute from "./pages/PrivateRoute";
import ForgotPassword from "./pages/forgotpassword";
import { useAuth } from "./context/authContext";

// Routingler
function App() {
  const { isLoading } = useAuth();
  return (
    <div>
      {!isLoading && (
        <Routes>
          <Route element={<PrivateRoute />}>
            <Route path="*" element={<ProfilePage />} />
          </Route>
          <Route path="landingpage" element={<LandingPage />} />
          <Route path="signin" element={<SignIn />} />
          <Route path="signup" element={<SignUp />} />
          <Route path="forgotpassword" element={<ForgotPassword />} />
        </Routes>
      )}
    </div>
  );
}

export default App;
