import {
  ChevronDown,
  CircleUserRound,
  LogOut,
  Search,
  ShoppingCartIcon,
  TextAlignJustify,
} from "lucide-react";

import { useState } from "react";
import ResponsiveMenu from "./ResponsiveMenu.jsx";
import { NavLink } from "react-router";
import "./mystyle.css";
import Login from "./Login";
import { user } from "../lib/data.js";
import { toast } from "sonner";
import { Input } from "./ui/input.jsx";
import SearchBar from "./SearchBar.jsx";

const NavBar = () => {
  const [check, setCheck] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [checkLogin, setCheckLogin] = useState(false);

  const [isSuccess, setIsSuccess] = useState(false);

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const openMenu = () => {
    setCheck(!check);
  };

  const handleCheckLogin = () => {
    setCheckLogin(!checkLogin);
  };

  const handleLogout = () => {
    setIsSuccess(false);
  };

  const successLogin = () => {
    if (!username && !password) {
      alert("Vui lòng nhập tài khoản và mật khẩu");
      toast.error("Đăng nhâp thất bại!");
      return;
    }
    if (username === user[0].username && password === user[0].password) {
      setIsSuccess(true);
      setCheckLogin(false);
      setUsername("");
      setPassword("");
      toast.success("Đăng nhập thành công!");
      return;
    }
    alert("Tài khoản hoặc mật khẩu không đúng");
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      successLogin();
    }
  };

  return (
    <>
      <nav className="flex justify-between items-center p-2">
        {/* logo */}
        <a href="/">
          <p className="text-3xl font-extrabold bg-gradient-to-b from-white/20 to-black inline-block text-transparent bg-clip-text">
            M O D A
          </p>
        </a>

        {/* item */}
        <div className="hidden md:block">
          <ul className="flex items-center justify-center gap-x-8 text-lg text-black uppercase">
            <li>
              <NavLink className="" to="/">
                Trang chủ
              </NavLink>
            </li>
            <li>
              <NavLink to="/sale">Sale</NavLink>
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
                      to="/thuong-hieu/bitis"
                      className="block px-4 py-2 whitespace-nowrap active"
                    >
                      Biti's
                    </NavLink>
                  </li>
                  <li className="hover:bg-gray-300 transition-colors">
                    <NavLink
                      to="/thuong-hieu/yame"
                      className="block px-4 py-2 whitespace-nowrap"
                    >
                      Yame
                    </NavLink>
                  </li>
                  <li className="hover:bg-gray-300 transition-colors">
                    <NavLink
                      to="/thuong-hieu/nike"
                      className="block px-4 py-2 whitespace-nowrap"
                    >
                      Nike
                    </NavLink>
                  </li>
                </ul>
              </div>
            </li>
            <li>
              <NavLink to="/do-nam">Đồ nam</NavLink>
            </li>
            <li>
              <NavLink to="/do-nu">Đồ nữ</NavLink>
            </li>
            <li>
              <NavLink to="/phu-kien">Phụ kiện</NavLink>
            </li>
          </ul>
        </div>
        {/* search */}
        <SearchBar />

        {/* icon */}
        <div className="flex items-center gap-x-3">
          {isSuccess && (
            <div className="flex items-center">
              <p className="text-black mr-2">{user[0].username}</p>
              <LogOut
                onClick={handleLogout}
                className="size-8 cursor-pointer"
              />
            </div>
          )}
          {!isSuccess && (
            <CircleUserRound
              onClick={handleCheckLogin}
              className="size-8 cursor-pointer"
            />
          )}

          <ShoppingCartIcon className="size-8 cursor-pointer" />

          <TextAlignJustify
            onClick={openMenu}
            className="size-8 cursor-pointer md:hidden"
          />
        </div>
      </nav>

      {/* login */}
      <Login
        check={checkLogin}
        checkLogin={successLogin}
        username={username}
        password={password}
        setUsername={setUsername}
        setPassword={setPassword}
        handleKeyDown={handleKeyDown}
      />

      {/* responsive */}
      <ResponsiveMenu open={check} />
      {}
    </>
  );
};

export default NavBar;
