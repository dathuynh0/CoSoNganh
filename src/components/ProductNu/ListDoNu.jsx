import React from "react";

import { nu } from "../../lib/data.js";
import ProductList from "../ProductList.jsx";

const ListDoNu = () => {
  return <ProductList data={nu} title="Sản phẩm nữ" link="/do-nu" />;
};

export default ListDoNu;
