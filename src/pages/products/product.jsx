import React, { useContext } from "react";
import { ProductsContext } from "../../context/products-context";

import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Button,
  ButtonGroup,
  MinusIcon,
  PlusIcon,
} from "@material-tailwind/react";

import { ShoppingCartIcon } from "@heroicons/react/24/outline";

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
  const { addToCart, cartItems } = useContext(ProductsContext);

  const cartItemAmount = cartItems[id];

  return (
    <div className="">
      <div className="auto-cols-auto h-full bg-white rounded-lg shadow-md p-4">
        <img src={productImage} alt="Product" className="w-full" />
        <b className="block mt-2 text-lg ">
          <HighlightText text={productName} highlight={props.filteredPattern} />
        </b>
        <p className="text-xl pt-3 pr-4 font-sans font-semibold text-gray-600">
          {price} ₽
        </p>
        <div className="flex items-center gap-3 justify-center mt-3">
          <Button
            color="blue-gray"
            className="flex grow-0 items-center gap-3 rounded-3xl focus:scale-100"
            variant="outlined"
            size="md"
            onClick={() => addToCart(id)}
          >
            <ShoppingCartIcon strokeWidth={2} className="h-5 w-5" /> Добавить в
            корзину{" "}
            {cartItemAmount > 0 && (
              <div className="flex flex-col w-max gap-4">
                {/* <p className="text-lg  min-h-0 min-w-0 mb-1">
                    ({cartItemAmount})
                  </p> */}

                {/* <ButtonGroup>
                  <Button>
                    <MinusIcon strokeWidth={4} className="h-3 w-3" />
                  </Button>
                  <Button>({cartItemAmount})</Button>
                  <Button>
                    <PlusIcon strokeWidth={4} className="h-3 w-3" />
                  </Button>
                </ButtonGroup> */}
              </div>
            )}
          </Button>
        </div>
      </div>
    </div>
  );
};
