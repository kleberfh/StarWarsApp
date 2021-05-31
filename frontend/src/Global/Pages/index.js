import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { getInfoFromUrl } from '../../Services/swapi';
import { Creators } from '../../Store/Ducks/characters';

const Pages = ({
  results, count, next, previous,
}) => {
  const dispatch = useDispatch();
  const [currentPage, setCurrentPage] = useState(1);

  const handlePageChange = (url) => {
    setCurrentPage(url.split('=')[1]);
    getInfoFromUrl(url)
      .then((response) => dispatch(Creators.insertCharacter(response.data)));
  };

  if (results !== 0) {
    return (
      <div className="w-full flex flex-col space-y-2 mb-8">
        <div>
          <p className="text-lg text-white text-center">
            Page
            {' '}
            {currentPage}
            {' '}
            of
            {' '}
            {count >= 10 ? Math.ceil(count / 10) : 1}
          </p>
        </div>
        <div className="flex flex-row text-lg space-x-4 self-center">
          {(previous && previous !== '') && (
            <button
              type="button"
              onClick={() => handlePageChange(previous)}
              className="bg-yellow-300 p-2 rounded-lg"
            >
              Previous page
            </button>
          )}
          {(next && next !== '') && (
            <button
              type="button"
              onClick={() => handlePageChange(next)}
              className="bg-yellow-300 p-2 rounded-lg"
            >
              Next page
            </button>
          )}
        </div>
      </div>
    );
  }

  return '';
};

Pages.defaultProps = {
  next: '',
  count: 1,
  previous: '',
};

Pages.propTypes = {
  next: PropTypes.string,
  count: PropTypes.number,
  previous: PropTypes.string,
  results: PropTypes.number.isRequired,
};

export default Pages;
