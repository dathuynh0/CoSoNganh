// import NavBar from "./NavBar";
// import Banner from "./Banner";
// import ProDuctItem from "./ProductItems";

// import { data } from "../lib/data.js";
// import { Button } from "./ui/button";
// import { ArrowLeft, ArrowRight } from "lucide-react";

import BodyHomePage from "../components/BodyHomePage";
import Banner from "../components/Banner";
import DoNamDoNu from "../components/DoNamDoNu";

const HomePage = () => {
  return (
    <>
      <Banner />
      <DoNamDoNu />
      <BodyHomePage />
    </>
  );
};

export default HomePage;
