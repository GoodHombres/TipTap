import { z } from 'zod';
import AsyncStorage from '@react-native-async-storage/async-storage';

const CURRENT_ONBOARDING_STATUS = 'TipTap/CURRENT_ONBOARDING_STATUS';

export enum OnboardingStatus {
  complete = 'complete', // User has completed onboarding
  incomplete = 'incomplete', // User has not completed onboarding
  verifying = 'verifying', // We're verifying whether or not user has completed onboarding
}

/**
 * Scheme to eventually parse the saved status in AsyncStorage
 *
 * Value should either be `null` if it hasn't been set yet
 * Or any in OnboardingStatus
 */
const OnboardingStatusSchema = z
  .nullable(z.literal(OnboardingStatus.complete))
  .transform((status) => {
    if (status === null) return OnboardingStatus.incomplete;

    return status;
  });

/**
 * Deletes onboarding status from device store
 *
 */
export const removeOnboardingStatus = async (): Promise<void> => {
  try {
    await AsyncStorage.removeItem(CURRENT_ONBOARDING_STATUS);
  } catch (error) {
    console.warn('Error in removeOnboardingStatus:', error);
  }
};

/**
 * Retrieves onboarding status from device store
 *
 */
export const retrieveOnboardingStatus = async (): Promise<
  OnboardingStatus.complete | OnboardingStatus.incomplete
> => {
  try {
    const storedValue = await AsyncStorage.getItem(CURRENT_ONBOARDING_STATUS);
    const parsedResult = OnboardingStatusSchema.safeParse(storedValue);

    if (!parsedResult.success) return OnboardingStatus.incomplete;

    return parsedResult.data;
  } catch (error) {
    console.warn('Error in retrieveOnboardingStatus:', error);

    return OnboardingStatus.incomplete;
  }
};

/**
 * Saves onboarding status in device store
 *
 */
export const saveOnboardingStatus = async (): Promise<void> => {
  try {
    await AsyncStorage.setItem(
      CURRENT_ONBOARDING_STATUS,
      OnboardingStatus.complete,
    );
  } catch (error) {
    console.warn('Error in saveOnboardingStatus:', error);
  }
};
