import {createActions, createReducer} from 'reduxsauce';

import {List} from 'screens/Home';

type INITIAL_STATE_PROPS = {
  lists: List[];
};

// Types & Creators

export const {Types, Creators} = createActions(
  {
    createList: ['id', 'created_at', 'products', 'deleted'],
  },
  {prefix: '@lists/'},
);

// Reducer

const INITIAL_STATE: INITIAL_STATE_PROPS = {
  lists: [],
};

// Handlers

export const createList = (state = INITIAL_STATE, action: any) => {
  const newList: List = {
    id: action.payload.id,
    created_at: action.payload.created_at,
    products: action.payload.products,
    deleted: action.payload.deleted,
  };

  return {...state, loading: true, lists: [...state.lists, newList]};
};

export const HANDLERS = {
  [Types.CREATE_LIST]: createList,
};

export default createReducer(INITIAL_STATE, HANDLERS);
