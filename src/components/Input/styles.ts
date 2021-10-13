import styled from 'styled-components/native';

export const Container = styled.TextInput`
  font-family: 'Poppins-Regular';
  border-width: 1.3px;
  border-color: ${props => props.theme.colors.primary};
  height: ${props => props.theme.hp('7.8%')}px;
  width: ${props => props.theme.wp('90%')}px;
  border-radius: ${props => props.theme.borderRadius.big}px;
  padding-left: ${props => props.theme.padding.medium}px;
`;
