import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { Link } from "react-router";

const ResponsiveMenu = ({ open }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <>
      <AnimatePresence mode="wait">
        {open && (
          <motion.div
            initial={{ opacity: 0, x: -150 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.4 }}
            className="absolute top-20 left-0 w-screen h-screen z-20"
          >
            <div className="text-xl uppercase font-semibold bg-amber-600 text-white py-10 m-6 rounded-2xl">
              <ul className="flex flex-col justify-center items-center gap-10">
                <li>
                  <Link to="/">Trang chủ</Link>
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
                        className="flex flex-col items-center gap-4 mt-4 text-base overflow-hidden"
                      >
                        <li className="hover:text-amber-200 transition-colors">
                          <Link to="/thuonghieu/bitis">Biti's</Link>
                        </li>
                        <li className="hover:text-amber-200 transition-colors">
                          <Link to="/thuonghieu/yame">Yame</Link>
                        </li>
                      </motion.ul>
                    )}
                  </AnimatePresence>
                </li>

                <li>
                  <Link to="/donam">Đồ nam</Link>
                </li>
                <li>
                  <Link to="/donu">Đồ nữ</Link>
                </li>
                <li>
                  <Link to="/phukien">Phụ kiện</Link>
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
