import { phukien } from "../../lib/data";
import ProductList from "../ProductList";

const ListPhuKien = () => {
  return <ProductList data={phukien} title="Phụ kiện" link="/phu-kien" />;
};

export default ListPhuKien;
