import { motion } from "framer-motion";
import React from "react";

const App = () => {
  return (
    <div>
      <motion.div
        animate={{
          x: 100,
          y: 100,
          scale: 2,
          rotate: 360,
          borderRadius: "50%",
        }}
        transition={{
          duration: 2,
          delay: 1,
          ease: "easeInOut",
          repeat: Infinity,
          repeatType: "reverse",
          repeatDelay: 1,
        }}
        drag
        dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
        dragDirectionLock = 'true'

        whileHover={{
          backgroundColor: "red",
        }}
        whileTap={{
          scale: 0.9,
        }}
        id="box"
      ></motion.div>
    </div>
  );
};

export default App;
