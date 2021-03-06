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
    large: wp('12%'),
  },

  colors: {
    primary: '#69ABF7',
    primary2: '#8CBBF1',
    primary_highlight: '#CAE1FC',

    secondary: '#F6CD65',
    secondary_highlight: '#FCEECB',

    danger: '#F769A2',
    danger_highlight: '#FCCADE',

    success: '#5ED46A',
    success_highlight: '#CAFCCF',

    info: '#5e9dd4',
    info_highlight: '#cae5fc',

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
