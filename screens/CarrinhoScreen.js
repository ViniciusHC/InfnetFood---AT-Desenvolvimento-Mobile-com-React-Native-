import {
  StyleSheet,
  View,
  Text,
  Image,
  ScrollView,
  Pressable,
} from 'react-native';
import { useContext, useEffect } from 'react';
import { CartContext } from '../context/CartContext';

export default function CarrinhoScreen({ navigation }) {
  const { carrinho, valorTotal, setValorTotal } = useContext(CartContext);

  useEffect(() => {
    carrinho.map((itemCarrinho) =>
      setValorTotal(valorTotal + itemCarrinho.valorItemCarrinho)
    );
  }, [carrinho]);

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollPadding}>
        <Text style={styles.titulo}>Meu Carrinho</Text>

        {carrinho.map((item) => (
          <View key={item.id} style={styles.itemCarrinho}>
            <Image style={styles.imagemCarrinho} source={{ uri: item.url }} />
            <View style={styles.infoContainer}>
              <Text style={styles.nomeProduto}>{item.nome}</Text>
              <Text style={styles.quantidadeText}>Qtd: {item.quantidade}</Text>
            </View>
            <Text style={styles.precoText}>
              R$ {item.valorItemCarrinho.toFixed(2)}
            </Text>
          </View>
        ))}
      </ScrollView>
      <View style={styles.footer}>
        <View style={styles.precoFinal}>
          <Text style={styles.totalTexto}>Total a pagar:</Text>
          <Text style={styles.totalValor}>R$ {valorTotal.toFixed(2)}</Text>
        </View>

        <Pressable
          style={styles.btnCheckout}
          onPress={() => {
            carrinho.length > 0
              ? navigation.navigate('Checkout')
              : alert('Carrinho vazio');
          }}>
          <Text style={styles.textCheackout}>Chekout</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollPadding: {
    padding: 20,
  },
  titulo: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#606666',
  },
  itemCarrinho: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    padding: 15,
    borderRadius: 15,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 10,
    elevation: 2,
  },
  imagemCarrinho: {
    width: 65,
    height: 65,
    borderRadius: 12,
  },
  infoContainer: {
    flex: 1,
    marginLeft: 15,
  },
  nomeProduto: {
    fontSize: 16,
    fontWeight: '700',
    color: '#2D3436',
  },
  quantidadeText: {
    fontSize: 14,
    color: 'gray',
    marginTop: 4,
  },
  precoText: {
    fontSize: 16,
    fontWeight: '800',
    color: '#56CFF5',
  },
  footer: {
    backgroundColor: '#FFFFFF',
    padding: 25,
    paddingBottom: 20,
    borderTopWidth: 1,
    borderTopColor: '#DFE6E9',
    alignItems: 'center',
  },
  precoFinal: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 50,
  },
  totalTexto: {
    fontSize: 18,
    color: '#636E72',
    fontWeight: '500',
  },
  totalValor: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#2D3436',
  },
  btnCheckout: {
    marginTop: 10,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 5,
    height: 30,
    width: 150,
    backgroundColor: '#FA0213',
    padding: 5,
    borderRadius: 5,
  },
  textCheackout: {
    color: 'white',
  },
});
