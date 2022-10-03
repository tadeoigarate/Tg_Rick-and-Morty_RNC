import { useState, useEffect } from 'react';
import { AllCharacter, Character } from '../interfaces/AllCharactersInterface';
import axios from 'axios';

export const useGetCharacter = () => {

    const [ isLoading, setIsLoading ] = useState(true)
    const [ character, setCharacter ] = useState<Character []>()

    const loadCharacter = async() => {
        const resp = await axios.get<AllCharacter>('https://rickandmortyapi.com/api/character');
        setCharacter ( resp.data.results);
        setIsLoading(false);
    }

    useEffect(() => {
        loadCharacter();
    }, [])

    return {
        isLoading,
        character
    }
}