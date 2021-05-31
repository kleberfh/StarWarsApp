import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';
import getEpisodeImage from './getMovieImage';
import { getInfoFromUrl } from '../../Services/swapi';

const FilmCard = ({ url, orchestration }) => {
  const [movie, setMovie] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (loading) {
      getInfoFromUrl(url).then((response) => {
        setLoading(false);
        setMovie(response.data);
      });
    }
  }, [loading]);

  return (
    <motion.div
      exit={{ opacity: 0 }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: orchestration / 10 }}
      className="flex flex-col w-full text-center items-center"
    >
      <img className="h-20 md:h-40" src={getEpisodeImage(movie.episode_id)} alt={movie.title} />
      <p>
        {movie.title}
      </p>
    </motion.div>
  );
};

FilmCard.propTypes = {
  url: PropTypes.string.isRequired,
  orchestration: PropTypes.number.isRequired,
};

export default FilmCard;
