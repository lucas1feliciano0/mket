import React from 'react';
import {useNavigation} from '@react-navigation/core';
import {StackNavigationProp} from '@react-navigation/stack';

import {RootStackParamList} from '@routes/MainStack';

type ListDetailsScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'ListDetails'
>;

import {
  AddProductButton,
  AddProductButtonText,
  Container,
  Footer,
  InfoContainer,
  InfoSubtitle,
  InfoTitle,
  ListItem,
  StatusBar,
} from './styles';

const ListDetails: React.FC = () => {
  const navigation = useNavigation<ListDetailsScreenNavigationProp>();

  function handleNavigate() {
    navigation.navigate('NewProduct');
  }

  return (
    <Container>
      <StatusBar />
      <ListItem
        title="Peito de frango"
        subtitle="6 unidades"
        onDelete={() => {}}
        onCheck={() => {}}
      />
      <AddProductButton onPress={handleNavigate}>
        <AddProductButtonText>Adicionar produto</AddProductButtonText>
      </AddProductButton>
      <Footer>
        <InfoContainer>
          <InfoTitle>Itens comprados</InfoTitle>
          <InfoSubtitle>1/6</InfoSubtitle>
        </InfoContainer>
        <InfoContainer>
          <InfoTitle>Total em reais</InfoTitle>
          <InfoSubtitle>R$ 140,00</InfoSubtitle>
        </InfoContainer>
      </Footer>
    </Container>
  );
};

export default ListDetails;
