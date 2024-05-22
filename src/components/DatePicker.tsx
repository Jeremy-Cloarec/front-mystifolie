import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { DatePickerModal } from 'react-native-paper-dates';
import ButtonValidateNavigation from "./Buttons/ButtonValidateNavigation";
import { mainStyle } from "src/mainStyles";

type Props = {
    date : Date | undefined,
    setDate : React.Dispatch<React.SetStateAction<Date | undefined>>,
    open : boolean,
    setOpen :  React.Dispatch<React.SetStateAction<boolean>>
}
export default function DatePicker(props : Props) {

    const styles = StyleSheet.create({
        containerDatePicker: {
            gap: 24,
        }
    })

    const onDismissSingle = React.useCallback(() => {
        props.setOpen(false);
    }, [props.setOpen]);

    const onConfirmSingle = React.useCallback(
        (params: any) => {
            props.setOpen(false);
            props.setDate(params.date);
        },
        [props.setOpen, props.setDate]
    )

    const formatDate = (date: any) => {
        const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };

        return date.toLocaleDateString('fr-FR', options);
    }

    return (
        <View style={styles.containerDatePicker}>
            <View >
                <ButtonValidateNavigation
                    name={!props.date ? "Sélectionner une date" : "Modifier la date"}
                    navigation={() => props.setOpen(true)}
                    accessibilityLabel="Sélectionner une date"
                    color={mainStyle.colorViolet1}
                    backC={mainStyle.bgViolet4}
                />
                <DatePickerModal
                    locale="fr"
                    mode="single"
                    visible={props.open}
                    onDismiss={onDismissSingle}
                    date={props.date}
                    onConfirm={onConfirmSingle}
                />
            </View>
            {props.date && (
                <View>
                    <Text style={[mainStyle.text, mainStyle.utendoRegular]}>Date sélectionnée : </Text>
                    <Text style={[mainStyle.text, mainStyle.utendoMedium]}>Le {formatDate(props.date)}</Text>
                </View>
            )}
        </View>
    )
};


