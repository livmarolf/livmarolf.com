import React from "react";
import { motion } from "framer-motion";

const Hexagon = ({ color, className, ...props }) => {
  return (
    <motion.svg
      className={className}
      viewBox="0 0 229 265"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M114.403 0.768677L228.431 66.7603L228.431 198.743L114.403 264.734L0.373413 198.743L0.373413 66.7603L114.403 0.768677Z"
        fill={color}
      />
    </motion.svg>
  );
};

export { Hexagon };
