import React from 'react';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';

const StarCollection = ({ rotate = 0, delay = 0 }) => (
  <motion.div
    initial={{ rotate }}
  >
    <motion.span
      animate={{ scale: 0, y: 0 }}
      initial={{ scale: 10, y: -800 }}
      className="fixed h-px w-px bg-white rounded"
      transition={{ duration: 0.8, repeat: Infinity, delay }}
    />
    <motion.span
      animate={{ scale: 0, y: 0 }}
      initial={{ scale: 10, y: 800 }}
      className="fixed h-px w-px bg-white rounded"
      transition={{ duration: 0.8, repeat: Infinity, delay }}
    />
    <motion.span
      animate={{ scale: 0, x: 0 }}
      initial={{ scale: 10, x: -800 }}
      className="fixed h-px w-px bg-white rounded"
      transition={{ duration: 0.8, repeat: Infinity, delay }}
    />
    <motion.span
      animate={{ scale: 0, x: 0 }}
      initial={{ scale: 10, x: 800 }}
      className="fixed h-px w-px bg-white rounded"
      transition={{ duration: 0.8, repeat: Infinity, delay }}
    />
  </motion.div>
);

StarCollection.defaultProps = {
  delay: 0,
  rotate: 0,
};

StarCollection.propTypes = {
  delay: PropTypes.number,
  rotate: PropTypes.number,
};

export default StarCollection;
