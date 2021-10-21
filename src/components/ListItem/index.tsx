import React from 'react';
import Animated, {SlideInRight} from 'react-native-reanimated';

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
  checked?: boolean;
  style?: [];
  mainIconName?: string;
  finished?: boolean;
  onDelete?: (id: string) => void;
  editFunction?: () => void;
  onPress?: () => void;
  onCheck?: (checked: boolean) => void;
}

const ListItem: React.FC<IProps> = ({
  id,
  title,
  subtitle,
  onDelete,
  checked,
  finished,
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
    <Animated.View entering={SlideInRight}>
      <Container onPress={onPress} style={style}>
        <IconContainer>
          <Icon name={mainIconName} />
        </IconContainer>
        <Column>
          <Title>{title}</Title>
          <Subtitle>{subtitle}</Subtitle>
        </Column>
        <Row>
          {!!onDelete && !finished && (
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
          {onCheck && <Checkbox isChecked={checked} onPress={onCheck} />}
        </Row>
      </Container>
    </Animated.View>
  );
};

export default ListItem;
