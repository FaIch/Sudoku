import React, { useState } from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import SudokuBoardComponent from '../components/SudokuBoardComponent';
import NumberPad from '../components/NumberPad';
import sudokuBoards from '../assets/data/sudokuBoards.json';

function GameScreen({ route }) {
    const { difficulty } = route.params;
    const board = sudokuBoards[difficulty].board;
    const solutionBoard = sudokuBoards[difficulty].solution;
    const [selectedCell, setSelectedCell] = useState(null);
    const [initialBoard] = useState(board);
    const [userBoard, setUserBoard] = useState(board);
    const [highlightedCells, setHighlightedCells] = useState(
        new Array(9).fill(null).map(() => new Array(9).fill(false))
    );

    const handleNumberInput = (num) => {
        if (selectedCell && initialBoard[selectedCell.row][selectedCell.col] === 0) {
            const newUserBoard = JSON.parse(JSON.stringify(userBoard));
            newUserBoard[selectedCell.row][selectedCell.col] = num;
            setUserBoard(newUserBoard);
        }
    };

    const handleHighlight = () => {
        if (selectedCell && initialBoard[selectedCell.row][selectedCell.col] === 0) {
            const newHighlightedCells = JSON.parse(JSON.stringify(highlightedCells));
            newHighlightedCells[selectedCell.row][selectedCell.col] = !newHighlightedCells[selectedCell.row][selectedCell.col];
            setHighlightedCells(newHighlightedCells);
        }
    };

    const handleDelete = () => {
        if (selectedCell && initialBoard[selectedCell.row][selectedCell.col] === 0) {
            const newUserBoard = JSON.parse(JSON.stringify(userBoard));
            newUserBoard[selectedCell.row][selectedCell.col] = 0;
            setUserBoard(newUserBoard);
        }
    };

    const checkSolution = () => {
        for (let i = 0; i < 9; i++) {
            for (let j = 0; j < 9; j++){
                if (userBoard[i][j] !== solutionBoard[i][j]) {
                    alert("Solution is incorrect!");
                    return false;
                }
            }
        }
        alert("Congratulations! Solution is correct!");
        return true;
    }


    return (
        <View style={styles.container}>
            <Text style={styles.title}>Difficulty: {difficulty.charAt(0).toUpperCase() + difficulty.slice(1)}</Text>
            <SudokuBoardComponent
                board={userBoard}
                initialBoard={initialBoard}
                selectedCell={selectedCell}
                setSelectedCell={setSelectedCell}
                highlightedCells={highlightedCells}
            />
            {selectedCell && (
                <NumberPad
                    onNumberInput={handleNumberInput}
                    onHighlight={handleHighlight}
                    onDelete={handleDelete}
                />
            )}
            <TouchableOpacity onPress={checkSolution} style={styles.checkButton}>
                <Text style={styles.checkButtonText}>Check</Text>
            </TouchableOpacity>
        </View>

    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff',
    },
    title: {
        fontSize: 20,
    },
    checkButton: {
        justifyContent: 'center',
        alignContent: 'center',
        borderStyle: 'solid',
        borderWidth: 1,
        padding: 10,
        borderRadius: 10,
        marginTop: 10,
        backgroundColor: 'lightgreen'
    },
    checkButtonText: {
        fontSize: 20,

    }
});

export default GameScreen;
