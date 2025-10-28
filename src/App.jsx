import { Outlet } from "react-router";
import NavBar from "./components/NavBar/NavBar";
import Footer from "./pages/Footer";
import { Toaster } from "sonner";
import { useState } from "react";

function App() {
  const [search, setSearch] = useState("");

  const handleSearchChange = (e) => {
    setSearch(e.target.value);
  };

  return (
    <div className="bg-slate-200 font-['Roboto']">
      <Toaster />
      <div className="bg-slate-100 flex justify-center lg:sticky top-0 right-0 left-0 z-50">
        <div className="w-full md:w-4/5">
          <NavBar search={search} onSearchChange={handleSearchChange} />
        </div>
      </div>

      <main className="md:w-4/5 mx-auto">
        <div>
          <Outlet context={{ search }} />
        </div>
      </main>
      <div className="bg-sky-200 text-white flex justify-center">
        <Footer />
      </div>
    </div>
  );
}

export default App;
