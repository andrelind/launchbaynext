import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { TabComponent } from './navigation/tabs';
import { ModalStackParams } from './types/navigation';

const RootStackNavigator = createNativeStackNavigator<ModalStackParams>();
export const RootStackComponent = () => {
  return (
    <RootStackNavigator.Navigator screenOptions={{ headerShown: false }}>
      <RootStackNavigator.Group>
        <RootStackNavigator.Screen name="Tab" component={TabComponent} />
      </RootStackNavigator.Group>
    </RootStackNavigator.Navigator>
  );
};

export default RootStackNavigator;
