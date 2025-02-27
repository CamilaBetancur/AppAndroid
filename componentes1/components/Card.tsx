import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Header from './Header';

const interests = [
  'music', 'food', 'culture', 'drinks', 
  'sport', 'travel', 'fun', 'business', 'art'
];

const Card = () => {
  return (
    <View style={styles.container}>
      <Header />
      <Text style={styles.description}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonummy nibh euismod tincidunt ut.
      </Text>
      <View style={styles.interestsContainer}>
        <View style={styles.line} />
        <Text style={styles.interestsTitle}>My interests</Text>
        <View style={styles.tagsContainer}>
          {interests.map((item, index) => (
            <View key={index} style={styles.tag}>
              <Text style={styles.tagText}>{item}</Text>
            </View>
          ))}
        </View>
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
    marginTop: 5,
  },
  line: {
    width: '80%',
    height: 2,
    backgroundColor: '#00C2CB',
    marginTop: 5,
  },
  tagsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginTop: 10,
  },
  tag: {
    backgroundColor: 'white',
    borderColor: '#FFD700',
    borderWidth: 1,
    borderRadius: 20,
    paddingVertical: 5,
    paddingHorizontal: 15,
    margin: 5,
  },
  tagText: {
    color: '#000000',
  },
});

export default Card;
