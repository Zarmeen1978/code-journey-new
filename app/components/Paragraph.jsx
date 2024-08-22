import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const Paragraph = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        With this app, you can easily understand problem-solving, the basics of C++, and object-oriented concepts.
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  text: {
    fontSize: 16,
    color: '#333',
    textAlign: 'center',
  },
});

export default Paragraph;
