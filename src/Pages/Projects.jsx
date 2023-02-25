import { Box, Typography } from "@mui/material";
import { motion } from "framer-motion";
import React from "react";
import { Link } from "react-router-dom";
import EastIcon from "@mui/icons-material/East";

export default function Projects() {
  const HomeVariants = {
    hidden: {
      x: "100vw",
      opacity: 0,
      // opacity: 0,
    },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        x: { delay: 2, type: "spring", stiffness: 100, damping: 30 },
        opacity: { duration: 0.2 },
      },
    },
    exit: {
      x: "250vh",
      // transition:{duration:2,ease:"easeInOut"}
      transition: {
        x: { type: "spring", stiffness: 100, damping: 30 },
        opacity: { duration: 0.2 },
      },
    },
  };
  return (
    <>
      <Box className="bg-[#140f23] w-[100%] md:h-[623px] h-[795px] md:py-10 md:px-0 md:pr-10 py-14 px-14 flex flex-col">
        <Box
          className="flex flex-col md:flex-row justify-between"
          component={motion.div}
        >
          <Link to="/">
            <Box className="uppercase text-white md:text-3xl md:pl-24 flex space-x-3 cursor-pointer">
              <Typography className="md:text-3xl flex flex-col">
                <span>Sanu Singh</span>
                <span className="text-sm text-[gold]">Web Developer</span>
              </Typography>
              <Typography className="text-[gold] md:text-3xl">/</Typography>{" "}
              <Typography className="md:text-xl flex items-center">
                Projects
              </Typography>
            </Box>
          </Link>
          <Typography
            className="text-[gold] text-2xl flex py-4 space-x-3 pl-2 cursor-pointer"
            component={motion.div}
            whileHover={{ scale: 1.1 }}
          >
            <EastIcon fontSize="large" sx={{ color: "gold" }} />
            <span>Download Resume</span>
          </Typography>
        </Box>
        <Box
          className="bg-[#211c30] w-[100%] h-[100%] md:p-32 md:px-44 p-10 pt-32 space-y-10"
          component={motion.div}
          variants={HomeVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          {/* <Typography className="text-white md:text-4xl font-mono uppercase flex justify-center">
            Let's create something together
          </Typography>
          <Typography className="bg-[gold] md:text-black  md:text-5xl flex justify-center py-16 md:uppercase">
            sanusingh.work@gmail.com
          </Typography>
          <Typography className="flex justify-center text-white md:text-4xl text-xl space-x-2">
            or call<span className="text-[gold] pl-4">90513 XXXXX</span>
          </Typography> */}
          <Typography className="text-white md:text-4xl font-mono uppercase flex justify-center">
            This page is under Construction
          </Typography>
        </Box>
      </Box>
    </>
  );
}
