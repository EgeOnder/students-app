import { Theme } from '@lib/ui/types/theme';

const darkBlue = {
  50: '#B7E1FF',
  100: '#9BD6FF',
  200: '#62BFFF',
  300: '#2AA8FF',
  400: '#008EF1',
  500: '#006DB9',
  600: '#004C81',
  700: '#002B49',
  800: '#00223A',
  900: '#00192A',
};

const orange = {
  50: '#FFE8D0',
  100: '#FFDEBC',
  200: '#FFCB93',
  300: '#FFB76A',
  400: '#FFA342',
  500: '#FF8F19',
  600: '#EF7B00',
  700: '#B75E00',
  800: '#7F4100',
  900: '#472400',
};

const text = {
  50: '#FAFAFA',
  100: '#F5F5F5',
  200: '#E5E5E5',
  300: '#D4D4D4',
  400: '#A3A3A3',
  500: '#737373',
  600: '#525252',
  700: '#404040',
  800: '#262626',
  900: '#171717',
};

const rose = {
  50: '#fff1f2',
  100: '#ffe4e6',
  200: '#fecdd3',
  300: '#fda4af',
  400: '#fb7185',
  500: '#f43f5e',
  600: '#e11d48',
  700: '#be123c',
  800: '#9f1239',
  900: '#881337',
};

const red = {
  50: '#fef2f2',
  100: '#fee2e2',
  200: '#fecaca',
  300: '#fca5a5',
  400: '#f87171',
  500: '#ef4444',
  600: '#dc2626',
  700: '#b91c1c',
  800: '#991b1b',
  900: '#7f1d1d',
};

const green = {
  50: '#f0fdf4',
  100: '#dcfce7',
  200: '#bbf7d0',
  300: '#86efac',
  400: '#4ade80',
  500: '#22c55e',
  600: '#16a34a',
  700: '#15803d',
  800: '#166534',
  900: '#14532d',
};

const darkOrange = {
  50: '#fff7ed',
  100: '#ffedd5',
  200: '#fed7aa',
  300: '#fdba74',
  400: '#fb923c',
  500: '#f97316',
  600: '#ea580c',
  700: '#c2410c',
  800: '#9a3412',
  900: '#7c2d12',
};

const trueGray = {
  50: '#fafafa',
  100: '#f5f5f5',
  200: '#e5e5e5',
  300: '#d4d4d4',
  400: '#a3a3a3',
  500: '#737373',
  600: '#525252',
  700: '#404040',
  800: '#262626',
  900: '#171717',
};

const lightBlue = {
  50: '#f0f9ff',
  100: '#e0f2fe',
  200: '#bae6fd',
  300: '#7dd3fc',
  400: '#38bdf8',
  500: '#0ea5e9',
  600: '#0284c7',
  700: '#0369a1',
  800: '#075985',
  900: '#0c4a6e',
};

const backgroundColor = '#F0F3F5';

export const lightTheme: Theme = {
  dark: false,
  colors: {
    darkBlue,
    orange,
    text,
    rose,
    red,
    green,
    darkOrange,
    trueGray,
    lightBlue,
    primary: darkBlue,
    secondary: orange,
    danger: rose,
    error: red,
    success: green,
    warning: orange,
    muted: trueGray,
    info: lightBlue,
    touchableHighlight: 'rgba(0, 0, 0, .08)',
    background: backgroundColor,
    surface: '#FFFFFF',
    surfaceDark: '#143959',
    headers: '#edeef0',
    heading: darkBlue[700],
    title: 'black',
    headline: 'black',
    prose: text[800],
    secondaryText: text[500],
    caption: text[400],
    link: darkBlue[500],
    divider: 'rgba(0, 0, 0, .15)',
    tabBar: darkBlue[200],
    tabBarInactive: backgroundColor,
    agendaBooking: green[600],
    agendaDeadline: red[700],
    agendaExam: orange[600],
    agendaLecture: darkBlue[500],
  },
  fontFamilies: {
    heading: 'Montserrat',
    body: 'Montserrat',
  },
  fontSizes: {
    '2xs': 10,
    xs: 12,
    sm: 14,
    md: 16,
    lg: 18,
    xl: 20,
    '2xl': 24,
    '3xl': 30,
    '4xl': 36,
    '5xl': 48,
    '6xl': 60,
    '7xl': 72,
    '8xl': 96,
    '9xl': 128,
  },
  fontWeights: {
    normal: '400',
    medium: '500',
    semibold: '600',
    bold: '700',
    extrabold: '800',
  },
  shapes: {
    sm: 4,
    md: 8,
    lg: 12,
  },
  spacing: {
    px: '1px',
    '0': 0,
    '0.5': 2,
    '1': 4,
    '1.5': 6,
    '2': 8,
    '2.5': 10,
    '3': 12,
    '3.5': 14,
    '4': 16,
    '5': 18,
    '6': 24,
    '7': 28,
    '8': 32,
    '9': 36,
    '10': 40,
    '12': 48,
    '16': 64,
    '20': 80,
    '24': 96,
    '32': 128,
    '40': 160,
    '48': 192,
    '56': 224,
    '64': 256,
    '72': 288,
    '80': 320,
    '96': 384,
  },
};
