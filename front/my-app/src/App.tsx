import React, { useState } from "react";
import { Navbar, Button, Link, Text, Card, Radio, Input } from "@nextui-org/react";
import { ShoppingCart, Heart, User } from "react-feather";
import { Outlet } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from "./app/hooks";
import { Link as RouterLink } from 'react-router-dom';
import { clearCart } from "./services/cartSlice"
import { RootState } from "./app/store";
import "../src/styles/cart.css";
import Cart from "./features/components/cart/Cart";
import Wishlist from "./features/components/wishlist/Wishlist"
import CartItem from "./features/components/cart/CartItem";
import { Content } from "./features/components/navbar/Content";
import SearchIcon from "./features/components/navbar/SearchIcon";
import { VariantsSelectorWrapper } from "./features/components/navbar/VariantsSelectorWrapper";
import { Layout } from "./features/components/navbar/Layout";
import { AcmeLogo } from "./features/components/navbar/Acmelogo";
import { } from "./services/wishlistSlice";
import {
  loginAsync, selectLooged, logout, selectAccess, selectUsername
} from './features/login/loginSlice';

export default function App(): JSX.Element {

  const [variant, setVariant] = useState<"static" | "floating" | "sticky">("floating");
  const [activeColor, setActiveColor] = useState<"primary" | "secondary" | "success" | "warning" | "error">("primary");
  const variants = ["static", "floating", "sticky"];
  const colors = ["primary", "secondary", "success", "warning", "error"];
  const dispatch = useAppDispatch();
  const { cartItems, totalAmount, quantity } = useAppSelector((state: RootState) => state.cart);
  const { quantity: wishlistQuantity } = useAppSelector((state: RootState) => state.wishlist);
  const logged = useAppSelector(selectLooged)
  const username = useAppSelector(selectUsername)



  const collapseItems = [
    { name: "Sofas", path: "/category/Sofas" },
    { name: "Shelves", path: "/category/Shelves" },
    { name: "Closets", path: "/category/Closets" },
    { name: "Chairs", path: "/category/Chairs" },
    { name: "Tables", path: "/category/Tables" },
  ];


  return (

    <Layout>
      <Wishlist />
      <Cart />
      <Navbar isBordered variant="sticky">

        <Navbar.Brand>
          <Navbar.Toggle aria-label="toggle navigation" />
          <AcmeLogo />
          <Text b color="inherit" hideIn="xs">
            ACME
          </Text>
        </Navbar.Brand>
        <Navbar.Content
          css={{
            "@xsMax": {
              w: "100%",
              jc: "space-between",
            },
          }}
        >
          <Navbar.Item
            css={{
              "@xsMax": {
                w: "100%",
                jc: "center",
              },
            }}
          >
            <Input
              clearable
              contentLeft={
                <SearchIcon fill="var(--nextui-colors-accents6)" size={16} />
              }
              contentLeftStyling={false}
              css={{
                w: "100%",
                "@xsMax": {
                  mw: "300px",
                },
                "& .nextui-input-content--left": {
                  h: "100%",
                  ml: "$4",
                  dflex: "center",
                },
              }}
              placeholder="Search..."
            />
          </Navbar.Item>
          <button className="btn btn-outline-dark" type="button"
            data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight"
            aria-controls="offcanvasRight" >
            <ShoppingCart size={18} />
            {quantity !== 0 && <span>{quantity}</span>}
          </button>
          {/* <RouterLink to="/cart" >
            <ShoppingCart size={18} />
            {quantity !== 0 && <span>{quantity}</span>}
          </RouterLink> */}
          <button className="btn btn-outline-dark"
            type="button" data-bs-toggle="offcanvas"
            data-bs-target="#offcanvas2"
            aria-controls="offcanvas2">

            <Heart size={18} />
            {wishlistQuantity !== 0 && <span>{wishlistQuantity}</span>}
          </button>


          {logged ? (
            <>
              {`Welcome ${username}`}
              <RouterLink to="/" onClick={() => { dispatch(logout()); }}>Log out</RouterLink>
              
            </>
          ) : (
            <button className="btn btn-outline-dark" >
            <RouterLink to="/auth">
              <User size={18} />
            </RouterLink>
            </button>
          )}
        </Navbar.Content>

        <Navbar.Collapse>
          {collapseItems.map((item, index) => (
            <Navbar.CollapseItem key={item.name}>
              <Link
                color="inherit"
                css={{
                  minWidth: "100%",
                }}
                href={item.path}
              >
                {item.name}
              </Link>
            </Navbar.CollapseItem>
          ))}
        </Navbar.Collapse>
      </Navbar>
      <Outlet />

    </Layout >
  )
}


