import { useContext } from 'react';
import { AuthState, AuthStateContext } from '../components/AuthProvider';

const useAuthState = (): AuthState => useContext(AuthStateContext);

export default useAuthState;
