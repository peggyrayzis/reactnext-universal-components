const code = `//@flow
import React from 'react';
import { Text, StyleSheet, Touchable } from 'react-primitives';

import { colors, fonts, fontFamilies } from 'styles';

type Props = {|
  name: string,
  onPress: () => void,
  style?: { [key: string]: string | number },
|};

export default ({ name, onPress, style }: Props): React.Element<*> => (
  <Touchable style={[styles.action, style]} onPress={onPress}>
    <Text style={styles.actionText}>
      {name}
    </Text>
  </Touchable>
);

const styles: Styles = StyleSheet.create({
  action: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    flex: 1,
  },
  actionText: {
    fontFamily: fontFamilies.bold,
    fontSize: fonts.body,
    color: colors.darkGrey,
  },
});`;

export default code;
