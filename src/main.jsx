import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter, Route, Routes } from "react-router";
import DoNam from "./components/DoNam";
import DoNu from "./components/DoNu";
import PhuKien from "./components/PhuKien";
import HomePage from "./components/HomePage";
import Signup from "./components/Signup";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<App />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/donam" element={<DoNam />} />
          <Route path="/donu" element={<DoNu />} />
          <Route path="/phukien" element={<PhuKien />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
