import React, { useState } from 'react';
import { Text, TextInput, View, TouchableOpacity, StyleSheet } from 'react-native';

const SudokuCell = ({ initialNumber }) => {
    const [number, setNumber] = useState(initialNumber);
    const [isHighlighted, setIsHighlighted] = useState(false);

    const isEditable = initialNumber === 0;

    const toggleHighlight = () => {
        if (isEditable) {
            setIsHighlighted(!isHighlighted);
        }
    };

    return (
        <TouchableOpacity style={styles.cell} onPress={toggleHighlight}>
            {isEditable ? (
                <TextInput
                    style={[styles.input, isHighlighted ? styles.highlighted : {}]}
                    keyboardType="numeric"
                    maxLength={1}
                    value={number ? number.toString() : ""}
                    onChangeText={(text) => setNumber(parseInt(text))}
                />
            ) : (
                <Text style={styles.number}>{number}</Text>
            )}
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    cell: {
        borderWidth: 1,
        borderColor: '#000',
        width: 30,
        height: 30,
        alignItems: 'center',
        justifyContent: 'center',
    },
    input: {
        fontSize: 18,
        textAlign: 'center',
    },
    highlighted: {
        backgroundColor: 'yellow',
    },
    number: {
        fontSize: 18,
    },
});

export default SudokuCell;
