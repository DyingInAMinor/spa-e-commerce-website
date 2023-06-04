import React, { useContext } from "react";
import { ProductsContext } from "../../context/products-context";

import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Button,
} from "@material-tailwind/react";

import { PlusIcon, MinusIcon } from "@heroicons/react/24/outline";

export const Product = (props) => {
  const { id, productName, price, productImage } = props.data;
  const { addToCart, cartItems } = useContext(ProductsContext);

  const cartItemAmount = cartItems[id];

  return (
    <div className="">
      <div className="auto-cols-auto h-full bg-white rounded-lg shadow-md p-4">
        <img src={productImage} alt="Product" className="w-full" />
        <b className="block mt-2 text-lg ">{productName}</b>
        <p className="text-xl pt-3 pr-4 font-sans font-semibold text-gray-600">
          {price} ₽
        </p>
        <div className="flex flex-items-center gap-3 justify-center mt-3">
          <Button
            onClick={() => addToCart(id)}
            color="blue-gray"
            className="flex items-center gap-3 rounded-3xl"
            variant="outlined"
            size="md"
          >
            <PlusIcon strokeWidth={2} className="h-5 w-5" /> Добавить в корзину{" "}
            {cartItemAmount > 0 && (
              <>
                <p className="text-lg mb-1">({cartItemAmount})</p>
              </>
            )}
          </Button>
        </div>
      </div>
    </div>
  );
};
