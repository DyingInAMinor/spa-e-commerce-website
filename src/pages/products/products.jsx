import React, { useState, useContext, useEffect } from "react";
import { PRODUCTS } from "../../productsList";
import { Product } from "./product";
import { ProductsContext } from "../../context/products-context";

import { Button, Input, Typography } from "@material-tailwind/react";

import {
  AdjustmentsVerticalIcon,
  ChevronDownIcon,
  ArrowUpIcon,
  ArrowDownIcon,
} from "@heroicons/react/24/outline";

export const SortingMenu = (props) => {
  const [isInputVisible, setIsInputVisible] = useState(false);
  const [sortPriceType, setSortPriceType] = useState("asc");
  const [inputState, setInputState] = useState("");

  const sortingByName = (inputState) => {
    const filtered = productsGrid.filter((product) =>
      product.productName.toLowerCase().includes(inputState.toLowerCase())
    );
    props.setFilteredProducts(filtered);
    props.setFilteredPattern(inputState);
  };

  const toggleInputVisibility = () => {
    setIsInputVisible(!isInputVisible);
  };

  const { sortPrice, productsGrid, setProductsGrid } =
    useContext(ProductsContext);

  const handleSort = () => {
    if (sortPriceType === "asc") {
      sortPrice("desc");
      setSortPriceType("desc");
    } else {
      sortPrice("asc");
      setSortPriceType("asc");
    }
    return 0;
  };

  useEffect(() => {
    sortingByName(inputState, PRODUCTS);
  }, [inputState, PRODUCTS]);

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

      <Button
        variant="text"
        color="blue-gray"
        ripple={false}
        className="flex items-center gap-1 hover:bg-transparent active:bg-transparent"
        onClick={handleSort}
      >
        Цена
        {sortPriceType === "asc" ? (
          <ArrowUpIcon strokeWidth={2} className="h-4 w-4" />
        ) : (
          <ArrowDownIcon strokeWidth={2} className="h-4 w-4" />
        )}
      </Button>

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
              onChange={(e) => sortingByName(e.target.value)}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export const Products = () => {
  const { productsGrid } = useContext(ProductsContext);
  const [filteredProducts, setFilteredProducts] = useState(productsGrid);
  const [filteredPattern, setFilteredPattern] = useState("");

  useEffect(() => {
    setFilteredProducts(productsGrid);
  }, [productsGrid]);
  return (
    <div className="">
      <div className="flex flex-col justify-center mb-4">
        <SortingMenu
          setFilteredProducts={setFilteredProducts}
          setFilteredPattern={setFilteredPattern}
        />{" "}
      </div>

      {filteredProducts.length === 0 ? (
        <div className="flex justify-center items-center h-screen">
          <Typography className="text-center" color="blue-gray" textGradient>
            <div className="text-2xl font-sans font-semibold">
              Мы ничего не нашли : (
            </div>
          </Typography>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 pl-5 pr-5 mt-5">
          {filteredProducts.map((product, index) => (
            <Product
              key={index}
              data={product}
              filteredPattern={filteredPattern}
            />
          ))}
        </div>
      )}
    </div>
  );
};
