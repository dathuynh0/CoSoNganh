import React, { useEffect, useState } from "react";
import { nam } from "../lib/data";
import ProDuctItem from "../components/ProductItems";
import { Link, useOutletContext } from "react-router";
import { ChevronRight } from "lucide-react";

const DoNam = () => {
  //lay du lieu search tu App.jsx
  const { search, handleAddToCart } = useOutletContext();

  const lowerCaseSearch = search ? search.toLowerCase() : "";

  const [products, setProducts] = useState([]);

  useEffect(() => {
    setProducts(nam);
  }, []);

  //loc
  const filteredProducts = products.filter((product) => {
    const lowerCaseProductName = product.name.toLowerCase();
    return lowerCaseProductName.includes(lowerCaseSearch);
  });

  return (
    <>
      <section className="pt-8 px-2 pb-8 w-full lg:w-[80%] mx-auto">
        <div className="flex items-center">
          <Link to="/" className="text-md hover:text-blue-500 hover:underline">
            Trang chủ
          </Link>
          <ChevronRight className="size-6" />
          <Link
            to="/do-nu"
            className="text-md hover:text-blue-500 hover:underline"
          >
            Sản phẩm nam
          </Link>
        </div>
        <hr className="mt-2" />
        <h2 className="text-5xl font-bold mt-8">Sản phẩm nam</h2>
        <hr className="mt-8" />
        <ul className="mt-8 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 md:gap-6">
          {filteredProducts.map((item) => (
            <li key={item.id}>
              <ProDuctItem
                {...item}
                product={item}
                onAddToCart={() => handleAddToCart(item)}
              />
            </li>
          ))}
        </ul>
      </section>
    </>
  );
};

export default DoNam;
