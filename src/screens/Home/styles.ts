import styled from 'styled-components/native';
import FeatherIcon from 'react-native-vector-icons/Feather';
import {PressableProps, ScrollViewProps} from 'react-native';

import ListItemComponent from '@components/ListItem';
import SaveButtonComponent from '@components/SaveButton';
import ButtonComponent from '@components/Button';

import AddIllustration from '@assets/svg/add.svg';

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

export const SaveButton = styled(SaveButtonComponent)``;

export const AddProductButtonContainer = styled.View`
  height: ${props => props.theme.hp('7.5%')}px;
  width: ${props => props.theme.wp('90%')}px;
  border-radius: ${props => props.theme.borderRadius.big}px;
  overflow: hidden;
`;

export const AddProductButton = styled.Pressable.attrs(props => ({
  android_ripple: {
    color: props.theme.colors.primary,
  },
}))<PressableProps>`
  background-color: ${props => props.theme.colors.primary_highlight};
  height: ${props => props.theme.hp('7.5%')}px;
  width: ${props => props.theme.wp('90%')}px;
  justify-content: center;
`;

export const AddProductButtonText = styled.Text`
  font-family: 'Poppins-Bold';
  font-size: 14px;
  color: ${props => props.theme.colors.primary};
  text-align: center;
`;

export const DiscardButton = styled.TouchableOpacity`
  margin-left: ${props => props.theme.padding.big}px;
`;

export const DiscardIcon = styled(FeatherIcon).attrs(props => ({
  name: 'trash',
  color: props.theme.colors.white,
  size: props.theme.wp('7%'),
}))<any>``;

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
  width: ${props => props.theme.wp('60%')}px;
  text-align: center;
  margin: ${props => props.theme.hp('5%')}px 0;
`;

export const Button = styled(ButtonComponent)``;

export const StatusBar = styled.StatusBar.attrs(props => ({
  backgroundColor: props.theme.colors.primary2,
  barStyle: 'light-content',
}))``;
