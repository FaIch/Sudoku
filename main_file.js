import React from 'react';
import { StyleSheet, Text, View, TextInput} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import sudokuBoards from './assets/data/sudokuBoards.json';

export default function App() {
    const board = sudokuBoards.easy.board;

    return (
        <View style={styles.container}>
            <Text>Sudoku</Text>
            <View style={styles.board}>
                {board.map((row, rowIndex) => (
                    <View key={rowIndex} style={styles.row}>
                        {row.map((num, colIndex) => (
                            <View key={colIndex} style={styles.cell}>
                                {num === 0 ? (
                                    <TextInput
                                        style={styles.input}
                                        keyboardType="numeric"
                                        maxLength={1}
                                    />
                                ) : (
                                    <Text style={styles.number}>{num}</Text>
                                )}
                            </View>
                        ))}
                    </View>
                ))}
            </View>
            <StatusBar style="auto" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    board: {
        borderWidth: 1,
        borderColor: '#000',
    },
    row: {
        flexDirection: 'row',
    },
    input: {
        fontSize: 18,
        textAlign: 'center',
    },
    cell: {
        borderWidth: 1,
        borderColor: '#000',
        width: 30,
        height: 30,
        alignItems: 'center',
        justifyContent: 'center',
    },
    number: {
        fontSize: 18,
    },
});
