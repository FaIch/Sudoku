import React from 'react';
import { Modal, View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useTranslation } from 'react-i18next';
import '../translation';

const DifficultyModal = ({ isVisible, onDifficultySelect, onClose }) => {
    const { t } = useTranslation();
    const DifficultyButton = ({ title, onPress }) => (
        <TouchableOpacity style={styles.difficultyButton} onPress={onPress}>
            <Text style={styles.buttonText}>{title}</Text>
        </TouchableOpacity>
    );

    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={isVisible}
            onRequestClose={onClose}
        >
            <View style={styles.centeredView}>
                <View style={styles.modalView}>
                    <DifficultyButton title={t('easy')} onPress={() => onDifficultySelect('easy')} />
                    <DifficultyButton title={t('medium')} onPress={() => onDifficultySelect('medium')} />
                    <DifficultyButton title={t('hard')} onPress={() => onDifficultySelect('hard')} />
                    <TouchableOpacity style={styles.cancelButton} onPress={onClose}>
                        <Text>{t('cancel')}</Text>
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
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalView: {
        margin: 20,
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 35,
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
    difficultyButton: {
        backgroundColor: '#6b6a6a',
        padding: 10,
        marginVertical: 15,
        marginHorizontal: 30,
        borderRadius: 5,
        width: 150,
        alignItems: 'center',
    },
    cancelButton: {
        marginTop: 20
    },
    buttonText: {
        color: 'white',
        fontWeight: 'bold',
    },
});

export default DifficultyModal;
