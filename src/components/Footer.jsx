import { Box, Tooltip, Typography } from "@mui/material";
import React from "react";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <>
      <Box className="bg-[#140f23] md:h-24 h-32 md:px-32 flex flex-col md:flex-row items-center justify-between">
        <Box>
          <Typography className="text-white">
            © 2023. <span className="text-[gold]">All Rights Reserved</span>
          </Typography>
        </Box>
        <Box className="flex space-x-3">
          <Box
            component={motion.div}
            whileHover={{ scale: 1.4 }}
            className="cursor-pointer"
          >
            <Link
              to="https://www.linkedin.com/in/this-is-sanu-singh/"
              target="_blank"
            >
              <Tooltip title="Linkedin">
                <LinkedInIcon sx={{ color: "gold" }} />
              </Tooltip>
            </Link>
          </Box>
          <Box
            component={motion.div}
            whileHover={{ scale: 1.4 }}
            className="cursor-pointer"
          >
            <Link to="https://github.com/MrUnknown58" target="_blank">
              <Tooltip title="Github">
                <GitHubIcon sx={{ color: "gold" }} />
              </Tooltip>
            </Link>
          </Box>
          <Box
            component={motion.div}
            whileHover={{ scale: 1.4 }}
            className="cursor-pointer"
          >
            <Link to="/">
              <Tooltip title="Instagram">
                <InstagramIcon sx={{ color: "gold" }} />
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
              <Tooltip title="Twitter">
                <TwitterIcon sx={{ color: "gold" }} />
              </Tooltip>
            </Link>
          </Box>
        </Box>
        <Box className="text-white">
          Designed with <span className="text-[gold] text-xl px-2">♥</span> and{" "}
          <span className="text-[gold] text-xl px-2">♫</span>
        </Box>
      </Box>
    </>
  );
}
