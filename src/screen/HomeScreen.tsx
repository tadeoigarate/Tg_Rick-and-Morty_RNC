import React from 'react'
import { View, FlatList } from 'react-native';
import { CharacterCard } from '../components/CharacterCard';
import { useGetCharacter } from '../hooks/useGetCharacter';
import { LoadingScreen } from './LoadingScreen';

export const HomeScreen = () => {

  const {character, isLoading} = useGetCharacter()

  return (

    <View>
      { isLoading
      
        ? <LoadingScreen />

        : <View>
            <FlatList
            data={character}
            keyExtractor={ (character) => character.id.toString() }
            showsVerticalScrollIndicator={ false }
            numColumns={ 1 }
            renderItem={({item}) => (<CharacterCard character={item}/>)}
            />
        </View>
      }
    </View>
  )
}
