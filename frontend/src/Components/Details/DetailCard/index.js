import React, { useState, useEffect } from 'react';
import {
  AiFillHeart,
  AiOutlineHeart,
} from 'react-icons/ai';
import { isEmpty, join } from 'lodash';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';
import { useHistory } from 'react-router-dom';
import { BiChevronLeft } from 'react-icons/bi';
import { getInfoFromUrl } from '../../../Services/swapi';
import FilmCard from '../../../Global/FilmCard';
import { findFavoriteCharacter, removeFavoriteCharacter, setFavoriteCharacter } from '../../../Services/database';
import { showSuccess } from '../../../Global/RequestResponseHandler';

const DetailCard = ({ character }) => {
  const history = useHistory();

  const [status, setStatus] = useState('Verifing');
  const [specie, setSpecie] = useState('');
  const [saved, setSaved] = useState(false);
  const [verify, setVerify] = useState(true);
  const [savedId, setSavedId] = useState(null);
  const [homeworld, setHomeworld] = useState({});

  const stringfyArray = (data) => {
    const response = [];
    data.map((item) => {
      response.push(`'${item}'`);
      return item;
    });
    return response.length === 0 ? JSON.stringify([]) : `[${join(response, ',')}]`;
  };

  const handleSave = () => {
    if (!verify) {
      if (!saved) {
        setStatus('Saving');
        setFavoriteCharacter({
          name: character.name,
          height: character.height,
          mass: character.mass,
          hair_color: character.hair_color,
          skin_color: character.skin_color,
          eye_color: character.eye_color,
          birth_year: character.birth_year,
          gender: character.gender,
          homeworld: character.homeworld,
          created: character.created,
          edited: character.edited,
          url: character.url,
          image: character.image,
          films: stringfyArray(character.films),
          species: stringfyArray(character.species),
          vehicles: stringfyArray(character.vehicles),
          starships: stringfyArray(character.starships),
        })
          .then(() => {
            showSuccess(`${character.name} is now one of your favorites.`);
            setStatus('Saved');
            setSaved(true);
          });
      } else {
        setStatus('Removing');
        removeFavoriteCharacter(savedId)
          .then(() => {
            showSuccess(`Removed ${character.name} successfully`);
            setStatus('Save');
            setSaved(false);
          });
      }
    }
  };

  useEffect(() => {
    if (verify) {
      findFavoriteCharacter(character.name)
        .then((response) => {
          setSavedId(response.data.id);
          setStatus('Saved');
          setVerify(false);
          setSaved(true);
        })
        .catch(() => {
          setVerify(false);
          setStatus('Save');
        });
    }
  }, [verify]);

  useEffect(() => {
    if (specie === '') {
      if (character.species.length >= 1) {
        getInfoFromUrl(character.species[0])
          .then((response) => setSpecie(response.data.name));
      } else {
        setSpecie('Human');
      }
    }
  }, [specie]);

  useEffect(() => {
    if (isEmpty(homeworld)) {
      getInfoFromUrl(character.homeworld)
        .then((response) => {
          setHomeworld(response.data);
        });
    }
  }, [homeworld]);

  return (
    <div className="">
      <motion.div className="hidden md:flex flex-row bg-gray-300 p-6 rounded-lg" layout>
        <div className="w-2/6 self-center">
          <motion.img
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            src={character.image}
            className="rounded-lg"
            alt="character"
          />
        </div>
        <div className="flex flex-col w-4/6 pl-10 divide-y-2 divide-gray-400">
          <div className="mb-4">
            <div className="flex flex-row px-2">
              <div className="w-5/6 text-3xl">
                {character.name}
              </div>
              <button
                type="button"
                className="w-1/6 text-lg flex flex-row justify-end focus:outline-none"
                onClick={() => history.goBack()}
              >
                <BiChevronLeft size={28} />
                Back
              </button>
              <motion.button
                type="button"
                onClick={handleSave}
                whileTap={{ scale: 0.8 }}
                className="w-1/6 text-lg flex flex-row justify-end focus:outline-none"
              >
                <p className="mx-2">
                  {/* eslint-disable-next-line no-nested-ternary */}
                  {status}
                </p>
                {saved && (
                  (
                    <motion.div
                      exit={{ opacity: 0 }}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                    >
                      <AiFillHeart size={28} color="#ED4956" />
                    </motion.div>
                  )
                )}
                {!saved && (
                  <motion.div
                    exit={{ opacity: 0 }}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                  >
                    <AiOutlineHeart size={28} />
                  </motion.div>
                )}
              </motion.button>
            </div>
          </div>
          <div className="h-3/6">
            <p className="text-center text-xl">
              Informations
            </p>
            <div className="flex flex-col p-2 space-y-1">
              <div className="text-lg capitalize">
                Gender:
                {' '}
                {character.gender}
              </div>
              <div className="text-lg">
                Height:
                {' '}
                {character.height}
                {' '}
                Cm
              </div>
              <div className="text-lg">
                Weight:
                {' '}
                {character.mass}
                {' '}
                Kg
              </div>
              <div className="text-lg">
                Specie:
                {' '}
                {character.species.length === 0 ? 'Human' : specie}
              </div>
              <div className="text-lg">
                Birth year:
                {' '}
                {character.birth_year}
              </div>
              <div className="text-lg">
                Homeworld:
                {' '}
                {homeworld && homeworld.name}
              </div>
            </div>
          </div>
          <div className="">
            <p className="text-center text-xl mt-2">
              Movies
            </p>
            <div className="flex flex-row">
              {character.films.map((film, key) => (
                <FilmCard orchestration={key} url={film} key={key.toString()} />
              ))}
            </div>
          </div>
        </div>
      </motion.div>
      <motion.div className="flex md:hidden mt-8 flex-col bg-gray-300 p-4 rounded-lg" layout>
        <div className="flex flex-row mt-1 mb-4 justify-between">
          <button
            type="button"
            className="text-lg flex flex-row focus:outline-none"
            onClick={() => history.goBack()}
          >
            <BiChevronLeft size={28} />
            Back
          </button>
          <motion.button
            type="button"
            onClick={handleSave}
            whileTap={{ scale: 0.8 }}
            className="text-lg flex flex-row focus:outline-none"
          >
            <p className="mx-2">
              {/* eslint-disable-next-line no-nested-ternary */}
              {status}
            </p>
            {saved && (
              (
                <motion.div
                  exit={{ opacity: 0 }}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                >
                  <AiFillHeart size={28} color="#ED4956" />
                </motion.div>
              )
            )}
            {!saved && (
              <motion.div
                exit={{ opacity: 0 }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                <AiOutlineHeart size={28} />
              </motion.div>
            )}
          </motion.button>
        </div>
        <div className="flex flex-row">
          <motion.img
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            src={character.image}
            className="w-3/6 rounded-lg"
            alt="character"
          />
          <div className="flex flex-col ml-4 w-full">
            <div className="w-full text-xl">
              {character.name}
            </div>
            <div className="flex flex-col">
              <div className="text-base capitalize">
                Gender:
                {' '}
                {character.gender}
              </div>
              <div className="text-base">
                Height:
                {' '}
                {character.height}
                {' '}
                Cm
              </div>
              <div className="text-base">
                Weight:
                {' '}
                {character.mass}
                {' '}
                Kg
              </div>
              <div className="text-base">
                Specie:
                {' '}
                {character.species.length === 0 ? 'Human' : specie}
              </div>
              <div className="text-base">
                Homeworld:
                {' '}
                {homeworld && homeworld.name}
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col">
          <p className="text-center text-xl mt-2">
            Movies
          </p>
          <div className="flex flex-row mt-2 md:mt-0 overflow-scrool">
            {character.films.map((film, key) => (
              <FilmCard orchestration={key} url={film} key={key.toString()} />
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

DetailCard.propTypes = {
  character: PropTypes.shape({
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
    image: PropTypes.string,
  }).isRequired,
};

export default DetailCard;
