import {useNavigation} from '@react-navigation/core';
import React, {useLayoutEffect} from 'react';
import {StackNavigationProp} from '@react-navigation/stack';

import {RootStackParamList} from '@routes/MainStack';

type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Home'>;

import {
  AddProductButton,
  AddProductButtonText,
  Container,
  ListItem,
  SaveButton,
  StatusBar,
} from './styles';

const Home: React.FC = () => {
  const navigation = useNavigation<HomeScreenNavigationProp>();

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
      <ListItem title="Peito de frango" quantity={5} onDelete={() => {}} />
      <ListItem title="Peito de frango" quantity={5} onDelete={() => {}} />
      <ListItem title="Peito de frango" quantity={5} onDelete={() => {}} />
      <AddProductButton onPress={handleNavigate}>
        <AddProductButtonText>Adicionar produto</AddProductButtonText>
      </AddProductButton>
    </Container>
  );
};

export default Home;
