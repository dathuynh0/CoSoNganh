import React from "react";
import { dataNam } from "../lib/data";
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
            to="/do-nam"
            className="text-md hover:text-blue-500 hover:underline"
          >
            Đồ nam
          </Link>
        </div>
        <hr className="mt-2" />
        <ul className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-6">
          {dataNam.map((item) => (
            <li key={dataNam.id}>
              <ProDuctItem {...item} />
            </li>
          ))}
        </ul>
      </section>
    </>
  );
};

export default DoNam;
