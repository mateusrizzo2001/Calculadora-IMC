import React, {useCallback, useState} from 'react';
import { StatusBar } from 'react-native';
import { StyleSheet, Text, View, TextInput, TouchableOpacity} from 'react-native';

export default function App() {

  const [altura, setAltura] = useState(0);
  const [resultado, setResultado] = useState(0);
  const [massa, setMassa] = useState(0);
  
  function limpar (){
    setAltura(0);
    setMassa(0);
    setResultado(0);
  }
  function imc (){
      setResultado((massa/(altura*altura)).toFixed(2))
  }

  const exibirTexto = useCallback(() => {
    switch (true) {
      case (resultado <= 0):
        return '';
      case (resultado < 18.5):
        return 'Abaixo do Peso';
      case (resultado < 25):
        return 'Saudável';
      case (resultado < 30):
        return 'Sobrepeso';
      case (resultado < 35):
        return 'Obesidade Grau I';
      case (resultado < 40):
        return 'Obesidade Grau II';
      case (resultado >= 40):
        return 'Obesidade Grau III ou Mórbida';
      default:
        return '';
    }
  }, [resultado]);

  return (
    <View style={styles.principal}>
      <Text style={styles.maintitle}> CALCULADORA DE IMC </Text>
      <Text style={styles.intro}>Mateus Rebello Rizzo - 202002298431</Text>
      
      <StatusBar barStyle = "light-content" hidden = {false} backgroundColor = "red" translucent = {false} networkActivityIndicatorVisible = {true}/>      
      
      <View>
        <TextInput value={altura} placeholder='Altura (m) 'keyboardType='numeric'onChangeText={(valor) => {setAltura(valor)}} style={styles.input}/>
        <TextInput  value={massa} placeholder='Peso (Kg)'keyboardType='numeric'onChangeText={(valor) => {setMassa(valor)}} style={styles.input}/>
      </View>
      
      <Text style={styles.status}> Status: {exibirTexto()} </Text>
      
      <View style={styles.action}>
        <TouchableOpacity style={styles.button} onPress={imc}>
          <Text style={styles.buttonText}> Calcular </Text>
        </TouchableOpacity>
        
        <TouchableOpacity  style={styles.button} onPress={limpar}>
          <Text style={styles.buttonText}> Limpar </Text>
        </TouchableOpacity>
      </View>

      <View>
        <Text style={styles.imcDisplay}> IMC: {resultado} </Text> 
      </View>

  </View>
  );
}

const styles = StyleSheet.create({
  principal: {
    flex: 1,
    backgroundColor: 'white',
    borderColor: 'black',
  },

  maintitle: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 25,
    marginHorizontal: 15,
    marginBottom: 10,
    textAlign: 'center',
    marginTop: 50,
  },

  intro: {
    color: 'black',
    fontSize: 20,
    marginHorizontal: 15,
    marginBottom: 10,
    textAlign: 'center',
  },

  status: {
    color: 'black',
    fontSize: 25,
    marginHorizontal: 5,
    marginBottom: 10,
    textAlign: 'left',
  },

  imcDisplay: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 25,
    marginHorizontal: 5,
    marginBottom: 10,
    marginTop: 20,
    textAlign: 'center',
  },

  button: {
    backgroundColor: 'red',
    width: 125,
    height: 40,
    borderRadius: 50,
    marginLeft: 40,
    marginTop: 10,
    textAlign: 'center'  
  },

  buttonText: {
    fontSize: 25,
    color: 'black',
    textAlign: 'center'  
  }, 

  input: {
    height:80,
    textAlign:'center',
    fontSize:40,
    marginTop:20,
    borderColor: 'red',
    borderWidth: 4,
    marginLeft: 10,
    marginRight: 10
  }, 

  action: {
    marginTop: 5,
    width: 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
  }, 
});
