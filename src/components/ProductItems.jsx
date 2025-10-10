import { ShoppingCart } from "lucide-react";
import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { useState } from "react";

const ProDuctItem = ({ image, imageWhenHover, title, price }) => {
  const [whenHover, setWhenHover] = useState(false);
  return (
    <div
      onMouseMove={() => setWhenHover(true)}
      onMouseLeave={() => setWhenHover(false)}
      className="border-0 hover:shadow-lg min-w-1/2 md:max-w-[15rem] h-25rem hover:scale-105 transition-all duration-200 flex flex-col overflow-hidden"
    >
      {/* Phần hình ảnh - giảm chiều cao xuống */}
      <div className="relative w-full h-48 md:h-56 overflow-hidden">
        <img
          className="w-full h-full object-cover transition-opacity duration-300"
          src={image}
          alt="Hình ảnh sản phẩm"
          style={{ opacity: whenHover ? 0 : 1 }}
        />
        <img
          className="w-full h-full object-cover absolute top-0 left-0 transition-opacity duration-300"
          src={imageWhenHover}
          alt="Hình ảnh sản phẩm khi hover"
          style={{ opacity: whenHover ? 1 : 0 }}
        />
      </div>

      {/* Phần nội dung - tăng không gian */}
      <div className="flex flex-col flex-1 p-2 space-y-6">
        {/* Title - 2 dòng */}
        <h3 className="text-sm md:text-base font-medium leading-snug line-clamp-2 w-full min-h-[2.5rem] mt-2">
          {title}
        </h3>

        {/* Price & Button */}
        <div className="flex items-center justify-between">
          <span className="text-sm md:text-base whitespace-nowrap inline-block mr-2">
            {price}
          </span>
          <Button
            variant="ghost"
            className="bg-black text-white hover:bg-black/90 text-xs md:text-sm py-2 h-auto flex items-center justify-between cursor-pointer"
          >
            Thêm vào giỏ
            <ShoppingCart />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProDuctItem;
