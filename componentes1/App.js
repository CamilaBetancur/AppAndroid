// src/App.tsx
import React from 'react';
import { SafeAreaView, ScrollView, StyleSheet } from 'react-native';
import Card from './components/Card';
import Footer from './components/Footer';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Card />
        <Footer />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F0F0F0',
  },
  scrollContainer: {
    flexGrow: 1,
    justifyContent: 'center',
  },
});
