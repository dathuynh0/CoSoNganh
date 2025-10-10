import { useState, useRef, useEffect } from "react";
import ProDuctItem from "./ProductItems";
import { Button } from "./ui/button";
import { ArrowLeft, ArrowRight } from "lucide-react";

import { data } from "../lib/data.js";

const SanPhamBanChay = () => {
  const scrollContainerRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  // kiểm tra vị trí scroll
  const checkScrollPosition = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } =
        scrollContainerRef.current;
      setCanScrollLeft(scrollLeft > 5);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 5);
    }
  };

  // Kiểm tra khi component mount
  useEffect(() => {
    checkScrollPosition();
  }, []);

  // Hàm scroll sang trái
  const handlePrev = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: -600,
      });
    }
  };

  // Hàm scroll sang phải
  const handleNext = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: 600,
      });
    }
  };

  return (
    <>
      {/* Product List Section */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <h2 className="text-center text-3xl font-medium mb-3">
          Sản phẩm bán chạy
        </h2>

        <div className="flex items-center gap-4">
          {/* previous button */}
          <Button
            variant="outline"
            size="icon"
            onClick={handlePrev}
            disabled={!canScrollLeft}
            className="bg-black rounded-lg shadow-lg transition-opacity"
          >
            <ArrowLeft className="text-white size-6" />
          </Button>

          {/* Product List */}
          <ul
            ref={scrollContainerRef}
            onScroll={checkScrollPosition}
            className="flex-1 flex gap-4 overflow-x-auto pb-4 scroll-smooth scrollbar-hide"
          >
            {data.map((item) => (
              <li key={item.id}>
                <ProDuctItem {...item} />
              </li>
            ))}
          </ul>

          {/* Next Button */}
          <Button
            variant="outline"
            size="icon"
            onClick={handleNext}
            disabled={!canScrollRight}
            className="bg-black rounded-lg shadow-lg transition-opacity"
          >
            <ArrowRight className="text-white size-6" />
          </Button>
        </div>
      </div>

      {/* Hide scrollbar CSS */}
      <style>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </>
  );
};

export default SanPhamBanChay;
