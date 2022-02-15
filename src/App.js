import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { StyleSheet, Text, View, Image, SafeAreaView } from 'react-native'
import CheckBox from './components/CheckBox'
import DisplayPassword from './components/DisplayPassword'
import Button from './components/Button'
import Counter from './components/Counter'
import { numbers, upperLetters, lowerLetters, symbols } from "./assets/characters"
import { LinearGradient } from 'expo-linear-gradient'

export default class passwordGenerator extends React.Component {
  
  state = {
    password: "Password",
    length: 4,
    numbers: false,
    upperCase: false,
    lowerCase: false,
    symbols: false
  }

  counterMinus = () => {
    if (this.state.length > 4) {
      this.setState({length: this.state.length - 1})
    }
  }

  counterPlus = () => {
    if (this.state.length < 18) {
      this.setState({length: this.state.length + 1})
    }
  }

  numbersHandler = () => {
    if (this.state.numbers) {
      this.setState({numbers: false})
    }
    else {
      this.setState({numbers: true})
    }
  }

  upperHandler = () => {
    if (this.state.upperCase) {
      this.setState({upperCase: false})
    }
    else {
      this.setState({upperCase: true})
    }
  }

  lowerHandler = () => {
    if (this.state.lowerCase) {
      this.setState({lowerCase: false})
    }
    else {
      this.setState({lowerCase: true})
    }
  }

  symbolsHandler = () => {
    if (this.state.symbols) {
      this.setState({symbols: false})
    }
    else {
      this.setState({symbols: true})
    }
  }

  generatePassword = () => {
    let len = this.state.length
    let characterList = ""
    if (this.state.numbers) {
      characterList += numbers
    }
    if (this.state.lowerCase) {
      characterList += lowerLetters
    }
    if (this.state.upperCase) {
      characterList += upperLetters
    }
    if (this.state.symbols) {
      characterList += symbols
    }
    this.setState({password: Array(len).fill(characterList).map(function(x) { return x[Math.floor(Math.random() * x.length)] }).join('')})
  }

  render() {
    return (
        <SafeAreaView style={styles.container}>
          <LinearGradient style={styles.gradient} colors={["#F53700", "orange"]} start={{x: 0, y: 0}} end={{x: 1, y: 1}}>
          <StatusBar style="auto"/>
          <Image source={require("./assets/images/password.android.png")} style={styles.passwordImage}/>
          <View style={styles.options}>
            <CheckBox onClick={() => this.numbersHandler()}>Numbers</CheckBox>
            <CheckBox onClick={() => this.lowerHandler()}>Lower case letters</CheckBox>
            <CheckBox onClick={() => this.upperHandler()}>Upper case letters</CheckBox>
            <CheckBox onClick={() => this.symbolsHandler()}>Special characters</CheckBox>
            <Counter style={styles.counter} onClickPlus={() => this.counterPlus()} onClickMinus={() => this.counterMinus()}>{this.state.length}</Counter>
          </View>
          <View style={styles.displayPassword}>
            <DisplayPassword>{this.state.password}</DisplayPassword>
            <Button onClick={() => this.generatePassword()}/>
          </View>
          </LinearGradient>
        </SafeAreaView>
    )
  }  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  passwordImage: {
    width: 225,
    height: 225,
    position: "relative",
    bottom: 145,
    marginTop: 180
  },
  options: {
    bottom: 165
  },
  displayPassword: {
    bottom: 50
  },
  gradient: {
    width: "100%",
    height: "100%",
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
})
