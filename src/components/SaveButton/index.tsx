import React from 'react';

import {Container, Icon} from './styles';

interface IProps {
  onPress: () => void;
  style?: [];
}

const SaveButton: React.FC<IProps> = ({onPress, style}) => {
  return (
    <Container onPress={onPress} style={style}>
      <Icon />
    </Container>
  );
};

export default SaveButton;
