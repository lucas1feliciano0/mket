import {createActions, createReducer} from 'reduxsauce';

type INITIAL_STATE_PROPS = {
  showIntroduction: boolean;
};

// Types & Creators

export const {Types, Creators} = createActions(
  {
    changeShowIntroduction: [],
  },
  {prefix: '@user/'},
);

// Reducer

const INITIAL_STATE: INITIAL_STATE_PROPS = {
  showIntroduction: true,
};

// Handlers

export const changeShowIntroduction = (state = INITIAL_STATE) => {
  return {...state, showIntroduction: false};
};

export const HANDLERS = {
  [Types.CHANGE_SHOW_INTRODUCTION]: changeShowIntroduction,
};

export default createReducer(INITIAL_STATE, HANDLERS);
