import React from "react";
import { dataNamDemo } from "../lib/data";
import ProDuctItem from "../components/ProductItems";
import { Link } from "react-router";
import { ChevronRight } from "lucide-react";

const DoNam = () => {
  return (
    <>
      <section className="pt-8 px-2 pb-8">
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
        <ul className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-6">
          {dataNamDemo.map((item) => (
            <li key={dataNamDemo.id}>
              <ProDuctItem {...item} />
            </li>
          ))}
        </ul>
      </section>
    </>
  );
};

export default DoNam;
