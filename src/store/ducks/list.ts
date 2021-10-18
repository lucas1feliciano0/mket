import {createActions, createReducer} from 'reduxsauce';

import {List} from 'screens/Home';

type INITIAL_STATE_PROPS = {
  activeListDraft: List | null;
  lists: List[];
};

// Types & Creators

export const {Types, Creators} = createActions(
  {
    createListDraft: ['list'],
    editProductsListDraft: ['products'],
    discardListDraft: [],
    saveList: [],
    deleteList: ['id'],
  },
  {prefix: '@lists/'},
);

// Reducer

const INITIAL_STATE: INITIAL_STATE_PROPS = {
  activeListDraft: null,
  lists: [],
};

// Handlers

// DRAFT

export const createListDraft = (state = INITIAL_STATE, action: any) => {
  const newList = action.list;
  return {...state, activeListDraft: newList};
};

export const editProductsListDraft = (state = INITIAL_STATE, action: any) => {
  const updatedList: List = {
    ...state.activeListDraft,
    products: action.products,
  };

  return {...state, activeListDraft: updatedList};
};

export const discardListDraft = (state = INITIAL_STATE) => {
  const activeListDraft: List | null = null;
  return {...state, activeListDraft};
};

// LISTS

export const saveList = (state = INITIAL_STATE) => {
  const newList = {
    ...state.activeListDraft,
  };
  const activeListDraft: List | null = null;
  return {...state, lists: [...state.lists, newList], activeListDraft};
};

export const deleteList = (state = INITIAL_STATE, action: any) => {
  const newLists = [...state.lists];
  const index = newLists.findIndex(list => list.id === action.id);

  newLists.splice(index, 1);
  return {...state, lists: newLists};
};

export const HANDLERS = {
  [Types.CREATE_LIST_DRAFT]: createListDraft,
  [Types.EDIT_PRODUCTS_LIST_DRAFT]: editProductsListDraft,
  [Types.DISCARD_LIST_DRAFT]: discardListDraft,
  [Types.SAVE_LIST]: saveList,
  [Types.DELETE_LIST]: deleteList,
};

export default createReducer(INITIAL_STATE, HANDLERS);
