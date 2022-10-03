import React from 'react'
import { View, Text, StyleSheet, Alert } from 'react-native';
import { TouchableOpacity, TextInput, ScrollView } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import { StackScreenProps } from '@react-navigation/stack';
import axios from 'axios';

import { User, EditUserResponse } from '../interfaces/UserInterface';
import { RootStackParams, StackNavigation } from '../stackNavigation/Tab1';
import { useForm } from '../hooks/useForm';

interface Props extends StackScreenProps<RootStackParams, "EditProfileScreen">{}

export const EditProfileScreen = ({route, navigation}:Props) => {

  const userInfo:User = route.params

  
  const navigate = useNavigation<StackNavigation>()
  
  const { name, surname, phone, onChange } = useForm({
    name: userInfo.userData.name,
    surname: userInfo.userData.surname,
    phone: userInfo.userData.phone,
  });

  
  const edit = async ({name, phone, surname}:any) => {
    const {data} = await axios.put<EditUserResponse>(`https://razbaqr77h.execute-api.sa-east-1.amazonaws.com/prod/user/${userInfo.userId}`, {name, phone, surname}, {headers: { "x-api-key" : "7HckdEx0dx67Kor9pPGAB7WtYCyd3r5J70Sp0smo"}})

    if(data){
      Alert.alert(
        "Edit Profile",
        data.message,
        [
          {
            text: "OK", onPress: () => navigation.replace("ProfileScreens")
          }
        ]
      )
    }

  }

  return (
    <ScrollView>
       
       <View style={style.headerContenier}>
        <TouchableOpacity
          onPress={ () => navigate.replace('ProfileScreens')}>
          <Text style={style.hearderText}>{"< Back"}</Text>
        </TouchableOpacity>

        <View style={style.headerCenter}>
        <Text style={style.hearderText}>Edit Profile</Text>
        </View>

       </View>

       <View style={style.inputConteiner}>

       <Text style={style.subText} >Name:</Text>
        <TextInput 
        style={style.textInput}
        onChangeText={ (value) => onChange(value, 'name') }
        value={ name } />

        <Text style={{fontSize:15}} >Surname:</Text>
        <TextInput 
        style={style.textInput}
        onChangeText={ (value) => onChange(value, 'surname') }
        value={ surname } />

        <Text style={style.subText} >Phone:</Text>
        <TextInput 
          keyboardType='phone-pad' 
          style={style.textInput} 
          onChangeText={ (value) => onChange(value, 'phone') }
          value={ phone } />
       </View>

       <TouchableOpacity style={style.saveBottom} onPress={() => edit({name, phone, surname})}>
        <Text style={ style.hearderText}> Save </Text>
       </TouchableOpacity>

    </ScrollView>
  )
}


const style = StyleSheet.create({

  headerContenier:{
    flexDirection:"row", 
    marginTop:20, 
    marginHorizontal:10
  },

  hearderText:{
    color:"black", 
    fontSize:20
  },

  headerCenter:{
    width:"100%", 
    position:"absolute", 
    alignItems:"center"
  },

  inputConteiner:{
    justifyContent:"center", 
    marginHorizontal:"8%", 
    marginTop:"40%",
  },

  textInput:{
    fontSize:25, 
    marginBottom:30, 
    color:"black", 
    backgroundColor:"rgb(247,247 ,247 )", 
    borderRadius:10, 
    padding:5
  },

  subText:{
    fontSize:15,
    color:"grey"
  },

  saveBottom:{
    marginHorizontal:"8%",
    marginTop:"20%",
    alignItems:"center",
    padding:7,
    borderRadius:10,
    backgroundColor:"#6D89DF"
  }
})