import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import SudokuBoardComponent from '../components/SudokuBoardComponent';
import sudokuBoards from '../assets/data/sudokuBoards.json';

function GameScreen({ route }) {
    const { difficulty } = route.params;
    const board = sudokuBoards[difficulty].board;

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Difficulty: {difficulty.charAt(0).toUpperCase() + difficulty.slice(1)}</Text>
            <SudokuBoardComponent board={board} />
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
    }
});

export default GameScreen;
