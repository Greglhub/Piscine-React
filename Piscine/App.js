import React from 'react';
import { ImageBackground, StyleSheet } from 'react-native';
import { Provider as PaperProvider } from 'react-native-paper';
import CustomButton from './components/Bouton';
import MyComponentWithState from './components/MyComponentWithState';
import HomeScreen from './screen/home.screen'; 
import Formulaire from './components/Register';

const App = () => {
  return (
    <PaperProvider>
      <ImageBackground source={require('./assets/Foret.jpg')} style={styles.backgroundImage}>
        <HomeScreen /> 
        <Formulaire />
      </ImageBackground>
    </PaperProvider>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover', // ou 'stretch' selon tes préférences
  },
});

export default App;
