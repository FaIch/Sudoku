import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

function MainScreen({ navigation }) {
    return (
        <View style={styles.container}>
            <Text style={styles.header}>Sudoku App</Text>
            <TouchableOpacity
                style={styles.button}
                onPress={() => navigation.navigate('Difficulty')}
            >
                <Text style={styles.buttonText}>Start Game</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.button}
                onPress={() => navigation.navigate('HowToPlay')}
            >
                <Text style={styles.buttonText}>How to Play</Text>
            </TouchableOpacity>
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
        fontSize: 18, // Text size
        color: '#000', // Black text
    }
});

export default MainScreen;


