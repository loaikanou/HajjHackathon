import React,{Component} from 'react'
import {View, ScrollView, Text, Image} from 'react-native'
import axios from 'axios'
import {Actions} from 'react-native-router-flux'
import {Header, Icon, Card, ListItem, Button} from 'react-native-elements'

const users = {
  "0": [
      "Test",
      "pc",
      243,
      78900022,
      "11",
      "222211"
    ],
  "1": [
      "Tarik K",
      "Palestine",
      21,
      530378723,
      "1771",
      "01110"
    ],
  "2": [
      "Hello Man",
      "England",
      18,
      6521341,
      "2312",
      "12131"
    ],
    "3": [
      "Faraj Garage",
      "Pakistan",
      12,
      55504421,
      "6666",
      "31231"
    ],
    "4": [
      "Anas Nablusi",
      "Syria",
      21,
      231221321,
      "0000",
      "1213"
    ]
}


class Scanner extends Component {
  // state = { user: [], data: {} }

  componentWillMount() {
    // fetch(`http://10.0.4.148:5000/users/${this.props.data}`)
    // .then((response) => response.json())
    // .then((responseData) => console.log(responseData));

    // axios.get(`http://10.0.4.148:5000/users/${this.props.data}`)
    // axios.get('http://10.0.4.148:5000/users/3')
    //   .then(response => this.setState({user: response}))
  }

  leftSection() {
    return (
      <Icon
        name='chevron-left'
        type='font-awesome'
        color='#fff'
        onPress={() => Actions.home()} />
    )
  }

  // dataInit() {
  //   var data = this.state.user.data
  //
  //   for(var propName in data) {
  //     if(data.hasOwnProperty(propName)) {
  //       var propValue = data[propName];
  //         this.setState({data: {propName: propValue}})
  //       }
  //     }
  //   }

  dataLoad() {
    const user = users[this.props.data]

    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Image style={{width: 60,height: 60, borderRadius: 30}} source={require('../assets/icon.png')} />
          <Text>{user[0]}</Text>
        </View>

        <View style={styles.body}>
          <Card>
            <Text style={styles.sectionHead}>Personal Information</Text>
            <Text style={styles.section}>{user[1]}</Text>
            <Text style={styles.section}>{user[2]}</Text>
            <Text style={styles.section}>{user[3]}</Text>
            <Text style={styles.section}>{user[4]}</Text>
            <Text style={styles.section}>{user[5]}</Text>
          </Card>
        </View>
      </View>
    )
  }

  dataNull() {
    return (
      <View style={styles.container}>
        <View style={styles.sectionStyle}>
          <Image key='img' style={styles.icon} source={require('../assets/icon.png')} />
          <Text key='none' style={{padding: 5}}>No Have Data</Text>
        </View>
      </View>
    )
  }

  render() {
    return (
      <ScrollView>
        <Header
          leftComponent={ this.leftSection() }
          centerComponent={{ text: 'Profile', style: { color: '#fff', fontSize: 18 } }}
          backgroundColor='green'/>

        {this.props.data ? this.dataLoad() : this.dataNull()}

      </ScrollView>
    )
  }
}

const styles = {
  container: {
    flex: 1,
  },
  sectionHead: {
    borderBottomWidth: 1,
    padding: 5,
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 18
  },
  section: {
    borderBottomWidth: 1,
    padding: 5
  },
  header: {
    flexDirection: 'column',
    height: 100,
    borderColor: '#ddd',
    borderBottomWidth: 1,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    padding: 5,
    shadowOpacity: 0.2,
    backgroundColor: 'white',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  body: {

  },
  sectionStyle: {
    borderWidth: 1,
    borderRadius: 4,
    borderColor: '#ddd',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    padding: 10,
    backgroundColor: '#fff',
    justifyContent: 'flex-start',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  icon: {
    width: 160,
    height: 160
  }
}

export default Scanner
