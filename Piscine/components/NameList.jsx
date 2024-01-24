import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const NameList = ({ names }) => {
  return (
    <View style={styles.container}>
      {names.map((item, index) => (
        <Text key={index} style={styles.name}>
          {item.prenom}
        </Text>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  name: {
    fontSize: 18,
    marginBottom: 10,
  },
});

export default NameList;
