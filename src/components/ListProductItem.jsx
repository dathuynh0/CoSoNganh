import { useState, useRef, useEffect } from "react";
import ProDuctItem from "./ProductItems";
import { ArrowLeft, ArrowRight } from "lucide-react";

const ListProductItem = ({ data, title }) => {
  const scrollRef = useRef();
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  // Hàm kiểm tra vị trí cuộn đơn giản
  const checkScrollButtons = () => {
    const element = scrollRef.current;
    if (element) {
      // scrollLeft là vị trí thanh cuộn hiện tại
      const isEnd =
        element.scrollWidth - element.scrollLeft - element.clientWidth < 1;
      const isStart = element.scrollLeft < 1;

      setCanScrollLeft(!isStart);
      setCanScrollRight(!isEnd);
    }
  };

  useEffect(() => {
    const element = scrollRef.current;
    if (!element) return;

    // Kiểm tra lần đầu khi component mount
    checkScrollButtons();
  }, [data]);

  // Hàm cuộn sang trái hoặc phải
  const handleScroll = (method) => {
    if (scrollRef.current) {
      const scrollAmount = scrollRef.current.clientWidth * 0.3; // Cuộn 50% chiều rộng
      const scroll = method === "left" ? -scrollAmount : scrollAmount; // bằng left lùi nên trừ

      scrollRef.current.scrollBy({
        left: scroll,
      });
    }
  };

  return (
    <>
      <div className="w-full mx-auto px-2 md:px-8 lg:px-10 py-8">
        {title && (
          <h2 className="text-3xl md:text-4xl mb-8 text-gray-800">{title}</h2>
        )}

        <div className="relative group">
          {/* Nút cuộn trái */}
          <button
            onClick={() => handleScroll("left")}
            disabled={!canScrollLeft}
            className="absolute top-1/2 left-0 z-10 p-2 bg-white rounded-full shadow-lg transition-all duration-300 hidden md:flex items-center justify-center disabled:opacity-0 opacity-0 group-hover:opacity-100"
          >
            <ArrowLeft className="text-gray-700 h-6 w-6" />
          </button>

          {/* Danh sách sản phẩm */}
          <ul
            ref={scrollRef}
            onScroll={checkScrollButtons}
            className="flex gap-2 md:gap-6 overflow-x-auto pb-4 scroll-smooth scrollbar-hide"
          >
            {data.map((item) => (
              <li key={item.id} className="flex-shrink-0 w-1/2 md:w-1/4">
                <ProDuctItem {...item} />
              </li>
            ))}
          </ul>

          {/* Nút cuộn phải */}
          <button
            onClick={() => handleScroll("right")}
            disabled={!canScrollRight}
            className="absolute top-1/2 right-0 z-10 p-2 bg-white rounded-full shadow-lg transition-all duration-300 hidden md:flex items-center justify-center disabled:opacity-0 opacity-0 group-hover:opacity-100"
          >
            <ArrowRight className="text-gray-700 h-6 w-6" />
          </button>
        </div>
      </div>
    </>
  );
};

export default ListProductItem;
