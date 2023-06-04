import React, { useContext } from "react";
import { Link } from "react-router-dom";
import {
  Navbar,
  Typography,
  Button,
  IconButton,
} from "@material-tailwind/react";

import { ShoppingCartIcon } from "@heroicons/react/24/outline";

export const MyNavbar = () => {
  const [openNav, setOpenNav] = React.useState(false);

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
        size="md"
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
      <Navbar className="sticky inset-0 z-10 h-max max-w-full rounded-none py-2 px-4 lg:px-8 lg:py-4">
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
                variant="outlined"
                color="blue-gray"
                className="flex items-center gap-2 rounded-full transform hover:scale-110 motion-reduce:transform-none"
              >
                Корзина{" "}
                <ShoppingCartIcon
                  color="blue-gray"
                  strokeWidth={2}
                  className="h-8 w-8"
                />
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
