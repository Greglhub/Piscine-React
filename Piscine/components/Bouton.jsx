import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Button } from 'react-native-paper';

const CustomButton = ({ label, icon, mode, onPress }) => (
  <View style={styles.container}>
    <Button icon={icon} mode={mode} onPress={onPress}>
      {label}
    </Button>
  </View>
);

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',  
    alignItems: 'center',
    marginBottom: 50,
  },
});

export default CustomButton;
