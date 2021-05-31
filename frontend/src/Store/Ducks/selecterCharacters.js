import { createActions, createReducer } from 'reduxsauce';

export const INITIAL_STATE = {
  name: '',
  height: '',
  mass: '',
  hair_color: '',
  skin_color: '',
  eye_color: '',
  birth_year: '',
  gender: '',
  homeworld: '',
  films: [],
  species: [],
  vehicles: [],
  starships: [],
  created: '',
  edited: '',
  url: '',
};

export const { Types, Creators } = createActions({
  removeSelectedCharacter: [''],
  insertSelectedCharacter: ['data'],
});

const insert = (state = INITIAL_STATE, action) => ({
  ...state,
  ...action.data,
});

const remove = (state = INITIAL_STATE) => ({
  ...state,
  ...INITIAL_STATE,
});

export default createReducer(INITIAL_STATE, {
  [Types.INSERT_SELECTED_CHARACTER]: insert,
  [Types.REMOVE_SELECTED_CHARACTER]: remove,
});
