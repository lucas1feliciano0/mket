import styled from 'styled-components/native';
import FeatherIcon from 'react-native-vector-icons/Feather';

import InputComponent from '../Input';

export const Container = styled.View`
  width: ${props => props.theme.wp('90%')}px;
`;

export const Title = styled.Text`
  font-family: 'Poppins-SemiBold';
  color: ${props => props.theme.colors.texts.primary};
  margin-bottom: ${props => props.theme.padding.small}px;
`;

export const Row = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const Input = styled(InputComponent)`
  width: ${props => props.theme.wp('20%')}px;
  text-align: center;
  padding-left: 0;
  margin: 0 ${props => props.theme.padding.medium}px;
`;

export const Touchable = styled.TouchableOpacity``;

export const Icon = styled(FeatherIcon).attrs(props => ({
  color: props.theme.colors.texts.primary,
  size: props.theme.wp('6%'),
}))<any>``;
