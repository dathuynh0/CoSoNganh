import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { Link, NavLink } from "react-router";

const ResponsiveMenu = ({ open }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, x: -150 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.3 }}
            className="absolute left-0 top-20 w-full h-screen z-20"
          >
            <div className="text-xl uppercase font-semibold bg-gray-300 text-blue-600 py-10 m-6 rounded-2xl">
              <ul className="flex flex-col justify-center items-center gap-10">
                <li>
                  <NavLink to="/">Trang chủ</NavLink>
                </li>

                {/* Dropdown Thương hiệu */}
                <li className="w-full">
                  <div
                    className="flex items-center justify-center gap-2 cursor-pointer"
                    onClick={() => setDropdownOpen(!dropdownOpen)}
                  >
                    Thương hiệu
                    <ChevronDown
                      className={`transition-transform duration-300 ${
                        dropdownOpen ? "rotate-180" : ""
                      }`}
                    />
                  </div>

                  {/* Dropdown items */}
                  <AnimatePresence>
                    {dropdownOpen && (
                      <motion.ul
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="flex flex-col items-center gap-4 mt-4 text-lg overflow-hidden"
                      >
                        <li className="hover:text-amber-200 transition-colors">
                          <NavLink to="/thuonghieu/bitis">Biti's</NavLink>
                        </li>
                        <li className="hover:text-amber-200 transition-colors">
                          <NavLink to="/thuonghieu/yame">Yame</NavLink>
                        </li>
                      </motion.ul>
                    )}
                  </AnimatePresence>
                </li>

                <li>
                  <NavLink to="/donam">Đồ nam</NavLink>
                </li>
                <li>
                  <NavLink to="/donu">Đồ nữ</NavLink>
                </li>
                <li>
                  <NavLink to="/phukien">Phụ kiện</NavLink>
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
