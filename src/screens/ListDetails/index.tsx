import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/core';
import {StackNavigationProp, StackScreenProps} from '@react-navigation/stack';
import {useDispatch, useSelector} from 'react-redux';

import {RootState} from '@store/ducks';
import {Creators} from '@store/ducks/list';

import CheckModal from '@components/CheckModal';
import {RootStackParamList} from '@routes/MainStack';

import {List} from '../Home';

type ListDetailsScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'ListDetails'
>;

type ListDetailsScreenRouteProps = StackScreenProps<
  RootStackParamList,
  'ListDetails'
>;

type ProductData = {
  id: string;
  checked: boolean;
  title?: string;
  quantity: number | string;
};

import {
  AddProductButton,
  AddProductButtonContainer,
  AddProductButtonText,
  Container,
  Footer,
  InfoContainer,
  InfoSubtitle,
  InfoTitle,
  ListContainer,
  ListItem,
  StatusBar,
} from './styles';

const ListDetails: React.FC<ListDetailsScreenRouteProps> = ({route}) => {
  const dispatch = useDispatch();
  const navigation = useNavigation<ListDetailsScreenNavigationProp>();

  const id = route.params.id;

  const [activeCheckbox, setActiveCheckbox] = useState<ProductData>();

  const lists: List[] = useSelector((state: RootState) => state.list.lists);

  const [showCheckModal, setShowCheckModal] = useState(false);

  function handleNavigate() {
    navigation.navigate('NewProduct', {
      listId: id,
    });
  }

  function handleCheck(checked: boolean, productData: ProductData) {
    if (checked) {
      setActiveCheckbox(productData);
      setShowCheckModal(true);
    } else {
      dispatch(Creators.editCheckListProduct(id, productData?.id, false, -1));
    }
  }

  function handleSubmitCheck(price: number) {
    dispatch(
      Creators.editCheckListProduct(
        id,
        activeCheckbox.id,
        activeCheckbox.checked,
        price,
      ),
    );
    setActiveCheckbox(undefined);
  }

  const list = lists.find(listToSearch => listToSearch.id === id);
  const checkedProducts = list.products.filter(product => product.checked);
  const value = checkedProducts
    .map(product => product.price * product.quantity)
    .reduce((a, b) => a + b, 0);

  return (
    <Container>
      <StatusBar />
      <ListContainer>
        {list.products.map(product => (
          <ListItem
            key={product.id}
            title={product.title}
            subtitle={`${product.quantity} unidades`}
            onCheck={(checked: boolean) =>
              handleCheck(checked, {
                id: product.id,
                checked,
                title: product.title,
                quantity: product.quantity,
              })
            }
            checked={product.checked}
          />
        ))}
        <AddProductButtonContainer>
          <AddProductButton onPress={handleNavigate}>
            <AddProductButtonText>Adicionar produto</AddProductButtonText>
          </AddProductButton>
        </AddProductButtonContainer>
      </ListContainer>
      <Footer>
        <InfoContainer>
          <InfoTitle>Itens comprados</InfoTitle>
          <InfoSubtitle>
            {checkedProducts.length} / {list.products.length}
          </InfoSubtitle>
        </InfoContainer>
        <InfoContainer>
          <InfoTitle>Total em reais</InfoTitle>
          <InfoSubtitle>R$ {value.toFixed(2)}</InfoSubtitle>
        </InfoContainer>
      </Footer>
      <CheckModal
        visible={showCheckModal}
        onSubmitSave={handleSubmitCheck}
        onDismiss={() => {
          setShowCheckModal(false);
          setActiveCheckbox(undefined);
        }}
        productTitle={activeCheckbox?.title}
        productQuantity={activeCheckbox?.quantity}
      />
    </Container>
  );
};

export default ListDetails;
