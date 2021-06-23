import React, { FC } from "react";
import { motion } from "framer-motion";

export const TransitionPageFade: FC = ({ children }) => {
  return (
    <motion.div initial={{ opacity: 0.2 }} animate={{ opacity: 1 }}>
      {children}
    </motion.div>
  );
};
