import {
  combineReducers,
  applyMiddleware,
} from 'redux';
import {
  configureStore,
} from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import storage from 'redux-persist/lib/storage';
import { persistStore, persistReducer } from 'redux-persist';

import characters, { INITIAL_STATE as INITIAL_CHARACTERS_STATE } from './Ducks/characters';
import selectedCharacter, { INITIAL_STATE as INITIAL_SELECTED_CHARACTERS_STATE } from './Ducks/selecterCharacters';

const root = combineReducers({
  characters,
  selectedCharacter,
});

const persistConfig = {
  storage,
  key: 'root',
  timeout: 3600,
  blacklist: ['characters', 'selectedCharacter'],
};

const initialState = {
  characters: INITIAL_CHARACTERS_STATE,
  selectedCharacter: INITIAL_SELECTED_CHARACTERS_STATE,
};

const persistedReducer = persistReducer(persistConfig, root);

const store = configureStore({
  reducer: persistedReducer,
  preloadedState: initialState,
  middleware: applyMiddleware(thunk),
});

export const persist = persistStore(store);

export default store;
