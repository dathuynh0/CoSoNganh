import React, { useState } from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Link } from "react-router-dom";
import { toast } from "sonner";

const Signup = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [isSuccess, setIsSuccess] = useState(false);

  //cập nhật state
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const { name, email, password, confirmPassword } = formData;

    if (!name || !email || !password || !confirmPassword) {
      alert("Vui lòng điền đầy đủ thông tin.");
      toast.error("Vui lòng điền đầy đủ thông tin.");
      return;
    }

    if (password !== confirmPassword) {
      alert("Mật khẩu nhập lại không đúng");
      toast.error("Mật khẩu nhập lại không đúng.");
      return;
    }

    toast.success("Đăng ký thành công!");
    setIsSuccess(true);
  };

  return (
    <>
      <div className="h-screen flex items-center justify-center">
        {!isSuccess ? (
          <form
            onSubmit={handleSubmit}
            className="flex flex-col items-center justify-center bg-amber-50 p-12 rounded-2xl shadow-lg"
          >
            <h1 className="text-4xl font-bold mb-6">Đăng ký tài khoản</h1>
            <div className="max-w-lg">
              <Input
                className="mt-4 w-full text-lg p-5"
                type="text"
                placeholder="Họ và tên"
                name="fullName"
                value={formData.name}
                onChange={handleChange}
              />
              <Input
                className="mt-4 w-full text-lg p-5"
                placeholder="Email"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
              <Input
                className="mt-4 w-full text-lg p-5"
                type="password"
                placeholder="Mật khẩu"
                name="password"
                value={formData.password}
                onChange={handleChange}
              />
              <Input
                className="mt-4 w-full text-lg p-5"
                type="password"
                placeholder="Nhập lại mật khẩu"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
              />
              <div className="flex flex-col sm:flex-row justify-center items-center mt-6">
                <Button
                  type="submit"
                  className="bg-black text-white text-base hover:opacity-80 p-6 px-12 rounded-xl mr-0 sm:mr-6 w-full sm:w-auto" // Sửa px-15 -> px-12
                >
                  Đăng kí
                </Button>
                <p className="text-base mt-4 sm:mt-0">
                  Bạn đã có tài khoản?
                  <span className="text-blue-500 hover:underline cursor-pointer">
                    Đăng nhập ngay
                  </span>
                </p>
              </div>
            </div>
          </form>
        ) : (
          <div className="flex justify-center items-center">
            <div className="p-10 rounded-2xl bg-amber-50 shadow-lg">
              <h2 className="text-xl text-black text-center">
                Bạn đã đăng ký thành công. <br />
                <Link to="/" className="text-blue-500 hover:underline">
                  Về trang chủ
                </Link>
              </h2>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Signup;
