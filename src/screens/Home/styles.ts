import styled from 'styled-components/native';
import {PressableProps} from 'react-native';

import ListItemComponent from '@components/ListItem';
import SaveButtonComponent from '@components/SaveButton';

export const Container = styled.View`
  flex: 1;
  background-color: ${props => props.theme.colors.background.primary};
  align-items: center;
  padding-top: 10px;
`;

export const List = styled.FlatList`
  flex-grow: 0;
`;

export const ListItem = styled(ListItemComponent)`
  margin-bottom: ${props => props.theme.padding.big}px;
`;

export const SaveButton = styled(SaveButtonComponent)``;

export const AddProductButton = styled.Pressable.attrs(props => ({
  android_ripple: {
    color: props.theme.colors.primary,
  },
}))<PressableProps>`
  background-color: ${props => props.theme.colors.primary_highlight};
  height: ${props => props.theme.hp('7.5%')}px;
  width: ${props => props.theme.wp('90%')}px;
  justify-content: center;
  border-radius: ${props => props.theme.borderRadius.big}px;
`;

export const AddProductButtonText = styled.Text`
  font-family: 'Poppins-Bold';
  font-size: 14px;
  color: ${props => props.theme.colors.primary};
  text-align: center;
`;

export const StatusBar = styled.StatusBar.attrs(props => ({
  backgroundColor: props.theme.colors.primary2,
  barStyle: 'light-content',
}))``;
