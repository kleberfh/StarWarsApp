import React from 'react';
import { motion } from 'framer-motion';
import { useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import DetailCard from './DetailCard';
import Header from '../../Global/Header';

const Details = () => {
  const character = useSelector((state) => state.selectedCharacter);

  if (!character || (character && character.name === '')) {
    return (
      <Redirect to="/" />
    );
  }

  return (
    <motion.div
      exit={{ opacity: 0 }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="w-full px-8 mb-10"
    >
      <Header />
      <DetailCard character={character} />
    </motion.div>
  );
};

export default Details;
