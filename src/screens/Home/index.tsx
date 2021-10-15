import {useNavigation} from '@react-navigation/core';
import React, {useLayoutEffect, useState} from 'react';
import {StackNavigationProp} from '@react-navigation/stack';

import {RootStackParamList} from '@routes/MainStack';

type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Home'>;

export type List = {
  id: string;
  created_at: Date;
  products: ListProduct[];
  deleted: boolean;
};

type ListProduct = {
  id: string;
  title: string;
  quantity: number;
  deleted: boolean;
  price: number;
};

import {
  AddProductButton,
  AddProductButtonText,
  Container,
  List,
  ListItem,
  SaveButton,
  StatusBar,
} from './styles';

const Home: React.FC = () => {
  const navigation = useNavigation<HomeScreenNavigationProp>();

  const [list, setList] = useState<List>({});

  function handleNavigate() {
    navigation.navigate('NewProduct');
  }

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => <SaveButton onPress={() => {}} />,
    });
  }, [navigation]);

  return (
    <Container>
      <StatusBar />
      <List
        data={list.products || []}
        keyExtractor={(item: ListProduct) => item.id}
        renderItem={({item}: {item: ListProduct}) => (
          <ListItem
            title={item.title}
            subtitle={`${item.quantity}`}
            onDelete={() => {}}
          />
        )}
      />
      <AddProductButton onPress={handleNavigate}>
        <AddProductButtonText>Adicionar produto</AddProductButtonText>
      </AddProductButton>
    </Container>
  );
};

export default Home;
