import useAuthState from '../../auth/lib/useAuthState';
import { OnboardingStatus } from './onboardingStatus';

const useOnboardingStatus = (): OnboardingStatus => {
  const { onboardingStatus } = useAuthState();

  return onboardingStatus;
};

export default useOnboardingStatus;
