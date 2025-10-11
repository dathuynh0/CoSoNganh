import ListProductItem from "./ListProductItem";

import { data } from "../lib/data";
import { NavLink } from "react-router";

const ListPhuKien = () => {
  return (
    <>
      <div className="flex items-center justify-between">
        <h2 className="mt-6 text-justify text-5xl font-light">Phụ kiện</h2>
        <NavLink className="hover:text-blue-600" to="/phukien">
          Xem chi tiết
        </NavLink>
      </div>
      <ListProductItem data={data} />
    </>
  );
};

export default ListPhuKien;
