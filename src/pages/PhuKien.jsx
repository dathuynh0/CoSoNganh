import ProDuctItem from "../components/ProductItems";
import { phukienDemo } from "../lib/data";
import { ChevronRight } from "lucide-react";
import { Link } from "react-router";

const PhuKien = () => {
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
        {phukienDemo.map((item) => (
          <li key={phukienDemo.id}>
            <ProDuctItem {...item} />
          </li>
        ))}
      </ul>
    </section>
  );
};

export default PhuKien;
