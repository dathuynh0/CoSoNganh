import { Link, useOutletContext } from "react-router";
import { nu } from "../lib/data";
import { ChevronRight } from "lucide-react";
import ProDuctItem from "../components/ProductItems";
import { useEffect, useState } from "react";

const DoNu = () => {
  const { search } = useOutletContext();
  const lowerCaseSearch = search ? search.toLowerCase() : "";

  const [products, setProducts] = useState([]);

  useEffect(() => {
    setProducts(nu);
  }, []);

  const filteredProducts = products.filter((product) => {
    const lowerCaseProductName = product.name.toLowerCase();
    return lowerCaseProductName.includes(lowerCaseSearch);
  });

  return (
    <div>
      <section className="pt-8 px-2 pb-8">
        <div className="flex items-center">
          <Link to="/" className="text-md hover:text-blue-500 hover:underline">
            Trang chủ
          </Link>
          <ChevronRight className="size-6" />
          <Link
            to="/do-nam"
            className="text-md hover:text-blue-500 hover:underline"
          >
            Sản phẩm nữ
          </Link>
        </div>
        <hr className="mt-2" />
        <h2 className="text-5xl font-bold mt-8">Sản phẩm nữ</h2>
        <hr className="mt-8" />
        <ul className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-6">
          {filteredProducts.map((item, index) => (
            <li key={index}>
              <ProDuctItem {...item} />
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default DoNu;
