import Banner from "../components/Banner/Banner";
import ProductCategories from "../components/ProductCategories";
import ListDoNam from "../components/ProductNam/ListDoNam";
import ListDoNu from "../components/ProductNu/ListDoNu";
import ListPhuKien from "../components/PhuKien/ListPhuKien";
import ListBanChay from "../components/ListBanChay";

const HomePage = () => {
  return (
    <>
      <Banner />
      <ProductCategories />
      <ListBanChay />
      <ListDoNam />
      <ListDoNu />
      <ListPhuKien />
    </>
  );
};

export default HomePage;
