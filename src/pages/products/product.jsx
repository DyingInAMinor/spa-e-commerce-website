import React, { useContext } from "react";
import { ProductsContext } from "../../context/products-context";

import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Button,
} from "@material-tailwind/react";

import {
  ShoppingCartIcon,
  MinusIcon,
  PlusIcon,
} from "@heroicons/react/24/outline";

const HighlightText = ({ text, highlight }) => {
  // Create a regular expression to match the highlight text
  const regex = new RegExp(`(${highlight})`, "gi");

  // Split the text into parts: before, highlighted, and after
  const parts = text.split(regex);

  return (
    <span>
      {parts.map((part, index) =>
        part.toLowerCase() === highlight.toLowerCase() ? (
          <mark key={index} style={{ backgroundColor: "rgb(203 213 225)" }}>
            {part}
          </mark>
        ) : (
          <span key={index}>{part}</span>
        )
      )}
    </span>
  );
};

export const Product = (props) => {
  const { id, productName, price, productImage } = props.data;
  const { addToCart, removeFromCart, cartItems } = useContext(ProductsContext);

  const cartItemAmount = cartItems[id];

  return (
    <div className="">
      <div className="auto-cols-auto h-full bg-white rounded-lg shadow-md p-4">
        <img src={productImage} alt="Product" className="w-full" />
        <b className="block mt-2 text-lg ">
          <HighlightText text={productName} highlight={props.filteredPattern} />
        </b>
        <p className="text-xl pt-3  font-sans font-semibold text-gray-600">
          {price} ₽
        </p>
        <div className="flex items-center justify-center mt-3">
          {cartItemAmount > 0 ? (
            <div className="flex items-center justify-center flex-row w-max gap-4">
              <Button
                onClick={() => removeFromCart(id)}
                size="md"
                color="blue-gray"
                variant="outlined"
                className="flex items-center justify-center rounded-full p-2 m-2 h-12 w-12"
              >
                <MinusIcon className="h-1/2 w-1/2" strokeWidth={4} />
              </Button>
              <p className="text-xl mr-3 ml-3 font-sans font-semibold text-gray-600">
                {cartItemAmount}
              </p>

              <Button
                onClick={() => addToCart(id)}
                size="md"
                color="blue-gray"
                variant="outlined"
                className="flex items-center justify-center rounded-full p-2 m-2 h-12 w-12"
              >
                <PlusIcon strokeWidth={4} className=" h-1/2 w-1/2" />
              </Button>
            </div>
          ) : (
            <Button
              color="blue-gray"
              className="flex grow-0 items-center gap-3 rounded-3xl focus:scale-100"
              variant="outlined"
              size="md"
              onClick={() => addToCart(id)}
            >
              <ShoppingCartIcon strokeWidth={2} className="h-5 w-5" /> Добавить
              в корзину{" "}
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};
