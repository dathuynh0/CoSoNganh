import { Outlet } from "react-router";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="bg-slate-200">
      <div className="bg-slate-100 flex justify-center sticky top-0 right-0 left-0 z-50">
        <div className="w-full md:w-4/5">
          <NavBar />
        </div>
      </div>

      <div className="mt-6 md:w-4/5 mx-auto font-[Sora]">
        <div>
          <Outlet />
        </div>
      </div>
      <div className="bg-sky-200 text-white flex justify-center font-[Sora]">
        <Footer />
      </div>
    </div>
  );
}

export default App;
