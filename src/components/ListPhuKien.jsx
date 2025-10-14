import ListProductItem from "./ListProductItem";

import { data } from "../lib/data";
import { NavLink } from "react-router";

const ListPhuKien = () => {
  return (
    <>
      <div className="mt-6 flex items-center justify-between">
        <h2 className="text-justify text-3xl md:text-4xl">Phụ kiện</h2>
        <NavLink className="hover:text-blue-600 hover:underline" to="/phu-kien">
          Xem chi tiết
        </NavLink>
      </div>
      <ListProductItem data={data} />
    </>
  );
};

export default ListPhuKien;
