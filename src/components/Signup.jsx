import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { user } from "../lib/data.js";
import { useNavigate } from "react-router";

const Signup = () => {
  const [login, setLogin] = useState(false);

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleLogin = () => {
    setLogin(true);
  };

  const handleSignup = () => {
    setLogin(false);
  };

  const checkLogin = () => {
    if (!username && !password) {
      alert("Vui lòng nhập tài khoản và mật khẩu");
      return;
    }
    if (username === user[0].username && password === user[0].password) {
      navigate("/");
      return;
    }
    alert("Tài khoản hoặc mật khẩu không đúng");
  };

  return (
    <>
      <div className="flex items-center justify-center h-screen w-full">
        <div className="w-full md:w-1/2 ">
          <div className="text-center">
            <Button
              onClick={handleLogin}
              className={
                login
                  ? "text-center text-4xl font-bold cursor-pointer"
                  : "text-center text-4xl font-bold cursor-pointer text-slate-300 hover:text-black"
              }
            >
              Đăng nhập
            </Button>
            <Button
              onClick={handleSignup}
              className={
                login
                  ? "border-l-3 rounded-none text-center text-4xl font-bold cursor-pointer text-slate-300 hover:text-black"
                  : "border-l-3 rounded-none text-center text-4xl font-bold cursor-pointer"
              }
            >
              Đăng ký
            </Button>
          </div>

          {!login && (
            <>
              <Input
                className="mt-6 w-full text-lg p-6"
                type="text"
                placeholder="Họ và tên"
              />
              <Input
                className="mt-6 w-full text-lg p-6"
                placeholder="Email"
                type="email"
              />
              <Input
                className="mt-6 w-full text-lg p-6"
                type="password"
                placeholder="Mật khẩu"
              />
              <div className="flex justify-center items-center mt-6">
                <Button className="bg-black text-white text-base hover:opacity-80 p-6 px-15 rounded-xl mr-6">
                  Đăng kí
                </Button>
                <p className="text-base">
                  Bạn đã có tài khoản?
                  <span
                    onClick={handleLogin}
                    className="text-blue-600 cursor-pointer"
                  >
                    Đăng nhập ngay
                  </span>
                </p>
              </div>
            </>
          )}
          {login && (
            <>
              <Input
                className="mt-8 w-full text-lg p-6"
                type="text"
                placeholder="Email"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
              <Input
                className="mt-6 w-full text-lg p-6"
                type="password"
                placeholder="Mật khẩu"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <div className="flex flex:col md:flex-row justify-center items-center mt-6">
                <Button
                  onClick={checkLogin}
                  className="bg-black text-white text-base hover:opacity-80 p-6 px-15 rounded-xl mr-6"
                >
                  Đăng nhập
                </Button>
                <p className="text-base">
                  Bạn chưa có tài khoản?
                  <span
                    onClick={handleSignup}
                    className="text-blue-600 cursor-pointer"
                  >
                    Đăng kí
                  </span>
                </p>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Signup;
