import React from 'react'
import { View, Text, Image, Dimensions, TouchableOpacity, StyleSheet } from 'react-native';
import { useGetUserData } from '../hooks/useGetUserData';
import Icon from 'react-native-vector-icons/Ionicons'
import { LoadingScreen } from './LoadingScreen';
import { useNavigation } from '@react-navigation/native';
import { StackNavigation } from '../stackNavigation/Tab1';
import { AuthContext } from '../context/AuthContext';
import { useContext } from 'react';


const {height, width} = Dimensions.get('screen');

export const ProfileScreen = () => {

  const navigation = useNavigation<StackNavigation>()
  
  const {logOut} = useContext( AuthContext )
  
  const {userInfo, isLoading} = useGetUserData()

  if ( isLoading ) {
    return(
      <LoadingScreen />
      )
    }
    
    

  return (
    <View style={{flex:1}}>

      <View style={style.headerConteiner}>

        <TouchableOpacity
          onPress={() => navigation.navigate("HomeScreens")}>
            <Text style={style.headerText}>{"< back"}</Text>
        </TouchableOpacity>

        <Text style={{fontSize:20, color:"black"}}>Profile</Text>

        <TouchableOpacity
          onPress={() => navigation.navigate("EditProfileScreen", userInfo!)}>
            <Text style={style.headerText}>{"edit >"}</Text>
        </TouchableOpacity>
      </View>


      <View style={style.imageConteiner}>
          <Image
              source={require('../assets/perfil-de-usuario.jpg')}
              style={style.image} />
        </View>

          <Text style={style.nameText}>{userInfo?.userData.name} {userInfo?.userData.surname}</Text>

      <View style={{marginTop:15}}>

      <View style={style.dividingLine}></View>

        <View style={style.userDataConteiner}>
          <Icon 
            color= "black" 
            size={ 20 } 
            name="mail-outline"
            />
          <Text style={style.phoneMailText}>Mail</Text>
          <Text  style={style.userData}>{userInfo?.userData.mail}</Text>
        </View>
        
          <View  style={style.dividingLine}></View>

        <View style={style.userDataConteiner}>
          <Icon 
            color= "black" 
            size={ 20 } 
            name="call-outline"
            />
          <Text style={style.phoneMailText}>Phone</Text>
          <Text style={style.userData}>{userInfo?.userData.phone}</Text>
        </View>

        <View  style={style.dividingLine}></View>

      </View>

      <View style={style.logoutConteiner}>
        <TouchableOpacity
        onPress={logOut}
        style={style.logoutButton}>
          <Icon
          color="black"
          size={20}
          name="log-out-outline"
          />
          <Text style={style.textButton}>Logout</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const style = StyleSheet.create({
  headerConteiner:{
    justifyContent:"space-between", 
    flexDirection:"row", 
    paddingVertical:10, 
    marginBottom:10, 
    marginHorizontal:10
  },

  headerText:{
    fontSize:20, 
    color:"#294EBC"
  },

  imageConteiner:{
    height:height * 0.35,
    width:width*0.72,
    alignSelf:"center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.37,
    shadowRadius: 7.49,
    
    elevation: 10,
    borderRadius:200,
  },

  image:{
    height:height * 0.35,
    width:width*0.72,
    borderRadius:200,
  },

  nameText:{
    marginVertical:20,
    fontWeight:"bold",
    fontSize:25,
    color:"black",
    alignSelf:"center",
  },

  dividingLine:{
    width:"100%", 
    height:1, 
    backgroundColor:"rgba(221, 221, 221, 1)"
  },

  userDataConteiner:{
    flexDirection: 'row', 
    marginHorizontal:10, 
    marginVertical:10, 
    alignItems: "center",
  },

  userData:{
    position:"absolute", 
    right:0, 
    fontSize:17, 
    textAlign:"right", 
    textAlignVertical:"center"
  },

  phoneMailText:{
    marginLeft:7, 
    color:"black", 
    fontSize:17
  },

  logoutConteiner:{
    alignItems: 'center', 
    marginTop:75
  },

  logoutButton:{
    flexDirection:"row", 
    justifyContent:"space-between", 
    borderWidth:1, 
    borderRadius:20, 
    padding:5
  },

  textButton:{
    fontSize: 15,
    color: 'black'
  }
})