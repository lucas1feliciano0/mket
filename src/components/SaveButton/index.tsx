import React from 'react';

import {Container, Icon} from './styles';

interface IProps {
  onPress: () => void;
  style?: [];
  testID?: string;
}

const SaveButton: React.FC<IProps> = ({onPress, style, testID}) => {
  return (
    <Container onPress={onPress} style={style} testID={testID}>
      <Icon />
    </Container>
  );
};

export default SaveButton;
