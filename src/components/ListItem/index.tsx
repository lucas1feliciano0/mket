import React from 'react';

import {
  Column,
  Container,
  DeleteButton,
  DeleteIcon,
  Icon,
  IconContainer,
  Subtitle,
  Title,
} from './styles';

interface IProps {
  id?: string;
  title: string;
  quantity: number;
  onDelete: (id: string) => void;
  style?: [];
}

const ListItem: React.FC<IProps> = ({id, title, quantity, onDelete, style}) => {
  function handleDelete() {
    onDelete(id);
  }

  return (
    <Container style={style}>
      <IconContainer>
        <Icon />
      </IconContainer>
      <Column>
        <Title>{title}</Title>
        <Subtitle>{quantity} unidades</Subtitle>
      </Column>
      <DeleteButton onPress={handleDelete}>
        <DeleteIcon />
      </DeleteButton>
    </Container>
  );
};

export default ListItem;
