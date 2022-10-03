import React, { useContext, useEffect } from 'react'
import { View, TextInput, Text, TouchableOpacity, Keyboard, Alert, StyleSheet } from 'react-native';

import { useForm } from '../hooks/useForm';
import { AuthContext } from '../context/AuthContext';




export const LoginScreen = () => {


  const {signIn, errorMessage, removeError } = useContext(AuthContext)

  const { mail, password, onChange } = useForm({
    mail: '',
    password: '' 
 });

 useEffect(() => {
  if( errorMessage.length === 0 ) return;

  Alert.alert( 'Login incorrecto', errorMessage,[{
      text: 'Ok',
      onPress: removeError
  }]);

}, [ errorMessage ])

 const onLogin = () => {
  Keyboard.dismiss();
  signIn({ mail, password });
}

  
  return (
    <View style={style.screenConteiner}>

      <Text style={style.loginText}>Login</Text>

      <Text style={style.EmailPassText}>Email</Text>
        <TextInput 
          placeholder="Insert your email:"
          placeholderTextColor="rgb(150,150,150)"
          keyboardType="email-address"
          underlineColorAndroid="black"
          selectionColor="black"
          autoCapitalize="none"
          autoCorrect={ false }
          onChangeText={ (value) => onChange(value, 'mail') }
          value={ mail }
          onSubmitEditing={ onLogin }
          style={style.inputText}
      />

      <Text style={style.EmailPassText}>Password</Text>
        <TextInput 
          secureTextEntry={true}
          placeholder="*********"
          placeholderTextColor="rgb(150,150,150)"
          underlineColorAndroid="black"
          selectionColor="black"
          autoCapitalize="none"
          autoCorrect={ false }
          onChangeText={ (value) => onChange(value, 'password') }
          value={ password }
          onSubmitEditing={ onLogin }
          style={style.inputText}
      />

    <View style={style.buttonConteiner}>
      <TouchableOpacity
          activeOpacity={ 0.8 }
          onPress={ onLogin}
          style={style.button}>
        <Text style={style.buttonText}>Login</Text>
      </TouchableOpacity>
    </View>
</View>
    
  )
}

const style = StyleSheet.create({
  screenConteiner:{
    backgroundColor:"white",
    flex: 1,
    paddingHorizontal: 30,
    justifyContent:'center',
  },

  loginText:{
    color: 'black',
    fontSize: 30,
    fontWeight: 'bold',
    bottom:"12%", textAlign:"center"
  },

  EmailPassText:{
    color: 'black',
    fontSize: 30,
    fontWeight: 'bold',
    marginTop: 20
  },

  inputText:{
    color:'black',
    fontSize: 20,
  },

  buttonConteiner:{
    alignItems: 'center',
    marginTop: 50
  },

  button:{
    borderWidth: 2,
    borderColor: 'black',
    paddingHorizontal: 20,
    paddingVertical: 5,
    borderRadius: 100
  },

  buttonText:{
    fontSize: 18,
    color: 'black'
  }
})