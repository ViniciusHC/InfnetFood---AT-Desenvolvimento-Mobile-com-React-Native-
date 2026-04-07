import { StyleSheet, View, Text, Pressable } from 'react-native';
import { AuthContext } from '../context/AuthContext';
import { useContext } from 'react';

export default function PerfilScreen({ navigation }) {
  const { login } = useContext(AuthContext);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.avatar}>
          <Text style={styles.avatarText}>{login.nome.charAt(0)}</Text>
        </View>
        <Text style={styles.nome}>{login.nome}</Text>
      </View>

      <View style={styles.infoContainer}>
        <Text style={styles.label}>Nome: {login.nome}</Text>
        <Text style={styles.label}>E-mail: {login.email} </Text>
        <Text style={styles.label}>CPF: {login.cpf}</Text>
      </View>
      <Pressable
        style={styles.botao}
        onPress={() => navigation.navigate('Configuracao')}>
        <Text style={styles.textoBotao}>Configurações</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    alignItems: 'center',
    marginBottom: 40,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: '#3498db',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 15,
  },
  avatarText: {
    color: '#fff',
    fontSize: 40,
    fontWeight: 'bold',
    maxWidth: '100%'
  },
  nome: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#2c3e50',
  },
  botao: {
    width: '100%',
    height: 50,
    backgroundColor: '#f8f9fa',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ddd',
  },
  textoBotao: {
    fontSize: 12,
    color: '#333',
    fontWeight: '500',
  },
  infoContainer: {
    width: '100%',
    marginBottom: 40,
    gap: 10,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 10,
  },
});