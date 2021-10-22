import {View} from 'react-native';

export const enableScreens = jest.fn();
export const screensEnabled = jest.fn().mockReturnValue(false);
export const ScreenContainer = View;
