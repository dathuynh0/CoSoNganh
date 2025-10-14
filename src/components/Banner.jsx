import { BanknoteArrowDown } from "lucide-react";

const Banner = () => {
  const desktopImage =
    "https://yame.vn/cdn/shop/files/banner_homepage_0410_desktopp.png?v=1759576507&width=2000";
  const mobileImage =
    "https://yame.vn/cdn/shop/files/banner_homepage_0410_mobile.png?v=1759576523&width=1024";

  return (
    <section className="w-full h-[50vh] md:h-[90vh] bg-gray-200">
      <picture className="w-full h-full">
        {/* Màn hình nhỏ (mobile) sẽ sử dụng ảnh này */}
        <source media="(max-width: 767px)" srcSet={mobileImage} />
        <img
          src={desktopImage}
          alt="Banner quảng cáo"
          className="w-full h-full object-cover"
        />
      </picture>
    </section>
  );
};

export default Banner;
