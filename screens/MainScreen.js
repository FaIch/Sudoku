import React, {useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Button, Modal} from 'react-native';
import { useTranslation } from 'react-i18next';
import AsyncStorage from '@react-native-async-storage/async-storage';


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

            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    setModalVisible(!modalVisible);
                }}
            >
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <Text style={styles.modalText}>{t('choose_language')}</Text>

                        <TouchableOpacity style={styles.modalButton} onPress={() => changeLanguage('en')}>
                            <Text style={styles.modalButtonText}>English</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.modalButton} onPress={() => changeLanguage('no')}>
                            <Text style={styles.modalButtonText}>Norsk</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.modalButton} onPress={() => setModalVisible(false)}>
                            <Text style={styles.modalButtonText}>{t('cancel')}</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>

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
        fontWeight: 450
    },
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalView: {
        margin: 20,
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 60,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    modalButton: {
        height: 40,
        width: 100,
        margin: 7,
        borderWidth: 1,
        borderRadius: 10,
        backgroundColor: "#e8e8e8",
        alignItems: 'center',
        justifyContent: 'center'
    },
    modalButtonText: {
        fontSize: 20
    },
    modalText: {
        marginBottom: 15,
        textAlign: 'center',
        fontSize: 30
    },
});

export default MainScreen;


