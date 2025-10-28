import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { NavLink } from "react-router";

const ResponsiveMenu = ({ open }) => {
  const [dropdownNamOpen, setDropdownNamOpen] = useState(false);
  const [dropdownNuOpen, setDropdownNuOpen] = useState(false);

  return (
    <>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, x: -150 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.3 }}
            className="absolute left-0 top-15 right-0 w-full h-screen z-20"
          >
            <div className="text-xl uppercase font-semibold bg-gray-300 text-black py-10 m-6 rounded-2xl">
              <ul className="flex flex-col justify-center items-center gap-10">
                <li>
                  <NavLink to="/">Trang chủ</NavLink>
                </li>
                <li>
                  <NavLink to="/sale">Sale</NavLink>
                </li>

                <li className="w-full relative">
                  <div className="flex items-center justify-center gap-2 cursor-pointer">
                    <NavLink to="/do-nam">Đồ nam</NavLink>
                    <ChevronDown
                      onClick={() => setDropdownNamOpen(!dropdownNamOpen)}
                      className={`top-0 bottom-0 transition-transform duration-300 ${
                        dropdownNamOpen ? "rotate-180" : ""
                      }`}
                    />
                  </div>

                  <AnimatePresence>
                    {dropdownNamOpen && (
                      <motion.ul
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="flex flex-col items-center gap-4 mt-4 text-lg overflow-hidden"
                      >
                        <li className="hover:text-amber-200 transition-colors">
                          <NavLink to="/do-nam/ao">Áo</NavLink>
                        </li>
                        <li className="hover:text-amber-200 transition-colors">
                          <NavLink to="/do-nam/quan">Quần</NavLink>
                        </li>
                      </motion.ul>
                    )}
                  </AnimatePresence>
                </li>
                <li className="w-full">
                  <div className="flex items-center justify-center gap-2 cursor-pointer">
                    <NavLink to="/do-nu">Đồ nữ</NavLink>
                    <ChevronDown
                      onClick={() => setDropdownNuOpen(!dropdownNuOpen)}
                      className={`transition-transform duration-300 ${
                        dropdownNuOpen ? "rotate-180" : ""
                      }`}
                    />
                  </div>

                  <AnimatePresence>
                    {dropdownNuOpen && (
                      <motion.ul
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="flex flex-col items-center gap-4 mt-4 text-lg overflow-hidden"
                      >
                        <li className="hover:text-amber-200 transition-colors">
                          <NavLink to="/do-nu/ao">Áo</NavLink>
                        </li>
                        <li className="hover:text-amber-200 transition-colors">
                          <NavLink to="/do-nu/quan">Quần</NavLink>
                        </li>
                      </motion.ul>
                    )}
                  </AnimatePresence>
                </li>
                <li>
                  <NavLink to="/phu-kien">Phụ kiện</NavLink>
                </li>
              </ul>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ResponsiveMenu;
