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

import { ReactNativeWeb, Webpack, RenderAgnostic } from './code-samples';
import QuoteSlide from './quote';
import Comparison from './comparison';

// change to import notes if you are presenting
import notes from './notes';

// comment this out and change above line if you are presenting
// const notes = Object.keys(presenterNotes).reduce(
//   (acc, val) => ({ ...acc, [val]: 'Presenter notes coming soon 😜' }),
//   {},
// );

// Import image preloader util
import preloader from 'spectacle/lib/utils/preloader';

// Import theme
import createTheme from 'spectacle/lib/themes/default';

// Require CSS
require('normalize.css');
require('spectacle/lib/themes/default/index.css');

const images = {
  meteor: require('../assets/meteor.svg'),
  apollo: require('../assets/apollo.svg'),
  benchmarks: require('../assets/benchmarks.png'),
  mls: require('../assets/mls.png'),
  twitterLite: require('../assets/twitter-lite.png'),
  reactNative: require('../assets/reactNative.svg'),
  twitterWhite: require('../assets/twitter-white.svg'),
  medium: require('../assets/medium.svg'),
  github: require('../assets/github.svg'),
  starrySky: require('../assets/starry-sky.jpeg'),
  reactWebChart: require('../assets/react-web.png'),
  reactNativeChart: require('../assets/react-native.png'),
  webVrSketch: require('../assets/webvr-sketch.png'),
  allPlatforms: require('../assets/all-platforms.png'),
  nsync: require('../assets/nsync.jpg'),
  peggy: require('../assets/peggy.jpg'),
  hermione: require('../assets/hermione.jpg'),
  platformFiles: require('../assets/platform-extensions.png'),
  nativeDirectory: require('../assets/native-directory.png'),
  universalComponents: require('../assets/universal-components.png'),
  universalApplication: require('../assets/universal-application.png'),
  platformPrimitives: require('../assets/platform-primitives.png'),
  nativeModules: require('../assets/native-modules.png'),
  storybook: require('../assets/storybook-screenshot.png'),
  webToNative: require('../assets/web-to-native.png'),
  waitWhat: require('../assets/wait-what.jpg'),
  apple: require('../assets/apple-1998.png'),
  tweet1: require('../assets/tweet1.png'),
  tweet2: require('../assets/tweet2.png'),
  tweet3: require('../assets/tweet3.png'),
  sketch: require('../assets/sketch.png'),
  safari: require('../assets/safari.png'),
  svgs: require('../assets/svgs.png'),
  storyshots: require('../assets/storyshots.png'),
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

const fontSize = {
  large: '3.2em',
  medium: '2.2em',
  small: '1.8em',
};

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
          <Text
            margin="10px 0 0"
            textColor="tertiary"
            textSize={fontSize.large}
          >
            write once,
          </Text>
          <Text
            margin="10px 0 0"
            textColor="tertiary"
            textSize={fontSize.large}
          >
            render anywhere!
          </Text>
        </Slide>
        <Slide
          transition={['fade']}
          bgImage={images.peggy}
          notes={notes.intro2}
        >
          <Text
            bold
            textColor="tertiary"
            textSize={fontSize.medium}
            style={{ textShadow: '2px 2px 2px #010207' }}
          >
            Shalom! 🙋 I'm Peggy.
          </Text>
          <Link href="https://twitter.com/peggyrayzis">
            <Text
              margin="20px"
              textColor="secondary"
              textSize={fontSize.medium}
              style={{ textShadow: '2px 2px 2px #010207' }}
            >
              @peggyrayzis
            </Text>
          </Link>
        </Slide>
        <Slide
          transition={['fade']}
          bgColor="primary"
          notes={notes.apolloIntro}
        >
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Image width="100%" src={images.meteor} margin="0 0 20px 0" />
            <Image width="100%" src={images.apollo} margin="20px 0 0 0" />
          </div>
        </Slide>
        <Slide transition={['fade']} bgColor="primary" notes={notes.reactWeb}>
          <Image height="600px" src={images.reactWebChart} />
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
              margin="0 auto"
              src={images.reactNativeChart}
            />
            <Appear>
              <Image height="90px" src={images.webVrSketch} />
            </Appear>
          </div>
        </Slide>
        <QuoteSlide
          textSize={fontSize.medium}
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
            margin="0px 0px 0px 3px"
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
        <QuoteSlide
          quote="I hope that there are plans for further unifying React Native and React for mobile web. At any given time there’s a handful of people (either at Facebook, or other companies/startups) exploring ways to bring RN style mobile app development to the web, and React Native seems like a great place to start."
          link="https://www.reactiflux.com/transcripts/jordan-walke/"
          author="Jordan Walke, creator of React"
          colors={colors}
          notes={notes.community1}
        />
        <Slide
          transition={['fade']}
          bgColor="primary"
          notes={notes.crossPlatform}
        >
          <Text textColor="tertiary" lineHeight={1.2} textSize="2em">
            How do we bring
            {' '}
            <span style={{ color: colors.secondary }}>React Native</span>
            {' '}
            style application development to the
            {' '}
            <span style={{ color: colors.secondary }}>web</span>
            ?
          </Text>
        </Slide>
        <Slide
          transition={['fade']}
          bgColor="primary"
          notes={notes.universal}
          margin="0px"
        >
          <div style={{ width: '100%' }}>
            <Image width="50%" src={images.universalComponents} />
            <Image width="50%" src={images.universalApplication} />
          </div>
        </Slide>
        <Slide margin="0px" transition={['fade']} notes={notes.universal1}>
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
            <Image width="500px" src={images.universalComponents} />
            <List style={{ width: '400px' }}>
              {[
                'Platform agnostic components made with React Native primitives',
                'Published via shared NPM package',
                '"Write once, render anywhere"',
              ].map(item => (
                <ListItem key={item} textSize="1.2em">{item}</ListItem>
              ))}
            </List>
          </div>
        </Slide>
        <Slide margin="0px" transition={['fade']} notes={notes.universal2}>
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
            <List style={{ width: '400px', textAlign: 'right' }}>
              {[
                'Business logic is shared between platforms',
                'Comprised of universal components',
                '"Write once, run anywhere"',
              ].map(item => (
                <ListItem key={item} textSize="1.2em">{item}</ListItem>
              ))}
            </List>
            <Image width="500px" src={images.universalApplication} />
          </div>
        </Slide>
        <Slide transition={['fade']} bgColor="primary" notes={notes.libraries1}>
          <div
            style={{
              height: '650px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
            <Link href="https://github.com/necolas/react-native-web">
              <Text textColor="secondary" lineHeight={1.6} textSize="2.6em">
                react-native-web
              </Text>
            </Link>
            <Link href="https://github.com/lelandrichardson/react-primitives">
              <Text textColor="tertiary" lineHeight={1.6} textSize="2.6em">
                react-primitives
              </Text>
            </Link>
            <Link href="https://microsoft.github.io/reactxp/">
              <Text textColor="quartenary" lineHeight={1.6} textSize="2.6em">
                ReactXP
              </Text>
            </Link>
            <Link href="https://reactnyc-universal-components.surge.sh/">
              <Text textColor="secondary" lineHeight={1.6} textSize="1.3em">
                *for a comparison of all 3, check out the first iteration of this talk
              </Text>
            </Link>
          </div>
        </Slide>
        <Slide transition={['fade']} bgColor="primary" notes={notes.libraries2}>
          <div
            style={{
              height: '650px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
            <Link href="https://github.com/necolas/react-native-web">
              <Text textColor="secondary" lineHeight={1.6} textSize="2.6em">
                react-native-web
              </Text>
            </Link>
            <Text textColor="tertiary" lineHeight={1.6} textSize="1.7em">
              <span style={{ color: colors.secondary }}>APIs: 21/43</span>
              {' '}
              (9 missing are iOS/Android specific)
            </Text>
            <Text textColor="tertiary" lineHeight={1.6} textSize="1.7em">
              <span style={{ color: colors.secondary }}>Components: 22/36</span>
              {' '}
              (13 missing are iOS/Android specific)
            </Text>
            <Text textColor="secondary" lineHeight={1.6} textSize="1.7em">
              Platform parity: ~75%
            </Text>
          </div>
        </Slide>
        <Slide
          transition={['fade']}
          bgColor="primary"
          notes={notes.productionReady1}
        >
          <Text
            textColor="tertiary"
            lineHeight={1.2}
            textSize={fontSize.medium}
          >
            Is react-native-web
            {' '}
            <span style={{ color: colors.secondary }}>production ready</span>
            ?
          </Text>
        </Slide>
        <Slide
          transition={['fade']}
          bgColor="primary"
          notes={notes.productionReady2}
          margin="0px"
        >
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
            <Text
              lineHeight={1.2}
              textSize="1.5em"
              padding="0 0 25px 0"
              textColor="secondary"
            >
              Twitter Lite
            </Text>
            <Image src={images.twitterLite} height="700px" />
          </div>
        </Slide>
        <Slide
          transition={['fade']}
          bgColor="primary"
          notes={notes.productionReady3}
          margin="0px"
        >
          <Text
            lineHeight={1.2}
            textSize="1.5em"
            padding="0 0 25px 0"
            textColor="secondary"
          >
            Major League Soccer Schedule & Scores
          </Text>
          <Image src={images.mls} width="1000px" />
        </Slide>
        <Slide
          transition={['fade']}
          bgColor="primary"
          notes={notes.accessibility}
          margin="0px"
        >
          <Text
            lineHeight={1.2}
            textSize="1.5em"
            padding="0 0 25px 0"
            textColor="secondary"
          >
            Accessibility APIs: Add ARIA roles 🙌
          </Text>
          <CodePane
            textSize=".8em"
            style={{ minWidth: 0 }}
            lang="jsx"
            source={ReactNativeWeb.accessibility}
          />
        </Slide>
        <Slide transition={['fade']} bgColor="primary" notes={notes.perf}>
          <Text
            lineHeight={1.2}
            textSize="1.5em"
            padding="0 0 25px 0"
            textColor="secondary"
          >
            StyleSheet performance: Faster than most CSS-in-JS libraries 🚀
          </Text>
          <Image height="500px" src={images.benchmarks} />
          <Link href="https://www.youtube.com/watch?v=tFFn39lLO-U">
            <Text
              lineHeight={1.2}
              textSize="1.2em"
              padding="0 0 25px 0"
              textColor="tertiary"
            >
              *to learn more, check out @necolas' talk!
            </Text>
          </Link>
        </Slide>
        <Slide transition={['fade']} bgColor="primary" notes={notes.codeReuse}>
          <Comparison
            top="More code reuse"
            bottom="Less duplication"
            comparison="&"
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
            textSize={fontSize.medium}
            textColor="secondary"
          >
            With some Webpack wizardry, you can use React Native libraries on the web!
          </Text>
        </Slide>
        <Slide transition={['fade']} notes={notes.rnModules}>
          <Text lineHeight={1.2} textSize="1.5em" textColor="secondary">
            Alias react-native-web
          </Text>
          <CodePane
            style={{ minWidth: 0, maxWidth: 900, fontSize: '0.7em' }}
            lang="jsx"
            source={Webpack.alias}
          />
        </Slide>
        <Slide transition={['fade']} notes={notes.rnModules1}>
          <Text lineHeight={1.2} textSize="1.5em" textColor="secondary">
            Compile library to ES5 with Babel
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
        <Slide
          transition={['fade']}
          bgColor="primary"
          notes={notes.webCompatible}
        >
          <Text
            textColor="tertiary"
            lineHeight={1.2}
            textSize={fontSize.medium}
          >
            How do I know if a React Native library is
            {' '}
            <span style={{ color: colors.secondary }}>
              web compatible
            </span>
            ?
          </Text>
        </Slide>
        <Slide
          transition={['fade']}
          bgColor="primary"
          notes={notes.webCompatible2}
        >
          <Link href="https://native.directory/">
            <Text lineHeight={1.2} textSize="1.2em" textColor="quartenary">
              native.directory: Your one stop shop
            </Text>
          </Link>
          <Image width="100%" src={images.nativeDirectory} />
        </Slide>
        <Slide transition={['fade']} bgColor="primary" notes={notes.tweet}>
          <Image src={images.tweet2} width="800px" />
        </Slide>
        <Slide
          transition={['fade']}
          bgColor="primary"
          notes={notes.renderAgnostic}
        >
          <Text lineHeight={1.2} textSize="1.5em" textColor="secondary">
            Keep your components lightweight
          </Text>
          <CodePane
            style={{ minWidth: 0, maxWidth: 900, fontSize: '0.7em' }}
            lang="jsx"
            source={ReactNativeWeb.renderAgnostic}
          />
        </Slide>
        <Slide
          transition={['fade']}
          bgColor="primary"
          notes={notes.renderAgnostic2}
        >
          <Text lineHeight={1.2} textSize="1.5em" textColor="secondary">
            Your universal components are your application's primitives!
          </Text>
          <CodePane
            style={{ minWidth: 0, maxWidth: 900, fontSize: '0.7em' }}
            lang="jsx"
            source={ReactNativeWeb.renderAgnostic2}
          />
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
            source={RenderAgnostic.platformModule}
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
              source={RenderAgnostic.platformExtensions}
            />
          </div>
        </Slide>
        <Slide transition={['fade']} bgColor="primary" notes={notes.storybook1}>
          <Text textColor="tertiary" lineHeight={1.2} textSize="2em">
            How do I
            {' '}
            <span style={{ color: colors.secondary }}>
              test
            </span>
            {' '}universal components?
          </Text>
        </Slide>
        <Slide transition={['fade']} notes={notes.storybook2}>
          <Text lineHeight={1.2} textSize="1.3em" textColor="tertiary">
            Storybook: Develop in isolation
          </Text>
          <Image
            width="80%"
            style={{ marginTop: '50px' }}
            src={images.storybook}
          />
        </Slide>
        <Slide transition={['fade']} notes={notes.storybook3}>
          <Text lineHeight={1.2} textSize="1.2em" textColor="tertiary">
            Storyshots: Automatically convert your stories to Jest snapshots ✨
          </Text>
          <Image
            width="80%"
            style={{ marginTop: '50px' }}
            src={images.storyshots}
          />
        </Slide>
        <Slide transition={['fade']} bgColor="primary" notes={notes.styling}>
          <Image src={images.tweet1} width="800px" />
        </Slide>
        <Slide
          transition={['fade']}
          margin="0px"
          bgColor="primary"
          notes={notes.styling2}
        >
          <Text lineHeight={1.2} textSize="1.5em" textColor="secondary">
            Be mindful of responsive design
          </Text>
          <CodePane
            style={{ minWidth: 0, maxWidth: 900, fontSize: '0.65em' }}
            lang="jsx"
            source={ReactNativeWeb.styling}
          />
        </Slide>
        <Slide
          transition={['fade']}
          margin="0px"
          bgColor="primary"
          notes={notes.styling3}
        >
          <Text lineHeight={1.2} textSize="1.5em" textColor="secondary">
            Pass props into a StyleSheet factory
          </Text>
          <CodePane
            style={{ minWidth: 0, maxWidth: 900, fontSize: '0.7em' }}
            lang="jsx"
            source={ReactNativeWeb.styling2}
          />
        </Slide>
        <Slide transition={['fade']} bgColor="primary" notes={notes.apollo}>
          <Image src={images.tweet3} width="800px" />
        </Slide>
        <Slide transition={['fade']} bgColor="primary" notes={notes.apollo1}>
          <Link href="http://dev.apollodata.com/">
            <Image src={images.apollo} width="800px" />
          </Link>
          <Text
            lineHeight={1.2}
            textColor="tertiary"
            textSize={fontSize.medium}
          >
            A flexible & powerful GraphQL client
          </Text>
        </Slide>
        <Slide transition={['fade']} bgColor="primary" notes={notes.apollo2}>
          <Link href="http://dev.apollodata.com/">
            <Image src={images.apollo} width="800px" />
          </Link>
          <Text
            lineHeight={1.2}
            textColor="tertiary"
            textSize={fontSize.medium}
          >
            <span style={{ color: colors.secondary }}>Universal data</span>
            {' '}
            for your universal components 😍
          </Text>
        </Slide>
        <Slide bgColor="primary" transition={['fade']} notes={notes.apollo3}>
          <Text lineHeight={1.2} textSize="1.4em" textColor="secondary">
            Compatible with any client, including React Native & Sketch
          </Text>
          <Image width="80%" src={images.sketch} />
        </Slide>
        <Slide
          bgColor="primary"
          margin="0px"
          transition={['fade']}
          notes={notes.apollo4}
        >
          <Text lineHeight={1.2} textSize="1.4em" textColor="secondary">
            Write your query once, run it anywhere!
          </Text>
          <CodePane
            style={{
              minWidth: 0,
              maxWidth: 900,
              fontSize: '0.6em',
              margin: '0',
              padding: '0',
            }}
            lang="jsx"
            source={ReactNativeWeb.apollo}
          />
        </Slide>
        <Slide
          transition={['fade']}
          margin="0px"
          bgColor="primary"
          notes={notes.challenges1}
        >
          <Text textSize="2em" lineHeight={1.6} textColor="secondary">
            Challenges yet to be solved:
          </Text>
          <Text textSize="2em" lineHeight={1.6} textColor="tertiary">
            Webkit Flexbox performance
          </Text>
          <Image width="80%" src={images.safari} />
        </Slide>
        <Slide
          transition={['fade']}
          margin="0px"
          bgColor="primary"
          notes={notes.challenges2}
        >
          <Text textSize="2em" lineHeight={1.6} textColor="tertiary">
            Cross-platform SVGs
          </Text>
          <Image width="60%" src={images.svgs} />
          <Link href="https://github.com/godaddy/svgs">
            <Text textSize="1.2em" lineHeight={1.6} textColor="secondary">
              *Check out svgs, a compat layer between browser SVG elements & react-native-svg
            </Text>
          </Link>
        </Slide>
        <Slide
          transition={['fade']}
          margin="0px"
          bgColor="primary"
          notes={notes.challenges3}
        >
          <Text textSize="2em" lineHeight={1.6} textColor="tertiary">
            VR
          </Text>
          <List textColor="secondary">
            {[
              'Units are in meters, not pixels',
              'Wide variety of input events to account for',
              'Cross-platform components are limited to View, Image, & Text',
            ].map(item => <ListItem key={item}>{item}</ListItem>)}
          </List>
        </Slide>
        <Slide transition={['fade']} bgColor="primary" notes={notes.takeaway}>
          <Text textColor="tertiary" lineHeight={1.2} textSize="2em">
            Open your mind to
            {' '}
            <span style={{ color: colors.secondary }}>new</span>
            {' '}
            platforms and possibilities.
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
              <Image margin="30px" src={images.github} width="100px" />
            </Link>
            <Link href="https://twitter.com/peggyrayzis">
              <Image margin="30px" src={images.twitterWhite} width="100px" />
            </Link>
            <Link href="https://medium.com/@peggyrayzis">
              <Image margin="30px" src={images.medium} width="100px" />
            </Link>
          </div>
        </Slide>
      </Deck>
    );
  }
}
