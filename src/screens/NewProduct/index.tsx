import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/core';
import {StackNavigationProp, StackScreenProps} from '@react-navigation/stack';
import {v4 as uuidv4} from 'uuid';
import {useDispatch, useSelector} from 'react-redux';

import {RootState} from '@store/ducks';
import {Creators} from '@store/ducks/list';

import {RootStackParamList} from '@routes/MainStack';

type NewProductScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'NewProduct'
>;

type ListDetailsScreenRouteProps = StackScreenProps<
  RootStackParamList,
  'NewProduct'
>;

import {List} from 'screens/Home';

import {
  Button,
  Container,
  Form,
  Input,
  QuantityInput,
  StatusBar,
} from './styles';

const NewProduct: React.FC<ListDetailsScreenRouteProps> = ({route}) => {
  const navigation = useNavigation<NewProductScreenNavigationProp>();
  const dispatch = useDispatch();

  const listId = route.params?.listId;

  const list: List = useSelector(
    (state: RootState) => state.list.activeListDraft,
  );
  const lists: List[] = useSelector((state: RootState) => state.list.lists);

  const [title, setTitle] = useState<string>('');
  const [quantity, setQuantity] = useState<string | number>(1);

  function handleSubmit() {
    const listCopy = listId
      ? {...lists.find(listToSearch => listToSearch.id === listId)}
      : {...list};

    const item = {
      title,
      quantity,
      price: -1,
      id: uuidv4(),
      checked: false,
    };

    listCopy.products.push(item);
    if (listId) {
      dispatch(Creators.addProductList(listId, listCopy.products));
      navigation.goBack();
    } else {
      dispatch(Creators.editProductsListDraft(listCopy.products));
      navigation.navigate('Home');
    }
  }

  return (
    <Container>
      <StatusBar />
      <Form>
        <Input placeholder="Insira o nome do produto" onChangeText={setTitle} />
        <QuantityInput defaultValue={quantity} onChangeValue={setQuantity} />
      </Form>
      <Button disabled={!title} title="Salvar item" onPress={handleSubmit} />
    </Container>
  );
};

export default NewProduct;
