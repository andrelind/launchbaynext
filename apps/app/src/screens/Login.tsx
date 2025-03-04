import { Feather } from '@expo/vector-icons';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import * as Linking from 'expo-linking';
import React, { FC, useEffect, useState } from 'react';
import {
    ActivityIndicator,
    Text, TextInput, TouchableOpacity, View,
} from 'react-native';
import {
    CodeField,
    Cursor,
    useBlurOnFulfill,
    useClearByFocusCell,
} from 'react-native-confirmation-code-field';
import Toast from 'react-native-toast-message';
import { syncWithServer } from '../helpers/api';
import { useTailwind } from '../helpers/tailwind';
import { trpc } from '../helpers/trpc';
import { collectionStore } from '../stores/collection';
import { systemStore } from '../stores/system';
import { xwsStore } from '../stores/xws';
import { OverviewStackParams } from '../types/navigation';

const CELL_COUNT = 6;

type Props = NativeStackScreenProps<OverviewStackParams, 'Login'>;

export const LoginScreen: FC<Props> = ({ navigation }) => {
    const { tw } = useTailwind();
    const setToken = systemStore((s) => s.setToken);

    const [busy, setBusy] = useState(false);

    const [username, setUsername] = useState(__DEV__ ? 'andre@lindapp.se' : '');
    const [waitingForLink, setWaitingForLink] = useState(false);

    const [value, setValue] = useState('');
    const [error, setError] = useState('');

    const ref = useBlurOnFulfill({ value, cellCount: CELL_COUNT });
    const [props, getCellOnLayoutHandler] = useClearByFocusCell({
        value,
        setValue,
    });

    const validEmail = username.includes('@') && username.includes('.');
    const url = Linking.useURL();

    useEffect(() => {
        const handleUrl = async (urlToFix: string) => {
            const email = urlToFix.split('email=')[1].split('&')[0];
            // const token = url.split('token=')[1].split('&')[0];
            const code = urlToFix.split('code=')[1].split('&')[0];

            if (email !== username) {
                // Wrong email
                // TODO: Show error message
                return;
            }

            // Check if code is correct
            setValue(code);
            setError('');
            try {
                setBusy(true);
                const token = await trpc.validateLogin.mutate({
                    email,
                    code,
                });

                setToken(token);
                navigation.pop();
                setTimeout(() => {
                    syncWithServer(xwsStore.getState(), collectionStore.getState());
                }, 100);
            } catch (e: any) {
                console.error(e.message);
                setError(e.message);
            }
            setBusy(false);
        };
        // eslint-disable-next-line @typescript-eslint/no-unused-expressions
        url?.includes('login_url_direct.php') && handleUrl(url);
    }, [url]);

    return (
        <View style={tw`w-full gap-y-3 p-2`}>
            <Text style={tw`px-2 text-center text-xs text-zinc-400`}>
                {!waitingForLink ? 'Enter your email to get started' : 'Fill in the code we sent you'}
                {!waitingForLink && '\nIf you previously had an account via Facebook, Google or Apple, please use the same email address to log in, and your data will be merged into the new account.'}
            </Text>
            {!waitingForLink && (
                <View
                    style={tw`px-2 py-4 bg-zinc-800 rounded-lg flex-row gap-x-2 items-center`}
                >
                    <Feather name='mail' color={tw.color('zinc-400')} size={24} />
                    <TextInput
                        style={tw`flex-1 text-zinc-400`}
                        placeholder="Email"
                        placeholderTextColor={tw.color('zinc-400')}
                        value={username}
                        onChangeText={(text) => setUsername(text)}
                        keyboardType="email-address"
                        autoCorrect={false}
                        autoCapitalize="none"
                        autoComplete="email"
                    />
                </View>
            )}

            {waitingForLink && (
                <>
                    <CodeField
                        ref={ref}
                        // eslint-disable-next-line react/jsx-props-no-spreading
                        {...props}
                        value={value}
                        InputComponent={TextInput}
                        onChangeText={(e: string) => {
                            setValue(e);
                            setError('');
                        }}
                        cellCount={CELL_COUNT}
                        rootStyle={tw`mt-4 gap-x-2`}
                        keyboardType="number-pad"
                        textContentType="oneTimeCode"
                        autoComplete="one-time-code"
                        renderCell={({ index, symbol, isFocused }) => (
                            <Text
                                key={index}
                                style={[
                                    tw`h-10 text-lg text-white text-center font-medium leading-9 bg-zinc-600 flex-1 rounded border ${error ? 'border-zinc-100' : 'border-zinc-600'
                                        }`,
                                    isFocused && tw`border-white`,
                                ]}
                                onLayout={getCellOnLayoutHandler(index)}
                            >
                                {symbol || (isFocused ? <Cursor /> : null)}
                            </Text>
                        )}
                    />
                    {error && (
                        <Text style={tw`text-left text-sm text-red-500`}>{error}</Text>
                    )}
                </>
            )}

            {!waitingForLink && (
                <TouchableOpacity
                    disabled={!validEmail || busy}
                    style={tw`${validEmail ? 'bg-orange-500' : 'bg-zinc-400'} rounded-lg py-4`}
                    onPress={async () => {
                        try {
                            setBusy(true);
                            await trpc.registerOrLogin.mutate({
                                email: username,
                            });
                            setBusy(false);

                            setWaitingForLink(true);

                            Toast.show({
                                type: 'success',
                                text1: 'A login link has been sent to your email',
                                text2: 'Please check your email and click the link to continue.',
                            });
                        } catch (e) {
                            console.error(e);
                            setError((e as Error).message);
                        }

                        // console.log(result);
                    }}
                >
                    {busy ? <ActivityIndicator color={'white'} /> : <Text
                        style={tw`text-center ${validEmail ? 'text-white' : 'text-gray-600'
                            } font-semibold`}
                    >
                        Continue
                    </Text>}
                </TouchableOpacity>
            )}
            {waitingForLink && (
                <TouchableOpacity
                    disabled={value.length !== 6 || busy}
                    style={tw`${value.length === 6 ? 'bg-orange-500' : 'bg-zinc-400'
                        } rounded-lg py-4`}
                    onPress={async () => {
                        try {
                            setError('');
                            setBusy(true);
                            const token = await trpc.validateLogin.mutate({
                                email: username,
                                code: value,
                            });
                            setBusy(false);

                            setToken(token);
                            navigation.pop();
                            setTimeout(() => {
                                syncWithServer(xwsStore.getState(), collectionStore.getState());
                            }, 100);
                        } catch (e: any) {
                            console.error(e);
                            setError(e.message);
                        }
                    }}
                >
                    {busy ? <ActivityIndicator color={'white'} /> : <Text
                        style={tw`text-center ${value.length === 6 ? 'text-white' : 'text-gray-600'
                            } font-semibold`}
                    >
                        Continue
                    </Text>}
                </TouchableOpacity>
            )}
        </View>
    );
};
