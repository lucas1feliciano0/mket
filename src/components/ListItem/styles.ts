import styled from 'styled-components/native';
import FeatherIcon from 'react-native-vector-icons/Feather';
import {PressableProps} from 'react-native';

export const Container = styled.View`
  flex-direction: row;
  background-color: ${props => props.theme.colors.white};
  align-items: center;
  width: ${props => props.theme.wp('88%')}px;
  border-radius: ${props => props.theme.borderRadius.big}px;
  padding: ${props => props.theme.padding.medium}px;
  shadow-color: ${props => props.theme.colors.shadow};

  shadow-offset: 0 5px;
  shadow-opacity: 0.34;
  shadow-radius: 6.27px;

  elevation: 10;
`;

export const Row = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Column = styled.View`
  flex: 1;
`;

export const IconContainer = styled.View`
  width: ${props => props.theme.wp('15%')}px;
  height: ${props => props.theme.wp('15%')}px;
  background-color: ${props => props.theme.colors.secondary_highlight};
  border-radius: ${props => props.theme.borderRadius.big}px;
  margin-right: ${props => props.theme.padding.medium}px;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.Text`
  font-family: 'Poppins-SemiBold';
  color: ${props => props.theme.colors.texts.primary};
`;

export const Subtitle = styled(Title)`
  font-family: 'Poppins-Regular';
  font-size: 12px;
`;

export const DeleteButton = styled.Pressable.attrs(props => ({
  android_ripple: {
    color: props.theme.colors.danger,
    borderless: true,
  },
}))<{hasMargin?: boolean}>`
  width: ${props => props.theme.wp('9%')}px;
  height: ${props => props.theme.wp('9%')}px;
  background-color: ${props => props.theme.colors.danger_highlight};
  border-radius: ${props => props.theme.borderRadius.big}px;
  align-items: center;
  justify-content: center;
  margin-right: ${props => (props.hasMargin ? props.theme.padding.small : 0)}px;
`;

export const DeleteIcon = styled(FeatherIcon).attrs(props => ({
  name: 'trash',
  color: props.theme.colors.danger,
  size: props.theme.wp('4.5%'),
}))<any>``;

export const EditButton = styled(DeleteButton).attrs(props => ({
  android_ripple: {
    color: props.theme.colors.success,
    borderless: true,
  },
}))<PressableProps>`
  background-color: ${props => props.theme.colors.success_highlight};
`;

export const EditIcon = styled(FeatherIcon).attrs(props => ({
  name: 'check-square',
  color: props.theme.colors.success,
  size: props.theme.wp('4.5%'),
}))<any>``;

export const Icon = styled(FeatherIcon).attrs(props => ({
  color: props.theme.colors.secondary,
  size: props.theme.wp('9.6%'),
}))``;
