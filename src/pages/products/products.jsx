import React from "react";
import { PRODUCTS } from "../../productsList";
import { Product } from "./product";

import {
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Button,
} from "@material-tailwind/react";

import {
  AdjustmentsVerticalIcon,
  ArrowDownIcon,
  ArrowUpIcon,
} from "@heroicons/react/24/outline";

export const SortingMenu = () => {
  return (
    <Menu>
      <MenuHandler>
        <Button
          variant="text"
          className="flex items-center gap-3 ml-auto mr-5 mt-4 rounded-full"
          color="blue-gray"
        >
          Сортировать по
          <AdjustmentsVerticalIcon strokeWidth={2} className="h-5 w-5" />
        </Button>
      </MenuHandler>
      <MenuList className="ml-auto">
        <Menu placement="right-start" offset={15}>
          <MenuHandler>
            <MenuItem>Цена</MenuItem>
          </MenuHandler>
          <MenuList>
            <MenuItem>
              По возрастанию{" "}
              <ArrowUpIcon
                strokeWidth={2}
                className="h-5 w-5 flex items-center gap-3"
              />{" "}
            </MenuItem>
            <MenuItem className="flex">
              <ArrowDownIcon strokeWidth={2} className="h-5 w-5" /> По убыванию
            </MenuItem>
          </MenuList>
        </Menu>
      </MenuList>
    </Menu>
  );
};

export const Products = () => {
  return (
    <div className="">
      <div className="flex justify-end mb-4">
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
