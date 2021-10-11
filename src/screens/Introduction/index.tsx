import React, {useContext} from 'react';
import {ThemeContext} from 'styled-components/native';
import {MotiView} from 'moti';

import {
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
  const theme = useContext(ThemeContext);

  return (
    <Container>
      <StatusBar />
      <MotiView
        from={{translateY: -5, opacity: 0}}
        animate={{translateY: 0, opacity: 1}}
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
      </MotiView>
      <MotiView
        from={{translateY: -5, opacity: 0}}
        animate={{translateY: 0, opacity: 1}}
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
      </MotiView>
      <MotiView
        from={{translateY: -5, opacity: 0}}
        animate={{translateY: 0, opacity: 1}}
        transition={{
          translateY: {
            delay: 300,
          },
          opacity: {
            delay: 450,
          },
        }}>
        <IllustrationContainer>
          <Illustration width={theme.wp('65%')} height={theme.hp('30%')} />
        </IllustrationContainer>
      </MotiView>
      <MotiView
        from={{translateY: -5, opacity: 0}}
        animate={{translateY: 0, opacity: 1}}
        transition={{
          translateY: {
            delay: 400,
          },
          opacity: {
            delay: 550,
          },
        }}>
        <Button title="Iniciar lista de compras" onPress={() => {}} />
      </MotiView>
    </Container>
  );
};

export default Introduction;
