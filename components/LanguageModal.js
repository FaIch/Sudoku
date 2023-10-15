import React from 'react';
import { View, Text, TouchableOpacity, Modal, StyleSheet } from 'react-native';

const LanguageModal = ({ isVisible, onClose, onChangeLanguage }) => {
    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={isVisible}
            onRequestClose={onClose}
        >
            <View style={styles.centeredView}>
                <View style={styles.modalView}>
                    <Text style={styles.modalText}>Choose Language</Text>

                    <TouchableOpacity style={styles.languageButton} onPress={() => onChangeLanguage('en')}>
                        <Text style={styles.modalButtonText}>English</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.languageButton} onPress={() => onChangeLanguage('no')}>
                        <Text style={styles.modalButtonText}>Norsk</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.cancelButton} onPress={onClose}>
                        <Text style={styles.modalButtonText}>Cancel</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </Modal>
    );
};

const styles = StyleSheet.create({
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
    languageButton: {
        height: 40,
        width: 200,
        margin: 10,
        borderWidth: 1,
        borderRadius: 10,
        backgroundColor: "#e8e8e8",
        alignItems: 'center',
        justifyContent: 'center'
    },
    cancelButton: {
        height: 40,
        width: 100,
        marginTop: 70,
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

export default LanguageModal;
