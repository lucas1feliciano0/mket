import React from 'react';

import {Container} from './styles';

interface IProps {
  placeholder: string;
  onChangeText: (newValue: string) => void;
  value?: string | number;
  style?: [];
  inputProps?: {};
}

const Input: React.FC<IProps> = ({
  placeholder,
  onChangeText,
  value,
  style,
  inputProps,
}) => {
  return (
    <Container
      defaultValue={value?.toString()}
      placeholder={placeholder}
      style={style}
      onChangeText={onChangeText}
      {...inputProps}
    />
  );
};

export default Input;
