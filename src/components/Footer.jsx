import {
  Facebook,
  Instagram,
  Mail,
  MapPin,
  Phone,
  Twitter,
} from "lucide-react";
import logo from "../assets/logo.png";
import { Link } from "react-router";
import { Button } from "./ui/button";

const Footer = () => {
  return (
    <>
      <div className="md:w-4/5 text-black">
        <div className="flex items-center justify-between p-10">
          {/* phía chúng tôi */}
          <ul className="text-base">
            <a href="/" className="block">
              <img
                src={logo}
                alt="Logo cửa hàng"
                className="size-[8rem] rounded-full"
              />
            </a>
            <p className="flex items-center text-sm">
              <MapPin className="size-6" />
              Ấp Trà Ốp, Xã Tân An, Huyện Càng Long, Tỉnh Trà Vinh
            </p>
            <p className="flex items-center mt-2">
              <Phone className="size-6" />
              Hotline: 0123456789
            </p>
            <p className="flex items-center mt-2">
              <Mail className="size-6" />
              Hotline: 0123456789
            </p>
            {/* icon  */}
            <div className="mt-4">
              <Button
                size="icon"
                variant="outline"
                className="text-blue-600 border-3 p-5 border-blue-500"
              >
                <a
                  href="https://www.facebook.com/huynhchidat05"
                  target="_blank"
                >
                  <Facebook className="size-6" />
                </a>
              </Button>

              <Button
                size="icon"
                variant="outline"
                className="ml-4 text-orange-600 border-3 p-5 border-orange-5"
              >
                <a
                  href="https://www.facebook.com/huynhchidat05"
                  target="_blank"
                >
                  <Instagram className="size-6" />
                </a>
              </Button>

              <Button
                size="icon"
                variant="outline"
                className="ml-4 text-black border-3 p-5 border-black"
              >
                <a
                  href="https://www.facebook.com/huynhchidat05"
                  target="_blank"
                >
                  <Twitter className="size-6" />
                </a>
              </Button>
            </div>
          </ul>
          {/* mặt hàng.... */}
          <ul className="ml-8 flex flex-col gap-y-4 text-base">
            <p className="text-lg font-medium">Về ĐatFashion</p>
            <Link className="hover:text-white hover:underline" to="/gioithieu">
              Giới thiệu
            </Link>
            <Link className="hover:text-white hover:underline" to="/">
              Trang chủ
            </Link>
            <Link className="hover:text-white hover:underline" to="/donam">
              Đồ nam
            </Link>
            <Link className="hover:text-white hover:underline" to="/donu">
              Đồ nữ
            </Link>
            <Link className="hover:text-white hover:underline" to="/phukien">
              Phụ kiện
            </Link>
          </ul>
          <ul>
            <h3 className="text-lg font-medium">
              Chính sách bảo hành & đổi trả
            </h3>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Footer;
