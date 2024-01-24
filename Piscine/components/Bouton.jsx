import * as React from 'react';
import { View, StyleSheet } from 'react-native';
import { Button } from 'react-native-paper';

const MyComponent = ({ label, icon, mode, onPress }) => (
  <View style={styles.container}>
    <Button icon={icon} mode={mode} onPress={onPress}>
      {label}
    </Button>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default MyComponent;
