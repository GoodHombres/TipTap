import useStore from '../../common/lib/store';
import { OnboardingStatus } from './onboardingSlice';

const useOnboardingStatus = (): OnboardingStatus => {
  const onboardingStatus = useStore((state) => state.onboardingStatus);

  return onboardingStatus;
};

export default useOnboardingStatus;
