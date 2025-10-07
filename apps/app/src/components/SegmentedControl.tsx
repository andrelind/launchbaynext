import { Host, Picker } from '@expo/ui/swift-ui';
import { FC, useState } from 'react';
import { Platform, Text, TouchableOpacity, View } from 'react-native';
import { useTailwind } from '../helpers/tailwind';

type Props = {
    segments: string[];
    onChange?: (index: number) => void;
};

export const SegmentedControl: FC<Props> = ({
    segments,
    onChange,
}) => {
    const { tw } = useTailwind();
    const [selectedSegment, setSelectedSegment] = useState(0);

    if (Platform.OS === 'ios') {
        return (
            <Host matchContents>
                <Picker
                    // label='Rule Set'
                    variant='segmented'
                    options={segments}
                    selectedIndex={selectedSegment}
                    // color='blue'
                    onOptionSelected={(e) => {
                        setSelectedSegment(e.nativeEvent.index);
                        onChange?.(e.nativeEvent.index);
                    }}
                />
            </Host>
        )
    }
    return (
        <View style={tw`flex-row gap-x-1 bg-white dark:bg-zinc-800 rounded-lg p-1`}>
            {segments.map((segment, index) => (
                <TouchableOpacity
                    key={segment}
                    onPress={() => {
                        onChange?.(index);
                    }}
                    style={tw`flex-1 py-2 items-center justify-center rounded-lg ${selectedSegment === index ? 'bg-zinc-300 dark:bg-zinc-800 px-2' : 'bg-white dark:bg-zinc-800'
                        }`}
                >
                    <Text
                        style={tw`text-sm font-medium ${selectedSegment === index ? 'text-orange-500' : 'text-black dark:text-zinc-400'}`}
                    >
                        {segment}
                    </Text>
                </TouchableOpacity>
            ))}
        </View>
    );
};
