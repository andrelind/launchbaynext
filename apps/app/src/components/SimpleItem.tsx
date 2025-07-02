import { Feather } from '@expo/vector-icons';
import React, { FC, ReactNode } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { useTailwind } from '../helpers/tailwind';

type Props = {
  text: string;
  onPress: () => void;
  icon?: ReactNode;
  hideArrow?: boolean;
  color?: string;
  subtitle?: string;
  children?: ReactNode;
};

export const SimpleItem: FC<Props> = ({
  icon,
  text,
  onPress,
  hideArrow,
  color,
  subtitle,
  children,
}) => {
  const { tw } = useTailwind();

  return (
    <>
      <TouchableOpacity
        style={tw`flex-row justify-between p-3 bg-white dark:bg-zinc-800 rounded-lg overflow-hidden`}
        onPress={onPress}
      >
        <View style={tw`flex-row items-center`}>
          {icon && <View style={tw`mr-2`}>{icon}</View>}
          <View>
            <Text style={tw`${color ? `text-[${color}]` : 'text-black dark:text-white'}`}>
              {text}
            </Text>
            {subtitle && (
              <Text style={tw`text-sm text-zinc-500 dark:text-zinc-400`}>
                {subtitle}
              </Text>
            )}
          </View>
        </View>
        {!hideArrow && (
          <Feather name="chevron-right" size={20} color={'white'} />
        )}
      </TouchableOpacity>
      {children}
    </>
  );
};
