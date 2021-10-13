import React, {useContext} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {
  CardStyleInterpolators,
  createStackNavigator,
  StackNavigationOptions,
} from '@react-navigation/stack';

import HomeTabs from './HomeTabs';

import NewProduct from '@screens/NewProduct';

import Introduction from '@screens/Introduction';
import {ThemeContext} from 'styled-components';

export type RootStackParamList = {
  Introduction: undefined;
  Home: undefined;
  NewProduct: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

const MainStack: React.FC = () => {
  const theme = useContext(ThemeContext);

  const screenOptions: StackNavigationOptions = {
    headerShown: false,
    transitionSpec: {
      open: {animation: 'timing', config: {duration: 500}},
      close: {animation: 'timing', config: {duration: 500}},
    },
    cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
    headerStyle: {
      backgroundColor: theme.colors.primary2,
      height: theme.hp('8%'),
    },
    headerTitleStyle: {
      fontFamily: 'Poppins-Regular',
      fontSize: 16,
      color: theme.colors.white,
    },
    headerTintColor: theme.colors.white,
    headerTitleAlign: 'center',
  };

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={screenOptions}>
        <Stack.Screen name="Introduction" component={Introduction} />
        <Stack.Screen name="Home" component={HomeTabs} />
        <Stack.Screen
          name="NewProduct"
          options={{title: 'Adicionar novo item', headerShown: true}}
          component={NewProduct}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainStack;
