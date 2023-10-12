import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useTranslation } from 'react-i18next';
import { FontAwesome5 } from '@expo/vector-icons';

const NumberPad = ({ onNumberInput, onHighlight, onDelete }) => {
    const { t } = useTranslation();

    return (
        <View style={styles.numberPad}>
            <View style={styles.controlsRow}>
                <TouchableOpacity onPress={onDelete}>
                    <Text style={styles.clearButtonText}>{t('clear')}</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={onHighlight}>
                    <FontAwesome5 name="marker" size={26} color="#4e9bff"/>
                </TouchableOpacity>
            </View>
            <View style={styles.numbersRow}>
                {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((num) => (
                    <TouchableOpacity
                        key={num}
                        style={styles.button}
                        onPress={() => onNumberInput(num)}
                    >
                        <Text style={styles.buttonText}>{num}</Text>
                    </TouchableOpacity>
                ))}
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    numberPad: {
        marginTop: 20,
    },
    numbersRow: {
        flexDirection: 'row',
        marginTop: 10,
    },
    controlsRow: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
    },
    button: {
        marginHorizontal: 5,
        paddingVertical: 5,
        paddingHorizontal: 8,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
        borderRadius: 10
    },
    clearButtonText: {
        fontSize: 18,
        fontWeight: 500,
        color: '#4e9bff'
    },
    buttonText: {
        fontSize: 26,
    },
});

export default NumberPad;
