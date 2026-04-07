import {
  StyleSheet,
  View,
  Text,
  Pressable,
  Image,
  TextInput,
  ScrollView,
  Animated,
} from 'react-native';
import { useContext, useRef } from 'react';
import { CartContext } from '../context/CartContext';

export default function DetailsProduto({ route, navigation }) {
  const { item } = route.params;

  const { setCarrinho, quantidadeProduto, setQuantidadeProduto } =
    useContext(CartContext);

  const animacaoBotao = useRef(new Animated.Value(1)).current;
  const corAnimada = useRef(new Animated.Value(0)).current;
  const corDoBotao = corAnimada.interpolate({
    inputRange: [0, 1],
    outputRange: ['#25457B', '#4CAF50'],
  });

  function adicionarAoCarrinho(preco, quantidade) {
    const qtd = Number(quantidade);
    if (!qtd || qtd <= 0) {
      alert('Selecione uma quantidade válida');
      return;
    }

    const valorItemCarrinho = preco * qtd;

    const novoProduto = {
      id: item.id,
      nome: item.nome,
      url: item.url,
      preco: item.preco,
      quantidade: qtd,
      valorItemCarrinho: valorItemCarrinho,
    };

    setCarrinho((carrinho) => [...carrinho, novoProduto]);

    Animated.timing(corAnimada, {
      toValue: 1,
      duration: 200,
      useNativeDriver: false,
    }).start();

    Animated.sequence([
      Animated.timing(animacaoBotao, {
        toValue: 0.8,
        duration: 100,
        useNativeDriver: true,
      }),
      Animated.timing(animacaoBotao, {
        toValue: 1,
        duration: 100,
        useNativeDriver: true,
      }),
    ]).start(() => {
      setQuantidadeProduto(0);
      setTimeout(() => {
        navigation.navigate('Home');
      }, 200);
    });
  }

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.contentContainer}>
      <Text style={styles.titulo}>{item.nome}</Text>
      <Image style={styles.imgProduto} source={{ uri: item.url }} />
      <Text style={styles.descricao}>{item.descricao}</Text>
      <Text style={styles.titulo}>R$ {item.preco}</Text>
      <View style={styles.cardQntd}>
        <Text style={styles.textoQnt}>Quantidade:</Text>
        <TextInput
          style={styles.qntdProduto}
          placeholder="0"
          keyboardType="numeric"
          value={quantidadeProduto}
          onChangeText={(valor) => {
            const num = parseInt(valor);
            setQuantidadeProduto(num);
          }}></TextInput>
      </View>

      <Animated.View
        style={[
          styles.btnAdicionar,
          {
            transform: [{ scale: animacaoBotao }],
            backgroundColor: corDoBotao,
          },
        ]}>
        <Pressable
          onPress={() => adicionarAoCarrinho(item.preco, quantidadeProduto)}>
          <Text style={styles.textoBotao}>Adicionar ao Carrinho</Text>
        </Pressable>
      </Animated.View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 10,
  },
  contentContainer: {
    alignItems: 'center',
    gap: 20,
    paddingBottom: 20,
  },
  titulo: {
    fontWeight: 'bold',
    fontSize: 30,
  },
  imgProduto: {
    height: 200,
    width: 300,
    borderRadius: 15,
  },
  descricao: {
    fontSize: 15,
    textAlign: 'center',
    color: '#606666',
  },
  cardQntd: {
    alignItems: 'center',
    gap: 15,
    borderWidth: 1,
    borderColor: '#A03C35',
    backgroundColor: '#A03C35',
    padding: 5,
    borderRadius: 5,
    width: '50%',
  },
  textoQnt: {
    color: 'white',
  },
  qntdProduto: {
    border: '2px solid black',
    borderRadius: 5,
    width: 80,
    height: 40,
    backgroundColor: 'white',
    textAlign: 'center',
  },
  btnAdicionar: {
    alignItems: 'center',
    justifyContent: 'center',
    gap: 5,
    height: 50,
    width: 200,
    padding: 5,
    borderRadius: 5,
    color: 'white',
  },
  textoBotao: {
    color: 'white',
  },
});
