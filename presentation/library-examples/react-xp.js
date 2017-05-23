const code = `import RX, { Text, Button, Styles, Types } from 'reactxp';

import { colors, fonts, fontFamilies } from 'styles';

interface Props {
  name: string,
  onPress: () => void,
  style?: { [key: string]: string | number },
}

const CallToAction: React.SFC<Props> = ({ name, onPress, style }) => (
  <Button
    style={[styles.action, Styles.createViewStyle(style)]}
    onPress={onPress}
  >
    <Text style={styles.actionText}>
      {name}
    </Text>
  </Button>
);

const styles = {
  action: Styles.createViewStyle({
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    flex: 1,
  }),
  actionText: Styles.createTextStyle({
    fontFamily: fontFamilies.bold,
    fontSize: fonts.body,
    color: colors.darkGrey,
  }),
};

export default CallToAction;`;

export default code;
