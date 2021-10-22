import React, {useContext} from 'react';
import {StackNavigationProp} from '@react-navigation/stack';
import {CompositeNavigationProp, useNavigation} from '@react-navigation/core';
import {BottomTabNavigationProp} from '@react-navigation/bottom-tabs';
import {useDispatch, useSelector} from 'react-redux';
import {ThemeContext} from 'styled-components/native';
import {format, isValid} from 'date-fns';

import {RootState} from '@store/ducks';
import {Creators} from '@store/ducks/list';

import {RootStackParamList} from '@routes/MainStack';
import {HomeTabParamList} from '@routes/HomeTabs';

type ListsScreenNavigationProp = CompositeNavigationProp<
  BottomTabNavigationProp<HomeTabParamList, 'Lists'>,
  StackNavigationProp<RootStackParamList, 'Home'>
>;

import {List} from '../Home';

import {
  Button,
  Container,
  Illustration,
  IllustrationContainer,
  ListItem,
  NoDraftContainer,
  StatusBar,
  Subtitle,
} from './styles';

const Lists: React.FC = () => {
  const dispatch = useDispatch();
  const theme = useContext(ThemeContext);
  const navigation = useNavigation<ListsScreenNavigationProp>();

  const lists: List[] = useSelector((state: RootState) => state.list.lists);

  function handleOpenList(id: string) {
    navigation.navigate('ListDetails', {
      id,
    });
  }

  function handleNavigateToNew() {
    navigation.jumpTo('New');
  }

  function handleDeleteList(id: string) {
    dispatch(Creators.deleteList(id));
  }

  return (
    <Container>
      <StatusBar />
      {lists.length > 0 ? (
        lists
          .sort(
            (list1, list2) =>
              new Date(list2.created_at).getTime() -
              new Date(list1.created_at).getTime(),
          )
          ?.map(list => {
            const checkedProducts = list.products?.filter(
              product => product.checked,
            );
            const title = `Lista ${
              isValid(list.created_at)
                ? `de ${format(list.created_at, 'dd/MM/yyyy')}`
                : ''
            }`;
            return (
              <ListItem
                key={list.id}
                title={title}
                subtitle={`${list.products?.length} itens`}
                mainIconName="align-left"
                editFunction={() => handleOpenList(list.id)}
                onDelete={handleDeleteList}
                finished={checkedProducts?.length === list.products?.length}
              />
            );
          })
      ) : (
        <NoDraftContainer>
          <IllustrationContainer>
            <Illustration width={theme.wp('65%')} height={theme.hp('30%')} />
          </IllustrationContainer>
          <Subtitle>
            Você não tem nenhuma lista salva. Clique no botão abaixo para criar!
          </Subtitle>
          <Button
            title="Criar minha primeira lista"
            onPress={handleNavigateToNew}
          />
        </NoDraftContainer>
      )}
    </Container>
  );
};

export default Lists;
