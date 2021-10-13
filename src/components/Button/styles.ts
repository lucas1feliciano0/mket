import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity<{disabled?: boolean}>`
  background-color: ${props => props.theme.colors.primary};
  height: ${props => props.theme.hp('7.5%')}px;
  width: ${props => props.theme.wp('90%')}px;
  justify-content: center;
  border-radius: ${props => props.theme.borderRadius.big}px;
  opacity: ${props => (props.disabled ? 0.7 : 1)};
`;

export const Title = styled.Text`
  font-family: 'Poppins-Bold';
  font-size: 14px;
  color: ${props => props.theme.colors.white};
  text-align: center;
`;
