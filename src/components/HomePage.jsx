// import NavBar from "./NavBar";
// import Banner from "./Banner";
// import ProDuctItem from "./ProductItems";

// import { data } from "../lib/data.js";
// import { Button } from "./ui/button";
// import { ArrowLeft, ArrowRight } from "lucide-react";

import SanPhamBanChay from "./SanPhamBanChay.jsx";
import Banner from "./Banner.jsx";
import DoNamDoNu from "./DoNamDoNu.jsx";

const HomePage = () => {
  return (
    <>
      <Banner />
      <DoNamDoNu />
      <SanPhamBanChay />
    </>
  );
};

export default HomePage;
