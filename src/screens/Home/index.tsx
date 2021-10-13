import React from 'react';

import {Container, ListItem, StatusBar} from './styles';

const Home: React.FC = () => {
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
