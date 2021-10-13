import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/core';
import {StackNavigationProp} from '@react-navigation/stack';

import {RootStackParamList} from '@routes/MainStack';

type NewProductScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'NewProduct'
>;

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

  const [title, setTitle] = useState<string | number>('');
  const [quantity, setQuantity] = useState<string | number>(1);

  function handleSubmit() {
    const item = {
      title,
      quantity,
    };

    console.log(item);
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
