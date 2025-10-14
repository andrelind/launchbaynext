export const black = '#242A2E';
export const red = '#FF3069';
export const green = '#4BBD5E';
export const yellow = '#FFD400';
export const blue = '#1EAFF8';
export const orange = '#FF8234';
export const purple = '#ce7ddb';
export const pink = '#FF54AA';
export const darkgrey = '#A2A3A5';
// export const darkgrey = Colors.grey40;
export const scum = '#cac188';

export const background = '#1E2228';
export const backgroundLight = '#2E3238';

export interface ColorSettings {
  primary: string;
  secondary: string;
  text: string;
  textInverted: string;
  background: string;
}

export const defaultColors = {
  primary: red,
  secondary: darkgrey,
  text: 'white',
  textInverted: 'white',
  background: '#0E1218',
};
