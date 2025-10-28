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
import { NavLink } from "react-router-dom";
import "../mystyle.css";
import Signin from "./Signin.jsx";
import { user } from "../../lib/data.js";
import { toast } from "sonner";
import SearchBar from "./SearchBar.jsx";

const NavBar = ({ search, onSearchChange }) => {
  const [check, setCheck] = useState(false);
  const [checkLogin, setCheckLogin] = useState(false);

  const [isSuccess, setIsSuccess] = useState(false);

  const [email, setEmail] = useState("");
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
    if (!email && !password) {
      alert("Vui lòng nhập tài khoản và mật khẩu");
      toast.error("Đăng nhâp thất bại!");
      return;
    }
    if (email === user[0].email && password === user[0].password) {
      setIsSuccess(true);
      setCheckLogin(false);
      setEmail("");
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
      <nav className="flex justify-between items-center p-6 flex-wrap">
        {/* logo */}
        <a href="/">
          <p className="text-3xl font-extrabold bg-gradient-to-b from-white/20 to-black inline-block text-transparent bg-clip-text">
            M O D A
          </p>
        </a>

        {/* item */}
        <div className="hidden lg:block">
          <ul className="flex items-center justify-center gap-x-8 text-lg text-black uppercase">
            <li>
              <NavLink className="" to="/">
                Trang chủ
              </NavLink>
            </li>
            <li>
              <NavLink to="/sale">Sale</NavLink>
            </li>

            <li className="relative group">
              <div className="flex items-center gap-x-1">
                <NavLink to="/do-nam">Đồ nam</NavLink>
                <ChevronDown />
              </div>

              <div className="absolute top-8 left-0 bg-white rounded-md shadow-md overflow-hidden transition-opacity duration-300  opacity-0 group-hover:opacity-100">
                <ul className="py-4 min-w-[200px] px-4">
                  <li className="relative group hover:underline">
                    <NavLink to="/do-nam/ao">Áo</NavLink>
                  </li>
                  <li className="mt-2 hover:underline">
                    <NavLink to="/do-nam/quan">Quần</NavLink>
                  </li>
                </ul>
              </div>
            </li>
            <li className="relative group">
              <div className="flex items-center gap-x-1">
                <NavLink to="/do-nu">Đồ nữ</NavLink>
                <ChevronDown />
              </div>

              <div className="absolute top-8 left-0 bg-white rounded-md shadow-md overflow-hidden transition-opacity duration-300  opacity-0 group-hover:opacity-100">
                <ul className="py-4 min-w-[200px] px-4">
                  <li className="relative group hover:underline">
                    <NavLink to="/do-nam/ao">Áo</NavLink>
                  </li>
                  <li className="mt-2 hover:underline">
                    <NavLink to="/do-nam/quan">Quần</NavLink>
                  </li>
                </ul>
              </div>
            </li>
            <li>
              <NavLink to="/phu-kien">Phụ kiện</NavLink>
            </li>
          </ul>
        </div>

        <div></div>
        {/* search */}
        <div className="w-full order-last mt-4 md:order-none md:w-auto md:mt-0">
          <SearchBar search={search} onSearchChange={onSearchChange} />
        </div>
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
      <Signin
        check={checkLogin}
        checkLogin={successLogin}
        username={email}
        password={password}
        setUsername={setEmail}
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
