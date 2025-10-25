import { Link } from "react-router"; // Lưu ý: React Router v6 dùng "react-router-dom"
import { Button } from "./ui/button";

const ProductCategories = () => {
  return (
    <div className="mt-6 flex flex-col md:flex-row items-stretch justify-center gap-6 md:gap-8 mb-10 p-4">
      {/*
        Truyền dữ liệu vào một component con để tái sử dụng,
        giúp code sạch sẽ và dễ bảo trì hơn.
      */}
      <Card
        title="Nam"
        description="Hello World"
        imageUrl="https://cdn.shopify.com/s/files/1/0932/5569/6681/files/1O4A3024_500x.jpg?v=1757903878"
        linkTo="/do-nam"
      />
      <Card
        title="Nữ"
        description="Hello World"
        imageUrl="https://cdn.shopify.com/s/files/1/0932/5569/6681/files/1O4A9203_500x.jpg?v=1757905339"
        linkTo="/do-nu"
      />
    </div>
  );
};

// Component con cho mỗi card danh mục
const Card = ({ title, description, imageUrl, linkTo }) => {
  return (
    <div className="w-full md:w-1/2 flex flex-col">
      <Link
        to={linkTo}
        className="block overflow-hidden rounded-lg aspect-[5/4]"
      >
        <img
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
          src={imageUrl}
          alt={`Sản phẩm ${title}`}
        />
      </Link>
      <div className="flex flex-col flex-grow text-center p-4">
        <h2 className="text-4xl lg:text-5xl font-light mt-4">{title}</h2>
        <p className="text-base text-gray-600 mt-4 flex-grow">{description}</p>
        <div className="mt-6">
          <Button
            size="lg"
            variant="outline"
            className="text-lg font-light px-10 py-6 hover:bg-black/80 hover:text-white/90 transition-colors duration-300"
          >
            {/* Bạn nên bọc Link bên ngoài Button thay vì bên trong */}
            <Link to={linkTo}>Mua ngay</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductCategories;
