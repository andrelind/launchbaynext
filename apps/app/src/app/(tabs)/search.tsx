
import React from "react";
import { Switch, Text, TouchableOpacity, View } from "react-native";

export default function SettingsScreen() {
    const [switchValue, setSwitchValue] = React.useState(false);
    return (
        <View style={{ flex: 1, backgroundColor: '#F2F2F7', padding: 16 }}>
            <Text
                style={{
                    fontSize: 12,
                    fontWeight: '500',
                    color: '#8E8E93',
                    marginBottom: 12,
                    paddingLeft: 12,
                }}>
                My form Section
            </Text>

            <View style={{ backgroundColor: '#FFFFFF', borderRadius: 10, overflow: 'hidden' }}>
                <View
                    style={{
                        paddingHorizontal: 16,
                        paddingVertical: 12,
                        minHeight: 44,
                        justifyContent: 'center',
                    }}>
                    <Text style={{ fontSize: 17, color: '#000000' }}>Some text!</Text>
                </View>

                <View
                    style={{
                        // height: StyleSheet.hairlineWidth,
                        backgroundColor: '#C6C6C8',
                        marginLeft: 16,
                    }}
                />

                <TouchableOpacity
                    style={{
                        paddingHorizontal: 16,
                        paddingVertical: 12,
                        minHeight: 44,
                        justifyContent: 'center',
                    }}
                    onPress={() => alert('Clicked!')}>
                    <Text style={{ fontSize: 17, color: '#007AFF', fontWeight: '400' }}>
                        I'm a button
                    </Text>
                </TouchableOpacity>

                <View
                    style={{
                        // height: StyleSheet.hairlineWidth,
                        backgroundColor: '#C6C6C8',
                        marginLeft: 16,
                    }}
                />

                <View
                    style={{
                        paddingHorizontal: 16,
                        paddingVertical: 8,
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                    }}>
                    <Text style={{ fontSize: 17, color: '#000000' }}>
                        This is a switch
                    </Text>
                    <Switch
                        value={switchValue}
                        onValueChange={setSwitchValue}
                        trackColor={{ false: '#E5E5EA', true: '#34C759' }}
                        thumbColor="#FFFFFF"
                    />
                </View>
            </View>
        </View>
    )
}  