import { createContext, ReactNode, useEffect, useMemo, useState } from 'react';
import {
  OnboardingStatus,
  removeOnboardingStatus,
  retrieveOnboardingStatus,
  saveOnboardingStatus,
} from '../../onboarding/lib/onboardingStatus';

// #region Context Stuff
export type AuthState = {
  onboardingStatus: OnboardingStatus;
};

export type AuthMethods = {
  completeOnboarding(): void;
  resetOnboarding(): void;
};

const initialState: AuthState = {
  onboardingStatus: OnboardingStatus.verifying,
};

export const AuthStateContext = createContext(initialState);
AuthStateContext.displayName = 'AuthStateContext';

export const AuthMethodsContext = createContext<AuthMethods>({
  completeOnboarding() {},
  resetOnboarding() {},
});

AuthMethodsContext.displayName = 'AuthMethodsContext';
// #endregion

// #region Component
type Props = {
  children: ReactNode;
};

const AuthProvider = ({ children }: Props): JSX.Element => {
  const [authState, setAuthState] = useState<AuthState>(initialState);

  const authMethods = useMemo(
    () => ({
      async completeOnboarding() {
        await saveOnboardingStatus();

        setAuthState((currentState) => ({
          ...currentState,
          onboardingStatus: OnboardingStatus.complete,
        }));
      },
      async resetOnboarding() {
        await removeOnboardingStatus();

        setAuthState((currentState) => ({
          ...currentState,
          onboardingStatus: OnboardingStatus.incomplete,
        }));
      },
    }),
    [],
  );

  // On mount, let's verify the user's onboarding status
  useEffect(() => {
    const handleOnboardingStatusVerification = async () => {
      // Loading state
      setAuthState((currentState) => ({
        ...currentState,
        onboardingStatus: OnboardingStatus.verifying,
      }));

      const onboardingStatus = await retrieveOnboardingStatus();

      setAuthState((currentState) => ({ ...currentState, onboardingStatus }));
    };

    handleOnboardingStatusVerification();
  }, []);

  return (
    <AuthMethodsContext.Provider value={authMethods}>
      <AuthStateContext.Provider value={authState}>
        {children}
      </AuthStateContext.Provider>
    </AuthMethodsContext.Provider>
  );
};

export default AuthProvider;
// #endregion
