import React from 'react'
import { Scene, Router, Actions } from 'react-native-router-flux'
import {Header} from 'react-native-elements'
import Home from './components/Home'
import Scanner from './components/Scanner'
import Profile from './components/Profile'

const RouterComponent = () => {
  return (
    <Router>
      <Scene key="root" hideNavBar>
        <Scene key="home" hideNavBar component={Home} title="Hajj Hackathon" initial />
        <Scene key="scanner" hideNavBar component={Scanner} title="QR Scanner" />
        <Scene key="profile" hideNavBar component={Profile} title="Profile" />
      </Scene>
    </Router>
  )
}

export default RouterComponent
