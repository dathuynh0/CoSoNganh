import ListProductItem from "./ListProductItem";

import { data } from "../lib/data";
import { NavLink } from "react-router";
const ListDoNu = () => {
  return (
    <>
      <div className="mt-6 flex items-center justify-between">
        <h2 className="text-justify text-3xl md:text-4xl">Đồ nữ</h2>
        <NavLink className="hover:text-blue-600 hover:underline" to="/do-nu">
          Xem chi tiết
        </NavLink>
      </div>
      <ListProductItem data={data} />
    </>
  );
};

export default ListDoNu;
