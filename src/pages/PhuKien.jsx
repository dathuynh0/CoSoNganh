import { use, useEffect, useState } from "react";
import ProDuctItem from "../components/ProductItems";
import { phukien } from "../lib/data";
import { ChevronRight } from "lucide-react";
import { Link, useOutletContext } from "react-router";

const PhuKien = () => {
  const { search } = useOutletContext();
  const lowerCaseSearch = search.toLowerCase();

  const [products, setProducts] = useState([]);

  useEffect(() => {
    setProducts(phukien);
  }, []);

  const filteredProducts = products.filter((product) => {
    const lowerCaseProductName = product.name.toLowerCase();
    return lowerCaseProductName.includes(lowerCaseSearch);
  });

  return (
    <section className="pt-8 px-2 pb-8">
      <div className="flex items-center">
        <Link to="/" className="text-md hover:text-blue-500 hover:underline">
          Trang chủ
        </Link>
        <ChevronRight className="size-6" />
        <Link
          to="/phu-kien"
          className="text-md hover:text-blue-500 hover:underline"
        >
          Phụ kiện
        </Link>
      </div>
      <hr className="mt-2" />
      <h2 className="text-5xl font-bold mt-8">Phụ kiện</h2>
      <hr className="mt-8" />
      <ul className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-6">
        {filteredProducts.map((item, index) => (
          <li key={index}>
            <ProDuctItem {...item} />
          </li>
        ))}
      </ul>
    </section>
  );
};

export default PhuKien;
