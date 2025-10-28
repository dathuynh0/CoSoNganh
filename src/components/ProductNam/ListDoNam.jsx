import React from "react";

import { nam } from "../../lib/data.js";
import ProductList from "../ProductList.jsx";

const ListDoNam = () => {
  return (
    <>
      <ProductList data={nam} title="Sản phẩm nam" link="/do-nam" />
    </>
  );
};

export default ListDoNam;
