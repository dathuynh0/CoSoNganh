import React, { useContext, useState } from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { toast } from "sonner";
import { AuthContext } from "../../AuthContext";

const Signup = () => {
  const { accounts, setAccounts } = useContext(AuthContext);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  //cập nhật state
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

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

    const newUser = {
      name: name,
      email: email,
      password: password,
    };

    setAccounts((prevAccount) => [...prevAccount, newUser]);
    toast.success("Đăng ký thành công");
    console.log("Danh sách tài khoản:", [...accounts, newUser]);

    setFormData({
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    });
  };

  return (
    <>
      <div className="h-screen flex items-center justify-center">
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
              name="name"
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
                className="bg-black text-white text-base hover:opacity-80 p-6 px-12 rounded-xl mr-0 sm:mr-6 w-full sm:w-auto"
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
      </div>
    </>
  );
};

export default Signup;
