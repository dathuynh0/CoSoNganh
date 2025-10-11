import ListProductItem from "./ListProductItem.jsx";

import { data } from "../lib/data.js";
import ListDoNam from "./ListDoNam.jsx";
import ListDoNu from "./ListDoNu.jsx";
import ListPhuKien from "./ListPhuKien.jsx";

const BodyHomePage = () => {
  return (
    <>
      {/* sản phẩm bán chạy */}
      <ListProductItem data={data} title="Sản phẩm bán chạy" />

      {/* đồ nam */}
      <ListDoNam />

      {/* list đồ nữ */}
      <ListDoNu />

      {/* list phụ kiện */}
      <ListPhuKien />
    </>
  );
};

export default BodyHomePage;
