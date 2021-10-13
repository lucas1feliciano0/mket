import styled from 'styled-components/native';
import FeatherIcon from 'react-native-vector-icons/Feather';

import ListItemComponent from '@components/ListItem';

export const Container = styled.View`
  flex: 1;
  background-color: ${props => props.theme.colors.background.primary};
  align-items: center;
  padding-top: 10px;
`;

export const List = styled.FlatList``;

export const ListItem = styled(ListItemComponent)`
  margin-bottom: ${props => props.theme.padding.big}px;
`;

export const SaveButton = styled.TouchableOpacity`
  margin-right: ${props => props.theme.padding.big}px;
`;

export const SaveIcon = styled(FeatherIcon).attrs(props => ({
  name: 'check',
  color: props.theme.colors.white,
  size: props.theme.wp('7%'),
}))<any>``;

export const StatusBar = styled.StatusBar.attrs(props => ({
  backgroundColor: props.theme.colors.primary2,
  barStyle: 'light-content',
}))``;
