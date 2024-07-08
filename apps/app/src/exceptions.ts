import Crashes from 'appcenter-crashes';
import { Alert } from 'react-native';
import { setJSExceptionHandler } from 'react-native-exception-handler';
import { runCodePush } from './helpers/code-push';

setJSExceptionHandler((error, isFatal) => {
  const crash = Crashes.ExceptionModel.createFromError(error);
  Crashes.trackError(crash);

  runCodePush();

  if (isFatal) {
    Alert.alert(
      'Unexpected error occurred',
      `
Error: ${isFatal ? 'Fatal:' : ''} ${error.name} ${error.message}
  
You need to restart the app.`,
    );
  } else {
    console.error(error);
  }
});
