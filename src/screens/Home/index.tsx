import {useNavigation} from '@react-navigation/core';
import React, {useLayoutEffect} from 'react';

import {Container, ListItem, SaveButton, SaveIcon, StatusBar} from './styles';

const Home: React.FC = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <SaveButton>
          <SaveIcon />
        </SaveButton>
      ),
    });
  }, [navigation]);

  return (
    <Container>
      <StatusBar />
      <ListItem title="Peito de frango" quantity={5} onDelete={() => {}} />
      <ListItem title="Peito de frango" quantity={5} onDelete={() => {}} />
      <ListItem title="Peito de frango" quantity={5} onDelete={() => {}} />
    </Container>
  );
};

export default Home;
