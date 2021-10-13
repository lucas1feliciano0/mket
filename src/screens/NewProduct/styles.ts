import styled from 'styled-components/native';

import InputComponent from '@components/Input';
import QuantityInputComponent from '@components/QuantityInput';
import ButtonComponent from '@components/Button';

export const Container = styled.View`
  flex: 1;
  background-color: ${props => props.theme.colors.background.primary};
  align-items: center;
  padding: ${props => props.theme.padding.big}px 0;
  justify-content: space-between;
`;

export const Form = styled.View``;

export const Input = styled(InputComponent)`
  margin-bottom: ${props => props.theme.padding.big}px;
`;

export const QuantityInput = styled(QuantityInputComponent)``;

export const Button = styled(ButtonComponent)``;

export const StatusBar = styled.StatusBar.attrs(props => ({
  backgroundColor: props.theme.colors.primary2,
  barStyle: 'light-content',
}))``;
