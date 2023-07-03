import React, { useContext } from "react";
import { Link } from "react-router-dom";
import {
  Navbar,
  Typography,
  IconButton,
  Badge,
  Button,
} from "@material-tailwind/react";

import { ShoppingCartIcon } from "@heroicons/react/24/outline";
import { PRODUCTS } from "../productsList";
import { ProductsContext } from "../context/products-context";

export const MyNavbar = (props) => {
  const [openNav, setOpenNav] = React.useState(false);
  const { getTotalQuantityCartAmount } = useContext(ProductsContext);

  const getDefaultCart = () => {
    let cart = {};
    for (let i = 1; i < PRODUCTS.length + 1; i++) {
      cart[i] = 0;
    }
    return cart;
  };

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  const navList = (
    <div className="mb-4 mt-2 flex flex-col lg:mb-0 lg:mt-0 lg:flex-row active:bg-transparent">
      <Button
        ripple={false}
        size="lg"
        variant="text"
        color="blue-gray"
        className="flex justify-end rounded-full"
      >
        О нас
      </Button>
      <Button
        ripple={false}
        size="lg"
        variant="text"
        color="blue-gray"
        className="flex justify-end rounded-full"
      >
        Товары
      </Button>
    </div>
  );

  return (
    <>
      <Navbar className="fixed top-0 left-1/2 transform -translate-x-1/2 z-10 rounded-none py-2 px-4 lg:px-8 lg:py-4">
        <div className="flex items-center justify-between text-blue-gray-900">
          <Typography className="mr-4 cursor-pointer py-1.5 font-medium">
            <Link to="/">
              <Button
                ripple={false}
                color="blue-gray"
                size="lg"
                variant="text"
                className="flex justify-end rounded-full text-slate text-lg font-normal hover:bg-transparent active:bg-transparent"
              >
                <b>E-COMMERCE SHOP </b>
              </Button>
            </Link>
          </Typography>

          <div className="flex items-center gap-4">
            <div className="mr-4 hidden lg:block">
              <Link to="/">{navList}</Link>
            </div>

            <Link to="/cart">
              <Button
                ripple={false}
                variant="text"
                color="blue-gray"
                className="flex items-center gap-2 rounded-full transform hover:scale-110 motion-reduce:transform-none"
              >
                {/* {console.log("cartItems: ", cartItems)} */}
                {getTotalQuantityCartAmount() ? (
                  <Badge
                    content={
                      getTotalQuantityCartAmount() > 99
                        ? "99+"
                        : getTotalQuantityCartAmount()
                    }
                    color="blue-gray"
                    withBorder
                    className=" ml-[-20px] w-8 h-6 align-center"
                  >
                    <ShoppingCartIcon
                      color="blue-gray"
                      strokeWidth={2}
                      className="h-8 w-8"
                    />
                  </Badge>
                ) : (
                  <Badge
                    content={0}
                    color="blue-gray"
                    withBorder
                    className=" ml-[-20px] w-8 h-6 align-center"
                  >
                    <ShoppingCartIcon
                      color="blue-gray"
                      strokeWidth={2}
                      className="h-8 w-8"
                    />
                  </Badge>
                )}
              </Button>
            </Link>

            <IconButton
              variant="text"
              className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
              ripple={false}
              onClick={() => setOpenNav(!openNav)}
            >
              {openNav ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  className="h-6 w-6"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </IconButton>
          </div>
        </div>
      </Navbar>
    </>
  );
};
