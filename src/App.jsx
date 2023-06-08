import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { MyNavbar } from "./components/navbar";
import { Products } from "./pages/products/products";
import { Cart } from "./pages/cart/cart";
import { Order } from "./pages/order/order.jsx";
import { ProductsContextProvider } from "./context/products-context";

function App() {
  return (
    <div className="App">
      <ProductsContextProvider>
        <Router>
          <MyNavbar />
          <Routes>
            <Route path="/" element={<Products />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/order" element={<Order />} />
          </Routes>
        </Router>
      </ProductsContextProvider>
    </div>
  );
}

export default App;
