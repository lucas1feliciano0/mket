import React, {useContext} from 'react';
import {
  BottomTabNavigationOptions,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
import {ThemeContext} from 'styled-components/native';
import FeatherIcon from 'react-native-vector-icons/Feather';

import Home from '@screens/Home';

export type RootStackParamList = {
  Introduction: undefined;
  Home: undefined;
};

const Tab = createBottomTabNavigator();

const HomeTabs: React.FC = () => {
  const theme = useContext(ThemeContext);

  const icons: {[key: string]: any} = {
    New: 'plus-square',
    Lists: 'list',
  };

  const screenOptions: BottomTabNavigationOptions = ({route}) => ({
    tabBarIcon: ({color, size}: any) => (
      <FeatherIcon name={icons[route.name]} size={size} color={color} />
    ),
    headerShown: false,
    tabBarStyle: {
      height: theme.hp('7.5%'),
    },
    tabBarLabelPosition: 'beside-icon',
    tabBarActiveTintColor: theme.colors.primary,
    tabBarLabelStyle: {
      fontFamily: 'Poppins-Regular',
      fontSize: 14,
    },
  });

  return (
    <Tab.Navigator screenOptions={screenOptions}>
      <Tab.Screen name="New" options={{title: 'Nova lista'}} component={Home} />
      <Tab.Screen
        name="Lists"
        options={{title: 'Minhas listas'}}
        component={Home}
      />
    </Tab.Navigator>
  );
};

export default HomeTabs;
