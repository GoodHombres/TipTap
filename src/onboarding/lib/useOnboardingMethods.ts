import useStore from '../../common/lib/store';

const useOnboardingMethods = () =>
  useStore((state) => ({
    complete: state.completeOnboarding,
    reset: state.resetOnboarding,
  }));

export default useOnboardingMethods;
