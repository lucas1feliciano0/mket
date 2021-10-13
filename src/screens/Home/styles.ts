import styled from 'styled-components/native';

import ListItemComponent from '@components/ListItem';

export const Container = styled.View`
  flex: 1;
  background-color: ${props => props.theme.colors.background.primary};
  align-items: center;
  padding-top: 10px;
`;

export const ListItem = styled(ListItemComponent)`
  margin-bottom: ${props => props.theme.padding.big}px;
`;

export const StatusBar = styled.StatusBar.attrs(props => ({
  backgroundColor: props.theme.colors.background.primary,
  barStyle: 'dark-content',
}))``;
