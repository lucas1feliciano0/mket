import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/core';
import {StackNavigationProp} from '@react-navigation/stack';
import {v4 as uuidv4} from 'uuid';
import {useDispatch, useSelector} from 'react-redux';

import {RootState} from '@store/ducks';
import {Creators} from '@store/ducks/list';

import {RootStackParamList} from '@routes/MainStack';

type NewProductScreenNavigationProp = StackNavigationProp<
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

const NewProduct: React.FC = () => {
  const navigation = useNavigation<NewProductScreenNavigationProp>();
  const dispatch = useDispatch();

  const list: List = useSelector(
    (state: RootState) => state.list.activeListDraft,
  );

  const [title, setTitle] = useState<string>('');
  const [quantity, setQuantity] = useState<string | number>(1);

  function handleSubmit() {
    const listCopy = {...list};

    const item = {
      title,
      quantity,
      price: -1,
      deleted: false,
      id: uuidv4(),
    };

    listCopy.products.push(item);

    dispatch(Creators.editProductsListDraft(listCopy.products));
    navigation.navigate('Home');
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
