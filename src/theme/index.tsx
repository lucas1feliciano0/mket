import {DefaultTheme} from 'styled-components';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const theme: DefaultTheme = {
  borderRadius: {
    small: 4,
    medium: 6,
    big: 8,
  },

  wp,
  hp,

  padding: {
    small: wp('1%'),
    medium: wp('3%'),
    big: wp('5%'),
  },

  colors: {
    primary: '#69ABF7',
    primary_highlight: '#CAE1FC',

    secondary: '#F6CD65',
    secondary_highlight: '#FCEECB',

    danger: '#F769A2',
    danger_highlight: '#FCCADE',

    success: '#6AF678',
    success_highlight: '#CAFCCF',

    background: {
      primary: '#FDFDFF',
    },

    white: '#FFFFFF',

    texts: {
      primary: '#525252',
      secondary: '#757575',
    },

    shadow: '#A3A8B1',

    disabled: '#838B90',
  },
};

export default theme;
