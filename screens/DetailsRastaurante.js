import { StyleSheet, Text, View, Linking, Pressable } from 'react-native';

export default function DetailsRestaurante({ route }) {
  const { restaurante } = route.params;

  async function abrirUrl(lat, lng) {
    const url = `https://www.google.com/maps/search/?api=1&query=${lat},${lng}`;
    const suporte = await Linking.canOpenURL(url);

    if (suporte) {
      await Linking.openURL(url);
    } else {
      alert('Erro ao abrir o mapa');
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <View style={styles.header}>
          <Text style={styles.titulo}>{restaurante.nome}</Text>
        </View>

        <View style={styles.cardInfo}>
          <Text style={styles.subtitulo}>Sobre o local</Text>
          <Text style={styles.descricao}>{restaurante.descricao}</Text>
          <Text style={styles.prato}>Prato principal: {restaurante.pratoPrincipal}</Text>
        </View>

        <Pressable
          style={({ pressed }) => [
            styles.botao,
            pressed && styles.botaoPressionado,
          ]}
          onPress={() => abrirUrl(restaurante.lat, restaurante.lng)}>
          <Text style={styles.textoBotao}>Ver localização no Mapa</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    padding: 24,
    flex: 1,
    justifyContent: 'space-between',
    paddingBottom: 40,
  },
  header: {
    marginTop: 20,
  },
  titulo: {
    fontSize: 34,
    fontWeight: 'bold',
    color: '#606666',
  },
  cardInfo: {
    marginVertical: 30,
    padding: 20,
    backgroundColor: '#F9F9F9',
    borderRadius: 15,
    borderBottomWidth: 5,
    borderBottomColor: '#E67E22',
    borderTopWidth: 5,
    borderTopColor: '#E67E22',
  },
  subtitulo: {
    fontSize: 16,
    fontWeight: '600',
    color: '#606666',
    marginBottom: 8,
  },
  descricao: {
    fontSize: 16,
    lineHeight: 24,
    color: '#666',
  },
  prato:{
    fontSize: 16,
    lineHeight: 24,
    color: '#666',
  },
  botao: {
    backgroundColor: '#79B8BA',
    height: 60,
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  botaoPressionado: {
    transform: [{ scale: 0.97 }],
  },
  textoBotao: {
    color: 'white',
    fontSize: 18,
    fontWeight: '700',
  },
});
