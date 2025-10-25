import React from "react";

import { dataNamDemo } from "../lib/data.js";
import ProDuctItem from "./ProductItems";
import { Button } from "./ui/button";

const ListDoNam = () => {
  return (
    <>
      <h2 className="text-3xl md:text-4xl mb-8">Sản phẩm nam</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-8 m-4">
        {dataNamDemo.map((item) => {
          return <ProDuctItem key={item.id} {...item} />;
        })}
      </div>
      <div className="flex justify-center mt-8 mb-8">
        <Button className="text-center text-xl cursor-pointer text-white bg-black p-6 hover:opacity-85">
          <a href="/do-nam">Xem tất cả</a>
        </Button>
      </div>
    </>
  );
};

export default ListDoNam;
