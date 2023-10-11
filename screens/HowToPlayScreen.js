import React from 'react';
import { View, Text,StyleSheet } from 'react-native';

function HowToPlayScreen() {
    return (
        <View style={styles.container}>
            <Text style={styles.header}>How To Play</Text>
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
    }
});

export default HowToPlayScreen;
