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
      className="border-0 hover:shadow-lg min-w-1/2 md:w-[18rem] md:h-[30rem] flex flex-col overflow-hidden rounded-lg bg-white hover:translate-y-[-0.5rem] transition-all duration-300 cursor-pointer"
    >
      <div className="relative w-full h-[15rem] md:h-[20rem] overflow-hidden">
        <img
          className="w-full h-full object-cover rounded-lg transition-opacity duration-300"
          src={image}
          alt="Hình ảnh sản phẩm"
          style={{ opacity: whenHover ? 0 : 1 }}
        />
        <img
          className="w-full h-full object-cover rounded-lg absolute top-0 left-0 transition-opacity duration-300"
          src={imageWhenHover}
          alt="Hình ảnh sản phẩm khi hover"
          style={{ opacity: whenHover ? 1 : 0 }}
        />
      </div>

      <div className="flex flex-col flex-1 p-2 space-y-14">
        <h3 className="text-sm md:text-lg font-medium leading-snug line-clamp-2 w-full h-[2.6rem] md:h-[2.9rem] mt-4">
          {title}
        </h3>
        {/* giá và button */}
        <div className="flex items-center justify-between w-full">
          <span className="text-sm md:text-base whitespace-nowrap inline-block mr-2">
            {price}
          </span>
          <Button
            variant="ghost"
            className="bg-black text-white hover:opacity-85 text-xs md:text-sm py-2 h-auto flex items-center justify-between cursor-pointer"
          >
            <span className="hidden md:inline">Thêm vào giỏ</span>
            <span className="md:hidden">Thêm</span>
            <ShoppingCart className="size-5" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProDuctItem;
