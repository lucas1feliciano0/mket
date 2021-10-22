import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {fireEvent, waitFor} from '@testing-library/react-native';

import {render} from '../Provider';

import store from '../src/store';

import Home from '../src/screens/Home';
import NewProduct from '../src/screens/NewProduct';

const {Navigator, Screen} = createStackNavigator();

describe('Home', () => {
  const StackProvider = (
    <NavigationContainer>
      <Navigator>
        <Screen name="Home" component={Home} />
        <Screen
          name="NewProduct"
          component={NewProduct}
          options={{title: 'Adicionar novo item', headerShown: true}}
        />
      </Navigator>
    </NavigationContainer>
  );

  it('should render correctly', () => {
    render(StackProvider);
  });

  it('should render a button to init the list draft', () => {
    const {getByText} = render(StackProvider);

    const button = getByText('Iniciar lista de compras');
    expect(button).toBeTruthy();
  });

  it('should init list draft on redux store when press the button', async () => {
    const {getByText} = render(StackProvider);

    const button = getByText('Iniciar lista de compras');
    fireEvent.press(button);

    await waitFor(() => {
      expect(store.getState().list.activeListDraft).not.toBeNull();
    });
  });

  it('should render a delete button if the list draft exists', async () => {
    const {getByTestId} = render(StackProvider);

    const deleteButton = getByTestId('delete-list-draft-button');

    await waitFor(() => {
      expect(deleteButton).toBeTruthy();
    });
  });

  it('should render a save button if the list draft exists', async () => {
    const {getByTestId} = render(StackProvider);

    const saveButton = getByTestId('save-list-draft-button');

    await waitFor(() => {
      expect(saveButton).toBeTruthy();
    });
  });

  it('should delete the list draft on redux store when press delete button', async () => {
    const {getByTestId} = render(StackProvider);

    const deleteButton = getByTestId('delete-list-draft-button');
    fireEvent.press(deleteButton);

    await waitFor(() => {
      expect(store.getState().list.activeListDraft).toBeNull();
    });
  });

  it('should render an add product button', async () => {
    const {getByText} = render(StackProvider);

    const initButton = getByText('Iniciar lista de compras');
    fireEvent.press(initButton);

    const addProductButton = getByText('Adicionar produto');

    await waitFor(() => {
      expect(addProductButton).toBeTruthy();
    });
  });

  it('should navigate to add product scren on press add product button', async () => {
    const {getByText} = render(StackProvider);

    const addProductButton = getByText('Adicionar produto');
    fireEvent.press(addProductButton);

    await waitFor(() => {
      const newHeader = getByText('Adicionar novo item');
      expect(newHeader).toBeTruthy();
    });
  });

  it('should add a product on list draft products array on store', async () => {
    const {getByPlaceholderText, getByText} = render(StackProvider);

    const addProductButton = getByText('Adicionar produto');
    fireEvent.press(addProductButton);

    const titleInput = getByPlaceholderText('Insira o nome do produto');
    fireEvent.changeText(titleInput, 'test');

    const saveProductButton = getByText('Salvar item');
    fireEvent.press(saveProductButton);

    await waitFor(() => {
      const productsListDraft = store.getState().list.activeListDraft;
      expect(
        productsListDraft.products.find(prod => prod.title === 'test'),
      ).toBeTruthy();
    });
  });

  it('should change the list draft to null and save on lists on store when press save button', async () => {
    const {getByTestId} = render(StackProvider);

    const saveButton = getByTestId('save-list-draft-button');
    fireEvent.press(saveButton);

    await waitFor(() => {
      expect(store.getState().list.lists.length).toBe(1);
      expect(store.getState().list.activeListDraft).toBeNull();
    });
  });
});
