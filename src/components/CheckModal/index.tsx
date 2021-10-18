import React, {useState} from 'react';

import {
  Container,
  Card,
  CardHeader,
  CardTitle,
  Modal,
  Input,
  CardBody,
  InputLabel,
  InputContainer,
  Button,
  ListItem,
} from './styles';

interface IProps {
  visible: boolean;
  onSubmitSave: (price: number) => void;
  onDismiss: () => void;
  onChangeValue?: (newValue: string) => void;
}

const CheckModal: React.FC<IProps> = ({
  visible,
  onSubmitSave,
  onDismiss,
  onChangeValue,
}) => {
  const [price, setPrice] = useState<number>();

  function handleChangeValue(newValue: string) {
    if (onChangeValue) {
      onChangeValue(newValue);
    }

    setPrice(parseInt(newValue, 10));
  }

  function handleSubmit() {
    onSubmitSave(price);
    onDismiss();
  }

  return (
    <Modal visible={visible} onDismiss={onDismiss} onRequestClose={onDismiss}>
      <Container>
        <Card
          transition={{
            translateY: {
              delay: 400,
            },
            opacity: {
              delay: 550,
            },
          }}>
          <CardHeader>
            <CardTitle>Marcar como comprado</CardTitle>
          </CardHeader>
          <CardBody>
            <ListItem
              title="Peito de frango"
              subtitle="6 unidades"
              checked={false}
            />
            <InputContainer>
              <InputLabel>Informe o preço:</InputLabel>
              <Input
                placeholder="Insira o valor do produto"
                onChangeText={handleChangeValue}
                inputProps={{
                  keyboardType: 'numeric',
                }}
              />
            </InputContainer>
            <Button title="Salvar" onPress={handleSubmit} />
          </CardBody>
        </Card>
      </Container>
    </Modal>
  );
};

export default CheckModal;
