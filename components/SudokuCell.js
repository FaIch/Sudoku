import React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';

const SudokuCell = ({ initialNumber, isSelected, onSelect, isHighlighted, initialBoard, errorBlock, row, col, thickBorderLeft, thickBorderTop }) => {
    const isEditable = initialBoard[row][col] === 0;
    const isInErrorBlock = (
        errorBlock &&
        row >= errorBlock.row &&
        row < errorBlock.row + 3 &&
        col >= errorBlock.col &&
        col < errorBlock.col + 3
    );

    return (
        <TouchableOpacity
            style={[
                styles.cell,
                isSelected ? styles.selected : {},
                isHighlighted ? styles.highlighted : {},
                !isEditable ? styles.immutableNumber : {},
                thickBorderLeft ? styles.thickBorderLeft : {},
                thickBorderTop ? styles.thickBorderTop : {},
                isInErrorBlock ? styles.error : {},
            ]}
            onPress={isEditable ? onSelect : null}
            disabled={!isEditable}
        >
            <Text style={styles.number}>
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
    error: {
        backgroundColor: 'red',
    },
    immutableNumber: {
        backgroundColor: 'lightgrey'
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
    thickBorderLeft: {
        borderLeftWidth: 3,
    },
    thickBorderTop: {
        borderTopWidth: 3,
    },
});

export default SudokuCell;
