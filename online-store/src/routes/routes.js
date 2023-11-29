import { Routes, Route } from "react-router-dom";
import { LoginPage } from "../pages/login/LoginPage";
import { MainPage } from "../pages/main-page/MainPage";
import { RegisterPage } from "../pages/register-page/RegisterPage";
import { NotFound } from "../pages/not-found/NotFound";
import { ProtectedRoute } from "../components/ProtectedRoute";
import { ProfilePage } from "../pages/profile-page/ProfilePage";
import { AdvPage } from "../pages/adv-page/AdvPage";
import { AdForm } from "../pages/create-ad/AdForm";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/" element={<MainPage />} />
      <Route path="/advs/:id" element={<AdvPage />} />

      <Route
        element={
          <ProtectedRoute isAllowed={Boolean(localStorage.getItem("user"))} />
        }
      >
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/create-ad" element={<AdForm />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};
