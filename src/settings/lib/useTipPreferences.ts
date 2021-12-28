import useStore from '../../common/lib/store';

const useTipPreferences = () =>
  useStore((state) => ({
    tips: state.tips,
    selectedTip: state.selectedTip,
  }));

export default useTipPreferences;
