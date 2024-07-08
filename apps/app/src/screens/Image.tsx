import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React, { FC, useState } from 'react';
import { ActivityIndicator, TouchableOpacity, View } from 'react-native';
import { ImageComponent } from '../components/Image';
import { useTailwind } from '../helpers/tailwind';
import { ListStackParams } from '../types/navigation';

type Props = NativeStackScreenProps<ListStackParams, 'Image'>;

export const ImageScreen: FC<Props> = ({ route, navigation }) => {
  const { url } = route.params;
  const { tw } = useTailwind();

  const [loading, setLoading] = useState(true);
  if (!url) {
    return null;
  }

  console.log(url);

  return (
    <TouchableOpacity
      activeOpacity={1}
      style={tw`w-full h-full items-center justify-center bg-transparent`}
      onPress={() => navigation.goBack()}
    >
      <ImageComponent
        transition={300}
        style={tw`${loading ? 'h-1' : 'h-full'} w-full`}
        uri={url}
        contentFit="contain"
        onLoadEnd={() => setLoading(false)}
      />
      {loading && (
        <>
          <View style={tw`bg-gray-900 opacity-70 rounded-full w-16 h-16`} />
          <ActivityIndicator size={'large'} color={tw.color('gray-300')} style={tw`absolute pt-1 pl-1`} />

        </>
      )}
    </TouchableOpacity>
  );
};

export default ImageScreen;
