import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

import { useDispatch } from 'react-redux';
import SearchBar from '../../Global/SearchBar';
import Characters from '../Characters';
import { getAllCharacters } from '../../Services/swapi';
import { Creators as CharactersActions } from '../../Store/Ducks/characters';
import StarLoader from '../../Global/StarLoader';
import Header from '../../Global/Header';

const Home = () => {
  const dispatch = useDispatch();

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (loading) {
      getAllCharacters()
        .then((response) => {
          dispatch(CharactersActions.insertCharacter({
            ...response.data,
            favorites: false,
          }));
          setLoading(false);
        })
        .catch(() => {
          setLoading(false);
        });
    }
  }, [loading]);

  return (
    <>
      {loading && (
        <StarLoader />
      )}
      {!loading && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="flex flex-col w-full px-8 h-screen"
        >
          <Header />
          <SearchBar />
          <Characters />
        </motion.div>
      )}
    </>
  );
};

export default Home;
