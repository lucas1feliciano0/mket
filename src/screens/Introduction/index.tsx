import React, {useContext} from 'react';
import {ThemeContext} from 'styled-components/native';
import {useDispatch} from 'react-redux';
import {MotiView} from 'moti';

import {Creators} from '@store/ducks/user';

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
  const dispatch = useDispatch();
  const theme = useContext(ThemeContext);

  function handleSubmit() {
    dispatch(Creators.changeShowIntroduction());
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
        from={{scale: 0.5, opacity: 0}}
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
        <Button title="Continuar" onPress={handleSubmit} />
      </AnimatedView>
    </Container>
  );
};

export default Introduction;
