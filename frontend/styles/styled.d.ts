import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      primary: string;
      secondary: string;
      neutral: string;
      lightGray: string;
      textGray: string;
      accent: string;
    };
    shadows: {
      default: string;
    };
    borderRadius: string;
    spacing: {
      xs: string;
      sm: string;
      md: string;
      lg: string;
      xl: string;
    };
    fonts: {
      fontFamily: string;
    };
  }
} 