import ProDuctItem from "./ProductItems";
import { Button } from "./ui/button";

const ProductList = ({ data, title, link }) => {
  return (
    <>
      <h2 className="text-3xl md:text-4xl mb-8">{title}</h2>
      <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-8 m-4">
        {data.map((item) => {
          return (
            <li key={item.id}>
              <ProDuctItem {...item} />
            </li>
          );
        })}
      </ul>
      <div className="flex justify-center mt-8 mb-8">
        <Button className="text-center text-xl cursor-pointer text-white bg-black p-6 hover:opacity-85">
          <a href={link}>Xem tất cả</a>
        </Button>
      </div>
    </>
  );
};

export default ProductList;
