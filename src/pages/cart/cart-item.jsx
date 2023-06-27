import React, { useContext } from "react";
import { ProductsContext } from "../../context/products-context";
import { PlusIcon, MinusIcon } from "@heroicons/react/24/outline";
import { Button, Input } from "@material-tailwind/react";

export const CartItem = (props) => {
  const { id, productName, price, productImage } = props.data;
  const { addToCart, cartItems, removeFromCart } = useContext(ProductsContext);

  const cartItemAmount = cartItems[id];

  return (
    <div className="">
      <div className="flex space-x-20 gap-7 w-3/3 bg-white rounded-lg shadow-md mt-6 mb-6 p-4">
        <img
          src={productImage}
          alt="Product"
          className="w-2/4 overflow-hidden"
        />
        <div>
          <b className="block mt-2 text-lg ">{productName}</b>
        </div>
        <>
          <Button
            onClick={() => removeFromCart(id)}
            size="md"
            color="blue-gray"
            variant="outlined"
            className="rounded-full w-16 h-16 mb-36 ml-115 mt-2 shrink-0
            "
          >
            <MinusIcon strokeWidth={4} className="h-3 w-3" />
          </Button>
          <p className="text-xl pt-3 pr-4 font-sans font-semibold text-gray-600">
            {cartItems[id]}
          </p>

          <Button
            onClick={() => addToCart(id)}
            size="md"
            color="blue-gray"
            variant="outlined"
            className="rounded-full w-16 h-16 mb-36 ml-115 mt-2 shrink-0"
          >
            <PlusIcon strokeWidth={4} className="h-3 w-3" />
          </Button>
        </>
        <div className="">
          <p className=" text-xl pt-44 pr-4 font-sans font-semibold whitespace-nowrap text-gray-600 break-normal">
            {price} ₽
          </p>
        </div>
      </div>
    </div>
  );
};
