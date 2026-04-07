import { StyleSheet, View, Text, Pressable, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useContext, useEffect } from 'react';
import { AuthContext } from '../context/AuthContext';
import * as Notifications from 'expo-notifications';

export function Login() {
  const navigation = useNavigation();
  const {
    login,
    loginDigitado,
    setLoginDigitado,
    senha,
    senhaDigitada,
    setSenhaDigitada,
    setLogged,
  } = useContext(AuthContext);

  function limparForm() {
    setLoginDigitado('');
    setSenhaDigitada('');
  }

  function validarLogin() {
    if (loginDigitado != login.email) {
      alert('Erro, login incorreto!');
    } else if (senhaDigitada != senha) {
      alert('Erro, senha incorreta!');
    } else {
      setLogged(true);
      navigation.navigate('Navigation');
    }
    limparForm();
  }

  useEffect(() => {
    async function requestPermissions() {
      const { status } = await Notifications.requestPermissionsAsync();
      if (status !== 'granted') {
        Alert.alert('Precisamos de permissão para avisar sobre seu pedido.');
      }
    }
    requestPermissions();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.cardInput}>
        <TextInput
          style={styles.input}
          placeholder="Login"
          value={loginDigitado}
          onChangeText={setLoginDigitado}
        />
        <TextInput
          style={styles.input}
          placeholder="Senha"
          value={senhaDigitada}
          onChangeText={setSenhaDigitada}
        />
      </View>
      <Pressable style={styles.botaoLogin} onPress={validarLogin}>
        <Text style={styles.textoBotao}>Fazer Login</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 8,
    gap: 20,
  },
  cardInput: {
    backgroundColor: 'white',
    borderRadius: 20,
  },
  input: {
    height: 40,
    margin: 12,
    width: 200,
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
  },
  botaoLogin: {
    alignItems: 'center',
    justifyContent: 'center',
    gap: 5,
    height: 50,
    width: 200,
    backgroundColor: '#25457B',
    padding: 5,
    borderRadius: 5,
    color: 'white',
  },
  textoBotao: {
    color: 'white',
  },
});