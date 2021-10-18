import React from 'react';
import {StackNavigationProp} from '@react-navigation/stack';
import {CompositeNavigationProp, useNavigation} from '@react-navigation/core';
import {BottomTabNavigationProp} from '@react-navigation/bottom-tabs';
import Animated, {SlideInRight} from 'react-native-reanimated';
import {useDispatch, useSelector} from 'react-redux';

import {RootState} from '@store/ducks';
import {Creators} from '@store/ducks/list';

import {RootStackParamList} from '@routes/MainStack';
import {HomeTabParamList} from '@routes/HomeTabs';

type ListsScreenNavigationProp = CompositeNavigationProp<
  BottomTabNavigationProp<HomeTabParamList, 'Lists'>,
  StackNavigationProp<RootStackParamList, 'Home'>
>;

import {List} from '../Home';

import {Container, ListItem, StatusBar} from './styles';

const Lists: React.FC = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation<ListsScreenNavigationProp>();

  const lists: List[] = useSelector((state: RootState) => state.list.lists);

  function handleOpenList() {
    navigation.navigate('ListDetails');
  }

  function handleDeleteList(id: string) {
    dispatch(Creators.deleteList(id));
  }

  return (
    <Container>
      <StatusBar />
      {lists?.map((list, index) => (
        <Animated.View entering={SlideInRight} key={list.id}>
          <ListItem
            title={`Lista ${index + 1}`}
            subtitle={`${list.products.length} itens`}
            mainIconName="align-left"
            editFunction={handleOpenList}
            onDelete={handleDeleteList}
          />
        </Animated.View>
      ))}
    </Container>
  );
};

export default Lists;
