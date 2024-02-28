import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
// import HeaderComponent from './src/components/HeaderComponent';
// import styles from './src/Styles';


// Componente de Cabeçalho
const Header = () => {
  return (
    <View style={styles.header}>
      <Text style={styles.headerText}>Cabeçalho</Text>
    </View>
  );
};

// Componente de Corpo
const Body = () => {
  return (
    <View style={styles.body}>
      <Text>Conteúdo do Corpo</Text>
    </View>
  );
};

// Componente de Rodapé
const Footer = () => {
  return (
    <View style={styles.footer}>
      <Text>Rodapé</Text>
    </View>
  );
};

// Componente de Separador de StyleSheet
const StyleSheetSeparator = () => {
  return (
    <View style={styles.separator}>
      <Text>StyleSheet</Text>
    </View>
  );
};

export default function App() {
  return (
    <View style={styles.container}>
      <Header />
      <Body />
      <Footer />
      <StyleSheetSeparator />
      <StatusBar style="auto" />
    </View>
  );
}

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
