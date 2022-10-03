import { useState, useEffect } from 'react';
import axios from 'axios';
import { Episode } from '../interfaces/AllEpisodes';

export const useGetEpisode = (props:string[]) => {

    const [ isLoading, setIsLoading ] = useState(true)
    let [ episode, setEpisode ] = useState<Episode[]>([])
        
    const loadEpisode = () => {

        const episodeNum:String[] = []

        props.forEach( (episodes) => {
            if (episodes?.length <= 41){
                episodeNum.push(episodes.slice(episodes.length - 1))
            }else{
                episodeNum.push(episodes.slice(episodes.length - 2))
            }
        })

        const episodeNumToStr = episodeNum.toString()

        axios.get<Episode[]>(`https://rickandmortyapi.com/api/episode/${episodeNumToStr}`)
            .then( (data) => {
                setEpisode(data.data)
                setIsLoading(false)
            })
    }

    useEffect(() => {
        loadEpisode();
    }, [])

    return{
        isLoading,
        episode,
    }
}