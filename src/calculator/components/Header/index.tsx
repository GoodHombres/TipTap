import { useNavigation } from '@react-navigation/native';
import { CalculatorNavigationProps, Routes } from '../../../common/lib/routes';
import Bar from './Bar';
import SettingsButton from './SettingsButton';
import TipSection from './TipSection';

type Props = {
  showSettingsMenu: boolean;
};

const Header = ({ showSettingsMenu }: Props): JSX.Element => {
  const { navigate } = useNavigation<CalculatorNavigationProps>();
  const navigateToSettingsScreen = () => navigate(Routes.Settings);

  return (
    <Bar>
      <TipSection onGoToSettings={navigateToSettingsScreen} />
      {showSettingsMenu && (
        <SettingsButton onPress={navigateToSettingsScreen} />
      )}
    </Bar>
  );
};

export default Header;
