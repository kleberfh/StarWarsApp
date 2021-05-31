import React, { useState } from 'react';
import { filter } from 'lodash';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { AiFillHeart } from 'react-icons/ai';
import { removeFavoriteCharacter } from '../../../Services/database';
import { Creators as Characters } from '../../../Store/Ducks/characters';
import { Creators as Selected } from '../../../Store/Ducks/selecterCharacters';
import { showSuccess } from '../../../Global/RequestResponseHandler';

const CharacterCard = ({ character, isFavorite }) => {
  const dispatch = useDispatch();

  const characterApiId = character.url.split('/')[5];

  const characters = useSelector((state) => state.characters.results);

  const [removing, setRemoving] = useState(false);

  const handleCharacterSelect = (data) => {
    dispatch(Selected.insertSelectedCharacter(data));
  };

  const handleRemoveFavorite = () => {
    if (!removing) {
      setRemoving(true);
      removeFavoriteCharacter(character.id)
        .then(() => {
          showSuccess(`Removed ${character.name} successfully`);
          setRemoving(false);
          dispatch(Characters.insertCharacter({
            results: filter(characters, (o) => o.id !== character.id),
          }));
        })
        .catch(() => {
          setRemoving(false);
        });
    }
  };

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={removing ? { opacity: 0.6 } : {}}
      transition={removing ? { duration: 0.8, repeat: Infinity } : {}}
      className="flex flex-col w-52 p-4 bg-gray-300 mb-8 mx-4 rounded-3xl"
    >
      <div
        className="h-40 rounded-xl bg-contain bg-no-repeat bg-center lg:bg-cover lg:bg-top"
        style={{
          backgroundImage: `url(${process.env.REACT_APP_IMAGE_API_URL}/${characterApiId}.jpg)`,
        }}
      />
      <p className="my-4 text-center text-xl">
        {character.name}
      </p>
      <p className="text-lg text-center">
        Height:
        {' '}
        {character.height}
        {' '}
        cm
      </p>
      <p className="text-lg text-center">
        Weight:
        {' '}
        {character.mass}
        {' '}
        kg
      </p>
      <p className="text-lg text-center">
        Gender:
        {' '}
        {character.gender}
      </p>
      <div className="flex flex-row items-center justify-around">
        <Link
          to="/details"
          onClick={() => handleCharacterSelect({
            ...character,
            image: `${process.env.REACT_APP_IMAGE_API_URL}/${characterApiId}.jpg`,
          })}
          className="mt-2 text-center py-1 px-4 bg-yellow-400 rounded-md"
        >
          More details
        </Link>
        {isFavorite && (
          <motion.button
            type="button"
            whileTap={{ scale: 0.8 }}
            title="Remove from favorites"
            className="focus:outline-none"
            onClick={() => handleRemoveFavorite()}
          >
            <AiFillHeart size={28} color="#ED4956" />
          </motion.button>
        )}
      </div>
    </motion.div>
  );
};

CharacterCard.propTypes = {
  isFavorite: PropTypes.bool.isRequired,
  character: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    height: PropTypes.string,
    mass: PropTypes.string,
    hair_color: PropTypes.string,
    skin_color: PropTypes.string,
    eye_color: PropTypes.string,
    birth_year: PropTypes.string,
    gender: PropTypes.string,
    homeworld: PropTypes.string,
    films: PropTypes.arrayOf(PropTypes.string),
    species: PropTypes.arrayOf(PropTypes.string),
    vehicles: PropTypes.arrayOf(PropTypes.string),
    starships: PropTypes.arrayOf(PropTypes.string),
    created: PropTypes.string,
    edited: PropTypes.string,
    url: PropTypes.string,
  }).isRequired,
};

export default CharacterCard;
