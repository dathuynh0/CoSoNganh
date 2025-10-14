import { Link } from "react-router";
import { Button } from "./ui/button";

const DoNamDoNu = () => {
  return (
    <div className="mt-6 flex flex-col md:flex-row items-stretch justify-center gap-6 md:gap-8 mb-10 p-4">
      {/*
        Truyền dữ liệu vào một component con để tái sử dụng,
        giúp code sạch sẽ và dễ bảo trì hơn.
      */}
      <Card
        title="Nam"
        description="Hello World"
        imageUrl="https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?w=400"
        linkTo="/do-nam"
      />
      <Card
        title="Nữ"
        description="Hello World"
        imageUrl="https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?w=400"
        linkTo="/do-nu"
      />
    </div>
  );
};

// Component con cho mỗi card danh mục
const Card = ({ title, description, imageUrl, linkTo }) => {
  return (
    <div className="w-full md:w-1/2 flex flex-col">
      <Link to={linkTo} className="block overflow-hidden rounded-lg">
        <img
          className="w-full object-cover hover:scale-105 transition-transform duration-300"
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
            <Link to={linkTo}>Mua ngay</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default DoNamDoNu;
