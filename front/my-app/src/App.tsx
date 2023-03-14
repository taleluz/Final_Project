import React, { useState } from "react";
import { Navbar, Button, Link, Text, Card, Radio, Input } from "@nextui-org/react";
import { Layout } from "./features/Navbar/components/Layout";
import { AcmeLogo } from "./features/Navbar/components/Acmelogo";
import { VariantsSelectorWrapper } from "./features/Navbar/components/VariantsSelectorWrapper";

import { ShoppingCart, Heart, User } from "react-feather";
import SearchIcon from "./features/Navbar/components/SearchIcon";
import { Outlet } from 'react-router-dom';
import { Content } from "./features/Navbar/components/Content";
import { useAppDispatch, useAppSelector } from "./app/hooks";
import { Link as RouterLink  } from 'react-router-dom';
import { toggleShowCart } from "./features/cart/slices/cartSlice";




export default function App(): JSX.Element {

  const [variant, setVariant] = useState<"static" | "floating" | "sticky">("floating");
  const [activeColor, setActiveColor] = useState<"primary" | "secondary" | "success" | "warning" | "error">("primary");
  const { quantity } = useAppSelector((state) => state.cart);

  const variants = ["static", "floating", "sticky"];
  const colors = ["primary", "secondary", "success", "warning", "error"];
  const dispatch = useAppDispatch();



  const collapseItems = [
    { name: "Sofas", path: "/category/Sofas" },
    { name: "Shelves", path: "/category/Shelves" },
    { name: "Closets", path: "/category/Closets" },
    { name: "Chairs", path: "/category/Chairs" },
    { name: "Tables", path: "/category/Tables" },
  ];

  // const handleVariantChange = (value: "static" | "floating" | "sticky") => {
  //   setVariant(value);
  // };



  return (
    <Layout>
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
          <RouterLink to="/cart" onClick={() => dispatch(toggleShowCart())}>
            <ShoppingCart size={18} />
            {quantity !== 0 && <span>{quantity}</span>}
          </RouterLink>

          <RouterLink to="#">
            <Heart size={18} />
          </RouterLink>

          <RouterLink to="#">
            <User size={18} />
          </RouterLink>


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


