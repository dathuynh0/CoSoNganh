import { Outlet } from "react-router";
import NavBar from "./components/NavBar/NavBar";
import Footer from "./pages/Footer";
import { toast, Toaster } from "sonner";
import { useState } from "react";

function App() {
  //phần search
  const [search, setSearch] = useState("");

  const handleSearchChange = (e) => {
    setSearch(e.target.value);
  };

  const [isSuccess, setIsSuccess] = useState(false);
  const [cartItems, setCartItems] = useState([]);

  const handleAddToCart = (productAdd) => {
    const checkAvailable = cartItems.find((item) => item.id === productAdd.id);
    if (isSuccess) {
      if (!checkAvailable) {
        setCartItems([...cartItems, { ...productAdd }]);
        toast.success("Thêm vào giỏ hàng thành công!");
      } else {
        toast.error("Thêm thất bại. Sản phẩm đã được thêm");
      }
    } else {
      toast.error("Bạn chưa đăng nhập vui lòng đăng nhập");
    }
  };

  const handleMinus = (index) => {
    const cloneData = [...cartItems];

    cloneData[index].number -= 1;
    setCartItems(cloneData);
  };

  const handlePlus = (index) => {
    const cloneData = [...cartItems];

    cloneData[index].number += 1;
    setCartItems(cloneData);
  };

  const total = cartItems.reduce((sum, item) => {
    const indexSpace = item.price.lastIndexOf(" ");
    const indexDots = item.price.indexOf(".");
    const firstPrice = item.price.slice(0, indexDots);
    const secondPrice = item.price.slice(indexDots + 1, indexSpace);
    console.log(firstPrice);
    console.log(secondPrice);

    const afterSlice = firstPrice.concat(secondPrice);

    const price = Number(afterSlice) || 0;
    const number = Number(item.number) || 0;

    return Math.floor(sum + price * number);
  }, 0); // đặt giá trị ban đầu của sum = 0

  const formattedTotal = new Intl.NumberFormat("vi-VN", {
    style: "currency",
    currency: "VND",
    currencyDisplay: "code",
  }).format(total);

  //xóa cartItems
  const handleDeleteCart = (productId) => {
    const cloneCart = cartItems.filter((item) => item.id !== productId);

    setCartItems(cloneCart);
    toast.success("Xóa thành công");
  };

  return (
    <div className="bg-slate-200 font-['Roboto']">
      <Toaster />
      <div className="bg-slate-100 flex justify-center lg:sticky top-0 right-0 left-0 z-50">
        <NavBar
          search={search}
          onSearchChange={handleSearchChange}
          data={cartItems}
          onMinus={handleMinus}
          onPlus={handlePlus}
          onDelete={handleDeleteCart}
          formattedTotal={formattedTotal}
          cartItems={cartItems}
          isSuccess={isSuccess}
          setIsSuccess={setIsSuccess}
        />
      </div>

      <main className="mx-auto">
        <div>
          <Outlet context={{ search, handleAddToCart, cartItems }} />
        </div>
      </main>
      <div className="bg-sky-200 text-white flex justify-center">
        <Footer />
      </div>
    </div>
  );
}

export default App;
