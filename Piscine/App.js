import React from 'react';
import Button from './components/Bouton';
import { Modal } from 'react-native-paper';
import { Provider as PaperProvider } from 'react-native-paper';



const App = () => (
  <Button
    label="Press me"
    icon="camera"
    mode="contained"
    onPress={() => console.log('Pressed')}
  />
);

export default App;
