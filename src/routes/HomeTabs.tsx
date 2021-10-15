import React, {useContext} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {RouteProp} from '@react-navigation/core';
import {ThemeContext} from 'styled-components/native';
import FeatherIcon from 'react-native-vector-icons/Feather';

import Home from '@screens/Home';
import Lists from '@screens/Lists';

export type HomeTabParamList = {
  New: undefined;
  Lists: undefined;
};

const Tab = createBottomTabNavigator<HomeTabParamList>();

const HomeTabs: React.FC = () => {
  const theme = useContext(ThemeContext);

  const icons: {[key: string]: any} = {
    New: 'plus-square',
    Lists: 'list',
  };

  const screenOptions = ({
    route,
  }: {
    route: RouteProp<HomeTabParamList, keyof HomeTabParamList>;
  }) => ({
    tabBarIcon: ({color, size}: any) => (
      <FeatherIcon name={icons[route.name]} size={size} color={color} />
    ),
    tabBarStyle: {
      height: theme.hp('8%'),
    },
    tabBarLabelPosition: 'beside-icon',
    tabBarActiveTintColor: theme.colors.primary,
    tabBarLabelStyle: {
      fontFamily: 'Poppins-Regular',
      fontSize: 14,
    },
    headerStyle: {
      backgroundColor: theme.colors.primary2,
      height: theme.hp('8%'),
    },
    headerTitleStyle: {
      fontFamily: 'Poppins-Regular',
      fontSize: 16,
      color: theme.colors.white,
    },
    headerTitleAlign: 'center',
  });

  return (
    <Tab.Navigator detachInactiveScreens={false} screenOptions={screenOptions}>
      <Tab.Screen name="New" options={{title: 'Nova lista'}} component={Home} />
      <Tab.Screen
        name="Lists"
        options={{title: 'Minhas listas'}}
        component={Lists}
      />
    </Tab.Navigator>
  );
};

export default HomeTabs;
