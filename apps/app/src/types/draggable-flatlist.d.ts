import React from 'react';
import { FlatListProps, StyleProp, ViewStyle } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import Animated from 'react-native-reanimated';
import { DEFAULT_PROPS } from './default-props';

// declare module 'react-native-draggable-flatlist' {
export const SCROLL_POSITION_TOLERANCE = 2;

// Is there a better way to check for v2?
export const isReanimatedV2 = true;

export type DragEndParams<T> = {
  data: T[];
  from: number;
  to: number;
};
type Modify<T, R> = Omit<T, keyof R> & R;

type DefaultProps = Readonly<typeof DEFAULT_PROPS>;

export type DraggableFlatListProps<T> = Modify<
  FlatListProps<T>,
  {
    data: T[];
    activationDistance?: number;
    animationConfig?: Partial<Animated.SpringConfig>;
    autoscrollSpeed?: number;
    autoscrollThreshold?: number;
    containerStyle?: StyleProp<ViewStyle>;
    debug?: boolean;
    dragItemOverflow?: boolean;
    keyExtractor: (item: T, index: number) => string;
    onDragBegin?: (index: number) => void;
    onDragEnd?: (params: DragEndParams<T>) => void;
    onPlaceholderIndexChange?: (placeholderIndex: number) => void;
    onRef?: (ref: FlatList<T>) => void;
    onRelease?: (index: number) => void;
    onScrollOffsetChange?: (scrollOffset: number) => void;
    renderItem: RenderItem<T>;
    renderPlaceholder?: RenderPlaceholder<T>;
    simultaneousHandlers?: React.Ref<any> | React.Ref<any>[];
  } & Partial<DefaultProps>
>;

export type RenderPlaceholder<T> = (params: {
  item: T;
  index: number;
}) => JSX.Element;

export type RenderItemParams<T> = {
  item: T;
  index?: number; // This is technically a "last known index" since cells don't necessarily rerender when their index changes
  drag: () => void;
  isActive: boolean;
};

export type RenderItem<T> = (params: RenderItemParams<T>) => React.ReactNode;

export type AnimatedFlatListType = <T>(
  props: Animated.AnimateProps<
    FlatListProps<T> & {
      ref: React.Ref<FlatList<T>>;
      simultaneousHandlers?: React.Ref<any> | React.Ref<any>[];
    }
  >,
) => React.ReactElement;

export type CellData = {
  measurements: {
    size: number;
    offset: number;
  };
};
// }
