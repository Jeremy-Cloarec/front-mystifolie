import React from 'react';
import { StyleSheet, Text, Pressable } from 'react-native';
import { mainStyle } from '../mainStyles';

const styles = StyleSheet.create({
    padding: {
        padding : 10 
    }
    
});

type ContentProps = {
    name: string;
}

export default function ButtonCard(props: ContentProps) {
    return (
        <Pressable style={[mainStyle.bgViolet1, styles.padding]}>
            <Text style={mainStyle.colorWhite}>{props.name}</Text>
        </Pressable>
    )
}