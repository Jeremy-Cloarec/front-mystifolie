
import React, { useMemo } from 'react';
import { Pressable, Text, View, StyleSheet } from 'react-native';
import Svg, { Path, Rect } from 'react-native-svg';

const styles = StyleSheet.create({
    containerCount: {
        flex: 1
    }
})

type StepperProps = {
    handleIncrement: () => void;
    handleDecrement: () => void;
    minValue?: number;
    maxValue?: number;
    value: number;
};

type IconProps = {
    height?: number;
    width?: number;
    fill?: string;
};

const MinusIcon = ({ width = 20, height = 20, fill = 'black' }: IconProps): JSX.Element => {
    return (
        <Svg width={width} height={height} viewBox="0 0 24 24" fill="none">
            <Rect width="24" height="24" fill="none" fill-opacity="0.01" />
            <Path d="M22 12.15L2 12.05" stroke={fill} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </Svg>
    );
};

const PlusIcon = ({ width = 20, height = 20, fill = 'black' }: IconProps): JSX.Element => {
    return (
        <Svg width={width} height={height} viewBox="0 0 24 24" fill="none">
            <Rect width="24" height="24" fill="none" fill-opacity="0.01" />
            <Path
                d="M21 12.135L3 12.045M12.135 21L12.045 3"
                stroke={fill}
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </Svg>
    );
};
export default function CountPeople({
    value,
    minValue = -100,
    maxValue = 100,
    handleIncrement,
    handleDecrement,

}: StepperProps) {

      const minIsDisabled = useMemo(() => value <= minValue, [minValue, value]);
  const maxIsDisabled = useMemo(() => value >= maxValue, [maxValue, value]);

    return (
        <View style={tailwind('rounded-lg flex flex-row justify-around items-center')}>
            <Pressable
                onPress={handleDecrement}
                disabled={minIsDisabled}
                style={({ pressed }) => [
                    tailwind('px-2 py-2 items-center flex-row border border-gray-200 rounded-full'),
                    pressed ? tailwind('bg-gray-100') : {},
                ]}
            >
                <MinusIcon
                    fill={minIsDisabled ? tailwind('text-gray-200').color : tailwind('text-black').color}
                    width={16}
                    height={16}
                />
            </Pressable>
            <Text style={[bodyTextStyle.FS17, tailwind('w-8 text-center')]}>{value}</Text>
            <Pressable
                onPress={handleIncrement}
                disabled={maxIsDisabled}
                style={({ pressed }) => [
                    tailwind('px-2 py-2 items-center flex-row border border-gray-200 rounded-full'),
                    pressed ? tailwind('bg-gray-100') : {},
                ]}
            >
                <PlusIcon
                    fill={maxIsDisabled ? tailwind('text-gray-200').color : tailwind('text-black').color}
                    width={16}
                    height={16}
                />
            </Pressable>
        </View>
    )
}