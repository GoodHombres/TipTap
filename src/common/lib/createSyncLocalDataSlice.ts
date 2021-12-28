import { z } from 'zod';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { OnboardingStatus } from '../../onboarding/lib/onboardingSlice';

const TIPTAP_STORAGE_KEY = '@TipTap/common/STORAGE_KEY';

const SavedDataSchema = z.object({
  onboardingStatus: z
    .nativeEnum(OnboardingStatus)
    // Force status to not be verifying
    .transform((status) =>
      status !== OnboardingStatus.verifying
        ? status
        : OnboardingStatus.incomplete,
    ),
  selectedTip: z.nullable(z.number()),
  /**
   * Let's make sure tips is an array of numbers by stripping any non numbers
   * ``` js
   *  [1, '2.5', 'a', 0.2] => [1, 2.5, 0.2]
   * ```
   */
  tips: z.array(z.unknown()).transform((tips) =>
    tips.reduce((accumulatedTips: number[], possibleTip: unknown) => {
      const numericTip = Number(possibleTip);

      // If number
      if (!isNaN(numericTip)) {
        accumulatedTips.push(numericTip);
      }

      return accumulatedTips;
    }, []),
  ),
});
type SavedData = z.infer<typeof SavedDataSchema>;

const defaultData: SavedData = {
  onboardingStatus: OnboardingStatus.incomplete,
  selectedTip: null,
  tips: [0.15, 0.18, 0.2],
};

/**
 * Retrieves data previously stored locally
 *
 * @returns
 */
export const retrieveLocalData = async (): Promise<SavedData> => {
  try {
    const storedJSON = await AsyncStorage.getItem(TIPTAP_STORAGE_KEY);

    if (!storedJSON) {
      console.info('No saved data found');

      return defaultData;
    }

    const storedData = JSON.parse(storedJSON);

    const parsedResult = SavedDataSchema.safeParse(storedData);

    if (!parsedResult.success) {
      console.warn('Error parsing saved data: ', parsedResult);

      return defaultData;
    }

    console.log('STORED DATA: ', parsedResult.data);
    return parsedResult.data;
  } catch (error) {
    console.warn('Error in retrieveLocalData:', error);

    return defaultData;
  }
};

/**
 * Resets local data as if it was a new install
 *
 */
export const resetLocalData = async (): Promise<void> => {
  try {
    await AsyncStorage.removeItem(TIPTAP_STORAGE_KEY);
  } catch (error) {
    console.warn('Error in removeLocalData:', error);
  }
};

/**
 * Saves data in local storage
 *
 * @param payload
 * @returns
 */
export const saveDataLocally = async (payload: unknown): Promise<void> => {
  try {
    const parsedResult = SavedDataSchema.safeParse(payload);

    if (!parsedResult.success) {
      console.warn('Error parsing save data: ', parsedResult);

      return;
    }

    const json = JSON.stringify(parsedResult.data);

    await AsyncStorage.setItem(TIPTAP_STORAGE_KEY, json);
  } catch (error) {
    console.warn('Error in saveDataLocally:', saveDataLocally);
  }
};

const createSyncLocalDataSlice = (set, _) => ({
  syncStoreWithSavedData: (data: SavedData) =>
    set(() => ({
      ...data,
    })),
});

export default createSyncLocalDataSlice;
