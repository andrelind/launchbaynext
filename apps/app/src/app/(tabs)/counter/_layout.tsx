import { useTailwind } from '@/src/helpers/tailwind';
import { useSystemStore } from '@/src/stores/system';
import { Stack } from 'expo-router';
import { useState } from 'react';
import { Alert, Text, TouchableOpacity } from 'react-native';


export const unstable_settings = {
    initialRouteName: 'index',
};

const missions = [
    'Assault at the Satellite Array',
    'Chance Engagement',
    'Salvage Mission',
    'Scramble the Transmissions',
    'Ancient Knowledge',
];

export default function CounterLayout() {
    const { tw } = useTailwind();
    const user = useSystemStore((s) => s.user);

    const [round, setRound] = useState(1);
    const [myScore, setMyScore] = useState(0);
    const [opponentScore, setOpponentScore] = useState(0);

    return <Stack screenOptions={{
        headerStyle: { backgroundColor: tw.color('zinc-950'), },
        headerTintColor: '#fff',
        contentStyle: { backgroundColor: tw.color('zinc-950') },
    }} >
        <Stack.Screen name="index" options={{
            title: 'Counter',
            headerLeft: () => (
                <TouchableOpacity
                    style={tw`px-3`}
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
                    style={tw`px-3`}
                    onPress={() => {
                        setRound(1);
                        setMyScore(0);
                        setOpponentScore(0);
                    }}
                >
                    <Text style={tw`text-primary-500 font-medium`}>Reset</Text>
                </TouchableOpacity>
            ),
        }} />

    </Stack>;
}
