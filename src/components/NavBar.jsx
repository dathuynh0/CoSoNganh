import {
  ChevronDown,
  CircleUserRound,
  ShoppingCartIcon,
  TextAlignJustify,
} from "lucide-react";
import logo from "../assets/logo.png";

import { useState } from "react";
import ResponsiveMenu from "./ResponsiveMenu.jsx";
import { Link } from "react-router";

const NavBar = () => {
  const [check, setCheck] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const openMenu = () => {
    setCheck(!check);
  };

  return (
    <>
      <nav className="flex justify-between items-center m-2 font-[Poppins]">
        {/* logo */}
        <a href="/">
          <img className="size-16 rounded-full" src={logo} alt="" />
        </a>

        {/* item */}
        <div className="hidden md:block">
          <ul className="flex items-center justify-center gap-x-8 text-lg text-white uppercase">
            <li>
              <Link to="/">Trang chủ</Link>
            </li>
            <li
              className="relative group"
              onMouseEnter={() => setDropdownOpen(true)}
              onMouseLeave={() => setDropdownOpen(false)}
            >
              <div className="flex items-center gap-x-2 cursor-pointer">
                Thương hiệu
                <ChevronDown
                  className={`transition-transform duration-200 ${
                    dropdownOpen ? "rotate-180" : ""
                  }`}
                />
              </div>

              {/* Dropdown menu */}
              <div
                className={`absolute top-8 left-0 bg-amber-500 rounded-md shadow-md overflow-hidden transition-all duration-200 ${
                  dropdownOpen ? "opacity-100 visible" : "opacity-0 invisible"
                }`}
              >
                <ul className="py-2 min-w-[200px]">
                  <li className="hover:bg-gray-700 transition-colors">
                    <Link
                      to="/thuonghieu/bitis"
                      className="block px-4 py-2 whitespace-nowrap"
                    >
                      Biti's
                    </Link>
                  </li>
                  <li className="hover:bg-gray-700 transition-colors">
                    <Link
                      to="/thuonghieu/yame"
                      className="block px-4 py-2 whitespace-nowrap"
                    >
                      Yame
                    </Link>
                  </li>
                  <li className="hover:bg-gray-700 transition-colors">
                    <Link
                      to="/thuonghieu/nike"
                      className="block px-4 py-2 whitespace-nowrap"
                    >
                      Nike
                    </Link>
                  </li>
                </ul>
              </div>
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

        {/* icon */}
        <div className="flex items-center gap-x-3">
          <CircleUserRound className="size-8 cursor-pointer" />
          <ShoppingCartIcon className="size-8 cursor-pointer" />
          <TextAlignJustify
            onClick={openMenu}
            className="size-8 cursor-pointer md:hidden"
          />
        </div>
      </nav>
      {/* responsive */}
      <ResponsiveMenu open={check} />
    </>
  );
};

export default NavBar;
