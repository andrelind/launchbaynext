import { useTailwind } from '@/src/helpers/tailwind';
import { Feather } from '@expo/vector-icons';
import { Stack, useGlobalSearchParams, useRouter } from 'expo-router';
import { TouchableOpacity } from 'react-native';
import 'react-native-reanimated';

export const unstable_settings = {
    anchor: 'index',
};

export default function RootLayout() {
    const { tw } = useTailwind();
    const router = useRouter();
    const params = useGlobalSearchParams();
    const pilotIndex = params.pilotIndex ? parseInt(params.pilotIndex as string, 10) : undefined;

    return (
        <Stack>
            <Stack.Screen name="index" options={{
                title: 'Ships',
                headerRight: () => (
                    <TouchableOpacity onPress={() => {
                        router.back()
                    }} style={tw`p-2`}>
                        <Feather
                            name='x'
                            size={20}
                            color={'white'}
                        />
                    </TouchableOpacity>
                ),
            }} />
            <Stack.Screen name="pilots" options={{
                title: 'Pilots',
                headerRight: pilotIndex !== undefined ? () => (
                    <TouchableOpacity onPress={() => {
                        router.back()
                    }} style={tw`p-2`}>
                        <Feather
                            name='x'
                            size={20}
                            color={'white'}
                        />
                    </TouchableOpacity>
                ) : undefined,
            }} />
        </Stack>
    );
}
