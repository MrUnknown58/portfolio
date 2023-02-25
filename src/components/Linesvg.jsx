import { Box } from "@mui/material";
import React from "react";
import { motion } from "framer-motion";

export default function Linesvg(props) {
  const draw = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: {
      // const delay = 1 + i * 0.5;
      // return {
      pathLength: 1,
      opacity: 1,
      transition: {
        pathLength: { delay: 5, type: "spring", duration: 20, bounce: 0 },
        opacity: { delay: 2, duration: 0.01 },
      },
      // };
    },
  };
  return (
    <>
      <Box className="z-50">
        <motion.svg
          // width="100%"
          // height="100%"
          viewBox="0 0 500 400"
          initial="hidden"
          animate="visible"
        >
          <motion.line
            x1={props.x1}
            y1={props.y1}
            x2={props.x2}
            y2={props.y2}
            stroke={props.col}
            variants={draw}
            // custom={2}
          />
        </motion.svg>
      </Box>
    </>
  );
}
