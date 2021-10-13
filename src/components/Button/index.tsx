import React from 'react';

import {Container, Title} from './styles';

interface IProps {
  title: string;
  onPress: () => void;
  disabled?: boolean;
}

const Button: React.FC<IProps> = ({title, onPress, disabled}) => {
  return (
    <Container disabled={disabled} onPress={onPress}>
      <Title>{title}</Title>
    </Container>
  );
};

export default Button;
