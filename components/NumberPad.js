import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const NumberPad = ({ onNumberInput, onHighlight, onDelete }) => {
    return (
        <View style={styles.numberPad}>
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
            <View style={styles.controlsRow}>
                <TouchableOpacity
                    style={styles.button}
                    onPress={onDelete}
                >
                    <Text style={styles.buttonText}>Clear</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.button}
                    onPress={onHighlight}
                >
                    <Text style={styles.buttonText}>Highlight</Text>
                </TouchableOpacity>
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
        marginBottom: 10,
    },
    controlsRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    button: {
        marginHorizontal: 5,
        padding: 10,
        alignItems: 'center',
    },
    buttonText: {
        fontSize: 20,
    },
});

export default NumberPad;
