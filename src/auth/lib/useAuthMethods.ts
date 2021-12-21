import { useContext } from 'react';
import { AuthMethods, AuthMethodsContext } from '../components/AuthProvider';

const useAuthMethods = (): AuthMethods => useContext(AuthMethodsContext);

export default useAuthMethods;
