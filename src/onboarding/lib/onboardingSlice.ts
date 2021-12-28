export enum OnboardingStatus {
  complete = 'complete', // User has completed onboarding
  incomplete = 'incomplete', // User has not completed onboarding
  verifying = 'verifying', // We're verifying whether or not user has completed onboarding
}

const createOnboardingSlice = (set, _) => ({
  onboardingStatus: OnboardingStatus.verifying,
  completeOnboarding: () =>
    set(() => ({
      onboardingStatus: OnboardingStatus.complete,
    })),
  resetOnboarding: () =>
    set(() => ({
      onboardingStatus: OnboardingStatus.incomplete,
    })),
});

export default createOnboardingSlice;
