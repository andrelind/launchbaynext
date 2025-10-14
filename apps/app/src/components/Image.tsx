import { ImageBackground, ImageProps } from 'expo-image';
import { FC, useEffect, useState } from 'react';

type Props = ImageProps & {
  uri: { uri?: string; backupUri?: string };
  children?: React.ReactNode;
};

export const ImageComponent: FC<Props> = ({ uri, ...props }) => {
  const [currentUri, setCurrentUri] = useState(uri.uri);

  useEffect(() => {
    setCurrentUri(uri.uri);
  }, [uri.uri]);

  return (

    <ImageBackground
      recyclingKey={currentUri}
      transition={300}
      source={{ uri: currentUri }}
      {...props}
      onError={(e) => {
        console.log('ImageComponent onError', e);
        if (uri.backupUri) {
          setCurrentUri(uri.backupUri);
        }
      }}
    >
      {props.children}
    </ImageBackground>
  );
};
