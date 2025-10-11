import { useState, useRef, useEffect } from "react";
import ProDuctItem from "./ProductItems";
import { Button } from "./ui/button";
import { ArrowLeft, ArrowRight } from "lucide-react";

const ListProductItem = ({ data, title }) => {
  const scrollRef = useRef();
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  // kiểm tra vị trí scroll
  const checkScrollPosition = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setCanScrollLeft(scrollLeft > 5);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 5);
      console.log(scrollLeft, scrollWidth, clientWidth);
    }
  };

  // Kiểm tra khi component mount
  useEffect(() => {
    checkScrollPosition();
  }, []);

  // Hàm scroll sang trái
  const handlePrev = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: -300,
      });
    }
  };

  // Hàm scroll sang phải
  const handleNext = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: 300,
      });
    }
  };

  return (
    <>
      {/* Product List Section */}
      <div className="max-w-full mx-auto px-4 py-8 mb-10">
        {title && (
          <h2 className="mt-6 text-center text-5xl font-light mb-6">{title}</h2>
        )}

        <div className="flex items-center gap-4">
          {/* previous button */}
          <Button
            variant="outline"
            size="icon"
            onClick={handlePrev}
            disabled={!canScrollLeft}
            className="bg-black rounded-lg shadow-lg cursor-pointer"
          >
            <ArrowLeft className="text-white size-6" />
          </Button>

          {/* Product List */}
          <ul
            ref={scrollRef}
            onScroll={checkScrollPosition}
            className="flex-1 flex gap-4 overflow-hidden pb-4 scroll-smooth scrollbar-hide"
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
            className="bg-black rounded-lg shadow-lg cursor-pointer"
          >
            <ArrowRight className="text-white size-6" />
          </Button>
        </div>
      </div>

      {/* Hide scrollbar CSS */}
      <style>{`
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </>
  );
};

export default ListProductItem;
