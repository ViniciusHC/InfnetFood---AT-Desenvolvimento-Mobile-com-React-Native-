import { useState, useContext } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Pressable,
  ScrollView,
} from 'react-native';
import { CartContext } from '../context/CartContext';
import { notificacaoSimulada } from '../services/Notificacao';

export default function CheckoutScreen({ navigation }) {
  const { carrinho, setCarrinho, valorTotal, setValorTotal } =
    useContext(CartContext);

  const [endereco, setEndereco] = useState('');
  const [cidade, setCidade] = useState('');
  const [numeroCartao, setNumeroCartao] = useState('');
  const [metodoPagamento, setMetodoPagamento] = useState('Cartão de Crédito');

  function limparCarrinho() {
    setCarrinho([]);
    setValorTotal(0);
    setEndereco('');
    setCidade('');
    setNumeroCartao('');
    setMetodoPagamento('');
  }

  function verficarDadosCheckout() {
    if (!endereco || !cidade || !numeroCartao) {
      alert('Erro! Por favor, preencha todos os campos obrigatórios.');
      return;
    }

    notificacaoSimulada();
    limparCarrinho();
    navigation.navigate('Home');
  }

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Revisar Pedido</Text>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Resumo:</Text>
        {carrinho.map((item) => (
          <View key={item.id} style={styles.produtoCarrinho}>
            <Text style={styles.nomeProduto}>{item.nome}</Text>
            <Text style={styles.quantidadeText}>Qtd: {item.quantidade}</Text>
            <Text style={styles.precoText}>
              R$ {item.valorItemCarrinho.toFixed(2)}
            </Text>
          </View>
        ))}
        <Text style={styles.totalText}>
          Valor total: {valorTotal.toFixed(2)}
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Endereço de Entrega</Text>
        <TextInput
          style={styles.input}
          placeholder="Rua e Número"
          value={endereco}
          onChangeText={setEndereco}
        />
        <TextInput
          style={styles.input}
          placeholder="Cidade"
          value={cidade}
          onChangeText={setCidade}
        />
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Pagamento</Text>
        <Text style={styles.label}>Método: {metodoPagamento}</Text>
        <TextInput
          style={styles.input}
          placeholder="Número do Cartão"
          keyboardType="numeric"
          value={numeroCartao}
          onChangeText={setNumeroCartao}
        />
      </View>

      <Pressable
        style={styles.button}
        onPress={() => {
          verficarDadosCheckout();
        }}>
        <Text style={styles.buttonText}>Finalizar Compra</Text>
      </Pressable>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    marginTop: 40,
    textAlign: 'center',
  },
  section: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 8,
    marginBottom: 20,
    elevation: 2,
    shadowColor: '#000',
    shadowOpacidade: 0.1,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 5,
    padding: 10,
    marginTop: 10,
    fontSize: 16,
  },
  label: {
    fontSize: 14,
    color: '#666',
  },
  button: {
    backgroundColor: '#28a745',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 40,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  produtoCarrinho: {
    marginBottom: 5,
    borderBottomWidth: 0.5,
    borderBottomColor: 'black',
  },
  totalText: {
    fontSize: 15,
    color: '#FA0213',
    fontWeight: 'bold',
  },
});
