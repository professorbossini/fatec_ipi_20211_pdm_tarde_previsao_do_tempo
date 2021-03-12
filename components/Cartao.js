import React from 'react'
import { Button, StyleSheet, View } from 'react-native'

const Cartao = (props) => {
  return (
    <View style={{...styles.cartao, ...props.estilos}}>
      {props.children}
    </View>
  )
}
export default Cartao;

const styles = StyleSheet.create({
  cartao: {
    alignItems: 'center',
    shadowColor: 'black',
    shadowOffset:{
      width: 0,
      height: 2
    },
    shadowRadius: 6,
    shadowOpacity: 0.32,
    elevation: 4,
    padding: 12,
    backgroundColor: 'white'
  }
})
