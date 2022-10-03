import React from 'react'
import { FlatList, View, Text, Image, Dimensions, StyleSheet, ActivityIndicator } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParams } from '../stackNavigation/Tab1';

import { Character } from '../interfaces/AllCharactersInterface';
import { useGetEpisode } from '../hooks/useGetEpisodes';

import Icon from 'react-native-vector-icons/Ionicons'
import { EpisodeCard } from '../components/EpisodeCard';
import { TouchableOpacity } from 'react-native-gesture-handler';

interface Props extends StackScreenProps<RootStackParams, "CharacterScreen">{}

const {height, width} = Dimensions.get('screen');

export const CharacterScreen = ({route, navigation}:Props) => {
  
  const character:Character = route.params
  
  const uri = character.image 
  

  const {episode, isLoading} = useGetEpisode(character.episode)
  
  let color = ""
  if(character.status ==="Alive"){
    color = "green"
  }else if (character.status === "Dead") {
    color = "red"
  }else{
    color = "grey"
  }


  let data:any

  if(!isLoading && episode.length === undefined) {
    data = [episode]
  }else{
    data = episode
  }

  return (
    <View style={styles.screenConteiner}>

      <View>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={styles.BackButton}>
            {"<"}
          </Text>
        </TouchableOpacity>
      </View>
            {/* CAJA BLANCA */}
      <View style={styles.whiteBox}>

        <View style={styles.informationConteiner}>

            <View style={styles.nameConteiner}>
              <Text style={{fontSize: 15, color: color}}>◉</Text>
              <Text style={styles.nameText}>{character.name}</Text>
              <Text style={{fontSize: 15, color: color}}>({character.status})</Text>
            </View>

            <View style={styles.speciesConteiner}>
              <Text style={styles.speciesText}>({character.species} - {character.gender})</Text>
            </View>

            <View style={{marginTop:15}}>

            <View style={styles.dividingLine}></View>

              <View style={styles.dataCharacterConteiner}>
                <Icon 
                  color= "black" 
                  size={ 20 } 
                  name="paper-plane-outline"
                  />
                <Text style={styles.locationOrginText}>Origin</Text>
                <Text  style={styles.apiLocationOrginText}>{character.origin.name}</Text>
              </View>
              
                <View style={styles.dividingLine}></View>

              <View style={styles.dataCharacterConteiner}>
                <Icon 
                  color= "black" 
                  size={ 20 } 
                  name="map-outline"
                  />
                <Text style={styles.locationOrginText}>Location</Text>
                <Text style={styles.apiLocationOrginText}>{character.location.name}</Text>
              </View>

              <View style={styles.dividingLine}></View>

            </View>

        

            {
              isLoading
              ?
                <ActivityIndicator size={ 50 } color="grey" style={{ marginTop: 20}} />
              : 
                <View style={{top: 20}}>

                  <View style={styles.episodeTextContenier}>
                    <Text style={styles.episodeText}>Episodes</Text>
                    <Text style={{fontSize:15}}>({data.length})</Text>
                  </View>

                  <FlatList
                  data={data}
                  renderItem={ ({item}) => (<EpisodeCard episode={item}/> )}
                  keyExtractor={ ( item ) => item.id.toString() }
                  horizontal={ true}
                  showsHorizontalScrollIndicator={ false}
                  />
                </View>
              }
      </View>
        </View>

          {/* IMAGEN */}
      <View style={styles.imageConteiner}>
        <View
        style={styles.imageConteinerShadow}>
          <Image
          source={{uri}}
          style={styles.image} />
        </View>
          </View>
    </View>
    

      

  )
}

const styles = StyleSheet.create({

  screenConteiner:{
    flex:1,
    backgroundColor: "#cbaed7",
  },

  BackButton:{
    fontSize:50,
    color:"black",
    marginLeft:10
  },

  whiteBox:{
    marginHorizontal:"5%", 
    backgroundColor:"white", 
    borderRadius: 18, 
    marginTop: "36%", 
    position: "absolute", 
    width: width * 0.9, 
    height: height * 0.7,  
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,
    
    elevation: 10,
  },

  informationConteiner:{
    position: "absolute", 
    bottom: 60,
  },

  nameConteiner:{
    flexDirection: 'row',
    justifyContent: "center",
    alignItems: 'center',
    padding:15
  },

  nameText : {
    fontSize: 25,
    marginHorizontal: 10, 
    color: "black"
  },

  speciesConteiner:{
    bottom:10,
    justifyContent: "center",
    alignItems: 'center',
  },

  speciesText:{
    color: "orange", 
    fontSize:15
  },

  dataCharacterConteiner:{
    flexDirection: 'row', 
    marginHorizontal:5, 
    marginVertical:10, 
    alignItems: "center",  
  },

  locationOrginText:{
    marginLeft:7, 
    color:"black", 
    fontSize:17
  },

  apiLocationOrginText:{
    position:"absolute", 
    right:0, 
    fontSize:17,  
    height:45, 
    width:150, 
    textAlign:"right", 
    textAlignVertical:"center"
  },

  episodeTextContenier:{
    flexDirection: 'row',
    alignItems: "center",
    marginHorizontal:5
  },

  episodeText:{
    color:"black", 
    fontSize:20, 
    marginRight:5
  },

  dividingLine:{
    width:"100%", 
    height:1, 
    backgroundColor:"rgba(221, 221, 221, 1)"
  },


  imageConteiner:{
    alignItems: "center", 
    top:"2%", 
    position: 'absolute', 
    width:"100%"
  },

  imageConteinerShadow:{
    height:height * 0.35,
    width:width*0.72,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.37,
    shadowRadius: 7.49,
    
    elevation: 10,
    borderRadius:5,
  },

  image:{
    height:height * 0.35,
    width:width*0.72,
    borderRadius:5,
  }
})