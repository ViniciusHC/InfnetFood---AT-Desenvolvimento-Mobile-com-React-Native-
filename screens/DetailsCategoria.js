import {
  StyleSheet,
  View,
  Text,
  FlatList,
  Pressable,
  Image,
} from 'react-native';

export default function DetailsCategoria({ route, navigation }) {
  const { item } = route.params;
  const produtos = item.produtos;

  return (
    <View style={styles.container}>
      <FlatList
        data={produtos}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <Pressable
            onPress={() => navigation.navigate('DetailsProduto', { item })}
            style={styles.cardCategoria}>
            <Text style={styles.cardText}>{item.nome}</Text>
            <Image source={{ uri: item.url }} style={styles.imageCategorias} />
          </Pressable>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    gap: 50,
  },
  cardCategoria: {
    height: 200,
    backgroundColor: '#fff',
    marginHorizontal: 10,
    padding: 15,
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: 'rgba(100, 100, 111, 1)',
    shadowOffset: { width: 0, height: 7 },
    shadowOpacity: 0.2,
    shadowRadius: 20,
    elevation: 8,
    margin: 10,
  },
  imageCategorias: {
    width: 150,
    height: 150,
    borderRadius: '50%',
    marginTop: 10,
  },
  cardText: {
    fontWeight: 'bold',
    fontSize: 16,
    color: 'black',
  },
});
