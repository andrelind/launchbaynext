import { Animated } from 'react-native';

export function getSpoingyTransform(
  scrollY: Animated.Value,
  headerHeight: number,
) {
  return [
    {
      translateY: scrollY.interpolate({
        inputRange: [-headerHeight, 0, 1],
        outputRange: [-headerHeight / 2, 0, 0],
      }),
    },
    {
      scale: scrollY.interpolate({
        inputRange: [-headerHeight, 0, 1],
        outputRange: [2, 1, 1],
      }),
    },
  ];
}

export function captureScroll(scrollY: Animated.Value) {
  return {
    onScroll: Animated.event(
      [
        {
          nativeEvent: {
            contentOffset: {
              y: scrollY,
            },
          },
        },
      ],
      { useNativeDriver: true },
    ),
  };
}
