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
    addProductList: ['listId', 'products'],
    deleteList: ['id'],
    editCheckListProduct: ['listId', 'productId', 'checked', 'price'],
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

export const addProductList = (state = INITIAL_STATE, action: any) => {
  const newLists = [...state.lists];
  const listIndex = newLists.findIndex(
    listToSearch => listToSearch.id === action.listId,
  );
  const list = newLists[listIndex];

  const updatedList: List = {
    ...list,
    products: action.products,
  };

  newLists.splice(listIndex, 1, updatedList);

  return {...state, lists: newLists};
};

export const editCheckListProduct = (state = INITIAL_STATE, action: any) => {
  const newLists = [...state.lists];
  const listIndex = newLists.findIndex(
    listToSearch => listToSearch.id === action.listId,
  );
  const list = newLists[listIndex];

  const productIndex = list.products.findIndex(
    product => product.id === action.productId,
  );

  const productChecked = {
    ...list.products[productIndex],
    checked: action.checked,
    price: action.price,
  };

  list.products.splice(productIndex, 1, productChecked);
  newLists.splice(listIndex, 1, list);

  return {...state, lists: newLists};
};

export const HANDLERS = {
  [Types.CREATE_LIST_DRAFT]: createListDraft,
  [Types.EDIT_PRODUCTS_LIST_DRAFT]: editProductsListDraft,
  [Types.DISCARD_LIST_DRAFT]: discardListDraft,
  [Types.SAVE_LIST]: saveList,
  [Types.ADD_PRODUCT_LIST]: addProductList, //addProductList
  [Types.DELETE_LIST]: deleteList,
  [Types.EDIT_CHECK_LIST_PRODUCT]: editCheckListProduct,
};

export default createReducer(INITIAL_STATE, HANDLERS);
