import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "../pages/LandingPage";
import Dashboard from "../pages/Dashboard";
import Campaigns from "../pages/Campaigns";
import Leads from "../pages/Leads";
import Login from "../pages/Login";
import Register from "../pages/Register";
export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />

        <Route
          path="/dashboard"
          element={<Dashboard />}
        />
        <Route
          path="/login"
          element={<Login />}
        />
        <Route
          path="/campaigns"
          element={<Campaigns />}
        />

        <Route
          path="/leads"
          element={<Leads />}
        />
        <Route path="/register" 
        element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
}