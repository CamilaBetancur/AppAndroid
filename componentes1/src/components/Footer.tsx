// src/components/Footer.tsx
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const interests = [
  'music', 'food', 'culture', 'drinks', 
  'sport', 'travel', 'fun', 'business', 'art'
];

const Footer = () => {
  return (
    <View style={styles.container}>
      <View style={styles.tagsContainer}>
        {interests.map((item, index) => (
          <View key={index} style={styles.tag}>
            <Text style={styles.tagText}>{item}</Text>
          </View>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    alignItems: 'center',
  },
  tagsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginTop: 5,
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
    color: '#FFD700',
  },
});

export default Footer;
