import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    borderRadius: {
      small: number;
      medium: number;
      big: number;
    };

    wp: (widthPercent: string | number) => number;
    hp: (heightPercent: string | number) => number;

    padding: {
      small: number;
      medium: number;
      big: number;
    };

    colors: {
      primary: string;
      primary_highlight: string;

      secondary: string;
      secondary_highlight: string;

      danger: string;
      danger_highlight: string;

      success: string;
      success_highlight: string;

      background: {
        primary: string;
      };

      white: string;

      texts: {
        primary: string;
        secondary: string;
      };

      shadow: string;
    };
  }
}
