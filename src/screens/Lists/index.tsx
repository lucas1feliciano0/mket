import React from 'react';

import {Container, ListItem, StatusBar} from './styles';

const Lists: React.FC = () => {
  return (
    <Container>
      <StatusBar />
      <ListItem
        title="Lista sem nome 1"
        subtitle="42 itens"
        onDelete={() => {}}
        mainIconName="align-left"
      />
    </Container>
  );
};

export default Lists;
