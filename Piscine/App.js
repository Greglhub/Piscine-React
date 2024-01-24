import React from 'react';
import { Provider as PaperProvider } from 'react-native-paper';
import CustomButton from './components/Bouton';
import MyComponentWithState from './components/MyComponentWithState';
import HomeScreen from './screen/home.screen'; 
import Formulaire from './components/Register';


const App = () => {

  return (
    <PaperProvider>
      <HomeScreen /> 
      <Formulaire />

    </PaperProvider>
  );
};


export default App;
