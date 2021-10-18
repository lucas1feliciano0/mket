import {useNavigation} from '@react-navigation/core';
import React, {useEffect, useLayoutEffect} from 'react';
import {StackNavigationProp} from '@react-navigation/stack';
import 'react-native-get-random-values';
import {v4 as uuidv4} from 'uuid';
import {useDispatch, useSelector} from 'react-redux';
import Animated, {SlideInRight} from 'react-native-reanimated';

import {RootState} from '@store/ducks';
import {Creators} from '@store/ducks/list';

import {RootStackParamList} from '@routes/MainStack';

type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Home'>;

export type List = {
  id: string;
  created_at: Date;
  products: ListProduct[];
  deleted: boolean;
};

export type ListProduct = {
  id: string;
  title: string;
  quantity: number | string;
  deleted: boolean;
  price: number;
};

import {
  AddProductButton,
  AddProductButtonText,
  Container,
  DiscardButton,
  DiscardIcon,
  ListItem,
  SaveButton,
  StatusBar,
} from './styles';

const Home: React.FC = () => {
  const navigation = useNavigation<HomeScreenNavigationProp>();
  const dispatch = useDispatch();

  const list: List = useSelector(
    (state: RootState) => state.list.activeListDraft,
  );

  function handleNavigate() {
    navigation.navigate('NewProduct');
  }

  function handleDeleteProduct(id: string) {
    const listCopy = {...list};
    const index = listCopy.products.findIndex(product => product.id === id);

    listCopy.products.splice(index, 1);
    dispatch(Creators.editProductsListDraft(listCopy.products));
  }

  useLayoutEffect(() => {
    function handleDiscardList() {
      dispatch(Creators.discardListDraft());
    }

    navigation.setOptions({
      headerLeft: () => (
        <DiscardButton onPress={handleDiscardList}>
          <DiscardIcon />
        </DiscardButton>
      ),
      headerRight: () => <SaveButton onPress={() => {}} />,
    });
  }, [dispatch, navigation]);

  useEffect(() => {
    const newList: List = {
      id: uuidv4(),
      created_at: new Date(),
      deleted: false,
      products: [],
    };

    if (!list) {
      dispatch(Creators.createListDraft(newList));
    }
  }, [dispatch, list]);

  return (
    <Container>
      <StatusBar />
      {list && (
        <>
          {list.products?.map(product => (
            <Animated.View entering={SlideInRight} key={product.id}>
              <ListItem
                title={product.title}
                subtitle={`${product.quantity} unidades`}
                onDelete={() => handleDeleteProduct(product.id)}
              />
            </Animated.View>
          ))}
          <AddProductButton onPress={handleNavigate}>
            <AddProductButtonText>Adicionar produto</AddProductButtonText>
          </AddProductButton>
        </>
      )}
    </Container>
  );
};

export default Home;
