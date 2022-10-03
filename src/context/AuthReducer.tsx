export interface AuthState {
    status: 'checking' | 'authenticated' | 'not-authenticated';
    token: string | null;
    errorMessage: string;
    user: string | null;
}

type AuthAction = 
    | { type: 'signIn', payload: { token: string, user: string } }
    | { type: 'addError', payload: string }
    | { type: 'removeError' }
    | { type: 'logout' }


    export const authReducer = ( state: AuthState, action: AuthAction ): AuthState => {

        switch (action.type) {
            case 'addError':
                return {
                    ...state,
                    user: null,
                    status: 'not-authenticated',
                    token: null,
                    errorMessage: action.payload
                }
        
            case 'removeError':
                return {
                    ...state,
                    errorMessage: ''
                };
    
            case 'signIn':
                return {
                    ...state,
                    errorMessage: '',
                    status: 'authenticated',
                    token: action.payload.token,
                    user: action.payload.user
                }
    
            case 'logout':
                return {
                    ...state,
                    status: 'not-authenticated',
                    token: null,
                    user: null
                }    
            default:
                return state;
        }
    
    
    }
    