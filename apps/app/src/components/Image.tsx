import { Image, ImageProps } from 'expo-image';
import { FC, useState } from 'react';

type Props = ImageProps & {
  uri: { uri?: string; backupUri?: string };
};

export const ImageComponent: FC<Props> = ({ uri, ...props }) => {
  const [currentUri, setCurrentUri] = useState(uri.uri);

  return (
    <Image
      transition={300}
      source={{ uri: currentUri }}
      {...props}
      onError={() => {
        if (uri.backupUri) {
          setCurrentUri(uri.backupUri);
        }
      }}
    />
  );
};
