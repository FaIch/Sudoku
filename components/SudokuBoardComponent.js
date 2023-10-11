import React from 'react';
import { StyleSheet, View } from 'react-native';
import SudokuCell from './SudokuCell';

function SudokuBoardComponent({ board }) {
    return (
        <View style={styles.board}>
            {board.map((row, rowIndex) => (
                <View key={rowIndex} style={styles.row}>
                    {row.map((num, colIndex) => (
                        <SudokuCell key={colIndex} initialNumber={num} />
                    ))}
                </View>
            ))}
        </View>
    );
}

const styles = StyleSheet.create({
    board: {
        borderWidth: 1,
        borderColor: '#000',
    },
    row: {
        flexDirection: 'row',
    },
});

export default SudokuBoardComponent;
