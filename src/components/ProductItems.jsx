import { ShoppingCart } from "lucide-react";
import { Button } from "./ui/button";
import { Link } from "react-router";

const ProDuctItem = ({ image, imageWhenHover, title, price }) => {
  return (
    <Link
      href="/"
      className="group flex flex-col overflow-hidden lg:h-[27rem] rounded-lg bg-white border border-transparent hover:shadow-lg hover:translate-y-[-0.5rem] transition-all duration-300 cursor-pointer"
    >
      <div className="relative w-full aspect-square overflow-hidden">
        <img
          className="w-full h-full object-cover rounded-t-lg transition-opacity duration-300 opacity-100 group-hover:opacity-0"
          src={image}
          alt={title || "Hình ảnh sản phẩm"}
        />
        <img
          className="w-full h-full object-cover rounded-t-lg absolute top-0 left-0 transition-opacity duration-300 opacity-0 group-hover:opacity-100"
          src={imageWhenHover}
          alt={title || "Hình ảnh sản phẩm khi hover"}
        />
      </div>

      <div className="flex flex-col flex-1 justify-between p-3 md:p-4">
        <h3 className="text-sm md:text-lg font-medium leading-snug line-clamp-2 min-h-[2.8rem] md:min-h-[3.3rem]">
          {title}
        </h3>

        <div className="flex items-center justify-between w-full mt-4">
          <span className="text-base md:text-lg font-medium whitespace-nowrap inline-block mr-2">
            {price}
          </span>

          <Button
            variant="ghost"
            className="bg-black text-white hover:opacity-85 text-xs md:text-sm py-2 px-3 h-auto flex items-center gap-2 cursor-pointer"
          >
            <span className="hidden md:inline">Thêm vào giỏ</span>
            <span className="md:hidden">Thêm</span>
            <ShoppingCart className="size-4 md:size-5" />
          </Button>
        </div>
      </div>
    </Link>
  );
};

export default ProDuctItem;
