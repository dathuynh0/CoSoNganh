import { ShoppingCart } from "lucide-react";
import { Button } from "./ui/button";
import { Link } from "react-router";

const ProDuctItem = ({
  image,
  imageHover,
  name,
  price,
  product,
  onAddToCart,
}) => {
  return (
    <Link
      href="/"
      className="group flex flex-col overflow-hidden lg:h-[26rem] rounded-lg bg-white border border-transparent hover:shadow-lg hover:translate-y-[-0.5rem] transition-all duration-300"
    >
      <div className="relative w-full aspect-square overflow-hidden">
        <img
          className="w-full h-full object-cover transition-opacity duration-300 opacity-100 group-hover:opacity-0"
          src={image}
          alt={name || "Hình ảnh sản phẩm"}
        />
        <img
          className="w-full h-full object-cover absolute top-0 left-0 transition-opacity duration-300 opacity-0 group-hover:opacity-100"
          src={imageHover}
          alt={name || "Hình ảnh sản phẩm khi hover"}
        />
      </div>

      <div className="flex flex-col flex-1 justify-between p-3 md:p-4">
        <h3 className="text-sm md:text-lg font-medium leading-snug line-clamp-2 min-h-[2.5rem] md:min-h-[3.1rem]">
          {name}
        </h3>

        <div className="flex items-center justify-between w-full mt-4">
          <span className="text-sm md:text-lg font-medium line-clamp-1 whitespace-nowrap inline-block mr-2">
            {price}
          </span>

          <Button
            onClick={() => onAddToCart(product)}
            variant="ghost"
            className="bg-black text-white hover:opacity-85 text-xs md:text-sm py-2 px-3 h-auto flex items-center gap-2 cursor-pointer"
          >
            <span className="hidden lg:inline">Thêm vào</span>
            <span className="lg:hidden">Thêm</span>
            <ShoppingCart className="size-4 md:size-5" />
          </Button>
        </div>
      </div>
    </Link>
  );
};

export default ProDuctItem;
