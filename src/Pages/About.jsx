import { Typography } from "@material-tailwind/react";
import { Box, Button, Grid } from "@mui/material";
import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import LayoutTopBar from "../components/LayoutTopBar";
import Home from "./Home";
import Linesvg from "../components/Linesvg";
// import  ArrowOutwardIcon, CallReceivedIcon  from "@mui/icons-material";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import CallReceivedIcon from "@mui/icons-material/CallReceived";
import { width } from "@mui/system";
import { Link } from "react-router-dom";

export default function About() {
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
      x: "70vw",
      opacity: 1,
    },
    visible: {
      x: 0,
      opacity: 1,
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
  const scrollVariants = {
    hidden: {
      // x: "100vw",
      opacity: 0,
    },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        type: "tween",
      },
    },
    exit: { x: "250vh", transition: { duration: 2, type: "tween" } },
  };
  const textVariants = {
    hidden: {
      // initial={{ opacity: 0, y: 200 }}
      //             transition={{  duration: 1 }}
      opacity: 0,
      y: 100,
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 2 },
    },
    exit: {
      y: 50,
      transition: { duration: 1 },
      // opacity: 0,
    },
  };
  const [isHovering, setisHovering] = useState(false);
  return (
    <>
      <Box
        component={motion.div}
        // variants={scrollVariants}
        // initial="hidden"
        // animate="visible"
        // whileInView="visible"
        // viewport={{ once: false, amount: 0.7 }}
        //   exit="exit"
        // transition={{
        //   x: { type: "spring", stiffness: 100, damping: 30 },
        //   opacity: { duration: 0.2 },
        // }}
      >
        <Box
          //   variants={scrollVariants}
          component={motion.div}
          className="bg-[#140f23] md:py-10 md:px-0 md:pr-10 py-14 px-6 flex flex-col"
          variant={textVariants}
          initial="hidden"
          whileInView="visible"
          exit="exit"
          // viewport={{ once: false, amount: 0.   }}
        >
          <Box
            className="flex flex-col pb-10"
            component={motion.div}
            variants={scrollVariants}
          >
            {/* <LayoutTopBar /> */}
            <Link to="/">
              <Box className="uppercase text-white text-3xl md:pl-24 flex space-x-3  cursor-pointer">
                <Typography className="text-3xl flex flex-col">
                  <span>Sanu Singh</span>
                  <span className="text-sm text-[gold]">Web Developer</span>
                </Typography>
                <Typography className="text-[gold] text-3xl">/</Typography>{" "}
                <Typography className="text-xl flex items-center">
                  about
                </Typography>
              </Box>
            </Link>

            <Box
              className="bg-[#211c30] w-[100%] md:h-[640px] h-[630px]"
              component={motion.div}
              variants={textVariants}
              initial="hidden"
              whileInView="visible"
              exit="exit"
            >
              <Grid
                container
                sx={{
                  display: { md: "flex", xs: "block" },
                  flexDirection: "row-reverse",
                  position: { xs: "inherit", md: "absolute" },
                }}
              >
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
                      className="md:px-[30%]"
                      sx={{
                        // width: { md: "100%", xs: "100%" },
                        filter: { xs: "blur(3px)", md: "blur(0px)" },
                        // height: "100%",
                      }}
                  />
                  </Box>
                </Grid>
                <Grid item md={5} sx={{ position: "initial" }}>
                  <Box
                    component={motion.div}
                    initial={{ opacity: 0, y: 200 }}
                    transition={{ delay: 1, duration: 1 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="mr-[9%] absolute md:block space-y-2 mt-5 md:mt-0 md:pl-24 md:p-24"
                    style={{ top: "0", color: "white" }}
                  >
                    <Typography className="text-5xl md:py-10 md:pt-0 pt-[97px]">
                      Hello Strangers
                    </Typography>
                    <Box className="space-x-2 space-y-4 md:pt-[10%] pt-[75%] md:p-[2%] md:w-max">
                      <Typography className="text-4xl">
                        I'M <span style={{ color: "gold" }}>SANU SINGH</span>
                      </Typography>
                      <Typography className="flex flex-col md:flex-row text-2xl md:space-x-16">
                        <span>&#8226; Enquiring Mind </span>{" "}
                        <span>&#8226; Meticulous </span>
                        <span>&#8226; Self-Possessed</span>
                      </Typography>
                      <Linesvg col="gold" x1="300" y1="0" x2="300" y2="350" />
                    </Box>
                  </Box>
                </Grid>
              </Grid>
            </Box>
          </Box>

          <Box
            component={motion.div}
            // className="md:h-[640px] h-[920px]"
            variants={scrollVariants}
            // className="pb-10"
          >
            <Box
              variants={textVariants}
              initial="hidden"
              whileInView="visible"
              exit="exit"
              viewport={{ once: true, amount: 0.5 }}
              // animate="visible"
              className="w-[100%] md:h-[640px] h-[265px]"
              component={motion.div}
            >
              <Typography className="uppercase text-[gold] px-4 pt-24 text-2xl md:px-48 md:pt-48 md:text-7xl ">
                {" "}
                I'm a Web Developer from west Bengal, India.
              </Typography>
              <Linesvg col="white" x1="350" y1="0" x2="350" y2="90" />
            </Box>
          </Box>

          <Box component={motion.div} variants={scrollVariants}>
            <Box
              variants={textVariants}
              initial="hidden"
              whileInView="visible"
              className="w-[100%] md:h-[640px]"
              component={motion.div}
            >
              <Grid container>
                <Grid item md={5}>
                  <Box>
                    <Box
                      component="img"
                      src="https://i0.wp.com/tyburskidesigns.com/wp-content/uploads/2020/10/pexels-freestocksorg-1266821.jpg?resize=2048%2C1365&ssl=1"
                    />
                  </Box>
                </Grid>
                <Grid item md={6}>
                  <Box className="py-5 md:px-24">
                    {" "}
                    <Typography className="text-[white] font-bold text-2xl">
                      I specialize in designing captivating and engaging
                      experiences.
                    </Typography>
                    <Typography className="text-white py-24">
                      I possess a competitive spirit when it comes to my design
                      work garnering numerous awards and recognition including,
                      most recently,{" "}
                      <span className="text-[gold] hover:text-black hover:bg-[gold] cursor-pointer">
                        editor’s pick for portfolio design on Bestfolios.com.
                      </span>
                      <br />
                      <br />
                      Prior to my current position as a senior web designer for
                      Compulse, I’ve applied my skillset at micro-enterprises to
                      Fortune 1000s shipping designs in various mediums on both
                      a national and international scale.
                      <br />
                      <br /> In addition, I find joy exploring beyond the
                      expectations of a designer through topics such as{" "}
                      <span className="text-[gold] hover:text-black hover:bg-[gold] cursor-pointer">
                        front-end development,
                      </span>{" "}
                      the business of design, leadership, and search engine
                      optimization.
                      <span className="text-[gold] uppercase py-10 hover:underline underline-offset-4 cursor-pointer">
                        Review My RĒsumÉ
                      </span>
                    </Typography>
                  </Box>
                </Grid>
              </Grid>
              {/* <Linesvg col="white" /> */}
            </Box>
          </Box>

          <Box
            component={motion.div}
            variants={scrollVariants}
            className="lg:pt-24"
          >
            <Box
              variants={textVariants}
              initial="hidden"
              whileInView="visible"
              // className="w-[100%] md:h-[640px] h-[920px]"
              component={motion.div}
            >
              <Grid container>
                <Grid item md={5}>
                  <Box className="uppercase md:pl-56">
                    <Typography className="text-[gold] md:text-5xl text-4xl pb-16 font-serif">
                      Endeavours and Motivation
                    </Typography>
                    <Box className="space-y-3 pb-10">
                      <Typography className="text-white text-3xl font-mono">
                        APPLY THE 80/20 RULE
                      </Typography>
                      <Typography className=" normal-case text-white">
                        Focus at least 20% of my time towards new initiatives.
                      </Typography>
                    </Box>
                    <Box className="space-y-3 pb-10">
                      <Typography className="text-white text-3xl font-mono">
                        SEEK DISCOMFORT
                      </Typography>
                      <Typography className=" normal-case text-white">
                        Thrive in sought-after challenges that stretch outside
                        my expertise.
                      </Typography>
                    </Box>
                    <Box className="space-y-3 pb-10">
                      <Typography className="text-white text-3xl font-mono">
                        EMBODY THOUGHT LEADERSHIP
                      </Typography>
                      <Typography className=" normal-case text-white">
                        Present myself as a resource and understand the
                        heuristics of my peers to maximize their ability to
                        learn.
                      </Typography>
                    </Box>
                    <Box className="space-y-3 pb-10">
                      <Typography className="text-white text-3xl font-mono">
                        DIG DEEPER
                      </Typography>
                      <Typography className=" normal-case text-white">
                        Look beyond what’s at face value. Ask intriguing
                        questions and challenge assumptions.
                      </Typography>
                    </Box>
                  </Box>
                </Grid>
                <Grid item md={6}>
                  {/* <Box className="py-5 px-24">
                    {" "}
                    <Typography className="text-[white] font-bold text-2xl">
                      I specialize in designing captivating and engaging
                      experiences.
                    </Typography>
                    <Typography className="text-white py-24">
                      I possess a competitive spirit when it comes to my design
                      work garnering numerous awards and recognition including,
                      most recently,{" "}
                      <span className="text-[gold] hover:text-black hover:bg-[gold] cursor-pointer">
                        editor’s pick for portfolio design on Bestfolios.com.
                      </span>
                      <br />
                      <br />
                      Prior to my current position as a senior web designer for
                      Compulse, I’ve applied my skillset at micro-enterprises to
                      Fortune 1000s shipping designs in various mediums on both
                      a national and international scale.
                      <br />
                      <br /> In addition, I find joy exploring beyond the
                      expectations of a designer through topics such as{" "}
                      <span className="text-[gold] hover:text-black hover:bg-[gold] cursor-pointer">
                        front-end development,
                      </span>{" "}
                      the business of design, leadership, and search engine
                      optimization.
                      <span className="text-[gold] uppercase py-10 hover:underline underline-offset-4 cursor-pointer">
                        Review My RĒsumÉ
                      </span>
                    </Typography>
                  </Box> */}
                  <Box className="py-64 md:pl-44">
                    <Typography className="text-[gold] text-3xl font-serif  ">
                      "If you are willing to do more than you are paid to do,
                      eventually you will be paid to do more than you do."
                      <br />
                      <div className="flex justify-end text-white">
                        ~ Anonymous
                      </div>
                    </Typography>
                  </Box>
                </Grid>
              </Grid>
              {/* <Linesvg col="white" /> */}
            </Box>
          </Box>

          <Box component={motion.div} variants={scrollVariants}>
            <Box
              variants={textVariants}
              initial="hidden"
              whileInView="visible"
              // className="w-[100%] md:h-[640px] h-[920px]"
              component={motion.div}
              className="md:px-44 md:pt-20 h-[40rem]"
            >
              <Link to="/contact">
                <Box
                  className="bg-[#211c30] h-80 md:p-24 p-10 md:flex md:space-x-56 cursor-pointer"
                  component={motion.div}
                  whileHover={{ scale: 1.1 }}
                  onMouseEnter={() => {
                    setisHovering(true);
                  }}
                  onMouseLeave={() => {
                    setisHovering(false);
                  }}
                >
                  <Box>
                    <Typography className="text-white">
                      Want to say Hello? I'd love to hear from you.
                    </Typography>
                    <Typography className="text-[gold] md:text-7xl text-4xl pt-10 uppercase font-mono font-thin">
                      let's connect
                    </Typography>
                  </Box>
                  <Box>
                    {!isHovering ? (
                      <ArrowOutwardIcon
                        fontSize="large"
                        sx={{ color: "gold" }}
                      />
                    ) : (
                      <CallReceivedIcon
                        fontSize="large"
                        sx={{ color: "gold" }}
                      />
                    )}
                  </Box>
                </Box>
              </Link>
              {/* <Linesvg col="white" /> */}
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
}
