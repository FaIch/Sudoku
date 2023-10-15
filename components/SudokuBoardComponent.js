import React from 'react';
import { StyleSheet, View } from 'react-native';
import SudokuCell from './SudokuCell';

function SudokuBoardComponent({board, initialBoard, selectedCell, setSelectedCell, highlightedCells, errorBlock}) {
    if (!board || board.length === 0 || !Array.isArray(board)) {
        return null;
    }

    return (
        <View style={styles.board}>
            {board.map((row, rowIndex) => (
                <View key={rowIndex} style={styles.row}>
                    {Array.isArray(row) && row.map((num, colIndex) => (
                        <SudokuCell
                            key={colIndex}
                            initialNumber={num}
                            isSelected={selectedCell?.row === rowIndex && selectedCell?.col === colIndex}
                            isHighlighted={highlightedCells[rowIndex][colIndex]}
                            onSelect={() => setSelectedCell({row: rowIndex, col: colIndex})}
                            initialBoard={initialBoard}
                            row={rowIndex}
                            col={colIndex}
                            errorBlock={errorBlock}
                            thickBorderLeft={colIndex % 3 === 0 && colIndex !== 0}
                            thickBorderTop={rowIndex % 3 === 0 && rowIndex !== 0}
                        />
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
