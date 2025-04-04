import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity } from 'react-native';

export default function Playlist() {
  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Text style={styles.pesquisar}>🔍 Pesquisar</Text>
        <Text style={styles.title}>Playlists</Text>

        <View style={styles.grid}>
          <TouchableOpacity style={styles.card}>
            <Image style={styles.img} source={require('../assets/GNX.jpg')} />
            <Text style={styles.nome}>GNX</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.card}>
            <Image style={styles.img} source={require('../assets/damn.jpg')} />
            <Text style={styles.nome}>DAMN</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.card}>
            <Image style={styles.img} source={require('../assets/Hit.webp')} />
            <Text style={styles.nome}>Hit Me Hard and Soft</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.card}>
            <Image style={styles.img} source={require('../assets/brat.png')} />
            <Text style={styles.nome}>Brat</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.card}>
            <Image style={styles.img} source={require('../assets/pep.jpg')} />
            <Text style={styles.nome}>Passado e Presente</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.card}>
            <Image style={styles.img} source={require('../assets/nevermind.jpg')} />
            <Text style={styles.nome}>Nevermind</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.card}>
            <Image style={styles.img} source={require('../assets/abbey.jpg')} />
            <Text style={styles.nome}>Abbey Road</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.card}>
            <Image style={styles.img} source={require('../assets/icarus.jpg')} />
            <Text style={styles.nome}>Icarus</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#121212',
    },
    scrollContainer: {
      paddingTop: 40,
      paddingBottom: 60,
      paddingHorizontal: 20,
    },
    title: {
      fontSize: 28,
      fontWeight: 'bold',
      color: '#fff',
      marginBottom: 20,
    },
    pesquisar: {
      backgroundColor: '#2a2a2a',
      color: '#fff',
      fontSize: 16,
      paddingVertical: 10,
      paddingHorizontal: 20,
      borderRadius: 8,
      alignSelf: 'stretch',
      marginBottom: 20,
    },
    grid: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'space-between',
    },
    card: {
      width: '48%',
      marginBottom: 20,
    },
    img: {
      width: '100%',
      height: 150,
      borderRadius: 8,
    },
    nome: {
      color: '#fff',
      fontSize: 14,
      fontWeight: '500',
      marginTop: 8,
    },
  });