import { StyleSheet, View, Text, Pressable } from 'react-native';
import { ThemeContext } from '../context/ThemeContext';
import { useContext } from 'react';

export default function ConfiguracaoScreen() {
  const { tema, setTema } = useContext(ThemeContext);

  return (
    <View style={styles.page}>
      <View style={styles.containerTema}>
        <Text style={styles.titulo}>Escolha o tema</Text>
        <View style={styles.buttonGroup}>
          <Pressable
            style={[styles.botao, tema === 'claro' && styles.botaoAtivo]}
            onPress={() => setTema('claro')}>
            <Text style={styles.textoBotao}>Tema Claro</Text>
          </Pressable>

          <Pressable
            style={[styles.botao, tema === 'escuro' && styles.botaoAtivo]}
            onPress={() => setTema('escuro')}>
            <Text style={styles.textoBotao}>Tema Escuro</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
  },
  containerTema: {
    backgroundColor: '#f9f9f9',
    padding: 20,
    borderRadius: 15,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
  },
  titulo: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 15,
    textAlign: 'center',
  },
  buttonGroup: {
    gap: 10,
  },
  botao: {
    backgroundColor: '#ddd',
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
  botaoAtivo: {
    backgroundColor: '#55CFEB',
  },
  textoBotao: {
    fontWeight: '500',
  },
});
