import { Typography } from "@material-tailwind/react";
import {
  BottomNavigation,
  BottomNavigationAction,
  Box,
  Breadcrumbs,
  Button,
  Grid,
} from "@mui/material";
import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import LayoutTopBar from "../components/LayoutTopBar";
import { Link } from "react-router-dom";


export default function Home() {
  const [count, setcount] = useState(0);
  const imageVariants = {
    hidden: {
      opacity: 0,
      scale: 0,
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
        delay: 1.5,
        ease: [0, 0.71, 0.2, 1.01],
      },
    },
    exit: {
      // exit={{ scaleX: 1, transition: { duration: 0.5, ease: "circIn" } }}
      // scaleX: 1,
      // transition: { duration: 0.5, ease: "circIn" },
    },
  };
  const HomeVariants = {
    hidden: {
      x: "100vw",
      // opacity: 0,
    },
    visible: {
      x: 0,
      transition: {
        delay: 1,
        duration: 2,
        type: "tween",
      },
      // opacity: 1,
      // transition: {
      //   // delay: 1,
      //   duration: 1,
      //   type: "tween",
      // },
    },
    exit: {
      x: "250vh",
      // transition:{duration:2,ease:"easeInOut"}
    },
  };
  return (
    <>
      {/* variants={exitVariants} exit="exit" */}
      <Box component={motion.div}>
        <Box
          component={motion.div}
          className="bg-[#140f23] w-[100%] md:h-[653px] h-[1030px] md:py-10 md:px-0 md:pr-10 py-14 px-[1.5rem] flex flex-col"
        >
          {/* <LayoutTopBar /> */}
          <Box className="uppercase text-white text-3xl md:pl-24 flex space-x-3 cursor-pointer">
            <Typography className="text-3xl flex flex-col">
              <span>Sanu Singh</span>
              <span className="text-sm text-[gold]">Web Developer</span>
            </Typography>
            {/* <Typography className="text-[gold] text-3xl">/</Typography>{" "}
            <Typography className="text-xl flex items-center">
              contact
            </Typography> */}
          </Box>

          <Box
            className="bg-[#211c30] w-[100%] h-[100%]"
            component={motion.div}
            variants={HomeVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 100, damping: 30 },
              opacity: { duration: 0.2 },
            }}
          >
            <Grid container>
              <Grid item md={6}>
                <Box
                  component={motion.div}
                  className="box"
                  variants={imageVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                >
                  <Box
                    component="img"
                    // src="https://images.unsplash.com/photo-1575014774591-d036b92ae5ba?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTl8fHBvdHJhaXQlMjB3aXRob3V0JTIwZmFjZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
                    src="https://images.unsplash.com/photo-1543599538-a6c4f6cc5c05?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8V2VsY29tZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
                    className="md:px-[30%] pt-10"
                    sx={{
                      width: { md: "100%", xs: "100%" },
                      filter: { xs: "blur(3px)", md: "blur(0px)" },
                      height: "100%",
                    }}
                  />
                </Box>
              </Grid>
              <Grid item md={6}>
                <Box
                  component={motion.div}
                  initial={{ opacity: 0, y: 200 }}
                  transition={{ duration: 1 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  className="mr-[9%] absolute md:block mt-5 top-0 space-y-2 text-white"
                >
                  <Typography className="text-5xl pb-4">
                    Hello Strangers
                  </Typography>
                  <Box className="space-x-2 space-y-4 pt-[65%] md:p-[2%]">
                    <Typography className="text-4xl">
                      I'M <span style={{ color: "gold" }}>SANU SINGH</span>
                    </Typography>
                    <Typography className="flex flex-col text-2xl">
                      <span>&#8226; Enquiring Mind </span>{" "}
                      <span>&#8226; Meticulous </span>
                      <span>&#8226; Self-Possessed</span>
                    </Typography>
                    <Typography className="text-lg md:pr-10">
                      I live to shape{" "}
                      <span style={{ color: "gold" }}>the digital world. </span>
                      The way visual storytelling—in{" "}
                      <span style={{ color: "gold" }}>harmony</span> with{" "}
                      <span style={{ color: "gold" }}>interactivity</span>
                      —weaves an engaging experience fascinates me. And
                      opportunities bridging design and development are what I
                      revel in. But what invigorates me most is knowing{" "}
                      <span style={{ color: "gold" }}>
                        the design I create today will surpass yesterday’s.
                      </span>
                    </Typography>
                    <Box className="md:space-x-5 flex md:flex-row flex-col">
                      <Box
                        component={motion.div}
                        className="underline-offset-4 hover:underline cursor-pointer"
                      >
                        <Link to="/about">Learn More about me</Link>
                      </Box>
                      <span>or</span>
                      <Box className="underline-offset-4 hover:underline cursor-pointer">
                        View My Works
                      </Box>
                    </Box>
                  </Box>
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Box>
        {/* {isMenuOpen && (
          <Box
            className="flex"
            component={motion.div}
            exit={{ x: "300vh" }}
            transition={{ duration: 2, type: "tween" }}
          >
            <LayoutTopBar isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
          </Box>
        )} */}
      </Box>
    </>
  );
}
