import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React, { FC, useLayoutEffect, useState } from 'react';
import { Alert, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
// import { MinusIcon, PlusIcon } from 'react-native-heroicons/outline';
// import { Button, Text, View } from 'react-native-ui-lib';
import { Octicons } from '@expo/vector-icons';
import { useTailwind } from '../helpers/tailwind';
import { CounterStackParams } from '../types/navigation';

type Props = NativeStackScreenProps<CounterStackParams, 'Counter'>;

const missions = [
  'Assault at the Satellite Array',
  'Chance Engagement',
  'Salvage Mission',
  'Scramble the Transmissions',
];

export const CounterScreen: FC<Props> = ({ navigation }) => {
  const { tw } = useTailwind();

  const [round, setRound] = useState(1);
  const [myScore, setMyScore] = useState(0);
  const [opponentScore, setOpponentScore] = useState(0);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <TouchableOpacity
          style={tw`mr-3`}
          onPress={() => {
            const mission =
              missions[Math.floor(Math.random() * missions.length)];
            Alert.alert(mission);
          }}
        >
          <Text style={tw`text-primary-500 font-medium`}>Mission</Text>
        </TouchableOpacity>
      ),
      headerRight: () => (
        <TouchableOpacity
          style={tw`mr-3`}
          onPress={() => {
            setRound(1);
            setMyScore(0);
            setOpponentScore(0);
          }}
        >
          <Text style={tw`text-primary-500 font-medium`}>Reset</Text>
        </TouchableOpacity>
      ),
    });
  }, [navigation]);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View
        style={tw`flex flex-row justify-between items-center bg-white dark:bg-slate-900 rounded-lg`}
      >
        <TouchableOpacity
          disabled={round === 1}
          style={tw`p-4`}
          onPress={() => setRound(round - 1)}
        >
          <Octicons name="dash" size={30} style={tw`text-black dark:text-white`} />
        </TouchableOpacity>

        <Text style={tw`text-black dark:text-white font-bold`}>{`Round: ${round}`}</Text>

        <TouchableOpacity style={tw`p-4`} onPress={() => setRound(round + 1)}>
          <Octicons name="plus" size={30} style={tw`text-black dark:text-white`} />
        </TouchableOpacity>
      </View>
      <View style={tw`flex-row justify-between items-center mt-6`}>
        <View style={tw`items-center justify-center`}>
          <Text
            style={tw`text-white text-lg font-semibold`}
          >{`Me: ${myScore}`}</Text>

          <View style={tw`flex-row justify-center`}>
            <TouchableOpacity
              disabled={myScore === 0}
              style={tw`p-4`}
              onPress={() => setMyScore(myScore - 1)}
            >
              <Octicons name="dash" size={30} color="white" />
            </TouchableOpacity>
            <TouchableOpacity
              style={tw`p-4`}
              onPress={() => setMyScore(myScore + 1)}
            >
              <Octicons name="plus" size={30} color="white" />
            </TouchableOpacity>
          </View>
        </View>
        <View style={tw`items-center justify-center`}>
          <Text
            style={tw`text-white text-lg font-semibold`}
          >{`Opponent: ${opponentScore}`}</Text>

          <View style={tw`flex-row justify-center`}>
            <TouchableOpacity
              disabled={opponentScore === 0}
              style={tw`p-4`}
              onPress={() => setOpponentScore(opponentScore - 1)}
            >
              <Octicons name="dash" size={30} color="white" />
            </TouchableOpacity>
            <TouchableOpacity
              style={tw`p-4`}
              onPress={() => setOpponentScore(opponentScore + 1)}
            >
              <Octicons name="plus" size={30} color="white" />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: { padding: 10 },
});

// CounterScreen.options = {
//   topBar: {
//     title: { text: 'Counter' },
//     rightButtons: [{ text: 'Reset', id: 'reset' }],
//   },
//   bottomTab: { text: 'Counter', icon: Assets.icons.counter },
// };

export default CounterScreen;
