// src/components/Header.tsx
import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const Header = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require('.../src/assets/imageAvatar.png')}
        style={styles.profileImage}
      />
      <Text style={styles.name}>Name</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginBottom: 10,
  },
  profileImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
    borderWidth: 2,
    borderColor: '#FFDD59',
  },
  name: {
    fontWeight: 'bold',
    fontSize: 20,
    marginTop: 10,
  },
});

export default Header;
