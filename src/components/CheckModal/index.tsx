import React from 'react';

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
  onSubmitSave: () => void;
  onDismiss: () => void;
  onChangeValue?: (newValue: string) => void;
}

const CheckModal: React.FC<IProps> = ({
  visible,
  onSubmitSave,
  onDismiss,
  onChangeValue,
}) => {
  function handleSubmit() {
    onSubmitSave();
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
            <ListItem title="Peito de frango" subtitle="6 unidades" />
            <InputContainer>
              <InputLabel>Informe o preço:</InputLabel>
              <Input
                placeholder="Insira o valor do produto"
                onChangeText={onChangeValue}
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
