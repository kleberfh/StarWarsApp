import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { map } from 'lodash';
import { useDispatch } from 'react-redux';
import Characters from '../Characters';
import { Creators as CharactersActions } from '../../Store/Ducks/characters';
import StarLoader from '../../Global/StarLoader';
import Header from '../../Global/Header';
import { getFavoritesCharacter } from '../../Services/database';

const Favorites = () => {
  const dispatch = useDispatch();

  const [loading, setLoading] = useState(true);

  const arrayParser = (data) => JSON.parse(data.replaceAll("'", '"'));

  const fixArrays = (response) => map(response.data, (character) => {
    const fixedCharacters = character;
    fixedCharacters.birth_year = character.birthYear;
    fixedCharacters.eye_color = character.eyeColor;
    fixedCharacters.skin_color = character.skinColor;
    fixedCharacters.hair_color = character.hairColor;
    fixedCharacters.films = arrayParser(character.films);
    fixedCharacters.species = arrayParser(character.species);
    fixedCharacters.vehicles = arrayParser(character.vehicles);
    fixedCharacters.starships = arrayParser(character.starships);
    return fixedCharacters;
  });

  useEffect(() => {
    if (loading) {
      getFavoritesCharacter()
        .then((response) => {
          dispatch(CharactersActions.insertCharacter({
            results: fixArrays(response),
            favorites: true,
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
          className="flex flex-col w-full h-screen px-8"
        >
          <Header />
          <Characters />
        </motion.div>
      )}
    </>
  );
};

export default Favorites;
