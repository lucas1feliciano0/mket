import React from 'react';

import {
  Column,
  Container,
  DeleteButton,
  DeleteIcon,
  EditButton,
  EditIcon,
  Icon,
  IconContainer,
  Row,
  Subtitle,
  Title,
} from './styles';

interface IProps {
  id?: string;
  title: string;
  subtitle: string;
  onDelete: (id: string) => void;
  style?: [];
  mainIconName?: string;
  editFunction?: () => void;
}

const ListItem: React.FC<IProps> = ({
  id,
  title,
  subtitle,
  onDelete,
  style,
  mainIconName = 'shopping-bag',
  editFunction,
}) => {
  function handleDelete() {
    onDelete(id);
  }

  return (
    <Container style={style}>
      <IconContainer>
        <Icon name={mainIconName} />
      </IconContainer>
      <Column>
        <Title>{title}</Title>
        <Subtitle>{subtitle}</Subtitle>
      </Column>
      <Row>
        <DeleteButton hasMargin={!!editFunction} onPress={handleDelete}>
          <DeleteIcon />
        </DeleteButton>
        {!!editFunction && (
          <EditButton onPress={handleDelete}>
            <EditIcon />
          </EditButton>
        )}
      </Row>
    </Container>
  );
};

export default ListItem;
