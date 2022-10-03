import React, { useEffect, useState } from 'react'
import { View, Text, FlatList, Dimensions, StyleSheet } from 'react-native';

import { CharacterCard } from '../components/CharacterCard';
import { SearchInput } from '../components/SearchInput';
import { useGetCharacter } from '../hooks/useGetCharacter';
import { Character } from '../interfaces/AllCharactersInterface';
import { LoadingScreen } from './LoadingScreen';

const screenWidth = Dimensions.get('window').width;

export const SearchScreen = () => {

  const { isLoading, character } = useGetCharacter();
  
  const [characterFiltered, setCharacterFiltered] = useState<Character[]>()
  
  const [ term, setTerm ] = useState('')

  
  useEffect(() => {
    
    if ( term.length === 0 ) {
      return setCharacterFiltered([]);
    }else if ( isNaN( Number(term) ) ) {
      setCharacterFiltered(
        character!.filter( (char) =>
          char.name.toLocaleLowerCase().includes( term.toLocaleLowerCase())
        )
      );
    };
  }, [term])
          
          
  if ( isLoading ) {
    return(
      <LoadingScreen />
      )
  }

  return (

    <View>

    <View style={style.serchInputConteiner}>
        <SearchInput
                onDebounce={ (value) => setTerm( value )  }
                style={style.serchInput}
            />
</View>

<FlatList
          data={characterFiltered}
          keyExtractor={ (character) => character.id.toString() }
          showsVerticalScrollIndicator={ false }
          numColumns={ 1 }
          ListHeaderComponent={(
            <Text style={style.textHeaderInput}>{term}</Text>
          )}
          renderItem={({item}) => (<CharacterCard character={item}/>)}

          />
      </View>
  )
}

const style = StyleSheet.create({
  serchInputConteiner:{
    flex: 1, 
    marginHorizontal: 20,
  },

  serchInput:{
    position: 'absolute',
    zIndex: 999,
    width: screenWidth - 40,
    top: 30
  },

  textHeaderInput:{
    fontSize: 35,
    fontWeight: 'bold',
    marginHorizontal: 20,
    paddingBottom: 10,
    marginTop:80
  }
})