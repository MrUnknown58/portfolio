import {
  AppBar,
  Button,
  Grid,
  IconButton,
  Toolbar,
  Tooltip,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import { motion } from "framer-motion";
import React, { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import { Link, useLocation, useNavigate } from "react-router-dom";

import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";

export default function MenuPage(props) {
  const navigate = useNavigate();
  const location = useLocation();
  const HamburgerVariants = {
    hidden: {
      //   x: "-300vh",
    },
    visible: {
      x: 0,
      transition: { duration: 1, type: "tween" },
    },
  };
  const testVariants = {
    hidden: {
      opacity: 0,
      x: "-250vh",
    },
    visible: {
      opacity: 1,
      x: 0,
      // transition: { delay: 1, duration: 1, type: "tween" },
    },
    exit: {
      x: "-100vh",
      // transition: { ease: "easeInOut", duration: 0.5, type: "tween" },
    },
  };
  const ContainerVariants = {
    hidden: {
      x: "-250vw",
      opacity: 1,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        delay: 1,
        duration: 2,
        type: "tween",
      },
    },
    exit: { x: "-250vw", transition: { duration: 2, type: "tween" } },
  };
  const projectlist = [
    {
      name: "All Kites",
      isSelected: true,
    },
    {
      name: "Rent Me",
      isSelected: true,
    },
    {
      name: "EDUFA",
      isSelected: true,
    },
    {
      name: "Text Manager",
      isSelected: true,
    },
  ];
  // const [isHovering, setisHovering] = useState(false);

  return (
    // <div>Test</div>
    <>
      {/* <Box component={motion.div} className="block"
      variants={testVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      width="100%"
      height="610px"
      >
        <Button
          variant="contained"
          className="bg-green-800"
          color="success"
          onClick={() => {
            navigate("/");
          }}
        >
          Success
        </Button>
      </Box> */}
      <Box
        component={motion.div}
        variants={ContainerVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
        transition={{
          opacity: { duration: 0.2 },
        }}
        className="flex"
      >
        <Box className="bg-[#140f23] w-[100%]">
          <Box
            component={motion.div}
            // className="block bg-[rgb(20,15,35)]"
            className="block bg-[#e3d064] pl-24"
            variants={ContainerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            width="100%"
            height="717px"
          >
            <Link to="/">
              <Box className="uppercase text-black text-3xl flex space-x-3 cursor-pointer py-10">
                <Typography className="text-3xl flex flex-col font-semibold font-mono">
                  <span>Sanu Singh</span>
                  <span className="text-sm">Web Developer</span>
                </Typography>
                {/* <Typography className="text-[gold] text-3xl">/</Typography>{" "}
            <Typography className="text-xl flex items-center">
              contact
            </Typography> */}
              </Box>
            </Link>
            <Box className="flex h-[500px] space-x-10">
              <Box className="flex flex-col justify-end space-y-10">
                {/* <Box
                  component={motion.div}
                  whileHover={{ scale: 1.4 }}
                  className="cursor-pointer"
                >
                  <Tooltip title="Facebook" placement="top">
                    <FacebookIcon />
                  </Tooltip>
                </Box> */}
                <Box
                  component={motion.div}
                  whileHover={{ scale: 1.4 }}
                  className="cursor-pointer"
                >
                  <Link
                    to="https://www.linkedin.com/in/this-is-sanu-singh/"
                    target="_blank"
                  >
                    <Tooltip title="Linkedin" placement="top">
                      <LinkedInIcon />
                    </Tooltip>
                  </Link>
                </Box>
                <Box
                  component={motion.div}
                  whileHover={{ scale: 1.4 }}
                  className="cursor-pointer"
                >
                  <Tooltip title="Instagram" placement="top">
                    <InstagramIcon />
                  </Tooltip>
                </Box>
                <Box
                  component={motion.div}
                  whileHover={{ scale: 1.4 }}
                  className="cursor-pointer"
                >
                  <Link to="https://github.com/MrUnknown58" target="_blank">
                    <Tooltip title="Github" placement="top">
                      <GitHubIcon />
                    </Tooltip>
                  </Link>
                </Box>
                <Box
                  component={motion.div}
                  whileHover={{ scale: 1.4 }}
                  className="cursor-pointer"
                >
                  <Link
                    to="https://twitter.com/sanusin58?t=8CW4KomWiG8r1fYX6pZ-ZA&s=09"
                    target="_blank"
                  >
                    <Tooltip title="Twitter" placement="top">
                      <TwitterIcon />
                    </Tooltip>
                  </Link>
                </Box>
                <Box
                  component={motion.div}
                  whileHover={{ scale: 1.5 }}
                  className="flex justify-center text-2xl cursor-pointer"
                >
                  |
                </Box>
              </Box>
              <Box className="flex w-[100%]">
                {/* <Box> */}
                {/* </Box> */}
                <Box className="uppercase flex flex-col justify-end space-y-5">
                  <Box
                    component={motion.div}
                    whileHover={{ scale: 1.4, originX: 0 }}
                  >
                    <Link to="/about">
                      <Typography className="text-3xl font-mono">
                        About
                      </Typography>
                    </Link>
                  </Box>
                  <Box
                    component={motion.div}
                    whileHover={{ scale: 1.4, originX: 0 }}
                  >
                    <Link to="/contact">
                      <Typography className="text-3xl font-mono">
                        Contact
                      </Typography>
                    </Link>
                  </Box>
                  <Box
                    component={motion.div}
                    whileHover={{ scale: 1.4, originX: 0 }}
                  >
                    <Link to="/">
                      <Typography className="text-3xl font-mono">
                        Resume
                      </Typography>
                    </Link>
                  </Box>
                </Box>
                <Typography className="uppercase text-3xl cursor-pointer font-mono">
                  Projects /
                </Typography>
                <Box
                  className={`flex flex-col space-y-10 pl-44 w-[70%]`}
                  component={motion.div}
                >
                  {/* <Typography className="text-8xl text-gray-200 hover:text-black cursor-pointer underline-offset-2 hover:underline">All Kites</Typography>
                  <Typography className="text-8xl text-black hover:text-white cursor-pointer underline-offset-2 hover:underline">Rent Me</Typography>
                  <Typography className="text-8xl text-black hover:text-white cursor-pointer underline-offset-2 hover:underline">TextManager</Typography>
                  <Typography className="text-8xl text-black hover:text-white cursor-pointer underline-offset-2 hover:underline">EDUFA</Typography> */}
                  {projectlist.map((item, index) => {
                    return (
                      <>
                        <Link to={`/projects/${index}`}>
                          <Box
                            component={motion.div}
                            whileHover={{ scale: 1.4, originX: 0, opacity: 1 }}
                            onMouseEnter={() => {
                              projectlist.map((i, index) => {
                                i.isSelected = false;
                                return i;
                              });
                              item.isSelected = true;
                            }}
                            className={`text-7xl hover:text-black cursor-pointer opacity-50 w-fit font-mono`}
                          >
                            {item.name}
                          </Box>
                        </Link>
                      </>
                    );
                  })}
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
}
