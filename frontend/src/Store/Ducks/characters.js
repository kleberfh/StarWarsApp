import { createActions, createReducer } from 'reduxsauce';

export const INITIAL_STATE = {
  results: [],
};

export const { Types, Creators } = createActions({
  removeCharacter: [''],
  insertCharacter: ['data'],
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
  [Types.INSERT_CHARACTER]: insert,
  [Types.REMOVE_CHARACTER]: remove,
});
