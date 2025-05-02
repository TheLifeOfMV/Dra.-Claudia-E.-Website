import { DefaultTheme } from 'styled-components';

const theme: DefaultTheme = {
  colors: {
    primary: '#6EA2D5',
    secondary: '#333333',
    neutral: '#FFFFFF',
    lightGray: '#F2F2F2',
    textGray: '#666666',
    accent: '#FFD700',
  },
  shadows: {
    default: '0 4px 6px rgba(0, 0, 0, 0.1)',
  },
  borderRadius: '8px',
  spacing: {
    xs: '4px',
    sm: '8px',
    md: '16px',
    lg: '24px',
    xl: '32px',
  },
  fonts: {
    fontFamily: "'Poppins', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",
  },
};

export default theme; 