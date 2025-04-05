import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, TouchableOpacity, StyleSheet, Text, View, Image, ScrollView } from 'react-native';

export default function Home(props) {
  return (
    <ScrollView style={estilo.container}
    contentContainerStyle={{ paddingBottom: 80 }} >
      <StatusBar style="" />
        <View style={estilo.principal}>
          <Text style={estilo.titulo}>🎧 Seu Feed</Text>
          <Text style={estilo.subtitulo}>Um feed que é a sua cara</Text>
        </View>

        <View> 
          <Image style={estilo.img} source={require('../assets/GNX.jpg')} />
          <Text style={estilo.desc}> Kendrick Lamar acaba de lançar GNX!!! </Text>
        </View>

        <View> 
          <Image style={estilo.img} source={require('../assets/Hit.webp')} />
          <Text style={estilo.desc}> Billie Elish acaba de Lançar Hit Me Hard And Soft!!!! </Text>
        </View>

        <View> 
          <Image style={estilo.img} source={require('../assets/icarus.jpg')} />
          <Text style={estilo.desc}> BK acaba de lançar Icarus!!!! </Text>
        </View>

        <View> 
          <Image style={estilo.img} source={require('../assets/nevermind.jpg')} />
          <Text style={estilo.desc}> Reveja Nevermind!!!! </Text>
        </View>

        <View> 
          <Image style={estilo.img} source={require('../assets/Sunshine.jpg')} />
          <Text style={estilo.desc}> Ariana Grande acabou de lançar Sunshine!!!! </Text>
        </View>

        <View> 
          <Image style={estilo.img} source={require('../assets/damn.jpg')} />
          <Text style={estilo.desc}> Reveja DAMN.!!!! </Text>
        </View>

        
        <View> 
          <Image style={estilo.img} source={require('../assets/pep.jpg')} />
          <Text style={estilo.desc}> Veja o albúm postumo de MC Kevin Passado e Presente!!!! </Text>
        </View>

        <View> 
          <Image style={estilo.img} source={require('../assets/brat.png')} />
          <Text style={estilo.desc}> Charli XCX acaba de lançar brat!!!! </Text>
        </View>

        <View> 
          <Image style={estilo.img} source={require('../assets/abbey.jpg')} />
          <Text style={estilo.desc}> Reveja o lendario Abbey Road!!! </Text>
        </View>

    </ScrollView>
  );
}

const estilo = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
    paddingHorizontal: 20,
    paddingTop: 50,
  },
  principal: {
    marginBottom: 40,
    alignItems: 'center',
  },
  titulo: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#1DB954', 
    marginBottom: 8,
    textShadowColor: 'rgba(0, 0, 0, 0.7)',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 4,
  },
  subtitulo: {
    fontSize: 16,
    color: '#aaa',
  },
  img: {
    width: '100%',
    height: 180,
    borderRadius: 20,
    marginBottom: 12,
    borderWidth: 2,
    borderColor: '#1DB954',
  },
  desc: {
    fontSize: 18,
    color: '#eee',
    textAlign: 'center',
    fontWeight: '500',
    paddingHorizontal: 10,
    lineHeight: 24,
    marginBottom: 20,
  },
});
