import React, {useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Button, Modal} from 'react-native';
import { useTranslation } from 'react-i18next';
import AsyncStorage from '@react-native-async-storage/async-storage';
import '../translation';
import LanguageModal from "../components/LanguageModal";


function MainScreen({ navigation }) {
    const { t, i18n } = useTranslation();
    const [modalVisible, setModalVisible] = useState(false);

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng).then(() => setModalVisible(false));
    };

    const fetchNewBoard = async () => {
        try {
            const apiResponse = await fetch("https://sudoku-api.vercel.app/api/dosuku");
            const data = await apiResponse.json();

            const { value, solution, difficulty } = data.newboard.grids[0];

            const storedBoardsJson = await AsyncStorage.getItem('sudokuBoards');
            let storedBoards = storedBoardsJson ? JSON.parse(storedBoardsJson) : {};

            const difficulties = ['easy', 'medium', 'hard'];
            difficulties.forEach(diff => {
                if (!Array.isArray(storedBoards[diff])) {
                    storedBoards[diff] = [];
                }
            });

            const newBoard = {
                board: value,
                solution: solution
            };

            storedBoards[difficulty.toLowerCase()].push(newBoard);
            await AsyncStorage.setItem('sudokuBoards', JSON.stringify(storedBoards));

            alert("Created new " + difficulty + " board");
        } catch (error) {
            console.error("Error adding new board: ", error);
        }
    };


    return (
        <View style={styles.container}>
            <Text style={styles.header}>Sudoku</Text>
            <TouchableOpacity
                style={[styles.button, styles.startButton]}
                onPress={() => navigation.navigate('Difficulty')}
            >
                <Text style={styles.buttonText}>{t('start')}</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={[styles.button, styles.generateButton]}
                onPress={fetchNewBoard}
            >
                <Text style={styles.buttonText}>{t('generate')}</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={[styles.button, styles.howToPlayButton]}
                onPress={() => navigation.navigate('HowToPlay')}
            >
                <Text style={styles.buttonText}>{t('howtoplay')}</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={[styles.button, styles.settingsButton]}
                onPress={() => setModalVisible(true)}
            >
                <Text style={styles.buttonText}>{t('settings')}</Text>
            </TouchableOpacity>

            <LanguageModal
                isVisible={modalVisible}
                onClose={() => setModalVisible(false)}
                onChangeLanguage={changeLanguage}
            />

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
    header: {
        fontSize: 40,
        marginBottom: 20,
        fontWeight: 'bold'
    },
    button: {
        backgroundColor: '#ddd',
        borderRadius: 10,
        width: 250,
        height: 80,
        marginVertical: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
    startButton:{
        backgroundColor: '#d0e9c6',
    },
    generateButton:{
        backgroundColor: '#d9edf7',
    },
    howToPlayButton:{
        backgroundColor: '#fcf8e3',
    },
    settingsButton:{
        backgroundColor: '#f2dede',
    },
    buttonText: {
        fontSize: 24,
    },
});

export default MainScreen;


