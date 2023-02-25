import {
  AppBar,
  BottomNavigation,
  BottomNavigationAction,
  Box,
  Button,
  Drawer,
  Grid,
  IconButton,
  MenuItem,
  Paper,
  Toolbar,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Link, Navigate, useLocation, useNavigate } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
// import RestoreIcon from "@mui/icons-material/Restore";
// import FavoriteIcon from "@mui/icons-material/Favorite";
// import LocationOnIcon from "@mui/icons-material/LocationOn";
import HomeIcon from "@mui/icons-material/Home";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import ConnectWithoutContactOutlinedIcon from "@mui/icons-material/ConnectWithoutContactOutlined";

export default function LayoutTopBar(props) {
  const HamburgerVariants = {
    hidden: {
      x: "-100vw",
      opacity: { duration: 0 },
    },
    visible: {
      x: 0,
      transition: { delay: 1.5, duration: 2, type: "tween" },
      opacity: 1,
    },
    exit: {
      x: "-100vw",
      // duration:2,
      transition: { duration: 2, type: "tween" },
    },
  };
  const loc = useLocation();
  const navigate = useNavigate();
  console.log(loc);

  return (
    <>
      <Box
        component={motion.span}
        className={`hidden md:block pt-[10%] ${
          loc.state === null ? "bg-[#140f23]" : "bg-[#e3d064]"
        } `}
        variants={HamburgerVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
        style={{
          position: "fixed",
          zIndex: "100",
          transform: "none",
          top: "0",
          bottom: "0",
        }}
      >
        <AppBar
          position="static"
          className={`${
            loc.state !== null
              ? "bg-[#140f23] text-[gold]"
              : "bg-[gold] text-black"
          }`}
        >
          <Toolbar>
            <IconButton
              size="small"
              edge="end"
              color="inherit"
              aria-label="menu"
              onClick={() => {
                navigate(
                  `${loc.state === null ? "/menu" : loc.state.loc.pathname}`,
                  loc.state === null ? { state: { loc } } : { state: "" }
                );
              }}
            >
              {loc.state === null ? <MenuIcon /> : <ArrowBackIcon />}
              {/* <MenuIcon />
              <ArrowBackIcon /> */}
            </IconButton>
          </Toolbar>
        </AppBar>
        <Toolbar />
      </Box>

      <Box
        className="fixed md:hidden"
        style={{
          left: "80px",
          // "position": "fixed",
          // top: "641px",
          bottom: "60px",
          "z-index": "100",
        }}
      >
        <BottomNavigation
          showLabels
          // value={value}
          // onChange={(event, newValue) => {
          //   // setValue(newValue);
          // }}
          position="absolute"
        >
          <Link to="/">
            <BottomNavigationAction label="Home" icon={<HomeIcon />} />
          </Link>
          <Link to="/about">
            <BottomNavigationAction label="About" icon={<InfoOutlinedIcon />} />
          </Link>
          <Link to="/contact">
            <BottomNavigationAction
              label="Contact"
              icon={<ConnectWithoutContactOutlinedIcon />}
            />
          </Link>
        </BottomNavigation>
      </Box>
    </>
  );
}
