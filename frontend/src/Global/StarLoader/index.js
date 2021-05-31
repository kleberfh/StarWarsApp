import React from 'react';
import { random } from 'lodash';
import { motion } from 'framer-motion';
import StarCollection from './StarCollection';

const StarLoader = () => (
  <motion.div
    key="loader"
    exit={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    className="flex h-screen w-screen bg-black place-content-center items-center overflow-hidden"
  >
    <motion.p
      animate={{ scale: 40 }}
      transition={{ duration: 60 }}
      initial={{ scale: 1, opacity: 1 }}
      exit={{ scale: 1000, opacity: 0, transition: { duration: 1 } }}
      className="z-20 loading_text relative w-full tracking-wider font-bold text-3xl text-yellow-300 text-center self-center"
    >
      Rising the force
    </motion.p>
    <div className="fixed z-10">
      <StarCollection rotate={random(10)} />
      <StarCollection rotate={random(20, 40)} delay={0.2} />
      <StarCollection rotate={random(50, 70)} delay={0.4} />
      <StarCollection rotate={random(80, 100)} delay={0.8} />
      <StarCollection rotate={random(110, 130)} delay={1} />
      <StarCollection rotate={random(140, 160)} delay={1.2} />
      <StarCollection rotate={random(170, 200)} delay={1.4} />
      <StarCollection rotate={random(210, 230)} delay={1.8} />
      <StarCollection rotate={random(240, 260)} delay={2} />
      <StarCollection rotate={random(270, 360)} delay={2.2} />
    </div>
  </motion.div>
);

export default StarLoader;
