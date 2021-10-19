import styled from 'styled-components/native';
import {ScrollViewProps} from 'react-native';

import ListItemComponent from '@components/ListItem';
import ButtonComponent from '@components/Button';

import AddIllustration from '@assets/svg/empty.svg';

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

export const NoDraftContainer = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const IllustrationContainer = styled.View``;

export const Illustration = AddIllustration;

export const Subtitle = styled.Text`
  font-family: 'Poppins-Regular';
  font-size: 14px;
  color: ${props => props.theme.colors.texts.secondary};
  width: ${props => props.theme.wp('65%')}px;
  text-align: center;
  margin: ${props => props.theme.hp('5%')}px 0;
`;

export const Button = styled(ButtonComponent)``;

export const StatusBar = styled.StatusBar.attrs(props => ({
  backgroundColor: props.theme.colors.primary2,
  barStyle: 'light-content',
}))``;
