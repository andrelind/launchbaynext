import { ImageComponent } from '@/src/components/Image';
import { useTailwind } from '@/src/helpers/tailwind';
import { useLocalSearchParams, useRouter } from 'expo-router';
import React, { useState } from 'react';
import { ActivityIndicator, TouchableOpacity, View } from 'react-native';

export default function ImageScreen() {
  const { tw } = useTailwind();
  const router = useRouter();
  const url = useLocalSearchParams<{ uri?: string; backupUri?: string }>();

  const [loading, setLoading] = useState(true);
  if (!url) {
    return null;
  }

  console.log(url);

  return (
    <TouchableOpacity
      activeOpacity={1}
      style={tw`w-full h-full items-center justify-center bg-transparent`}
      onPress={() => router.back()}
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
          <View style={tw`bg-zinc-900 opacity-70 rounded-full w-16 h-16`} />
          <ActivityIndicator size={'large'} color={tw.color('zinc-300')} style={tw`absolute pt-1 pl-1`} />

        </>
      )}
    </TouchableOpacity>
  );
};

