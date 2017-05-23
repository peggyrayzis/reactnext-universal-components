import React from 'react';
import { Text } from 'spectacle';

export default ({ top, bottom }) => (
  <div>
    <Text textSize="2em" textColor="tertiary" style={{ lineHeight: '1.3em' }}>
      {top}
    </Text>
    <Text
      textSize="1.2em"
      textColor="secondary"
      style={{ lineHeight: '1.3em' }}
    >
      vs.
    </Text>
    <Text textSize="2em" textColor="quartenary" style={{ lineHeight: '1.3em' }}>
      {bottom}
    </Text>
  </div>
);
