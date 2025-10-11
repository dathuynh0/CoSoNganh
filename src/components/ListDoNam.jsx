import ListProductItem from "./ListProductItem";

import { data } from "../lib/data";
import { NavLink } from "react-router";
const ListDoNam = () => {
  return (
    <>
      <div className="flex items-center justify-between">
        <h2 className="mt-6 text-justify text-5xl font-light">Đồ nam</h2>
        <NavLink className="hover:text-blue-600" to="/donam">
          Xem chi tiết
        </NavLink>
      </div>
      <ListProductItem data={data} />
    </>
  );
};

export default ListDoNam;
