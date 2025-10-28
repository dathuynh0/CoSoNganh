import { bestseller } from "../lib/data.js";
import ProductList from "./ProductList.jsx";

const ListBanChay = () => {
  return <ProductList data={bestseller} title="Sản phẩm bán chạy" link="/" />;
};

export default ListBanChay;
