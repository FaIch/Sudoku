import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import SudokuBoardComponent from '../components/SudokuBoardComponent';
import NumberPad from '../components/NumberPad';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useTranslation } from 'react-i18next';

function GameScreen({ route }) {
    const { t } = useTranslation();
    const { difficulty } = route.params;
    const [selectedCell, setSelectedCell] = useState(null);
    const [initialBoard, setInitialBoard] = useState([]);
    const [solutionBoard, setSolutionBoard] = useState([]);
    const [userBoard, setUserBoard] = useState();
    const [highlightedCells, setHighlightedCells] = useState(
        new Array(9).fill(null).map(() => new Array(9).fill(false))
    );

    useEffect(() => {
        // Define an async function
        const fetchBoards = async () => {
            try {
                const storedBoardsString = await AsyncStorage.getItem('sudokuBoards');
                if (storedBoardsString) {
                    const storedBoards = JSON.parse(storedBoardsString);

                    const randomIndex = Math.floor(Math.random() * storedBoards[difficulty].length);
                    const selectedBoard = storedBoards[difficulty][randomIndex];

                    setInitialBoard(selectedBoard.board);
                    setSolutionBoard(selectedBoard.solution);
                    setUserBoard(selectedBoard.board);
                }
            } catch (error) {
                console.error("Failed to fetch the board:", error);
            }
        };

        fetchBoards();
    }, [difficulty]);

    const handleNumberInput = (num) => {
        if (isValidCell()) {
            const newUserBoard = JSON.parse(JSON.stringify(userBoard));
            newUserBoard[selectedCell.row][selectedCell.col] = num;
            setUserBoard(newUserBoard);
        }
    };

    const handleHighlight = () => {
        if (isValidCell()) {
            const newHighlightedCells = JSON.parse(JSON.stringify(highlightedCells));
            newHighlightedCells[selectedCell.row][selectedCell.col] = !newHighlightedCells[selectedCell.row][selectedCell.col];
            setHighlightedCells(newHighlightedCells);
        }
    };

    const handleDelete = () => {
        if (isValidCell()) {
            const newUserBoard = JSON.parse(JSON.stringify(userBoard));
            newUserBoard[selectedCell.row][selectedCell.col] = 0;
            setUserBoard(newUserBoard);
        }
    };

    const checkSolution = () => {
        for (let i = 0; i < 9; i++) {
            for (let j = 0; j < 9; j++){
                if (userBoard[i][j] !== solutionBoard[i][j]) {
                    alert(t('incorrect'));
                    return false;
                }
            }
        }
        alert(t('correct'));
        return true;
    }

    const isValidCell = () => {
        return !!(selectedCell && initialBoard[selectedCell.row][selectedCell.col] === 0);

    }


    return (
        <View style={styles.container}>
            <Text style={styles.title}>{t('difficulty')}: {t(difficulty)}</Text>
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
                <Text style={styles.checkButtonText}>{t('check')}</Text>
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
        marginBottom: 10
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
