import React, {useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Button, Modal} from 'react-native';
import { useTranslation } from 'react-i18next';


function MainScreen({ navigation }) {
    const { t, i18n } = useTranslation();
    const [modalVisible, setModalVisible] = useState(false);

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng).then(() => setModalVisible(false));
    };

    return (
        <View style={styles.container}>
            <Text style={styles.header}>Sudoku</Text>
            <TouchableOpacity
                style={styles.button}
                onPress={() => navigation.navigate('Difficulty')}
            >
                <Text style={styles.buttonText}>{t('start')}</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.button}
                onPress={() => navigation.navigate('HowToPlay')}
            >
                <Text style={styles.buttonText}>{t('howtoplay')}</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.button}
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
        fontSize: 32,
        marginBottom: 20,
    },
    button: {
        backgroundColor: '#ddd',
        borderRadius: 10,
        paddingVertical: 10,
        paddingHorizontal: 20,
        marginVertical: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonText: {
        fontSize: 18,
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
        paddingVertical: 5,
        paddingHorizontal: 20,
        margin: 7,
        borderWidth: 1,
        borderRadius: 10,
        backgroundColor: "#e8e8e8"
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


