import { useState, useEffect, useContext } from 'react';
import { User } from '../interfaces/UserInterface';
import { AuthContext } from '../context/AuthContext';
import axios from 'axios';

export const useGetUserData = () => {

    const { token } = useContext( AuthContext );

    const [ isLoading, setIsLoading ] = useState(true)
    const [ userInfo, setUserData ] = useState<User>()

    const loadUserData = async() => {
        const resp = await axios.get<User>(`https://razbaqr77h.execute-api.sa-east-1.amazonaws.com/prod/user/${token}`, {headers:{ "x-api-key": "7HckdEx0dx67Kor9pPGAB7WtYCyd3r5J70Sp0smo"}});
        setUserData ( resp.data);
        setIsLoading(false);
    }
    
    
    useEffect(() => {
        loadUserData();
    }, [])
    
    return {
        isLoading,
        userInfo
    }
}