import { Outlet } from "react-router";
import NavBar from "./components/NavBar";

function App() {
  return (
    <div className="h-[10000px] ">
      <div className="bg-white flex justify-center sticky top-0 right-0 left-0 z-50">
        <div className="w-full md:w-4/5">
          <NavBar />
        </div>
      </div>

      <div className="mt-6 md:w-4/5 mx-auto font-[Poppins]">
        <div>
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default App;
