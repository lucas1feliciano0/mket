import styled from 'styled-components/native';
import {MotiView} from 'moti';

import ListItemComponent from '../ListItem';
import InputComponent from '../Input';
import ButtonComponent from '../Button';

export const Modal = styled.Modal.attrs({
  statusBarTranslucent: true,
  transparent: true,
  animationType: 'fade',
})``;

export const Container = styled.View`
  flex: 1;
  background-color: #00000080;
  justify-content: center;
  align-items: center;
`;

export const Card = styled(MotiView).attrs({
  from: {translateY: 50, opacity: 0},
  animate: {translateY: 0, opacity: 1},
})`
  background-color: ${props => props.theme.colors.background.primary};
  border-radius: ${props => props.theme.borderRadius.big}px;
  overflow: hidden;
  width: ${props => props.theme.wp('75%')}px;
`;

export const CardBody = styled.View`
  padding: 0 ${props => props.theme.padding.big}px;
  padding-bottom: ${props => props.theme.padding.big}px;
`;

export const CardTitle = styled.Text`
  font-family: 'Poppins-Regular';
  font-size: 16px;
  color: ${props => props.theme.colors.white};
  text-align: center;
`;

export const CardHeader = styled.View`
  background-color: ${props => props.theme.colors.primary2};
  padding: ${props => props.theme.padding.big}px 0;
`;

export const InputContainer = styled.View`
  margin-bottom: ${props => props.theme.padding.medium}px;
`;

export const InputLabel = styled.Text`
  font-family: 'Poppins-SemiBold';
  color: ${props => props.theme.colors.texts.primary};
  margin-bottom: ${props => props.theme.padding.small}px;
`;

export const Input = styled(InputComponent)`
  width: 100%;
`;

export const Button = styled(ButtonComponent)`
  width: 100%;
`;

export const ListItem = styled(ListItemComponent)`
  width: 100%;
  margin: ${props => props.theme.padding.big}px 0;
`;

export const ErrorLabel = styled.Text`
  font-size: 12px;
  font-family: 'Poppins-Regular';
  color: ${props => props.theme.colors.danger};
  margin-left: ${props => props.theme.wp('0.7%')}px;
`;

// export const ListItem = styled(ListItemComponent)``;
