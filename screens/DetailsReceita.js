import { StyleSheet, Text, Image, ScrollView, View } from 'react-native';

export default function DetailsReceita({ route }) {
  const { item } = route.params;

  return (
    <ScrollView style={styles.container}>
      <Image style={styles.imagem} source={{ uri: item.image }} />

      <View style={styles.corpo}>
        <Text style={styles.titulo}>{item.name}</Text>

        <Text style={styles.apoio}>
          Tempo: {item.prepTimeMinutes} min | Serve: {item.servings} pessoas
        </Text>

        <Text style={styles.sessao}>Ingredientes</Text>
        {item.ingredients.map((ingrediente) => (
          <Text key={item.id} style={styles.item}>
            - {ingrediente}
          </Text>
        ))}

        <Text style={styles.sessao}>Modo de Preparo</Text>
        {item.instructions.map((preparo) => (
          <Text key={item.id} style={styles.item}>
            {preparo}
          </Text>
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imagem: {
    width: '100%',
    height: 250,
  },
  corpo: {
    padding: 20,
  },
  titulo: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#333',
  },
  apoio: {
    fontSize: 14,
    color: '#666',
    marginBottom: 20,
    marginTop: 5,
  },
  sessao: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 15,
    marginBottom: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#EEE',
    paddingBottom: 5,
  },
  item: {
    fontSize: 16,
    lineHeight: 24,
    marginBottom: 4,
    color: '#606666',
  },
});
