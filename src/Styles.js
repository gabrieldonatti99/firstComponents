import React from 'react';
// import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    header: {
        backgroundColor: '#bf7d0a',
        padding: 20,
        alignItems: 'center',
    },
    headerText: {
        fontSize: 20,
    },
    body: {
        width: '100%', // Definindo a largura para 100%
        padding: 20,
    },
    footer: {
        width: '100%', // Definindo a largura para 100%
        backgroundColor: '#bf0a0a',
        padding: 20,
        alignItems: 'center',
        top: '82%',
    },
    separator: {
        backgroundColor: '#2b0abf',
        borderWidth: 2,
        borderColor: '#ccc',
        padding: 20,
        alignItems: 'center',
    },
});

export default styles;