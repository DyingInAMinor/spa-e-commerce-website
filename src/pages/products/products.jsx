import React, { useState, useContext } from "react";
import { PRODUCTS } from "../../productsList";
import { Product } from "./product";
import { ProductsContext } from "../../context/products-context";

import {
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Button,
  Input,
} from "@material-tailwind/react";

import {
  AdjustmentsVerticalIcon,
  ChevronDownIcon,
  ArrowSmallDownIcon,
  ArrowSmallUpIcon,
} from "@heroicons/react/24/outline";

export const SortingMenu = () => {
  const [isInputVisible, setIsInputVisible] = useState(false);
  const toggleInputVisibility = () => {
    setIsInputVisible(!isInputVisible);
  };

  const { sortPriceAscending } = useContext(ProductsContext);

  return (
    <div className="flex items-center gap-3 ml-5 mt-4">
      <Button
        variant="outlined"
        color="blue-gray"
        ripple={false}
        className="flex items-center rounded-full gap-3 hover:bg-blue-gray active:bg-transparent"
      >
        <AdjustmentsVerticalIcon strokeWidth={2} className="h-5 w-5" />{" "}
        Сортировать по :
      </Button>
      <Menu placement="bottom">
        <MenuHandler>
          <Button
            variant="text"
            color="blue-gray"
            ripple={false}
            className="flex items-center gap-3 hover:bg-transparent active:bg-transparent"
          >
            <ChevronDownIcon strokeWidth={2} className="h-5 w-5" />
            Цена
          </Button>
        </MenuHandler>
        <MenuList>
          <MenuItem className="flex items-center">
            <Button
              className="flex items-center gap-1"
              onClick={sortPriceAscending}
            >
              По возрастанию
              <ArrowSmallUpIcon strokeWidth={2} className="ml-3 mr-1 h-5 w-5" />
            </Button>
          </MenuItem>
          <MenuItem className="flex items-center">
            <div className="flex items-center gap-5 ">
              По убыванию <br></br>
              <ArrowSmallDownIcon
                strokeWidth={2}
                className="ml-4 mr-3 pr-1 h-5 w-5"
              />{" "}
            </div>
          </MenuItem>
        </MenuList>
      </Menu>

      <Button
        variant="text"
        color="blue-gray"
        ripple={false}
        className="flex items-center gap-3 hover:bg-transparent active:bg-transparent"
        onClick={toggleInputVisibility}
      >
        <ChevronDownIcon strokeWidth={2} className="h-5 w-5" />
        Название
      </Button>

      <div
        className={`transition-all duration-300 ${
          isInputVisible ? "h-auto opacity-100" : "h-0 opacity-0"
        }`}
      >
        {isInputVisible && (
          <div className="w-72">
            <Input
              variant="static"
              color="blue-gray"
              placeholder="Ключевые слова"
              className=" "
            />
          </div>
        )}
      </div>

      {/* <Input
        type="text"
        placeholder="Enter input"
        className="px-4 py-2 border border-blue-gray rounded-full focus:outline-none"
      /> */}
    </div>
  );
};

export const Products = () => {
  return (
    <div className="">
      <div className="flex flex-col justify-center mb-4">
        <SortingMenu />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 pl-5 pr-5 mt-5">
        {PRODUCTS.map((product, index) => (
          <Product key={index} data={product} />
        ))}
      </div>
    </div>
  );
};
