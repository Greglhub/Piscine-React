import React, { useState } from 'react';
import { View, StyleSheet, ImageBackground, ActivityIndicator } from 'react-native';
import { Button } from 'react-native-paper';

const HomeScreen = ({ navigation }) => {
  const [loading, setLoading] = useState(false);

  const handleNavigateToLogin = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      navigation.navigate('Login');
    }, 500);
  };

  return (
    <ImageBackground
      source={require('../assets/Foret.jpg')}
      style={styles.backgroundImage}
    >
      <View style={styles.container}>
        <Button
          mode="contained"
          onPress={handleNavigateToLogin}
          style={styles.button}
          color="#4CAF50"
        >
          Rentrer dans la forêt
        </Button>
        {loading && (
          <View style={styles.overlay}>
            <ActivityIndicator size="large" color="#4CAF50" />
          </View>
        )}
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  button: {
    backgroundColor: '#4CAF50',
    marginTop: 16,
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(255, 255, 255, 0.7)', // Utilise une couleur semi-transparente
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default HomeScreen;
