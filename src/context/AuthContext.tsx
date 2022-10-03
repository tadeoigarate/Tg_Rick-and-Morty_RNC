import React, { createContext, useReducer } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { LogResponse, LoginData } from '../interfaces/UserInterface';
import { authReducer, AuthState } from './AuthReducer';
import axios from 'axios';


type AuthContextProps = {
    errorMessage: string;
    token: string | null;
    user: string | null;
    status: 'checking' | 'authenticated' | 'not-authenticated';
    signIn: ( loginData: LoginData ) => void;
    logOut: () => void;
    removeError: () => void;
}

const authInicialState: AuthState = {
    status: 'checking',
    token: null,
    user: null,
    errorMessage: ''
}

export const AuthContext = createContext({} as AuthContextProps);

export const AuthProvider = ({ children }: any)=> {

    const [state, dispatch] = useReducer(authReducer, authInicialState)

    const signIn = async({ mail, password }: LoginData ) => {

        try {
         
            const { data } = await axios.post<LogResponse>('https://razbaqr77h.execute-api.sa-east-1.amazonaws.com/prod/login', { mail, password }, {
                headers:{
                    "x-api-key": "7HckdEx0dx67Kor9pPGAB7WtYCyd3r5J70Sp0smo"
                }
            } );
            dispatch({ 
                type: 'signIn',
                payload: {
                    token: data.userId,
                    user: data.userName
                }
            });

            await AsyncStorage.setItem('token', data.userId );
        } catch (error) {
            dispatch({ 
                type: 'addError', 
                payload: 'Información incorrecta'
            })
        }
    };

    const logOut = async() => {
        await AsyncStorage.removeItem('token');
        dispatch({ type: 'logout' });
    };

    const removeError = () => {
        dispatch({ type: 'removeError' });
    };

    return (
        <AuthContext.Provider value={{
            ...state,
            signIn,
            logOut,
            removeError,
        }}>
            { children }
        </AuthContext.Provider>
    )
    
}