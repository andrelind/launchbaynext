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
    const { slot } = useGlobalSearchParams();

    return (
        <Stack>
            <Stack.Screen name="index" options={{
                title: slot as string || 'Select Upgrade',
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

        </Stack>
    );
}
