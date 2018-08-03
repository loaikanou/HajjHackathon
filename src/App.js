import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import Router from './Router'
import Splash from './Splash'

type Props = {};
class App extends Component<Props> {
  state = {splash: true}

  timer() {
    setTimeout(() => { // setInterval
      this.setState({splash: false})
    }, 2000)
  }

  renderContent() {
    this.state.splash ? this.timer() : null
    
    if (this.state.splash) {
      return <Splash />
    }
    return <Router />
  }

  render() {
    return (
      <View style={styles.container}>
        {this.renderContent()}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})

export default App
