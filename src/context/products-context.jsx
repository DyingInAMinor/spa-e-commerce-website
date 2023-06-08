import React, { createContext, useState } from "react";
import { PRODUCTS } from "../productsList";

export const ProductsContext = createContext(null);

const getDefaultCart = () => {
  let cart = {};
  for (let i = 1; i < PRODUCTS.length + 1; i++) {
    cart[i] = 0;
  }
  return cart;
};

export const ProductsContextProvider = (props) => {
  const [productsGrid, setProductsGrid] = useState(PRODUCTS);
  const [cartItems, setCartItems] = useState(getDefaultCart);

  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        let itemInfo = PRODUCTS.find((product) => product.id === Number(item));
        totalAmount += cartItems[item] * itemInfo.price;
      }
    }
    return totalAmount;
  };

  const addToCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
  };

  const removeFromCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
  };

  const sortPriceAscending = () => {
    const sortedByPriceAscending = PRODUCTS.sort((a, b) =>
      a.price > b.price ? 1 : -1
    );
    return sortedByPriceAscending;
  };

  const sortPrice = (type) => {
    if (type === "asc") {
      return setProductsGrid(
        productsGrid.toSorted((a, b) => (a.price > b.price ? 1 : -1))
      );
    } else if (type === "desc") {
      return setProductsGrid(
        productsGrid.toSorted((a, b) => (a.price < b.price ? 1 : -1))
      );
    } else {
      return "Invalid argument";
    }
  };

  const contextValue = {
    cartItems,
    addToCart,
    removeFromCart,
    getTotalCartAmount,
    // sortPriceAscending,
    sortPrice,
    productsGrid,
  };
  console.log(cartItems);
  return (
    <ProductsContext.Provider value={contextValue}>
      {props.children}
    </ProductsContext.Provider>
  );
};
