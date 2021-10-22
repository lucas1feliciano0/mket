import React, {useContext} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {
  CardStyleInterpolators,
  createStackNavigator,
  StackNavigationOptions,
} from '@react-navigation/stack';
import {enableScreens} from 'react-native-screens';
import {useSelector} from 'react-redux';

import {RootState} from '@store/ducks';

enableScreens(false);

import HomeTabs from './HomeTabs';

import NewProduct from '@screens/NewProduct';
import ListDetails from '@screens/ListDetails';

import Introduction from '@screens/Introduction';
import {ThemeContext} from 'styled-components/native';

export type RootStackParamList = {
  Introduction: undefined;
  Home: undefined;
  NewProduct: {
    listId?: string;
  };
  ListDetails: {
    id: string;
  };
};

const Stack = createStackNavigator<RootStackParamList>();

const MainStack: React.FC = () => {
  const theme = useContext(ThemeContext);

  const showIntroduction = useSelector(
    (state: RootState) => state.user.showIntroduction,
  );

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
      <Stack.Navigator
        detachInactiveScreens={false}
        screenOptions={screenOptions}>
        {showIntroduction ? (
          <Stack.Screen
            name="Introduction"
            component={Introduction}
            options={{animationEnabled: false}}
          />
        ) : (
          <Stack.Group>
            <Stack.Screen name="Home" component={HomeTabs} />
            <Stack.Screen
              name="NewProduct"
              options={{title: 'Adicionar novo item', headerShown: true}}
              component={NewProduct}
            />
            <Stack.Screen
              name="ListDetails"
              options={{title: 'Detalhes da lista', headerShown: true}}
              component={ListDetails}
            />
          </Stack.Group>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainStack;
