import {
  ChevronDown,
  CircleUserRound,
  HandPlatter,
  ShoppingCartIcon,
  TextAlignJustify,
} from "lucide-react";
import logo from "../assets/logo.png";

import { useState } from "react";
import ResponsiveMenu from "./ResponsiveMenu.jsx";
import { Link, NavLink } from "react-router";
import "./mystyle.css";
import Login from "./Login";

const NavBar = () => {
  const [check, setCheck] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [checkLogin, setCheckLogin] = useState(false);

  const openMenu = () => {
    setCheck(!check);
  };

  const handleCheckLogin = () => {
    setCheckLogin(!checkLogin);
  };
  return (
    <>
      <nav className="flex justify-between items-center p-2 font-[Sora]">
        {/* logo */}
        <a href="/">
          <img className="size-16 rounded-full" src={logo} alt="" />
        </a>

        {/* item */}
        <div className="hidden md:block">
          <ul className="flex items-center justify-center gap-x-8 text-lg text-blue-700 uppercase">
            <li>
              <NavLink className="" to="/">
                Trang chủ
              </NavLink>
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
                className={`absolute top-8 left-0 bg-white rounded-md shadow-md overflow-hidden transition-all duration-200 ${
                  dropdownOpen ? "opacity-100 visible" : "opacity-0 invisible"
                }`}
              >
                <ul className="py-2 min-w-[200px]">
                  <li className="hover:bg-gray-300 transition-colors">
                    <NavLink
                      to="/thuonghieu/bitis"
                      className="block px-4 py-2 whitespace-nowrap active"
                    >
                      Biti's
                    </NavLink>
                  </li>
                  <li className="hover:bg-gray-300 transition-colors">
                    <NavLink
                      to="/thuonghieu/yame"
                      className="block px-4 py-2 whitespace-nowrap"
                    >
                      Yame
                    </NavLink>
                  </li>
                  <li className="hover:bg-gray-300 transition-colors">
                    <NavLink
                      to="/thuonghieu/nike"
                      className="block px-4 py-2 whitespace-nowrap"
                    >
                      Nike
                    </NavLink>
                  </li>
                </ul>
              </div>
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

        {/* icon */}
        <div className="flex items-center gap-x-3">
          <CircleUserRound
            onClick={handleCheckLogin}
            className="relative size-8 cursor-pointer"
          />

          <ShoppingCartIcon className="size-8 cursor-pointer" />
          <TextAlignJustify
            onClick={openMenu}
            className="size-8 cursor-pointer md:hidden"
          />
        </div>
      </nav>

      {/* login */}
      <Login check={checkLogin} />
      {/* responsive */}
      <ResponsiveMenu open={check} />
      {}
    </>
  );
};

export default NavBar;
