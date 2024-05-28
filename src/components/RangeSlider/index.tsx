import React, { useCallback, useState } from "react";
import RangeSliderRN from "rn-range-slider";
import { View, Text } from "react-native";
import { mainStyle } from "../../mainStyles";

import Label from "./Label";
import Notch from "./Notch";
import Rail from "./Rail";
import RailSelected from "./RailSelected";
import Thumb from "./Thumb";

type Props = {
    from: number;
    to: number;
    low: number;
    high: number;
    setLow: React.Dispatch<React.SetStateAction<number>>;
    setHigh: React.Dispatch<React.SetStateAction<number>>;
};

const RangeSlider = ({ from, to, low, high, setLow, setHigh }: Props) => {
    // const RangeSlider = () => {
    const renderThumb = useCallback(() => <Thumb />, []);
    const renderRail = useCallback(() => <Rail />, []);
    const renderRailSelected = useCallback(() => <RailSelected />, []);
    const renderLabel = useCallback((value: string) => <Label text={value} />, []);
    const renderNotch = useCallback(() => <Notch />, []);

    const handleValueChange = useCallback(
        (newLow: React.SetStateAction<number>, newHigh: React.SetStateAction<number>) => {
            setLow(newLow);
            setHigh(newHigh);
        },
        [setLow, setHigh]
    );

    return (
        <>
            <View
                style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    marginVertical: 10
                }}
            >
                <View>
                    <Text
                        style={[
                            { fontStyle: "italic" },
                            { textAlign: "left", fontSize: 14, color: "#DDD6E4" }
                        ]}
                    >
                        Min
                    </Text>
                    <Text
                        style={[{ fontWeight: "bold" }, { fontSize: 18, color: "#58347C" }]}
                    >
                        {low}€
                    </Text>
                </View>
                <View>
                    <Text
                        style={[
                            { fontStyle: "italic" },
                            { textAlign: "right", fontSize: 14, color: "#DDD6E4" }
                        ]}
                    >
                        Max
                    </Text>
                    <Text
                        style={[{ fontWeight: "bold" }, { fontSize: 18, color: "#58347C" }]}
                    >
                        {high}€
                    </Text>
                </View>
            </View>
            <RangeSliderRN
                // style={styles.slider}
                min={from}
                max={to}
                step={1}
                floatingLabel
                renderThumb={renderThumb}
                renderRail={renderRail}
                renderRailSelected={renderRailSelected}
                // renderLabel={renderLabel}
                // renderNotch={renderNotch}
                onValueChanged={handleValueChange}
            />
        </>
    );
};

export default RangeSlider;
