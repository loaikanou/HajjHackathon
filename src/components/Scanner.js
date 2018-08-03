import React,{Component} from 'react'
import {StyleSheet, View, Text, TextInput, LayoutAnimation} from 'react-native'
import {Actions} from 'react-native-router-flux'
import {Header, Icon} from 'react-native-elements'
import QRCode from 'react-native-qrcode';

class Scanner extends Component {
  state = {qrText: ''}

  leftSection() {
    return (
      <Icon
        name='chevron-left'
        type='font-awesome'
        color='#fff'
        onPress={() => Actions.home()} />
    )
  }

  render() {
    return (
      <View style={{flex: 1}}>
        <Header
          leftComponent={ this.leftSection() }
          centerComponent={{ text: 'QR Scanner', style: { color: '#fff', fontSize: 18 } }}
          backgroundColor='green' />

        <View style={styles.container}>
          <TextInput
            style={styles.input}
            onChangeText={text => {
              LayoutAnimation.spring()
              this.setState({qrText: text})
            }}
            value={this.state.qrText}
          />

          <QRCode
            value={this.state.qrText}
            size={200}
            bgColor='green'
            fgColor='white'/>
        </View>

      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    top:50,
    alignItems: 'center',
    justifyContent: 'center'
  },
  input: {
    height: 40,
    width: 200,
    borderColor: 'gray',
    borderWidth: 1,
    margin: 10,
    borderRadius: 5,
    padding: 10,
    marginBottom: 10
  }
})

export default Scanner
