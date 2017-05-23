import React, { Component } from 'react';
import Radium from 'radium';
import {
  Appear,
  Code,
  CodePane,
  Deck,
  Fill,
  Heading,
  Image,
  Link,
  List,
  ListItem,
  Slide,
  S,
  Text,
} from 'spectacle';

import {
  ReactNativeWeb,
  ReactPrimitives,
  ReactXP,
  Webpack,
  Storybook,
} from './library-examples';
import QuoteSlide from './quote';
import Comparison from './comparison';

// change to import notes if you are presenting
import presenterNotes from './notes';

// comment this out and change above line if you are presenting
const notes = Object.keys(presenterNotes).reduce(
  (acc, val) => ({ ...acc, [val]: 'Presenter notes coming soon 😜' }),
  {},
);

// Import image preloader util
import preloader from 'spectacle/lib/utils/preloader';

// Import theme
import createTheme from 'spectacle/lib/themes/default';

// Require CSS
require('normalize.css');
require('spectacle/lib/themes/default/index.css');

const images = {
  mls: require('../assets/mls-allwhite-logo.png'),
  react: require('../assets/react.svg'),
  reactNative: require('../assets/reactNative.svg'),
  heart: require('../assets/heart.svg'),
  twitter: require('../assets/twitter.svg'),
  twitterWhite: require('../assets/twitter-white.svg'),
  medium: require('../assets/medium.svg'),
  github: require('../assets/github.svg'),
  kenTweet: require('../assets/ken-tweet.png'),
  jamesTweet: require('../assets/james-tweet.png'),
  starrySky: require('../assets/starry-sky.jpeg'),
  reactWebChart: require('../assets/react-web.png'),
  reactNativeChart: require('../assets/react-native.png'),
  webVrSketch: require('../assets/webvr-sketch.png'),
  allPlatforms: require('../assets/all-platforms.png'),
  nsync: require('../assets/nsync.jpg'),
  tired: require('../assets/tired.jpg'),
  hermione: require('../assets/hermione.jpg'),
  platformFiles: require('../assets/platform-extensions.png'),
  platformPrimitives: require('../assets/platform-primitives.png'),
  nativeModules: require('../assets/native-modules.png'),
  storybook: require('../assets/storybook-screenshot.png'),
  webToNative: require('../assets/web-to-native.png'),
  haul: require('../assets/haul.png'),
  waitWhat: require('../assets/wait-what.jpg'),
  apple: require('../assets/apple-1998.png'),
};

preloader(images);

const colors = {
  primary: '#1B1D23',
  secondary: '#F3F4F4',
  tertiary: '#96DBE4',
  quartenary: '#93DAAB',
  dark: '#010207',
};

const theme = createTheme(colors, {
  primary: { name: 'Poppins', googleFont: true, styles: ['400', '600'] },
  secondary: 'Helvetica',
});

