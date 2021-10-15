import React, {useContext} from 'react';
import {useNavigation} from '@react-navigation/core';
import {ThemeContext} from 'styled-components/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {MotiView} from 'moti';

import {RootStackParamList} from '@routes/MainStack';

type IntroductionScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'Introduction'
>;

import {
  AnimatedView,
  BlueTitle,
  Button,
  Container,
  Illustration,
  IllustrationContainer,
  StatusBar,
  Subtitle,
  Title,
} from './styles';

const Introduction: React.FC = () => {
  const navigation = useNavigation<IntroductionScreenNavigationProp>();
  const theme = useContext(ThemeContext);

  function handleNavigate() {
    navigation.navigate('Home');
  }

  return (
    <Container>
      <StatusBar />
      <AnimatedView
        transition={{
          translateY: {
            delay: 100,
          },
          opacity: {
            delay: 250,
          },
        }}>
        <Title>
          Bem-vindo ao <BlueTitle>mket!</BlueTitle>
        </Title>
      </AnimatedView>
      <AnimatedView
        transition={{
          translateY: {
            delay: 200,
          },
          opacity: {
            delay: 350,
          },
        }}>
        <Subtitle>
          Aqui você poderá organizar e gerenciar suas idas ao mercado
        </Subtitle>
      </AnimatedView>
      <MotiView
        from={{scale: 0.3, opacity: 0}}
        animate={{scale: 1, opacity: 1}}
        transition={{
          scale: {
            delay: 450,
          },
          opacity: {
            delay: 450,
          },
        }}>
        <IllustrationContainer>
          <Illustration width={theme.wp('65%')} height={theme.hp('30%')} />
        </IllustrationContainer>
      </MotiView>
      <AnimatedView
        transition={{
          translateY: {
            delay: 400,
          },
          opacity: {
            delay: 550,
          },
        }}>
        <Button title="Iniciar lista de compras" onPress={handleNavigate} />
      </AnimatedView>
    </Container>
  );
};

export default Introduction;
