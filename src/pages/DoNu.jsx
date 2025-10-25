import { Link } from "react-router";
import { dataNuDemo } from "../lib/data";
import { ChevronRight } from "lucide-react";
import ProDuctItem from "../components/ProductItems";

const DoNu = () => {
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
          {dataNuDemo.map((item) => (
            <li key={dataNuDemo.id}>
              <ProDuctItem {...item} />
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default DoNu;
