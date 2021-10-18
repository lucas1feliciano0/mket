import styled from 'styled-components/native';
import {ScrollViewProps} from 'react-native';

import ListItemComponent from '@components/ListItem';

export const Container = styled.ScrollView.attrs(props => ({
  contentContainerStyle: {
    flexGrow: 1,
    alignItems: 'center',
    paddingVertical: props.theme.padding.big,
  },
}))<ScrollViewProps>`
  flex: 1;
  background-color: ${props => props.theme.colors.background.primary};
`;

export const ListItem = styled(ListItemComponent)`
  margin-bottom: ${props => props.theme.padding.big}px;
`;

export const StatusBar = styled.StatusBar.attrs(props => ({
  backgroundColor: props.theme.colors.primary2,
  barStyle: 'light-content',
}))``;
