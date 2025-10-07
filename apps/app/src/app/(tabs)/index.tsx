import { useTailwind } from '@/src/helpers/tailwind';
import { DarkTheme, ThemeProvider } from '@react-navigation/native';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import 'react-native-reanimated';

export const unstable_settings = {
    anchor: '(tabs)',
};

export default function RootLayout() {
    const { tw } = useTailwind();

    return (
        <GestureHandlerRootView style={tw`flex-1`}>
            <ThemeProvider value={DarkTheme}>
                <Stack screenOptions={{
                    headerStyle: { backgroundColor: tw.color('zinc-950'), },
                    headerTintColor: '#fff',
                    contentStyle: { backgroundColor: tw.color('zinc-950') },
                }}>
                    <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
                    <Stack.Screen name="modal" options={{ presentation: 'modal', title: 'Modal' }} />
                </Stack>
            </ThemeProvider>
            <StatusBar style="auto" />
        </GestureHandlerRootView>
    );

}
