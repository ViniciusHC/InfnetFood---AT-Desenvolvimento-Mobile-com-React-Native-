import {
  StyleSheet,
  View,
  Text,
  Pressable,
  Image,
  FlatList,
} from 'react-native';
import { useContext } from 'react';
import { RecipeContext } from '../context/RecipeContext';

export default function ReceitasScreen({ navigation }) {
  const { receitas } = useContext(RecipeContext);

  return (
    <View style={styles.container}>
      <View style={styles.containerCategorias}>
        <FlatList
          showsHorizontalScrollIndicator={false}
          data={receitas}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <View style={styles.cardsCat} on>
              <Pressable
                style={styles.itemCategoria}
                onPress={() => navigation.navigate('Receita', { item })}>
                <Text style={styles.cardText}>{item.name}</Text>
                <Image
                  source={{ uri: item.image }}
                  style={styles.imageCategoria}
                />
              </Pressable>
            </View>
          )}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  containerCategorias: {
    flex: 1,
    justifyContent: 'flex-start',
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
});
