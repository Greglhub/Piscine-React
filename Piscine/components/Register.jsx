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
    <View style={styles.container}>
      <TextInput
        label="Nom"
        value={nom}
        onChangeText={text => setNom(text)}
        style={styles.input}
        theme={{ colors: { primary: 'grey' } }}
      />
      <TextInput
        label="Prénom"
        value={prenom}
        onChangeText={text => setPrenom(text)}
        style={styles.input}
        theme={{ colors: { primary: 'grey' } }}
      />
      <TextInput
        label="Email"
        value={email}
        onChangeText={text => setEmail(text)}
        keyboardType="email-address"
        style={styles.input}
        theme={{ colors: { primary: 'grey' } }}
      />
      <TextInput
        label="Mot de passe"
        value={password}
        onChangeText={text => setPassword(text)}
        secureTextEntry
        style={styles.input}
        theme={{ colors: { primary: 'grey' } }}
      />
      <TextInput
        label="Confirmation du mot de passe"
        value={confirmPassword}
        onChangeText={text => setConfirmPassword(text)}
        secureTextEntry
        style={styles.input}
        theme={{ colors: { primary: 'grey' } }}
      />
      <Button
        mode="contained"
        onPress={handlePress}
        style={styles.button}
        theme={{ colors: { primary: 'green' } }}
      >
        Rentre dans la foret 
      </Button>
    </View>
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
  input: {
    fontSize: 16,
    fontWeight: 'bold',
    fontStyle: 'italic',
  },
  button: {
    marginTop: 16,
  },
});

export default Formulaire;
