import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, TouchableOpacity, StyleSheet, Text, View, ImageBackground } from 'react-native';

export default function Home(props) {
  return (
    
      <SafeAreaView style={estilo.container}>
        <View style={estilo.principal}>
          <Text style={estilo.titulo}> Seu Feed </Text>
          <Text style={estilo.subtitulo}> Um feed que é a sua cara</Text>
        </View>

        <View>
          <TouchableOpacity style={estilo.button} onPress={() => { props.navigation.navigate('Playlist') }}>
            <Text style={estilo.textButton}> Playlist </Text>
          </TouchableOpacity>

          <TouchableOpacity style={estilo.button} onPress={() => { props.navigation.navigate('Perfil') }}>
            <Text style={estilo.textButton}> Perfil </Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    
  );
}

const estilo = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  titulo: {
    fontSize: 30,
  },
  subtitulo: {
    fontSize: 20,
  },
  button: {
    margin: 10,
    padding: 5,
    backgroundColor: 'yellow',
    borderRadius: 50, 
    alignItems: 'center',
    borderColor: 'black', 
    borderWidth: 2, 
  },
  textButton: {
    fontSize: 20,
  },
  principal: {
    alignItems: 'center',
    marginBottom: 50,
    borderWidth: 2,
    padding: 10,
    backgroundColor: 'green',
    borderRadius: 50,
  }
});