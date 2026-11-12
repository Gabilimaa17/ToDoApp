import react, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, ScrollView} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';


export default function App() {
  const [tarefaAtual, setTarefaAtual] = useState('');
  const [listaTarefas, setListaTarefas] = useState([]);

  const adicionarTarefa = () => {
    setListaTarefas([...listaTarefas, tarefaAtual]); 
  };

const salvarDadosLocal = async () => {
  const listaString = JSON.stringify(listaTarefas);
  await AsyncStorage.setItem('minhas_tarefas', listaString);
  
 }
 const resgatarDadosLocal = async () => {
  const listaString = await AsyncStorage.getItem('minhas_tarefas');
  if (listaString) {
    setListaTarefas(JSON.parse(listaString));
 }
}

  return( 
      <View style={styles.container1}>
        

    <View style={styles.container}>
      <Text style={styles.title}> Tarefas </Text>
      <View style={styles.Vermelho}></View>
      <View style={styles.Verde}></View>
      <View style={styles.Azul}></View>
      </View>

      <Text style={styles.titulo1}>Minhas Anotações</Text>
      <View style={styles.linha1}>
        <TextInput 
          value={tarefaAtual}
          onChangeText={setTarefaAtual}
          style={styles.caixa} 
          placeholder="Digite a anotação..." 
        />

    <TouchableOpacity style={styles.botao} onPress={() => {adicionarTarefa(), salvarDadosLocal();}}>
   
<Text style={styles.mais}>+</Text>
</TouchableOpacity>

    <TouchableOpacity style={styles.botao} onPress={() => {resgatarDadosLocal();}}>
   
<Text style={styles.mais}>↺</Text>
</TouchableOpacity>

      </View> 
      <ScrollView>{listaTarefas.map((item, index) => (
        <View key={index} style={styles.card}>
          <Text>{item}</Text>
        </View> 
      ))}
      </ScrollView>
    </View>
  );
}
const styles = StyleSheet.create({
    container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  Vermelho: {

    width: 100,
    height: 100,
    margin: 10,
    backgroundColor: 'red',
  },
  Verde: {
    backgroundColor: 'green',
    width: 100,
    height: 100,
    margin: 10,
  },
  Azul: {
    backgroundColor: 'blue',
    width: 100,
    height: 100,
    margin: 10,
  },
  fonte: {
    fontWeight: 'bold'
  },
  container1: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 20,
  },
  titulo1: {
    fontSize: 24,
    fontWeight: 'bold', 
    marginBottom: 20,
  },
  linha1: {
    flexDirection: 'row', 
    alignItems: 'center',
    marginBottom: 20,
  },
  caixa: {
    flex: 1,
    borderWidth: 1,
    padding: 10, 
    marginRight: 10,
    borderRadius: 8,
  },
  botao: {
    backgroundColor: 'blue',
    width: 45,
    height: 45,
    borderRadius: 25, 
    justifyContent: 'center',
    alignItems: 'center',
  },
  mais: {
    color: 'white',
    fontSize: 20,
  },
  card: {
    backgroundColor: '#eee',
    padding: 12,
    borderRadius: 6,
    marginBottom: 8,
  }


});


