import React from 'react'
import { 
  Image,
  StyleSheet, 
  Text, 
  View 
} from 'react-native'
import Cartao from './Cartao'

const PrevisaoItem = (props) => {
  return (
    <Cartao estilos={styles.cartao}>
      <View style={styles.tela}>
        <Image 
          style={styles.imagem}
          source={{ uri: `https://openweathermap.org/img/wn/${props.previsao.weather[0].icon}.png`}}
        />
        <View>
          <View style={styles.primeiraLinha}>
            <Text>{`${new Date(props.previsao.dt * 1000).toLocaleTimeString()} - ${props.previsao.weather[0].description}`}</Text>
          </View>
          <View style={styles.segundaLinha}>
            <Text style={styles.valor}>
              {`${props.previsao.main.temp_min}`}
            </Text>
            <Text style={styles.valor}>
              {`${props.previsao.main.temp_max}`}
            </Text>
            <Text style={styles.valor}>
              {`${props.previsao.main.humidity}%`}
            </Text>
          </View>
        </View>
      </View>
    </Cartao>
  )
}


const styles = StyleSheet.create({
  imagem: {
    width: 50,
    height: 50
  },
  tela: {
    flexDirection: 'row'
  },
  cartao: {
    marginBottom: 8
  },
  primeiraLinha: {
    justifyContent: 'center',
    flexDirection: 'row'
  },
  segundaLinha: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 4,
    borderTopWidth: 1,
    borderTopColor: '#DDD'
  },
  valor: {
    marginHorizontal: 2
  }
})
export default PrevisaoItem
