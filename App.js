import React, {useState} from 'react';
import { 
  StyleSheet, 
  TextInput, 
  Button, 
  View, 
  FlatList, 
  Keyboard ,
  Text
} from 'react-native';
import chaves from './chaves';
import PrevisaoItem from './components/PrevisaoItem';

export default function App() {
  const [cidade, setCidade] = useState('');
  const [previsoes, setPrevisoes] = useState([]);
  const endPoint = "https://api.openweathermap.org/data/2.5/forecast?lang=pt_br&units=metric&q=";
  const chave = chaves.chave;
  const capturarCidade = (cidade) => {
    setCidade(cidade);
  }
  const obterPrevisoes = () => {
    setPrevisoes([]);
    const target =  `${endPoint}${cidade}&appid=${chave}`;
    fetch(target)
    .then(
      (dados) => dados.json()
    ).then((dados => {
      setPrevisoes(dados['list'])
      Keyboard.dismiss();
    }));
  }
  return (
    <View style={styles.container}>
      <View style={styles.entrada}>
        <TextInput 
          style={styles.nomeCidade}
          placeholder="Digite o nome de uma cidade"
          value={cidade}
          onChangeText={capturarCidade}
        />
        <Button 
          title="OK"
          onPress={obterPrevisoes}
        />
      </View>
      <FlatList
        data={previsoes}
        renderItem={previsao => (
          <PrevisaoItem previsao={previsao.item}/>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 60,
    flexDirection: 'column',
    flex: 1,
    backgroundColor: '#fff',
  },
  nomeCidade: {
    padding: 12,
    borderBottomColor: "#BB96F3",
    borderBottomWidth: 2,
    textAlign: "center",
    marginBottom: 6,
    flexGrow:0.9
  },
  entrada: {
    marginBottom: 8
  }
});
