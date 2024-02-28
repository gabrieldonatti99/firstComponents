import React from 'react';
// import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {styles} from '../Styles';

// Componente de Cabeçalho
const HeaderComponent = () => {
  return (
    <View style={styles.header}>
      <Text style={styles.headerText}>Cabeçalho</Text>
    </View>
  );
};

export default HeaderComponent;