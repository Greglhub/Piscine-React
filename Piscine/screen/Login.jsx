import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { TextInput, Button, ProgressBar } from 'react-native-paper';

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const handleLogin = () => {
    setLoading(true);

    setTimeout(() => {
      setLoading(false);

      navigation.navigate('Dashboard');
    }, 2000); 
  };

  return (
    <View style={styles.container}>
      <TextInput
        label="Email"
        value={email}
        onChangeText={(text) => setEmail(text)}
        style={styles.input}
        theme={{ colors: { primary: 'grey' } }}
      />
      <TextInput
        label="Mot de passe"
        value={password}
        onChangeText={(text) => setPassword(text)}
        secureTextEntry
        style={styles.input}
        theme={{ colors: { primary: 'grey' } }}
      />
      <Button
        mode="contained"
        onPress={handleLogin}
        style={[styles.button, { backgroundColor: 'green' }]}
        theme={{ colors: { primary: 'green' } }}
      >
        Connexion à la nature
      </Button>
      {loading && <ProgressBar indeterminate color="green" style={styles.progress} />}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  input: {
    marginBottom: 16,
  },
  button: {
    marginTop: 16,
  },
  progress: {
    marginTop: 16,
  },
});

export default LoginScreen;
