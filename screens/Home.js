import {
  StyleSheet,
  View,
  Text,
  Pressable,
  FlatList,
  Image,
  ScrollView,
} from 'react-native';
import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import { ProductContext } from '../context/ProductContext';

export default function Home({ navigation }) {
  const { logged, setLogged } = useContext(AuthContext);
  const { categorias, restaurantes } = useContext(ProductContext);

  return (
    <ScrollView style={styles.container}>
      <View style={styles.containerCategorias}>
        <Pressable
          onPress={() => {
            navigation.navigate('Login'), setLogged(false);
          }}
          style={styles.logout}>
          <Text style={styles.logoutText}>Logout</Text>
        </Pressable>
        <FlatList
          showsHorizontalScrollIndicator={false}
          horizontal={true}
          data={categorias}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <View style={styles.cardsCat}>
              <Pressable
                style={styles.itemCategoria}
                onPress={() =>
                  navigation.navigate('DetailsCategoria', { item })
                }>
                <Text style={styles.cardText}>{item.nome}</Text>
                <Image
                  source={{ uri: item.url }}
                  style={styles.imageCategoria}
                />
              </Pressable>
            </View>
          )}
        />
      </View>
      <View style={styles.containerRestaurantes}>
        <Text style={styles.tituloRestaurantes}>Restaurantes próximos</Text>
        <ScrollView showsVerticalScrollIndicator={false}>
          {restaurantes.map((restaurante) => (
            <Pressable
              key={restaurante.id}
              onPress={() =>
                navigation.navigate('DetailsRestaurante', { restaurante })
              }>
              <Text style={styles.restauranteText}>{restaurante.nome}</Text>
            </Pressable>
          ))}
        </ScrollView>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  containerCategorias: {
    flex: 1,
    justifyContent: 'flex-start',
  },
  containerRestaurantes: {
    flex: 1,
    backgroundColor: '#fff',
    margin: 15,
    borderRadius: 20,
    padding: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5,
  },
  cardsCat: {
    justifyContent: 'center',
    paddingVertical: 10,
  },
  itemCategoria: {
    width: 220,
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
  },
  imageCategoria: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginTop: 10,
  },
  cardText: {
    fontWeight: 'bold',
    fontSize: 16,
    color: 'black',
  },
  logout: {
    padding: 20,
    alignSelf: 'flex-end',
  },
  logoutText: {
    color: 'red',
    fontWeight: 'bold',
  },
  tituloRestaurantes: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 15,
    textAlign: 'center',
  },
  restauranteText: {
    fontSize: 18,
    marginVertical: 10,
    color: '#333',
    textAlign: 'center',
  },
});
