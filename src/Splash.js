import React, {Component} from 'react'
import {View, Text, Image} from 'react-native'

class Splash extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Image style={styles.icon} source={require('./assets/icon.png')} />
        <Text style={styles.label}>هاكاثون الحج</Text>
        <Text style={styles.label}>Hajj Hackathon</Text>
      </View>
    )
  }
}

const styles = {
  container:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  icon: {
    top: -60,
    width: 160,
    height: 160,
    marginBottom: 20
  },
  label: {
    top: -60,
    fontSize: 24,
  }
}

export default Splash
