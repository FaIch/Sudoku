import React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';

const SudokuCell = ({ initialNumber, isSelected, onSelect, isHighlighted, initialBoard, row, col }) => {
    const isEditable = initialBoard[row][col] === 0;

    return (
        <TouchableOpacity
            style={[
                styles.cell,
                isSelected ? styles.selected : {},
                isHighlighted ? styles.highlighted : {},
                !isEditable ? styles.immutableNumber : {}
            ]}
            onPress={isEditable ? onSelect : null}
            disabled={!isEditable}
        >
            <Text style={[
                styles.number,
            ]}>
                {initialNumber !== 0 ? initialNumber : ""}
            </Text>
        </TouchableOpacity>
    );
};




const styles = StyleSheet.create({
    cell: {
        borderWidth: 1,
        borderColor: '#000',
        width: 40,
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
    },
    input: {
        fontSize: 24,

    },
    immutableNumber: {
        backgroundColor: 'grey'
    },
    highlighted: {
        backgroundColor: 'yellow',
    },
    number: {
        fontSize: 24,
    },
    selected: {
      backgroundColor: 'lightblue'
    },
});

export default SudokuCell;
