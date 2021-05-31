import React from 'react';
import {
  Route,
  Switch,
  BrowserRouter as Router,
} from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';

import Home from './Home';
import Details from './Details';
import Favorites from './Favorites';

import Background from '../Assets/Images/background.png';
import './App.css';

const App = () => (
  <motion.div
    key="home"
    intial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    className="h-full bg-cover bg-no-repeat overflow-auto"
    style={{
      backgroundImage: `url(${Background})`,
    }}
  >
    <Router>
      <AnimatePresence exitBeforeEnter>
        <Switch>
          <Route path="/favorites" component={Favorites} />
          <Route path="/details" component={Details} />
          <Route path="/" component={Home} />
        </Switch>
      </AnimatePresence>
    </Router>
  </motion.div>
);

export default App;
