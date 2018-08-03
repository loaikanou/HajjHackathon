import React,{Component} from 'react'
import {StyleSheet, View, Text, Linking, TouchableOpacity, PermissionsAndroid, Platform, Dimensions, Vibration} from 'react-native'
import {Actions} from 'react-native-router-flux'
import {Header, Icon} from 'react-native-elements'
import Permissions from 'react-native-permissions'
import { RNCamera as Camera } from 'react-native-camera'
import QRCodeScanner from './common/QRCodeScanner'

class Home extends Component {
  state = {activate: true}
  onSuccess(e) {
    // console.log(e.data)
    this.setState({activate: false})
    Actions.profile({data: e.data})
    // Linking.openURL(e.data).catch(err => console.error('An error occured', err))
  }

  leftSection() {
    return (
      <Icon
        name='qrcode'
        type='font-awesome'
        color='#fff'
        onPress={() => Actions.scanner()} />
    )
  }

  rightSection() {
    return (
      <Icon
        name='user'
        type='font-awesome'
        color='#fff'
        onPress={() => Actions.profile()} />
    )
  }

  render() {
    return (
      <View style={{flex: 1}}>
        <Header
          leftComponent={ this.leftSection() }
          centerComponent={{ text: 'Hajj Hackathon', style: { color: '#fff', fontSize: 18 } }}
          rightComponent={ this.rightSection() }
          backgroundColor='green'
        />

        <QRCodeScanner
          onRead={this.onSuccess.bind(this)}
          reactivate={false}
          showMarker={true}
          checkAndroid6Permissions={true}
          topContent={
            <Text style={styles.centerText}>Scan the QR code.</Text>
          }
          bottomContent={
            <TouchableOpacity style={styles.buttonTouchable} onPress={this.onSuccess.bind(this)}>
              <Icon
                style={styles.buttonText}
                name='fingerprint'
                color='#000'
                />
            </TouchableOpacity>
          }
        />

      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  centerText: {
    flex: 1,
    fontSize: 18,
    padding: 32,
    color: '#777',
  },
  textBold: {
    fontWeight: '500',
    color: '#000',
  },
  buttonText: {
    fontSize: 28,
    color: 'rgb(0,122,255)',
  },
  buttonTouchable: {
    padding: 16,
  }
})

export default Home
