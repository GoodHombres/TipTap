import { View } from 'react-native';
import { formatTip } from '../../../../common/lib/formatTip';
import useTipPreferences from '../../../../settings/lib/useTipPreferences';
import AddTipButton from './AddTipButton';
import TipButton from './TipButton';
import styles from './styles';

type Props = {
  onGoToSettings(): void;
};

const TipSection = ({ onGoToSettings }: Props): JSX.Element => {
  const { selectedTip, tips } = useTipPreferences();

  return (
    <View style={styles.container}>
      {!tips.length && <AddTipButton onPress={onGoToSettings} />}
      {tips.map((tip) => (
        <TipButton
          key={tip.toString()}
          isSelected={tip === selectedTip}
          onPress={() => {
            console.log('Pressed: ', tip);
          }}
        >
          {formatTip(tip)}
        </TipButton>
      ))}
    </View>
  );
};

export default TipSection;
