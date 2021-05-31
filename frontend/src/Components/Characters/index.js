import React from 'react';
import { map } from 'lodash';
import { useSelector } from 'react-redux';
import CharacterCard from './CharacterCard';

import Porg from '../../Assets/Images/porg.png';
import Pages from '../../Global/Pages';

const Characters = () => {
  const response = useSelector((state) => state.characters);
  const characters = useSelector((state) => state.characters.results);
  const isFavorites = useSelector((state) => state.characters.favorites);

  return (
    <div className="w-full flex flex-wrap mt-10 justify-center">
      {characters.length === 0 ? (
        <div className="flex flex-col w-full items-center -mt-10">
          <img className="w-40" src={Porg} alt="porg" />
          <p className="text-yellow-300 text-2xl -mt-8">
            No character found
          </p>
        </div>
      ) : map(characters, (character, key) => (
        <CharacterCard key={key} character={character} isFavorite={isFavorites} />
      ))}
      <Pages
        count={response.count}
        next={response.next}
        results={characters.length}
        previous={response.previous}
      />
    </div>
  );
};

export default Characters;
