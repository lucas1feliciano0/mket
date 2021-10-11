import React from 'react';

import {Container, Title} from './styles';

interface IProps {
  title: string;
  onPress: () => void;
}

const Button: React.FC<IProps> = ({title, onPress}) => {
  return (
    <Container onPress={onPress}>
      <Title>{title}</Title>
    </Container>
  );
};

export default Button;
