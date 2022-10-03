import { useNavigation } from '@react-navigation/native';
import React from 'react'
import { Text, View, TouchableOpacity, Image, StyleSheet } from 'react-native';

import { Character } from '../interfaces/AllCharactersInterface';
import { StackNavigation } from '../stackNavigation/Tab1';

interface Props {
    character: Character;
}

export const CharacterCard = ({character}: Props) => {

    const {navigate} = useNavigation<StackNavigation>();

    
    let color = ""
    if(character.status ==="Alive"){
        color = "green"
    }else if (character.status === "Dead") {
        color = "red"
    }else{
        color = "grey"
    }

    return(
        <TouchableOpacity
        activeOpacity={ 0.9 }
        onPress = {() => navigate("CharacterScreen", character)}
        >

            <View style={ style.conteiner}>
                <View>
                        <Image 
                            source={{uri: character.image}}
                            style={style.image}
                        />
                    </View>

                    <View style={style.textConteiner}>
                        <Text style={{...style.statusText, color: color  }}>◦{character.status}</Text>
                        <Text style={style.nameText}>{character.name}</Text>
                    </View>

                    <View style={style.goTodDescriptionConteiner}>
                        <Text style={style.goTodDescriptionText}>{">>"}</Text>
                </View>
            </View>
        </TouchableOpacity>
    )
}

const style = StyleSheet.create({
    conteiner:{
        flexDirection: 'row',
        marginHorizontal:"3%",
        marginVertical:"3%",
        padding:"3%",
        alignItems: "center",
        backgroundColor: "rgba(243, 243, 243, 1)",
        borderRadius:18,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        
        elevation: 5,
    },

    image:{
        width: 70, 
        height: 70, 
        borderRadius: 100, 
        alignItems: "center"
    },

    textConteiner:{
        position: "absolute",
        marginLeft: "28%",
        top: "22%"
    },

    statusText: {
        top: "10%", 
        marginLeft: "10%",
    },

    nameText: {
        fontSize:17, 
        color: "black"
    },

    goTodDescriptionConteiner :{
        flex: 1,
        alignItems: "flex-end",
    },
    goTodDescriptionText:{
        fontSize:20, 
        color: "black"
    }
})