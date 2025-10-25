import { phukienDemo } from "../lib/data";
import ProDuctItem from "./ProductItems";
import { Button } from "./ui/button";

const ListPhuKien = () => {
  return (
    <>
      <h2 className="text-3xl md:text-4xl mb-8">Phụ kiện</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-8 m-4">
        {phukienDemo.map((item) => {
          return <ProDuctItem key={item.id} {...item} />;
        })}
      </div>
      <div className="flex justify-center mt-8 mb-8">
        <Button className="text-center text-xl cursor-pointer text-white bg-black p-6 hover:opacity-85">
          <a href="/phu-kien">Xem tất cả</a>
        </Button>
      </div>
    </>
  );
};

export default ListPhuKien;
