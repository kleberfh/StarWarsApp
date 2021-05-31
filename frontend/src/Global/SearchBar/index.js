import React, { useState, useCallback } from 'react';
import { debounce } from 'lodash';
import { useDispatch } from 'react-redux';
import { getAllCharacters, searchCharacter } from '../../Services/swapi';
import { Creators as CharactersActions } from '../../Store/Ducks/characters';

const SearchBar = () => {
  const dispatch = useDispatch();

  const [query, setQuery] = useState('');
  const [search, setSearch] = useState(false);

  const queryCharacters = (value) => {
    searchCharacter(value)
      .then((response) => {
        setSearch(true);
        dispatch(CharactersActions.insertCharacter(response.data));
      });
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const debouncedQuery = useCallback(debounce((nextValue) => queryCharacters(nextValue), 1000), []);

  const handleQueryChange = (e) => {
    const { value: nextValue } = e.target;
    setQuery(e.target.value);
    debouncedQuery(nextValue);
  };

  const handleClearSearch = () => {
    setQuery('');
    getAllCharacters()
      .then((response) => {
        setSearch(false);
        dispatch(CharactersActions.insertCharacter(response.data));
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    queryCharacters(query);
  };

  return (
    <div className="relative text-gray-600 mt-4 text-center">
      <form onSubmit={handleSubmit}>
        <input
          type="search"
          name="search"
          value={query}
          onChange={handleQueryChange}
          placeholder="Enter a character name to get started"
          className="bg-white w-full h-10 px-5 pr-10 rounded-full text-base focus:outline-none"
        />
        <button type="submit" className="absolute -ml-8 mt-3">
          <svg
            className="h-4 w-4 fill-current"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            version="1.1"
            id="Capa_1"
            x="0px"
            y="0px"
            viewBox="0 0 56.966 56.966"
            style={{
              enableBackground: 'new 0 0 56.966 56.966',
            }}
            xmlSpace="preserve"
            width="512px"
            height="512px"
          >
            <path
              d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z"
            />
          </svg>
        </button>
      </form>
      {search && (
        <button
          type="button"
          onClick={handleClearSearch}
          className="bg-gray-300 mt-2 text-black text-base p-1 rounded-lg"
        >
          Clear search
        </button>
      )}
    </div>
  );
};

export default SearchBar;
