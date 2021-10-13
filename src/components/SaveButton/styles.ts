import styled from 'styled-components/native';
import FeatherIcon from 'react-native-vector-icons/Feather';

export const Container = styled.TouchableOpacity`
  margin-right: ${props => props.theme.padding.big}px;
`;

export const Icon = styled(FeatherIcon).attrs(props => ({
  name: 'check',
  color: props.theme.colors.white,
  size: props.theme.wp('7%'),
}))<any>``;
