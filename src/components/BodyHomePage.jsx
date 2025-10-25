import React from "react";
import ListDoNam from "./ProductNam/ListDoNam.jsx";
import ListDoNu from "./ProductNu/ListDoNu.jsx";
import ListPhuKien from "./PhuKien/ListPhuKien.jsx";
import ListBanChay from "./ListBanChay.jsx";

const BodyHomePage = () => {
  return (
    <>
      {/* sản phẩm bán chạy */}
      <ListBanChay />

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
