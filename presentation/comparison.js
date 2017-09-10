import React from 'react';
import { Text } from 'spectacle';

const Comparison = ({ top, bottom, comparison = 'vs.' }) => (
  <div>
    <Text textSize="2.2em" textColor="tertiary" style={{ lineHeight: '1.3em' }}>
      {top}
    </Text>
    <Text
      textSize="1.4em"
      textColor="secondary"
      style={{ lineHeight: '1.3em' }}
    >
      {comparison}
    </Text>
    <Text
      textSize="2.2em"
      textColor="quartenary"
      style={{ lineHeight: '1.3em' }}
    >
      {bottom}
    </Text>
  </div>
);

export default Comparison;
