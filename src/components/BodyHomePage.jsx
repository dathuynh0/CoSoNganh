import React from "react";
import ListDoNam from "./ListDoNam.jsx";
import ListDoNu from "./ListDoNu.jsx";
import ListPhuKien from "./ListPhuKien.jsx";
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
