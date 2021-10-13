import React from 'react';

import {
  Checkbox,
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
  onPress?: () => void;
  onCheck?: (checked: boolean) => void;
}

const ListItem: React.FC<IProps> = ({
  id,
  title,
  subtitle,
  onDelete,
  style,
  mainIconName = 'shopping-bag',
  editFunction,
  onPress,
  onCheck,
}) => {
  function handleDelete() {
    onDelete(id);
  }

  return (
    <Container onPress={onPress} style={style}>
      <IconContainer>
        <Icon name={mainIconName} />
      </IconContainer>
      <Column>
        <Title>{title}</Title>
        <Subtitle>{subtitle}</Subtitle>
      </Column>
      <Row>
        {!!handleDelete && (
          <DeleteButton
            hasMargin={!!editFunction || !!onCheck}
            onPress={handleDelete}>
            <DeleteIcon />
          </DeleteButton>
        )}
        {!!editFunction && (
          <EditButton onPress={editFunction}>
            <EditIcon />
          </EditButton>
        )}
        {onCheck && <Checkbox onPress={onCheck} />}
      </Row>
    </Container>
  );
};

export default ListItem;
