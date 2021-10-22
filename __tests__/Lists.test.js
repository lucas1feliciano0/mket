import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {fireEvent, waitFor} from '@testing-library/react-native';

import {render} from '../Provider';

import store from '../src/store';

import Home from '../src/screens/Home';
import NewProduct from '../src/screens/NewProduct';

import Lists from '../src/screens/Lists';
import ListDetails from '../src/screens/ListDetails';

const {Navigator, Screen} = createStackNavigator();

describe('Lists', () => {
  const HomeProvider = (
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

  const StackProvider = (
    <NavigationContainer>
      <Navigator>
        <Screen name="Lists" component={Lists} />
        <Screen
          name="ListDetails"
          options={{title: 'Detalhes da lista', headerShown: true}}
          component={ListDetails}
        />
      </Navigator>
    </NavigationContainer>
  );

  it('should render correctly', () => {
    render(StackProvider);
  });

  it('should render a button to create first list if dont have lists saved', () => {
    const {getByText} = render(StackProvider);

    expect(getByText('Criar minha primeira lista')).toBeTruthy();
  });

  it('should create a list', async () => {
    const {getByText, getByPlaceholderText, getByTestId} = render(HomeProvider);

    const initButton = getByText('Iniciar lista de compras');
    fireEvent.press(initButton);

    const addProductButton = getByText('Adicionar produto');
    fireEvent.press(addProductButton);

    const titleInput = getByPlaceholderText('Insira o nome do produto');
    fireEvent.changeText(titleInput, 'test');

    const saveProductButton = getByText('Salvar item');
    fireEvent.press(saveProductButton);

    const saveButton = getByTestId('save-list-draft-button');
    fireEvent.press(saveButton);

    await waitFor(() => {
      expect(store.getState().list.lists.length).toBe(1);
    });
  });

  it('should render a list with cards showing the lists data', () => {
    const {getAllByTestId} = render(StackProvider);

    expect(getAllByTestId('list-card').length).toBe(1);
  });

  it('should navigate to list details when press edit button on list card', async () => {
    const {getByTestId, getByText} = render(StackProvider);

    const editButton = getByTestId('edit-button-list-card');
    fireEvent.press(editButton);

    await waitFor(() => {
      expect(getByText('Detalhes da lista')).toBeTruthy();
    });
  });
});
