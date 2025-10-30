import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter, Route, Routes } from "react-router";
import DoNam from "./pages/DoNam";
import DoNu from "./pages/DoNu";
import PhuKien from "./pages/PhuKien";
import HomePage from "./pages/HomePage";
import NotFound from "./pages/NotFound";
import Signup from "./components/NavBar/Signup";
import Admin from "./pages/Admin";
import Sale from "./pages/Sale";
import { AuthProvider } from "./AuthContext";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />}>
            <Route index element={<HomePage />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/sale" element={<Sale />} />
            <Route path="/do-nam" element={<DoNam />} />
            <Route path="/do-nu" element={<DoNu />} />
            <Route path="/phu-kien" element={<PhuKien />} />
          </Route>

          <Route path="/admin" element={<Admin />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  </StrictMode>
);
