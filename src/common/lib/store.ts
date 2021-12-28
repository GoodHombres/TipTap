import create, { SetState } from 'zustand';
import createOnboardingSlice from '../../onboarding/lib/onboardingSlice';
import createTipPreferencesSlice from '../../settings/lib/tipPreferencesSlice';
import createSyncLocalDataSlice from './createSyncLocalDataSlice';

const useStore = create((set, get) => ({
  ...createOnboardingSlice(set, get),
  ...createSyncLocalDataSlice(set, get),
  ...createTipPreferencesSlice(set, get),
}));

export default useStore;
