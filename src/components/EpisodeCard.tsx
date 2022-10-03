import React from 'react'
import { View, Text, StyleSheet } from 'react-native';
import { Episode } from '../interfaces/AllEpisodes';

interface Props {
    episode:Episode
}


export const EpisodeCard = ({episode}:Props) => {
  return (
    <View style={style.conteiner}>
      
      <View style={style.textConteiner}>
        <Text style={style.text}>Air Date </Text>
        <Text>{episode.air_date}</Text>
      </View>

      <View style={style.textConteiner}>
        <Text style={style.text}>Name</Text>
        <Text>{episode.name}</Text>
      </View>

      <View style={style.textConteiner}>
        <Text style={style.text}>Episode</Text>
        <Text>{episode.episode}</Text>
      </View>

    </View>
  )
}

const style = StyleSheet.create({

  conteiner:{
    marginHorizontal: 5, 
    marginVertical:5, 
    backgroundColor: "rgba(243, 243, 243, 1)", 
    padding: 10, borderRadius:5, 
    width: 300
  },

  textConteiner:{
    flexDirection: 'row',
    justifyContent: "space-between"
  },

  text:{
    color:"black",
    fontWeight: "bold" 
  }
  
})
