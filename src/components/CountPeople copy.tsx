
import React, { useMemo } from 'react';
import { Pressable, Text, View, StyleSheet } from 'react-native';
import Svg, { Path, Rect } from 'react-native-svg';
import { mainStyle } from '../mainStyles';

const styles = StyleSheet.create({
    containerCount: {
        flex: 1,
        flexDirection: "row",
        width: "100%",
        justifyContent: "space-between",
        alignItems: "center",
    },
    pressable: {
        padding: 20,
        height: 90,
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    value: {
        flex: 1,
        height: 90,
        textAlign: "center",
        justifyContent: "center",
        alignItems: "center",
        padding: 20,
        backgroundColor: "white",
    },
    right: {
        borderTopRightRadius: 12,
        borderBottomRightRadius: 12,
    },
    left: {
        borderTopLeftRadius: 12,
        borderBottomLeftRadius: 12,
    },
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
            <Path d="M22 12.15L2 12.05" stroke={fill} strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
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
                strokeWidth="4"
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
        <View
            style={styles.containerCount}>
            <Pressable
                onPress={handleDecrement}
                disabled={minIsDisabled}
                style={({ pressed }) => [
                    styles.pressable,
                    styles.left,
                    mainStyle.bgViolet4,
                    pressed ? mainStyle.bgViolet5 : {},
                    minIsDisabled ? { backgroundColor: "#DDD6E4" } : {},
                ]}
            >
                <MinusIcon
                    fill={minIsDisabled ? "#8A70A3" : "#58347C"}
                    width={16}
                    height={16}
                />
            </Pressable>
            <View style={styles.value}>
                <Text style={[mainStyle.colorViolet1, mainStyle.text, mainStyle.utendoMedium]}>
                    {value}
                </Text>
            </View>
            <Pressable
                onPress={handleIncrement}
                disabled={maxIsDisabled}
                style={({ pressed }) => [
                    styles.pressable,
                    styles.right,
                    mainStyle.bgViolet4,
                    pressed ? mainStyle.bgViolet5 : {},
                    maxIsDisabled ? { backgroundColor: "#DDD6E4" } : {},
                ]}
            >
                <PlusIcon
                    fill={maxIsDisabled ? "#8A70A3" : "#58347C"}
                    width={16}
                    height={16}
                />
            </Pressable>
        </View>
    )
}