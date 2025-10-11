import ListProductItem from "./ListProductItem";

import { data } from "../lib/data";
import { NavLink } from "react-router";
const ListDoNu = () => {
  return (
    <>
      <div className="flex items-center justify-between">
        <h2 className="mt-6 text-justify text-5xl font-light">Đồ nữ</h2>
        <NavLink className="hover:text-blue-600" to="/donu">
          Xem chi tiết
        </NavLink>
      </div>
      <ListProductItem data={data} />
    </>
  );
};

export default ListDoNu;
