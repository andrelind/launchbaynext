import { useTailwind } from '@/src/helpers/tailwind';
import { trpc } from '@/src/helpers/trpc';
import { useSystemStore } from '@/src/stores/system';
import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import {
    Alert,
    Text,
    TouchableOpacity,
    View
} from 'react-native';
import { useShallow } from 'zustand/react/shallow';

export default function AccountScreen() {
    const { tw } = useTailwind();
    const router = useRouter();
    const { user, setToken } = useSystemStore(useShallow((s) => ({ user: s.user, setToken: s.setToken })));

    const [deleting, setDeleting] = useState(false);

    return (
        <View style={tw`w-full gap-y-3 px-2 py-3`}>
            <Text style={tw`text-white text-center`}>Logged in as {user?.name}</Text>
            <TouchableOpacity
                disabled={deleting}
                style={tw`mx-2 py-3 justify-center items-center rounded-lg bg-[#FF3069]`}
                onPress={() => {
                    Alert.alert(
                        'Logout?',
                        `Do you want to logout from the account "${user?.name}"?`,
                        [
                            {
                                text: 'Logout',
                                style: 'destructive',
                                onPress: () => {
                                    setToken(undefined);
                                    router.back()
                                }
                            },
                            { text: 'Cancel', style: 'cancel' }
                        ]
                    );
                }}
            >
                <Text style={tw`text-white font-medium`}>Logout</Text>
            </TouchableOpacity>

            <TouchableOpacity
                disabled={deleting}
                style={tw`mt-6 mx-2 py-3 justify-center items-center`}
                onPress={() => {
                    Alert.alert(
                        'Delete account?',
                        `Do you want to delete the account "${user?.name}"?`,
                        [
                            {
                                text: 'Delete',
                                style: 'destructive',
                                onPress: async () => {
                                    setDeleting(true);
                                    await trpc.deleteAccount.mutate();
                                    setToken(undefined);
                                    router.back();
                                }
                            },
                            { text: 'Cancel', style: 'cancel' }
                        ]
                    );
                }}
            >
                <Text style={tw`font-medium text-[#FF3069]`}>{deleting ? 'Deleting account...' : 'Delete account'}</Text>
            </TouchableOpacity>
        </View>
    );
};
