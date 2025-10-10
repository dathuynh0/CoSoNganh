import { NavLink } from "react-router";
import { Button } from "./ui/button";

const DoNamDoNu = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between gap-6">
      {/* nam */}
      <div className="max-w-1/2">
        <NavLink to="/donam">
          <img
            className="w-full h-full md:h-[28rem] object-cover hover:scale-102 transition-transform duration-300"
            src="https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?w=400"
            alt="Sản phẩm nam"
          />
        </NavLink>
        <h1 className="text-center text-5xl font-light mt-4">Nam</h1>
        <p className="text-lg font-light text-gray-500 text-center mt-4">
          Khám phá thời trang nam tại Shop DatFashion là 1 trải nghiệm cực kì
          thú vị và đem lại cảm giác sang trọng và lịch lãm
        </p>
        <div className="flex justify-center">
          <Button
            size="lg"
            className="border-1 text-xl font-light mt-4 p-6 hover:bg-gray-200"
          >
            <NavLink to="/donam">Mua ngay</NavLink>
          </Button>
        </div>
      </div>

      {/* nữ */}
      <div className="max-w-1/2">
        <NavLink to="/donu">
          <img
            className="w-full h-full h-[28rem] object-cover hover:scale-102 transition-transform duration-300"
            src="https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?w=400"
            alt="Sản phẩm nam"
          />
        </NavLink>
        <h1 className="text-center text-5xl font-light mt-4">Nữ</h1>
        <p className="text-lg font-light text-gray-500 text-center mt-4">
          Khám phá thời trang nam tại Shop DatFashion là 1 trải nghiệm cực kì
          thú vị và đem lại cảm giác sang trọng và lịch lãm
        </p>
        <div className="flex justify-center">
          <Button
            size="lg"
            className="border-1 text-xl font-light mt-4 p-6 hover:bg-gray-200"
          >
            <NavLink to="/donu">Mua ngay</NavLink>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default DoNamDoNu;
