import React from 'react';

import {Container, Title} from './styles';

interface IProps {
  title: string;
  onPress: () => void;
  disabled?: boolean;
  style?: [];
}

const Button: React.FC<IProps> = ({title, onPress, disabled, style}) => {
  return (
    <Container style={style} disabled={disabled} onPress={onPress}>
      <Title>{title}</Title>
    </Container>
  );
};

export default Button;
