import { Feather } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React, { FC } from 'react';

import { useTailwind } from '../helpers/tailwind';
import { AccountScreen } from '../screens/Account';
import CollectionScreen from '../screens/Collection';
import CollectionDetailScreen from '../screens/CollectionDetail';
import CounterScreen from '../screens/Counter';
import DatabaseScreen from '../screens/Database';
import ImageScreen from '../screens/Image';
import LoadoutsScreen from '../screens/Loadouts';
import { LoginScreen } from '../screens/Login';
import MissingItemsScreen from '../screens/MissingItems';
import { OverviewScreen } from '../screens/Overview';
import PilotScreen from '../screens/Pilot';
import SelectPilotScreen from '../screens/SelectPilot';
import SelectShipScreen from '../screens/SelectShip';
import SelectUpgradeScreen from '../screens/SelectUpgrade';
import SquadronScreen from '../screens/Squadron';
import SquadronsScreen from '../screens/Squadrons';
import SquadronSettingsScreen from '../screens/SquadronSettings';
import {
  CollectionStackParams,
  CounterStackParams,
  DatabaseStackParams,
  ListStackParams,
  OverviewStackParams,
  SelectStackParams,
} from '../types/navigation';

const OverviewStack = createNativeStackNavigator<OverviewStackParams>();
const OverviewStackComponent = () => {
  return (
    <OverviewStack.Navigator >
      <OverviewStack.Screen
        name="Overview"
        component={OverviewScreen}
        options={{
          headerShown: true,
        }}
      />
      <OverviewStack.Screen
        name="Login"
        component={LoginScreen}
      />
      <OverviewStack.Screen
        name="Account"
        component={AccountScreen}
      />
    </OverviewStack.Navigator>
  );
};

const SelectStack = createNativeStackNavigator<SelectStackParams>();
const SelectStackComponent = () => {
  return (
    <SelectStack.Navigator>
      <SelectStack.Screen
        name="SelectShip"
        component={SelectShipScreen}
        options={{ headerTitle: 'Select Ship' }}
      />
      <SelectStack.Screen
        name="SelectPilot"
        component={SelectPilotScreen}
        options={{ headerTitle: 'Select Pilot' }}
      />
      <SelectStack.Screen
        name="SelectUpgrade"
        component={SelectUpgradeScreen}
        options={{ headerTitle: 'Select Upgrade' }}
      />
      <SelectStack.Screen name='SquadronSettings' component={SquadronSettingsScreen} />
      <ListStack.Screen
        name="Image"
        component={ImageScreen}
        options={{
          presentation: 'modal',
          contentStyle: { backgroundColor: 'transparent' },
          headerShown: false,
        }}
      />
    </SelectStack.Navigator>
  );
};

const ListStack = createNativeStackNavigator<ListStackParams>();
const ListStackComponent = () => {
  return (
    <ListStack.Navigator>
      <ListStack.Screen name="Squadrons" component={SquadronsScreen} />
      <ListStack.Screen name="Squadron" component={SquadronScreen} />
      <ListStack.Screen name="Pilot" component={PilotScreen} />
      <ListStack.Screen name="MissingItems" component={MissingItemsScreen} />
      <ListStack.Screen name="SelectLoadout" component={LoadoutsScreen} />

      <ListStack.Screen
        name="SelectModal"
        component={SelectStackComponent}
        options={{ presentation: 'modal', headerShown: false }}
      />
      <ListStack.Screen
        name="Image"
        component={ImageScreen}
        options={{
          presentation: 'modal',
          contentStyle: { backgroundColor: 'transparent' },
          headerShown: false,
        }}
      />
    </ListStack.Navigator>
  );
};

const DatabaseStack = createNativeStackNavigator<DatabaseStackParams>();
const DatabaseStackComponent = () => {
  return (
    <DatabaseStack.Navigator>
      <DatabaseStack.Screen name="Database" component={DatabaseScreen} />
    </DatabaseStack.Navigator>
  );
};

const CounterStack = createNativeStackNavigator<CounterStackParams>();
const CounterStackComponent = () => {
  return (
    <CounterStack.Navigator>
      <CounterStack.Screen name="Counter" component={CounterScreen} />
    </CounterStack.Navigator>
  );
};

const CollectionStack = createNativeStackNavigator<CollectionStackParams>();
const CollectionStackComponent = () => {
  return (
    <CollectionStack.Navigator>
      <CollectionStack.Screen name="Collection" component={CollectionScreen} />
      <CollectionStack.Screen
        name="CollectionDetail"
        component={CollectionDetailScreen}
      />
    </CollectionStack.Navigator>
  );
};

const Tab = createBottomTabNavigator();
export const TabComponent: FC<{}> = () => {
  const { tw } = useTailwind();

  return (
    <Tab.Navigator
      screenOptions={{ tabBarInactiveTintColor: tw.color('zinc-500') }}
    >
      <Tab.Screen
        name="OverviewStack"
        component={OverviewStackComponent}
        options={{
          headerShown: false,
          tabBarLabel: 'Overview',
          tabBarIcon: ({ color }) => (
            <Feather name="home" size={24} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="SquadronsStack"
        component={ListStackComponent}
        options={{
          headerShown: false,
          tabBarLabel: 'Squadrons',
          tabBarIcon: ({ color }) => (
            <Feather name="list" size={24} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="DatabaseStack"
        component={DatabaseStackComponent}
        options={{
          headerShown: false,
          tabBarLabel: 'Search',
          tabBarIcon: ({ focused, color }) => (
            <Feather name="search" size={24} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="CounterStack"
        component={CounterStackComponent}
        options={{
          headerShown: false,
          tabBarLabel: 'Counter',
          tabBarIcon: ({ focused, color }) => (
            <Feather name="divide-circle" size={24} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="CollectionStack"
        component={CollectionStackComponent}
        options={{
          headerShown: false,
          tabBarLabel: 'Collection',
          tabBarIcon: ({ focused, color, size }) => (
            <Feather name="folder" size={24} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};
