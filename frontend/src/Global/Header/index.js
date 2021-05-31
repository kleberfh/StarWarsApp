import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../Assets/Icons/logo';

const Header = () => (
  <div className="flex flex-col lg:flex-row justify-around py-2">
    <div className="flex place-content-center w-full lg:w-1/3">
      <Logo />
    </div>
    <div className="w-2/3" />
    <div className="lg:w-2/3 self-center text-right space-x-4 self-center">
      <Link
        to="/"
        type="button"
        className="px-6 py-2 rounded-full text-2xl bg-yellow-300 text-black hover:bg-yellow-400"
      >
        Search
      </Link>
      <Link
        to="/favorites"
        className="px-6 py-2 rounded-full text-2xl bg-yellow-300 text-black hover:bg-yellow-400"
      >
        Favorites
      </Link>
    </div>
  </div>
);

export default Header;
