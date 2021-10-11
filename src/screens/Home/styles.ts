import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: ${props => props.theme.colors.background.primary};
`;

export const StatusBar = styled.StatusBar.attrs(props => ({
  backgroundColor: props.theme.colors.background.primary,
  barStyle: 'dark-content',
}))``;
