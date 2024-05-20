import React from "react";
import { View, Text, Button } from "react-native";
import { DatePickerModal } from 'react-native-paper-dates';


export default function DatePicker() {

    const [date, setDate] = React.useState(undefined);
    const [open, setOpen] = React.useState(false);

    const onDismissSingle = React.useCallback(() => {
        setOpen(false);
    }, [setOpen]);

    const onConfirmSingle = React.useCallback(
        (params) => {
            setOpen(false);
            setDate(params.date);
        },
        [setOpen, setDate]

        
    );

    return (
        <View>
            <View>
                <Button onPress={() => setOpen(true)}  title="Pick single date" />

                <DatePickerModal
                    locale="fr"
                    mode="single"
                    visible={open}
                    onDismiss={onDismissSingle}
                    date={date}
                    onConfirm={onConfirmSingle}
                />
            </View>
            {date && (
                <Text>Date sélectionnée : {date.toString()}</Text>
            )}
        </View>
    )
};


