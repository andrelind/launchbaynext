import { Feather } from '@expo/vector-icons';
import React, { FC, ReactElement, useCallback, useRef } from 'react';
import {
  Animated,
  StyleSheet,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import { RectButton, Swipeable } from 'react-native-gesture-handler';
import { blue, red } from '../theme';

type Props = {
  style?: ViewStyle;
  showFlip?: boolean;
  onPress?: () => void;
  onLongPress?: () => void;
  onLeftAction?: () => void;
  onRightAction?: () => void;
  children: React.ReactNode;
};

export const SwipeComponent: FC<Props> = ({
  style,
  showFlip,
  children,
  onPress,
  onLongPress,
  onLeftAction,
  onRightAction,
}) => {
  const swiper = useRef<Swipeable>(null);

  const renderAction = (
    text: ReactElement,
    color: string,
    x: number,
    progress: Animated.AnimatedInterpolation<number>,
    fn: () => void
  ) => {
    const trans = progress.interpolate({
      inputRange: [0, 1],
      outputRange: [x, 0],
    });
    const opacity = progress.interpolate({
      inputRange: [0, 1],
      outputRange: [0, 1],
    });

    return (
      <Animated.View
        // eslint-disable-next-line react-native/no-inline-styles
        style={{
          flex: 1,
          transform: [{ translateX: trans }],
          opacity,
        }}
      >
        <RectButton
          style={[styles.action, { backgroundColor: color }]}
          onPress={fn}
        >
          {text}
        </RectButton>
      </Animated.View>
    );
  };

  const renderLeftActions = useCallback(
    (
      progress: Animated.AnimatedInterpolation<number>,
      _dragAnimatedValue: Animated.AnimatedInterpolation<number>
    ) => {
      if (!onLeftAction) {
        return null;
      }
      return (
        <View style={styles.buttonWrapper}>
          {renderAction(
            showFlip ? (
              <Feather name="rotate-cw" color={'white'} size={24} />
            ) : (
              <Feather name="copy" color={'white'} size={24} />
            ),
            blue,
            -64,
            progress,
            onLeftAction
          )}
        </View>
      );
    },
    [onLeftAction, showFlip]
  );

  const onLeftOpen = useCallback(() => {
    if (!onLeftAction) {
      return;
    }
    setTimeout(onLeftAction, 100);
    // setTimeout(onLeftAction, 100);
    swiper.current?.close();
  }, [onLeftAction]);

  const renderRightActions = useCallback(
    (
      progress: Animated.AnimatedInterpolation<number>,
      _dragAnimatedValue: Animated.AnimatedInterpolation<number>
    ) => {
      if (!onRightAction) {
        return null;
      }
      return (
        <View style={styles.buttonWrapper}>
          {renderAction(
            <Feather name="trash" color={'white'} size={24} />,
            red,
            64,
            progress,
            onRightAction
          )}
        </View>
      );
    },
    [onRightAction]
  );

  const onRightOpen = useCallback(() => {
    if (!onRightAction) {
      return;
    }
    setTimeout(onRightAction, 100);
    // onRightAction?.();
    swiper.current?.close();
  }, [onRightAction]);

  return (
    <Swipeable
      ref={swiper}
      friction={4}
      leftThreshold={35}
      containerStyle={style || styles.container}
      renderLeftActions={renderLeftActions}
      renderRightActions={renderRightActions}
      onSwipeableOpen={(direction) => {
        direction === 'left' ? onLeftOpen() : onRightOpen();
      }}
    >
      <TouchableOpacity
        style={{ flex: 1 }}
        activeOpacity={0.7}
        onPress={onPress}
        onLongPress={onLongPress}
      >
        {children}
      </TouchableOpacity>
    </Swipeable>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1 },
  action: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
    borderRadius: 10,
    marginHorizontal: 8,
  },
  buttonWrapper: {
    width: 75,
    flexDirection: 'row',
    marginVertical: 10,
  },
});
