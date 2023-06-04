import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { PRODUCTS } from "../../productsList";
import { ProductsContext } from "../../context/products-context";
import { CartItem } from "../cart/cart-item";
import { Order } from "../order/order";
import { Typography, Button } from "@material-tailwind/react";
import { ArrowLongLeftIcon } from "@heroicons/react/24/outline";

export const Cart = () => {
  const { cartItems, getTotalCartAmount } = useContext(ProductsContext);
  const totalAmount = getTotalCartAmount();

  return (
    <div>
      <div className="grid-row-1 items-start auto-rows-min align-center justify-between mt-6 mb-6 gap-4 p-0 m-0">
        {PRODUCTS.map((product) =>
          cartItems[product.id] !== 0 ? (
            <CartItem key={product.id} data={product} />
          ) : null
        )}
      </div>
      {totalAmount > 0 ? (
        <div className=" justify-between mb-20">
          <div className=" ml-72 pl-72 pr-0">
            <hr className="h-1 mx-auto pb-0 mb-0 my-4 bg-gray-100 border-0 rounded dark:bg-gray-700"></hr>
            <p className="ml-80 pl-24 text-xl pt-3 pr-4 font-sans font-bold text-black">
              К оплате : {totalAmount} ₽
            </p>
          </div>
          <br></br>
          <div className="flex justify-between">
            <div className="">
              <Link to="/">
                <Button
                  size="lg"
                  ripple={false}
                  color="blue-gray"
                  variant="text"
                  className="flex items-center gap-2 hover:bg-transparent active:bg-transparent"
                >
                  <ArrowLongLeftIcon strokeWidth={2} className="h-5 w-5" /> К
                  покупкам
                </Button>
              </Link>
            </div>
            <Link to="/order">
              <div>
                <Button
                  ripple={false}
                  size="md"
                  color="blue-gray"
                  className="flex align-top rounded-full"
                >
                  Оплатить
                </Button>
              </div>
            </Link>
          </div>
        </div>
      ) : (
        <Typography color="blue-gray" textGradient>
          <div className="mt-72 text-xl font-sans font-semibold text-center">
            Здесь пусто :(<br></br>
            Добавим что-нибудь?
          </div>
          <div className="flex justify-between mt-4">
            <div></div>
            <Link to="/" className="flex items-center">
              <Button
                size="lg"
                ripple={false}
                color="blue-gray"
                variant="text"
                className="flex gap-2 hover:bg-transparent active:bg-transparent "
              >
                <ArrowLongLeftIcon strokeWidth={2} className="h-5 w-5" />К
                покупкам
              </Button>
            </Link>
            <div></div>
          </div>
        </Typography>
      )}
    </div>
  );
};
