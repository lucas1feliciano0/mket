import React, {useState} from 'react';

import {Container, Icon, Input, Row, Title, Touchable} from './styles';

interface IProps {
  defaultValue: string | number;
  onChangeValue: (newValue: string | number) => void;
}

const QuantityInput: React.FC<IProps> = ({defaultValue, onChangeValue}) => {
  const [value, setValue] = useState<number>(
    parseInt(defaultValue.toString(), 10),
  );

  function handleIncrementValue() {
    const newValue = value + 1;
    onChangeValue(newValue);
    setValue(newValue);
  }

  function handleDecrementValue() {
    const newValue = value - 1;
    if (newValue > 0) {
      onChangeValue(newValue);
      setValue(newValue);
    }
  }

  return (
    <Container>
      <Title>Quantidade</Title>
      <Row>
        <Touchable onPress={handleDecrementValue}>
          <Icon name="minus-square" />
        </Touchable>
        <Input
          value={value}
          placeholder="0"
          onChangeText={onChangeValue}
          inputProps={{
            keyboardType: 'numeric',
          }}
        />
        <Touchable onPress={handleIncrementValue}>
          <Icon name="plus-square" />
        </Touchable>
      </Row>
    </Container>
  );
};

export default QuantityInput;
