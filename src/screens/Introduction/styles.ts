import styled from 'styled-components/native';
import {MotiView} from 'moti';

import ShoppingIllustration from '@assets/svg/shop.svg';

import ButtonComponent from '@components/Button';

export const Container = styled.View`
  flex: 1;
  background-color: ${props => props.theme.colors.background.primary};
  align-items: center;
  justify-content: center;
`;

export const Title = styled.Text`
  font-family: 'Poppins-Bold';
  font-size: 24px;
  color: ${props => props.theme.colors.texts.primary};
  width: ${props => props.theme.wp('60%')}px;
  text-align: center;
  margin-bottom: ${props => props.theme.padding.medium}px;
`;

export const BlueTitle = styled(Title)`
  color: ${props => props.theme.colors.primary};
`;

export const Subtitle = styled.Text`
  font-family: 'Poppins-Regular';
  font-size: 14px;
  color: ${props => props.theme.colors.texts.secondary};
  width: ${props => props.theme.wp('60%')}px;
  text-align: center;
`;

export const IllustrationContainer = styled.View`
  margin: ${props => props.theme.hp('5%')}px 0;
`;

export const Illustration = ShoppingIllustration;

export const Button = styled(ButtonComponent)``;

export const AnimatedView = styled(MotiView).attrs({
  from: {translateY: -5, opacity: 0},
  animate: {translateY: 0, opacity: 1},
})``;

export const StatusBar = styled.StatusBar.attrs(props => ({
  backgroundColor: props.theme.colors.background.primary,
  barStyle: 'dark-content',
}))``;
