import React,{Component} from 'react'
import {Header} from 'react-native-elements'

const NavBar = () => {
  return (
    <Header
      leftComponent={ this.props.leftNav }
      centerComponent={ this.props.title }
      rightComponent={ this.props.rightNav }
      outerContainerStyles={{ backgroundColor: 'green' }}
      innerContainerStyles={{ justifyContent: 'space-between', backgroundColor: 'green' }}
    />
  )
}

export {NavBar}
