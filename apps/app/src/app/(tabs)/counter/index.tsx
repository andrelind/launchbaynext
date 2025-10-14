import { useTailwind } from '@/src/helpers/tailwind';
import { Octicons } from '@expo/vector-icons';
import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

export default function CounterScreen() {
    const { tw } = useTailwind();

    const [round, setRound] = useState(1);
    const [myScore, setMyScore] = useState(0);
    const [opponentScore, setOpponentScore] = useState(0);

    return (
        <ScrollView
            style={tw`bg-zinc-950 h-full`}
            contentContainerStyle={styles.container}
        >
            <View
                style={tw`flex flex-row justify-between items-center bg-white dark:bg-zinc-800 rounded-lg`}
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

