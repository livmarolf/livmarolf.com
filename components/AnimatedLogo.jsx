import React from "react";
import { motion } from "framer-motion";

const AnimatedLogo = ({ svgText, ...props }) => {
  return (
    <motion.span dangerouslySetInnerHTML={{ __html: svgText }} {...props} />
  );
};

export { AnimatedLogo };
