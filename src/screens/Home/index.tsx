import {CompositeNavigationProp, useNavigation} from '@react-navigation/core';
import React, {useContext, useLayoutEffect} from 'react';
import {StackNavigationProp} from '@react-navigation/stack';
import 'react-native-get-random-values';
import {useDispatch, useSelector} from 'react-redux';
import {v4 as uuidv4} from 'uuid';

import {RootState} from '@store/ducks';
import {ThemeContext} from 'styled-components/native';
import {Creators} from '@store/ducks/list';

import {RootStackParamList} from '@routes/MainStack';
import {BottomTabNavigationProp} from '@react-navigation/bottom-tabs';
import {HomeTabParamList} from '@routes/HomeTabs';

type HomeScreenNavigationProp = CompositeNavigationProp<
  BottomTabNavigationProp<HomeTabParamList, 'New'>,
  StackNavigationProp<RootStackParamList, 'Home'>
>;

export type List = {
  id: string;
  created_at: Date;
  products: ListProduct[];
};

export type ListProduct = {
  id: string;
  title: string;
  quantity: number | string;
  price: number;
  checked: boolean;
};

import {
  AddProductButton,
  AddProductButtonContainer,
  AddProductButtonText,
  Button,
  Container,
  DiscardButton,
  DiscardIcon,
  Illustration,
  IllustrationContainer,
  ListItem,
  NoDraftContainer,
  SaveButton,
  StatusBar,
  Subtitle,
} from './styles';

const Home: React.FC = () => {
  const navigation = useNavigation<HomeScreenNavigationProp>();
  const theme = useContext(ThemeContext);
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

  function handleInitDraft() {
    const newList: List = {
      id: uuidv4(),
      created_at: new Date(),
      products: [],
    };

    dispatch(Creators.createListDraft(newList));
  }

  useLayoutEffect(() => {
    function handleDiscardList() {
      dispatch(Creators.discardListDraft());
    }

    function handleSaveDraft() {
      if (list.products.length > 0) {
        navigation.jumpTo('Lists');
        dispatch(Creators.saveList());
      }
    }

    if (list) {
      navigation.setOptions({
        headerLeft: () => (
          <DiscardButton onPress={handleDiscardList}>
            <DiscardIcon />
          </DiscardButton>
        ),
        headerRight: () => <SaveButton onPress={handleSaveDraft} />,
      });
    } else {
      navigation.setOptions({
        headerLeft: () => null,
        headerRight: () => null,
      });
    }
  }, [dispatch, list, navigation]);

  return (
    <Container>
      <StatusBar />
      {list ? (
        <>
          {list.products?.reverse().map(product => (
            <ListItem
              key={product.id}
              title={product.title}
              subtitle={`${product.quantity} unidades`}
              onDelete={() => handleDeleteProduct(product.id)}
              checked={product.checked}
            />
          ))}
          <AddProductButtonContainer>
            <AddProductButton onPress={handleNavigate}>
              <AddProductButtonText>Adicionar produto</AddProductButtonText>
            </AddProductButton>
          </AddProductButtonContainer>
        </>
      ) : (
        <NoDraftContainer>
          <IllustrationContainer>
            <Illustration width={theme.wp('65%')} height={theme.hp('30%')} />
          </IllustrationContainer>
          <Subtitle>
            Inicie sua lista de compras clicando no botão abaixo
          </Subtitle>
          <Button title="Iniciar lista de compras" onPress={handleInitDraft} />
        </NoDraftContainer>
      )}
    </Container>
  );
};

export default Home;