@Radium
export default class Presentation extends Component {
  render() {
    return (
      <Deck
        transition={['zoom', 'slide']}
        transitionDuration={500}
        theme={theme}
        progress="none"
        controls={false}
      >
        <Slide
          transition={['zoom']}
          bgImage={images.starrySky}
          bgDarken={0.4}
          notes={notes.intro1}
        >
          <Text margin="10px 0 0" textColor="tertiary" textSize="3em">
            write once,
          </Text>
          <Text margin="10px 0 0" textColor="tertiary" textSize="3em">
            render anywhere!
          </Text>
        </Slide>
        <Slide transition={['fade']} bgColor="primary" notes={notes.intro2}>
          <Text bold textColor="secondary" textSize="2em">
            Hi! 🙋 I'm Peggy.
          </Text>
          <Link href="https://twitter.com/peggyrayzis">
            <Text
              style={{ margin: '20px' }}
              textColor="tertiary"
              textSize="2em"
            >
              @peggyrayzis
            </Text>
          </Link>
        </Slide>
        <Slide transition={['fade']} bgColor="primary" notes={notes.mls}>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <Image height={'9.5em'} width={'10em'} src={images.mls} />
            <Image
              height={'8em'}
              width={'8em'}
              style={{ margin: '0 20px 0 20px' }}
              src={images.heart}
            />
            <Image height={'9.5em'} width={'10em'} src={images.react} />
          </div>
        </Slide>
        <Slide transition={['fade']} bgColor="primary" notes={notes.reactWeb}>
          <Image height="555px" width="285px" src={images.reactWebChart} />
        </Slide>
        <Slide
          transition={['fade']}
          bgColor="primary"
          notes={notes.reactNative1}
        >
          <div
            style={{
              height: '100%',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-start',
              justifyContent: 'center',
            }}
          >
            <Image
              height="540px"
              width="630px"
              style={{ margin: '0 auto', marginBottom: '-10px' }}
              src={images.reactNativeChart}
            />
            <Appear>
              <Image height="90px" width="595px" src={images.webVrSketch} />
            </Appear>
          </div>
        </Slide>
        <QuoteSlide
          textSize="2em"
          quote="92% of developers who used React Native would use it again."
          link="http://stateofjs.com/2016/mobile/"
          author="stateofjs.com, 2016"
          colors={colors}
          notes={notes.reactNative2}
        />
        <Slide
          transition={['fade']}
          bgColor="primary"
          notes={notes.reactNative3}
        >
          <List>
            <ListItem textColor="tertiary">
              <span style={{ color: colors.secondary }}>PanResponder:</span>
              {' '}
              Sophisticated gestures
            </ListItem>
            <Appear>
              <ListItem textColor="tertiary">
                <span style={{ color: colors.secondary }}>StyleSheet:</span>
                {' '}
                Flexible CSS in JS solution
              </ListItem>
            </Appear>
            <Appear>
              <ListItem textColor="tertiary">
                <span style={{ color: colors.secondary }}>Animated:</span>
                {' '}
                Declarative & configurable
              </ListItem>
            </Appear>
            <Appear>
              <ListItem textColor="tertiary">
                <span style={{ color: colors.secondary }}>Yoga:</span>
                {' '}
                Flexbox by default
              </ListItem>
            </Appear>
          </List>
        </Slide>
        <Slide
          transition={['fade']}
          bgColor="primary"
          notes={notes.reactNativeWeb}
        >
          <Image src={images.webToNative} width="950px" />
        </Slide>
        <Slide transition={['fade']} bgColor="primary" notes={notes.waitWhat}>
          <Image src={images.waitWhat} height="650px" />
        </Slide>
        <Slide
          transition={['fade']}
          bgColor="primary"
          notes={notes.primitives1}
        >
          <Image
            style={{ marginLeft: '3px' }}
            height="650px"
            src={images.allPlatforms}
          />
        </Slide>
        <Slide
          transition={['fade']}
          bgColor="primary"
          notes={notes.primitives2}
        >
          <Image height="650px" src={images.platformPrimitives} />
        </Slide>
        <Slide
          transition={['fade']}
          bgColor="primary"
          notes={notes.primitives3}
        >
          <Text textColor="secondary" lineHeight={1.2} textSize="2.7em">
            DOM primitives were introduced in 1998...
          </Text>
        </Slide>
        <Slide
          transition={['fade']}
          bgDarken={0.5}
          bgImage={images.nsync}
          notes={notes.primitives4}
        >
          <Appear>
            <Text textColor="secondary" lineHeight={1.3} textSize="2.6em">
              <p style={{ textShadow: '2px 2px 3px #010207' }}>
                Why are we building modern applications with primitives stuck in the 90s?
              </p>
            </Text>
          </Appear>
        </Slide>
        <Slide
          transition={['fade']}
          bgColor="primary"
          notes={notes.primitives5}
        >
          <Image src={images.apple} height="650px" />
        </Slide>
        <Slide transition={['fade']} bgColor="primary" notes={notes.community1}>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
            <Image width="600px" src={images.kenTweet} />
            <Image width="600px" src={images.jamesTweet} />
          </div>
        </Slide>
        <QuoteSlide
          quote="I hope that there are plans for further unifying React Native and React for mobile web. At any given time there’s a handful of people (either at Facebook, or other companies/startups) exploring ways to bring RN style mobile app development to the web, and React Native seems like a great place to start."
          link="https://www.reactiflux.com/transcripts/jordan-walke/"
          author="Jordan Walke, creator of React"
          colors={colors}
          notes={notes.community2}
        />
        <Slide
          transition={['fade']}
          bgColor="primary"
          notes={notes.crossPlatform}
        >
          <Text textColor="tertiary" lineHeight={1.2} textSize="2em">
            Cross-platform component libraries work around the web's limitations to
            {' '}
            <span style={{ color: colors.secondary }}>
              improve the developer experience
            </span>
            .
          </Text>
        </Slide>
        <Slide
          transition={['fade']}
          bgColor="primary"
          notes={notes.crossPlatformBenefits}
        >
          <List>
            <ListItem textColor="secondary">
              Reduce duplicative code
            </ListItem>
            {[
              'Eliminate context switching',
              'Standardize libraries across platforms',
              'Improve team velocity',
            ].map(benefit => (
              <Appear key={benefit}>
                <ListItem textColor="secondary">
                  {benefit}
                </ListItem>
              </Appear>
            ))}
          </List>
        </Slide>
        <Slide transition={['fade']} notes={notes.universal1}>
          <Comparison
            top="Universal Application"
            bottom="Universal Components"
          />
        </Slide>
        <Slide transition={['fade']} notes={notes.universal2}>
          <Comparison
            top="Write once, run anywhere"
            bottom="Write once, render anywhere"
          />
        </Slide>
        <Slide transition={['fade']} notes={notes.universal3}>
          <Comparison top="One repository" bottom="Multiple repositories" />
        </Slide>
        <Slide transition={['fade']} bgColor="primary" notes={notes.libraries1}>
          <Text textColor="secondary" lineHeight={1.6} textSize="2.6em">
            react-native-web
          </Text>
          <Appear>
            <Text textColor="tertiary" lineHeight={1.6} textSize="2.6em">
              react-primitives
            </Text>
          </Appear>
          <Appear>
            <Text textColor="quartenary" lineHeight={1.6} textSize="2.6em">
              ReactXP
            </Text>
          </Appear>
        </Slide>
        <Slide transition={['fade']} bgColor="primary" notes={notes.libraries2}>
          <Text textColor="tertiary" lineHeight={1.2} textSize="2em">
            There isn't a best solution, only the best solution for your requirements & team's constraints.
          </Text>
        </Slide>
        <Slide transition={['fade']}>
          <Link href="https://github.com/necolas/react-native-web">
            <Text
              textColor="secondary"
              textSize="2em"
              lineHeight={1.2}
              style={{ paddingBottom: '10px' }}
            >
              react-native-web
            </Text>
          </Link>
          <List style={{ listStyleType: 'none' }}>
            {[
              'Impressive feature parity with React Native',
              'Performant StyleSheet implementation',
              'You can use React Native modules on the web',
            ].map(feature => (
              <Appear key={feature}>
                <ListItem textSize="1.1em" textColor="secondary">
                  <span style={{ paddingRight: '24px' }}>✅</span>{feature}
                </ListItem>
              </Appear>
            ))}
          </List>
        </Slide>
        <Slide transition={['fade']}>
          <CodePane
            style={{ width: '600px', minWidth: 0 }}
            lang="jsx"
            source={ReactNativeWeb}
          />
        </Slide>
        <Slide transition={['fade']}>
          <Text
            textColor="secondary"
            textSize="2em"
            lineHeight={1.2}
            style={{ margin: '0 auto', paddingBottom: '10px' }}
          >
            react-native-web
          </Text>
          <List style={{ listStyleType: 'none' }}>
            {[
              'Not Fiber compatible yet',
              'Requires custom Webpack config',
              'No Typescript or Flow support',
            ].map((caveat, i) => (
              <Appear key={caveat}>
                <ListItem textSize="1.1em" textColor="secondary">
                  <span style={{ paddingRight: '24px' }}>⚠️</span>{caveat}
                </ListItem>
              </Appear>
            ))}
          </List>
        </Slide>
        <Slide transition={['fade']}>
          <Link href="https://github.com/lelandrichardson/react-primitives">
            <Text
              textColor="tertiary"
              textSize="2em"
              lineHeight={1.2}
              style={{ paddingBottom: '10px' }}
            >
              react-primitives
            </Text>
          </Link>
          <List style={{ listStyleType: 'none' }}>
            {[
              'Focuses on just the essentials',
              'Injects primitives depending on platform',
              'Works well with react-sketchapp',
            ].map(feature => (
              <Appear key={feature}>
                <ListItem textSize="1.1em" textColor="tertiary">
                  <span style={{ paddingRight: '24px' }}>✅</span>{feature}
                </ListItem>
              </Appear>
            ))}
          </List>
        </Slide>
        <Slide transition={['fade']}>
          <CodePane
            style={{ width: '600px', minWidth: 0 }}
            lang="jsx"
            source={ReactPrimitives}
          />
        </Slide>
        <Slide transition={['fade']}>
          <Text
            textColor="tertiary"
            textSize="2em"
            lineHeight={1.2}
            style={{ margin: '0 auto', paddingBottom: '10px' }}
          >
            react-primitives
          </Text>
          <List style={{ listStyleType: 'none' }}>
            {[
              'Supported APIs are limited',
              'Difficult to run React Native modules on web',
              'No Typescript or Flow support',
            ].map((caveat, i) => (
              <Appear key={caveat}>
                <ListItem textSize="1.1em" textColor="tertiary">
                  <span style={{ paddingRight: '24px' }}>⚠️</span>{caveat}
                </ListItem>
              </Appear>
            ))}
          </List>
        </Slide>
        <Slide transition={['fade']}>
          <Link href="https://microsoft.github.io/reactxp/">
            <Text
              textColor="quartenary"
              textSize="2em"
              lineHeight={1.2}
              style={{ margin: '0 auto', paddingBottom: '10px' }}
            >
              ReactXP
            </Text>
          </Link>
          <List style={{ listStyleType: 'none' }}>
            {[
              'Compiles to web with zero setup',
              'Write once, run anywhere',
              'Excellent Typescript support',
            ].map(feature => (
              <Appear key={feature}>
                <ListItem textSize="1.1em" textColor="quartenary">
                  <span style={{ paddingRight: '24px' }}>✅</span>{feature}
                </ListItem>
              </Appear>
            ))}
          </List>
        </Slide>
        <Slide transition={['fade']}>
          <CodePane
            style={{ width: '600px', minWidth: 0 }}
            lang="jsx"
            source={ReactXP}
          />
        </Slide>
        <Slide transition={['fade']}>
          <Text
            textColor="quartenary"
            textSize="2em"
            lineHeight={1.2}
            style={{ margin: '0 auto', paddingBottom: '10px' }}
          >
            ReactXP
          </Text>
          <List style={{ listStyleType: 'none' }}>
            {[
              'APIs & components differ from React Native',
              'Only supports web, iOS, Android, & Windows',
              'StyleSheet is 2x slower than react-native-web',
            ].map((caveat, i) => (
              <Appear key={caveat}>
                <ListItem textSize="1.1em" textColor="quartenary">
                  <span style={{ paddingRight: '24px' }}>⚠️</span>{caveat}
                </ListItem>
              </Appear>
            ))}
          </List>
        </Slide>
        <Slide transition={['fade']} bgColor="primary">
          <Text textColor="tertiary" lineHeight={1.2} textSize="1.9em">
            At MLS, we develop
            <span style={{ color: colors.secondary }}>
              {' '}universal components{' '}
            </span>
            backed by <span style={{ color: colors.secondary }}>
              react-native-web
            </span>
            .
          </Text>
        </Slide>
        <Slide
          transition={['fade']}
          bgColor="primary"
          notes={notes.constraint1}
        >
          <Text textColor="tertiary" lineHeight={1.2} textSize="1.9em">
            Our biggest constraint is <span style={{ color: colors.secondary }}>
              time
            </span>
            .
          </Text>
        </Slide>
        <Slide transition={['fade']} notes={notes.constraint2}>
          <Text
            lineHeight={1.2}
            textSize="1.1em"
            style={{ paddingBottom: '20px' }}
            textColor="tertiary"
          >
            Build tooling for universal apps isn't 100% ready yet
          </Text>
          <Image height="550px" src={images.haul} />
          <Link href="http://blog.nparashuram.com/2017/04/react-native-packager-vs-haul.html">
            <Text italic lineHeight={1.2} textSize="0.5em" textColor="tertiary">
              source: @nparashuram
            </Text>
          </Link>
        </Slide>
        <Slide
          transition={['fade']}
          bgColor="primary"
          notes={notes.constraint3}
        >
          <Text textColor="tertiary" lineHeight={1.2} textSize="1.9em">
            Our ability to
            <span style={{ color: colors.secondary }}>
              {' '}run anywhere{' '}
            </span>
            is limited by our third-party dependencies.
          </Text>
        </Slide>
        <Slide transition={['fade']} bgColor="primary" notes={notes.tools}>
          <div
            style={{
              display: 'flex',
              height: '100%',
              flexDirection: 'column',
              justifyContent: 'space-between',
            }}
          >
            <Text lineHeight={1.2} textSize="2em" textColor="secondary">
              Tools of the trade 🛠
            </Text>
            {['Webpack', 'Storybook', 'Lerna'].map(tool => (
              <Text
                lineHeight={1.2}
                textSize="2em"
                textColor="tertiary"
                key={tool}
              >
                {tool}
              </Text>
            ))}
          </div>
        </Slide>
        <Slide transition={['fade']} notes={notes.webpack1}>
          <Text lineHeight={1.2} textSize="1.5em" textColor="secondary">
            Aliasing is awesome
          </Text>
          <CodePane
            style={{ minWidth: 0, maxWidth: 900, fontSize: '0.7em' }}
            lang="jsx"
            source={Webpack.alias}
          />
        </Slide>
        <Slide transition={['fade']} notes={notes.webpack2}>
          <Link href="https://github.com/tleunen/babel-plugin-module-resolver">
            <Text lineHeight={1.2} textSize="1.5em" textColor="secondary">
              You can also alias with Babel
            </Text>
          </Link>
          <CodePane
            style={{ minWidth: 0, maxWidth: 900, fontSize: '0.7em' }}
            lang="jsx"
            source={Webpack.babel}
          />
        </Slide>
        <Slide transition={['fade']} notes={notes.webpack3}>
          <Text lineHeight={1.2} textSize="1.5em" textColor="secondary">
            Don't forget to update your .flowconfig
          </Text>
          <CodePane
            style={{ minWidth: 0, maxWidth: 900, fontSize: '0.7em' }}
            lang="jsx"
            source={Webpack.flow}
          />
          <Text lineHeight={1.2} textSize="1.5em" textColor="secondary">
            ...or your Jest config!
          </Text>
          <CodePane
            style={{ minWidth: 0, maxWidth: 900, fontSize: '0.7em' }}
            lang="jsx"
            source={Webpack.jest}
          />
        </Slide>
        <Slide
          transition={['fade']}
          bgImage={images.hermione}
          bgDarken={0.5}
          notes={notes.webpack4}
        >
          <Text
            style={{ textShadow: '2px 2px 2px #010207' }}
            lineHeight={1.2}
            textSize="1.7em"
            textColor="secondary"
          >
            With some Webpack wizardry, you can use React Native modules on the web!
          </Text>
        </Slide>
        <Slide transition={['fade']} notes={notes.rnModules1}>
          <Text lineHeight={1.2} textSize="1.5em" textColor="secondary">
            Compile with Babel first
          </Text>
          <CodePane
            style={{ minWidth: 0, maxWidth: 900, fontSize: '0.7em' }}
            lang="jsx"
            source={Webpack.babelLoader}
          />
        </Slide>
        <Slide transition={['fade']} notes={notes.rnModules2}>
          <Text lineHeight={1.2} textSize="1.5em" textColor="secondary">
            If the module already includes ES5 code, point to that instead
          </Text>
          <CodePane
            style={{ minWidth: 0, maxWidth: 900, fontSize: '0.7em' }}
            lang="jsx"
            source={Webpack.moduleAliasing}
          />
        </Slide>
        <Slide transition={['fade']}>
          <Text lineHeight={1.2} textSize="1.2em" textColor="quartenary">
            React Native modules rendered on the web 😮
          </Text>
          <Image
            width="100%"
            style={{ marginTop: '50px' }}
            src={images.nativeModules}
          />
        </Slide>
        <Slide transition={['fade']} bgColor="primary">
          <div
            style={{
              display: 'flex',
              height: '100%',
              flexDirection: 'column',
              justifyContent: 'space-between',
            }}
          >
            <Text lineHeight={1.7} textSize="1.8em" textColor="secondary">
              Write once, render anywhere ✅
            </Text>
            {[
              'react-native-vector-icons',
              'react-native-calendars',
              'victory-native',
            ].map(module => (
              <Text
                lineHeight={1.2}
                textSize="1.8em"
                textColor="tertiary"
                key={module}
              >
                {module}
              </Text>
            ))}
          </div>
        </Slide>
        <Slide
          transition={['fade']}
          bgColor="primary"
          notes={notes.featureParity}
        >
          <Text textColor="tertiary" lineHeight={1.2} textSize="2em">
            react-native-web's
            {' '}
            <span style={{ color: colors.secondary }}>
              feature parity
            </span>
            {' '}
            with React Native is what makes this possible.
          </Text>
        </Slide>
        <Slide transition={['fade']} notes={notes.storybook1}>
          <Text lineHeight={1.2} textSize="1.3em" textColor="tertiary">
            Storybook + Universal Components = ❤️
          </Text>
          <Image
            width="80%"
            style={{ marginTop: '50px' }}
            src={images.storybook}
          />
        </Slide>
        <Slide transition={['fade']} bgColor="primary" notes={notes.storybook2}>
          <Text textColor="tertiary" lineHeight={1.2} textSize="2em">
            Developing our components in isolation helps us
            {' '}
            <span style={{ color: colors.secondary }}>
              iterate faster
            </span>
            .
          </Text>
        </Slide>
        <Slide transition={['fade']} bgColor="primary">
          <List>
            <ListItem textColor="secondary">
              Automatic Jest snapshot testing
            </ListItem>
            {[
              'Streamlines design QA workflow',
              'Addons for documentation',
              'View multiple platforms with Sizzy',
            ].map(benefit => (
              <Appear key={benefit}>
                <ListItem textColor="secondary">
                  {benefit}
                </ListItem>
              </Appear>
            ))}
          </List>
        </Slide>
        <Slide
          transition={['fade']}
          bgColor="primary"
          notes={notes.platformExt1}
        >
          <Text textColor="tertiary" lineHeight={1.2} textSize="2em">
            Not all of your components have to be completely universal!
          </Text>
        </Slide>
        <Slide transition={['fade']} notes={notes.platformExt2}>
          <Text lineHeight={1.2} textSize="1.5em" textColor="secondary">
            Platform module
          </Text>
          <CodePane
            style={{ minWidth: 0, maxWidth: 900, fontSize: '0.7em' }}
            lang="jsx"
            source={Storybook.platformModule}
          />
        </Slide>
        <Slide transition={['fade']} notes={notes.platformExt3}>
          <Text
            lineHeight={1.2}
            textSize="1.5em"
            style={{ paddingBottom: '25px' }}
            textColor="secondary"
          >
            Platform extensions
          </Text>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-start',
              justifyContent: 'flex-start',
            }}
          >
            <Image
              width="35%"
              style={{ margin: '0', paddingLeft: '8px' }}
              src={images.platformFiles}
            />
            <CodePane
              style={{
                minWidth: 0,
                maxWidth: 900,
                fontSize: '0.7em',
                margin: '0',
                padding: '0',
              }}
              lang="jsx"
              source={Storybook.platformExtensions}
            />
          </div>
        </Slide>
        <Slide transition={['fade']} bgColor="primary">
          <Text textColor="tertiary" lineHeight={1.2} textSize="2em">
            From Storybook, we publish our universal components as a
            {' '}
            <span style={{ color: colors.secondary }}>
              NPM package
            </span>
            {' '} to share across platforms.
          </Text>
        </Slide>
        <Slide transition={['fade']} bgColor="primary" notes={notes.lerna1}>
          <Text textColor="tertiary" lineHeight={1.2} textSize="2em">
            If you have multiple shared packages,
            {' '}
            <span style={{ color: colors.secondary }}>
              Lerna
            </span>
            {' '} makes managing them more efficient.
          </Text>
        </Slide>
        <Slide transition={['fade']} bgColor="primary" notes={notes.lerna2}>
          <List>
            <ListItem textColor="secondary">
              Symlinks common dependencies
            </ListItem>
            {[
              'Publish packages with one command',
              'Great for a universal app monorepo',
            ].map(benefit => (
              <Appear key={benefit}>
                <ListItem textColor="secondary">
                  {benefit}
                </ListItem>
              </Appear>
            ))}
          </List>
        </Slide>
        <Slide
          transition={['fade']}
          bgImage={images.tired}
          notes={notes.tired}
        />
        <Slide transition={['fade']} bgColor="primary" notes={notes.takeaway}>
          <Text textColor="tertiary" lineHeight={1.2} textSize="2em">
            Open your mind to new platforms and possibilities.
          </Text>
        </Slide>
        <Slide
          transition={['fade']}
          bgImage={images.starrySky}
          bgDarken={0.4}
          notes={notes.thanks}
        >
          <Text textSize="1.9em" lineHeight={1.2} textColor="tertiary">
            @peggyrayzis
          </Text>
          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
              width: '100%',
            }}
          >

            <Link href="https://github.com/peggyrayzis">
              <Image
                style={{ margin: '30px' }}
                src={images.github}
                width="100px"
              />
            </Link>
            <Link href="https://twitter.com/peggyrayzis">
              <Image
                style={{ margin: '30px' }}
                src={images.twitterWhite}
                width="100px"
              />
            </Link>
            <Link href="https://medium.com/@peggyrayzis">
              <Image
                style={{ margin: '30px' }}
                src={images.medium}
                width="100px"
              />
            </Link>
          </div>
        </Slide>
      </Deck>
    );
  }
}
