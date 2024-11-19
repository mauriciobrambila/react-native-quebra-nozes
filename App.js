import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

function App() {
  const [img, setImg] = useState(require('./src/biscoito.png'));
  const [textoFrase, setTextoFrase] = useState('');
  let frases = [
    "A jornada mais longa começa com um único passo.",
    "Estude, estude, estude, ou não chegara a lugar nenhum",
    "Cada dia é uma nova oportunidade para brilhar.",
    "Se você pode sonhar, pode realizar.",
    "A persistência leva ao sucesso.",
  ];

  function quebraBiscoito() {
    let numeroAleatorio = Math.floor(Math.random() * frases.length)

    setTextoFrase(' " ' + frases[numeroAleatorio] + ' " ');
    setImg(require('./src/biscoitoAberto.png'));
  }

  function reiniciar() {
    setImg(require('./src/biscoito.png'));
    setTextoFrase('');
  }

  return (
    <View style={styles.container}>
      
      <Text style={styles.aluno}>Mauricio Brambila R.A-10482212610</Text>
      <Text style={styles.Disciplina}>Desenvolvimento Mobile</Text>
  
      <Image
        source={img}
        style={styles.img}/>
      
      <Text style={styles.textofrase}> {textoFrase} </Text>

      <TouchableOpacity style={styles.botao} onPress={quebraBiscoito}>
        <View style={styles.btnArea}>
          <Text style={styles.btnTexto} >Quebrar Biscoito</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity style={[styles.botao, { marginTop: 5, borderColor: 'black' }]} onPress={reiniciar}>
        <View style={styles.btnArea}>
          <Text style={[styles.btnTexto, { color: 'blue' }]} >Reiniciar biscoito</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: 'red',
    borderRadius: 20,
    borderWidth: 5
  },

  Disciplina: {
    fontSize: 15,
    color: 'green',
    fontWeight: 'bold',
    alignSelf: 'center'
 },

 aluno: {
  fontSize: 14,
  color: 'green',
  fontWeight: 'bold',
  alignSelf: 'center'
},
  usuario:{

  },

  img: {
    width: 230,
    height: 230,
  },

  textofrase: {
    fontSize: 20,
    color: 'red',
    margin: 20,
    fontStyle: 'italic',
    textAlign: 'center',
    fontWeight: 'bold'
  },

  botao: {
    width: 200,
    height: 50,
    borderColor: 'blue',
    borderWidth: 4,
    borderRadius: 25
  },

  btnArea: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },

  btnTexto: {
    fontSize: 17,
    fontWeight: 'bold',
    color: 'black'
  }
})

export default App;