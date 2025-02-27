// src/components/Card.tsx
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Header from './Header';

const Card = () => {
  return (
    <View style={styles.container}>
      <Header />
      <Text style={styles.description}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonummy nibh euismod tincidunt ut.
      </Text>
      <View style={styles.interestsContainer}>
        <Text style={styles.interestsTitle}>My interests</Text>
        <View style={styles.line} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 20,
    margin: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
  },
  description: {
    textAlign: 'center',
    color: '#555',
    marginVertical: 10,
  },
  interestsContainer: {
    alignItems: 'center',
    marginTop: 10,
  },
  interestsTitle: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  line: {
    width: '80%',
    height: 2,
    backgroundColor: '#00C2CB',
    marginTop: 5,
  },
});

export default Card;
