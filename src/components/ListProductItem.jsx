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
        element.scrollWidth - element.scrollLeft - element.clientWidth < 5;
      const isStart = element.scrollLeft < 5;

      setCanScrollLeft(!isStart);
      setCanScrollRight(!isEnd);
    }
  };

  useEffect(() => {
    const element = scrollRef.current;
    if (!element) return;

    // Kiểm tra lần đầu khi component mount
    checkScrollButtons();
  }, []);

  // Hàm cuộn sang trái hoặc phải
  const handleScroll = (method) => {
    if (scrollRef.current) {
      const scrollAmount = scrollRef.current.clientWidth * 0.5; // Cuộn 50% chiều rộng
      const scroll = method === "left" ? -scrollAmount : scrollAmount; // bằng left lùi nên trừ

      scrollRef.current.scrollBy({
        left: scroll,
      });
    }
  };

  return (
    <>
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {title && (
          <h2 className="text-3xl md:text-4xl font-light text-center mb-8 text-gray-800">
            {title}
          </h2>
        )}

        <div className="relative group">
          {/* Nút cuộn trái */}
          <button
            onClick={() => handleScroll("left")}
            disabled={!canScrollLeft}
            className={`absolute top-1/2 left-0 z-10 p-2 bg-white rounded-full shadow-lg transition-all duration-300 hidden md:flex items-center justify-center disabled:opacity-0 opacity-0 group-hover:opacity-100`}
          >
            <ArrowLeft className="text-gray-700 h-6 w-6" />
          </button>

          {/* Danh sách sản phẩm */}
          <ul
            ref={scrollRef}
            onScroll={checkScrollButtons}
            className="flex gap-4 md:gap-6 overflow-x-auto pb-4 scroll-smooth scrollbar-hide"
          >
            {data.map((item) => (
              <li key={item.id}>
                <ProDuctItem {...item} />
              </li>
            ))}
          </ul>

          {/* Nút cuộn phải */}
          <button
            onClick={() => handleScroll("right")}
            disabled={!canScrollRight}
            className={`absolute top-1/2 right-0 z-10 p-2 bg-white rounded-full shadow-lg transition-all duration-300 hidden md:flex items-center justify-center disabled:opacity-0 opacity-0 group-hover:opacity-100`}
          >
            <ArrowRight className="text-gray-700 h-6 w-6" />
          </button>
        </div>

        {/* CSS để ẩn scrollbar */}
        <style>{`
        .scrollbar-hide { 
          -ms-overflow-style: none; scrollbar-width: none; 
        }
      `}</style>
      </div>
    </>
  );
};

export default ListProductItem;
