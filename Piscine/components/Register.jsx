// Formulaire.js
import React, { useState } from 'react';
import { View, StyleSheet, ImageBackground } from 'react-native';
import { TextInput, Button } from 'react-native-paper';

const Formulaire = () => {
  const [nom, setNom] = useState('');
  const [prenom, setPrenom] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handlePress = () => {
    // Ici, tu peux ajouter la logique pour traiter les données du formulaire
    console.log('Formulaire soumis');
    console.log('Nom:', nom);
    console.log('Prénom:', prenom);
    console.log('Email:', email);
    console.log('Mot de passe:', password);
    console.log('Confirmation du mot de passe:', confirmPassword);
  };

  return (
    <ImageBackground source={require('C:\Users\grego\OneDrive\ESTIAM\E4\Piscine-React\Foret.jpg')} style={styles.backgroundImage}>
      <View style={styles.container}>
        <TextInput
          label="Nom"
          value={nom}
          onChangeText={text => setNom(text)}
        />
        <TextInput
          label="Prénom"
          value={prenom}
          onChangeText={text => setPrenom(text)}
        />
        <TextInput
          label="Email"
          value={email}
          onChangeText={text => setEmail(text)}
          keyboardType="email-address"
        />
        <TextInput
          label="Mot de passe"
          value={password}
          onChangeText={text => setPassword(text)}
          secureTextEntry
        />
        <TextInput
          label="Confirmation du mot de passe"
          value={confirmPassword}
          onChangeText={text => setConfirmPassword(text)}
          secureTextEntry
        />
        <Button mode="contained" onPress={handlePress} style={styles.button}>
          Faire le café ☕
        </Button>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  container: {
    padding: 16,
  },
  button: {
    marginTop: 16,
  },
});

export default Formulaire;
