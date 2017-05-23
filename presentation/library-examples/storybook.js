const webpack = {
  platformModule: `
  import { Platform } from 'react-native';

  switch (Platform.OS) {
    case 'web':
      // do something
    case 'ios':
    case 'android':
      // do something on native
    case 'vr':
    case 'sketch':
      // works for all platforms!
  }
  `,
  platformExtensions: `
  import { Text } from 'react-native';
  import { Link } from '@mls-digital/react-components';
  // will resolve from index.web.js on web

  export default ({ text }) => (
    <Link>
      <Text>{text}</Text>
    </Link>
  );
  `,
};

export default webpack;
