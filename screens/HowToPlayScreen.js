import React from 'react';
import { Text, ScrollView, StyleSheet } from 'react-native';
import "../translation"
import { useTranslation } from 'react-i18next';
import { FontAwesome5 } from '@expo/vector-icons';

function HowToPlayScreen() {
    const { t } = useTranslation();

    return (
        <ScrollView style={styles.container}>
            <Text style={styles.header}>{ t('how_title') }</Text>
            <Text style={styles.text}>
                {t('how_intro')}
            </Text>
            <Text style={styles.subHeader}>{t('how_rules')}</Text>
            <Text style={styles.text}>
                {t('how_rules_1')}
            </Text>
            <Text style={styles.text}>
                {t('how_rules_2')}
            </Text>
            <Text style={styles.text}>
                {t('how_rules_3')}
            </Text>
            <Text style={styles.text}>
                <FontAwesome5 name="eraser"  size={24} color="#4e9bff"/>
                {t('how_eraser')}
            </Text>
            <Text style={styles.text}>
                <FontAwesome5 name="font-awesome-flag"  size={24} color="#4e9bff"/>
                {t('how_flag')}
            </Text>
            <Text style={styles.subHeader}>{t('help_header')}</Text>
            <Text style={styles.text}>
                {t('help_1')}
            </Text>
            <Text style={styles.text}>
                {t('help_2')}
            </Text>
            <Text style={styles.text}>
                {t('help_3')}
            </Text>
            <Text style={styles.text}>
                {t('help_4')}
            </Text>
            <Text style={styles.text}>
                {t('help_5')}
            </Text>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#fff',
    },
    header: {
        fontSize: 32,
        marginBottom: 20,
        textAlign: 'center',
    },
    subHeader: {
        fontSize: 24,
        marginTop: 20,
        marginBottom: 10,
    },
    text: {
        fontSize: 16,
        textAlign: 'left',
        marginBottom: 10,
    }
});

export default HowToPlayScreen;
