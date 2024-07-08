import { LayoutAnimation } from 'react-native';

export const smooth = () => {
  LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
};
