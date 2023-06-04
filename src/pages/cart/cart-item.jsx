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
          className="w-1/4 overflow-hidden"
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
            className="rounded-full w-26 h-19 mb-36 ml-120 mt-2"
          >
            <MinusIcon strokeWidth={2} className="h-5 w-5" />
          </Button>
          <p className="text-xl pt-3 pr-4 font-sans font-semibold text-gray-600">
            {cartItems[id]}
          </p>
          {/* <div className="">
            <Input
              variant="outlined"
              className="text-center rounded-full w-20 mt-3"
              color="blue-gray"
            ></Input>
          </div> */}
          <Button
            onClick={() => addToCart(id)}
            size="md"
            color="blue-gray"
            variant="outlined"
            className="rounded-full mb-36 ml-120 mt-2"
          >
            <PlusIcon strokeWidth={2} className="h-5 w-5" />
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
