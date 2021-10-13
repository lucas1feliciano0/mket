import React from 'react';
import {StackNavigationProp} from '@react-navigation/stack';
import {CompositeNavigationProp, useNavigation} from '@react-navigation/core';
import {BottomTabNavigationProp} from '@react-navigation/bottom-tabs';

import {RootStackParamList} from '@routes/MainStack';
import {HomeTabParamList} from '@routes/HomeTabs';

type ListsScreenNavigationProp = CompositeNavigationProp<
  BottomTabNavigationProp<HomeTabParamList, 'Lists'>,
  StackNavigationProp<RootStackParamList, 'Home'>
>;

import {Container, ListItem, StatusBar} from './styles';

const Lists: React.FC = () => {
  const navigation = useNavigation<ListsScreenNavigationProp>();

  function handleOpenList() {
    navigation.navigate('ListDetails');
  }

  return (
    <Container>
      <StatusBar />
      <ListItem
        title="Lista sem nome 1"
        subtitle="42 itens"
        onDelete={() => {}}
        mainIconName="align-left"
        editFunction={handleOpenList}
      />
    </Container>
  );
};

export default Lists;
