import { Routes, Route } from "react-router";
import HomePage from "./pages/HomePage";
import DoNam from "./pages/DoNam";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/donam" element={<DoNam />} />
      </Routes>
    </>
  );
}

export default App;
