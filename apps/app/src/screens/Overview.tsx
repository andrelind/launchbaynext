import { FC, useRef } from 'react';
import { Animated, ScrollView } from 'react-native';

import { useTailwind } from '../helpers/tailwind';
import { captureScroll, getSpoingyTransform } from '../helpers/ui';
import { xwsStore } from '../stores/xws';

const height = 200;

type Props = {};

export const OverviewScreen: FC<Props> = ({}) => {
  const { tw } = useTailwind();
  const scrollY = useRef(new Animated.Value(0)).current;

  const { lists, setLists, addSquadron } = xwsStore((s) => ({
    lists: s.lists,
    setLists: s.setLists,
    addSquadron: s.addSquadron,
  }));

  return (
    <>
      <ScrollView {...captureScroll}>
        <Animated.Image
          source={require('../assets/swz01_anc_slider.jpg')}
          style={[
            tw`w-full`,
            { height, transform: getSpoingyTransform(scrollY, height) },
          ]}
          resizeMode="contain"
        />
      </ScrollView>
    </>
  );
};
