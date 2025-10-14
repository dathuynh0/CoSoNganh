import ListProductItem from "./ListProductItem";

import { data } from "../lib/data";
import { Link } from "react-router";
const ListDoNam = () => {
  return (
    <>
      <div className="mt-6 flex items-center justify-between">
        <h2 className="text-3xl md:text-4xl">Đồ nam</h2>
        <Link className="hover:text-blue-600 hover:underline" to="/do-nam">
          Xem chi tiết
        </Link>
      </div>
      <ListProductItem data={data} />
    </>
  );
};

export default ListDoNam;
