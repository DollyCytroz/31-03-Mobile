import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';

export default function Perfil() {
  return (
    <View style={styles.container}>
        <StatusBar style="light" />
        <ScrollView contentContainerStyle={styles.scrollContainer}>
      <Text style={styles.title}> Playlist </Text>
    <Text style={styles.conteudo}>Alien X é uma das formas mais poderosas de Ben Tennyson no universo Ben 10. Ele é um ser do tipo "Celestialsapien", originário de um planeta distante. Sua aparência é de uma figura humanoide com pele preta e manchas verdes e amarelas. Alien X possui habilidades incríveis, como controle total sobre o espaço, o tempo e a realidade, o que o torna quase invencível. </Text>
      <StatusBar style="auto" />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'black', 
    },
    scrollContainer: {
      flexGrow: 1,
      justifyContent: 'center',
      alignItems: 'center',
      paddingHorizontal: 20,
      paddingTop: 40,  
      paddingBottom: 20, 
    },
    title: {
      fontSize: 42,
      fontWeight: 'bold',
      color: '#fff',
      textAlign: 'center',
      marginBottom: 20,
      textTransform: 'uppercase', 
    },
    img: {
      height: 250,
      width: 250,
      marginBottom: 30,
      borderRadius: 20, 
      borderWidth: 5,
      borderColor: '#fff', 
    },
    conteudo: {
      color: '#fff',
      fontSize: 16,
      fontWeight: 'normal',
      lineHeight: 24, 
      textAlign: 'justify',
      paddingHorizontal: 20,
      fontFamily: 'Roboto', 
      marginBottom: 20,
    },
  });