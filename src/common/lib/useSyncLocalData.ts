import { useEffect } from 'react';
import { AppState } from 'react-native';
import { retrieveLocalData, saveDataLocally } from './createSyncLocalDataSlice';
import useStore from './store';

const useSyncLocalData = () => {
  const { dataToStore, syncStoreWithSavedData } = useStore((state) => ({
    dataToStore: {
      onboardingStatus: state.onboardingStatus,
      tips: state.tips,
      selectedTip: state.selectedTip,
    },
    syncStoreWithSavedData: state.syncStoreWithSavedData,
  }));

  useEffect(() => {
    const subscription = AppState.addEventListener(
      'change',
      async (newAppState) => {
        switch (newAppState) {
          // When app goes to background
          // Save data locally
          case 'background':
            saveDataLocally(dataToStore);
            break;
          default:
            break;
        }
      },
    );

    const loadLocalData = async () => {
      const localData = await retrieveLocalData();
      syncStoreWithSavedData(localData);
    };

    loadLocalData();
    return (): void => {
      subscription.remove();
    };
  }, []);
};

export default useSyncLocalData;
