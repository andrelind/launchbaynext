import React from 'react';
import { NavigationFunctionComponent } from 'react-native-navigation';
import { WebView } from 'react-native-webview';

type Props = {
  url: string;
};

export const LBNWebView: NavigationFunctionComponent<Props> = ({ url }) => {
  return <WebView source={{ uri: url }} />;
};

LBNWebView.options = {
  topBar: {
    largeTitle: { visible: false },
  },
};

export default LBNWebView;
