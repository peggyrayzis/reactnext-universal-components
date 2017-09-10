const notes = {
  intro1: `
    Hi everyone! Today we’re going to talk about something really exciting that’s generating a lot of buzz in the community.
    Over the next 25 minutes, you’re going to learn how to write a component once & render it anywhere -
    i’m talking web, native, VR, sketch, & more -- without changing any lines of code.
  `,
  intro2: `
    Before we get started, I wanted to introduce myself.
    Shalom! My name is Peggy Rayzis. You can find me on Twitter, Github, and Medium at my handle there.
    <br />
    <br />
    As you can see, I've had an awesome time in Israel so far! I even made some new friends on the tour.
  `,
  apolloIntro: `
    I work at Meteor Development Group on the Apollo team building open source GraphQL tools. Previously, I was working at Major League Soccer as an engineer on the UI team.
    My talk actually isn't about GraphQL today at all, but I think Apollo client complements a universal components architecture very nicely.
    I'll explain more about that later in my talk.
  `,
  reactWeb: `
    Before I tell you what cross-platform component libs are and the problems they solve, I want to give you some context first
    <br />
    <br />
    In the beginning, we had React on the web
    We all thought it was awesome - clearly judging by the amazing international community we have here today!
    React allowed us to build beautiful UIs and iterate upon them quickly
  `,
  reactNative1: `
    Then came the custom renderers that brought React's success on the web to native platforms
    <br />
    <br />
    The first of which was React native
    React Native was so great that it inspired several forks
    More recently, we also have custom renderers for WebVR & Sketch.
  `,
  reactNative2: `
    Needless to say React Native was a hit!
    Who here has used React Native?
    <br />
    <br />
    Check out these stats from the last state of JavaScript survey, over 10,000 devs responded
    <br />
    <br />
    92% satisfaction rating for React Native!
    I can't think of the last time that 92% of developers agreed upon anything!
  `,
  reactNative3: `
  <p style="font-size:22px;padding-left:40px;">
    There are a lot of reasons why developers are continuing to bet on React Native.
    <br />
    <br />
    You have an intuitive way to handle sophisticated multi touch gestures with PanResponder,
    <br />
    You have StyleSheet, a built in CSS in JS solution that allows you to colocate your styles with your React components
    <br />
    It's easy to create performant, declarative animations to enhance your UI with the Animated API
    <br />
    You also have Yoga, Facebook's cross-platform layout engine that uses flexbox by default for positioning your UI.
    </p>
  `,
  reactNativeWeb: `
    All of this was really exciting! Not too long after React Native was officially released,
    Nicolas Gallagher at Twitter released react-native-web to bring these APIs & the building blocks of RN over to web development
  `,
  waitWhat: `
    When I first heard about this, I thought it was weird too. You bring React from the web to native with React Native and now you’re trying to bring React Native over to the web?
    In reality, he was ahead of his time.
  `,
  primitives1: `
    <p style="font-size:20px;padding-left:40px;">
    When you look at the React ecosystem in totality and where it seems to be heading, it doesn’t seem that strange
    <br />
    <br />
    At the most granular level, all of the building blocks, or “primitives,”  for the platforms on the right are the same.
    They also share the same APIs for styling, animation, and gesture handling.
    Theoretically, you can write a pretty basic component using RN primitives and have it work on every single one of those platforms just by changing the renderer you’re importing from
  </p>
  `,
  primitives2: `
    <p style="font-size:20px;padding-left:40px;">
    The odd one out here is the web -- the web’s primitives are tied to the DOM!
    We’re building components with divs & h1 tags instead of Views & Text.
    Styling & animation are not implemented in a uniform way.
  </p>
  `,
  primitives3: `
    DOM primitives were standardized in 1998. To put it in perspective...
  `,
  primitives4: `
    That's the same year NSYNC released their debut album! DOM primitives are almost 20 years old!
    <br />
  `,
  primitives5: `
    Our websites don't look like this anymore!! We need a new set of primitives that better reflect modern application development for the mobile web.
  `,
  community1: `
    <br />
    Luckily for us, we kind of already have the primitives and APIs we need with React Native!
    I love this quote from Jordan Walke, the creator of React. In his interview with Reactiflux, he advocated for further unifying React & React Native for mobile app development.
    <br />
  `,
  crossPlatform: `
  So how do we accomplish this goal and bring the joys of React Native development to the web?
  I think this is a pretty difficult problem to solve and won't fully materialize without advancements from browser vendors.
  Who knows, maybe someday we'll get a React Native app browser. Ken Wheeler built an excellent proof of concept for one, and
  I highly encourage you to check out his talk if this subject interests you.
    Until that happens, we have to play the hand we're dealt
  `,
  universal: `
  <p style="font-size:20px;padding-left:40px;">
    There is a solution that you can start building today -- that's universal components.
    <br />
    <br />
    First, I want to explain what they are and also introduce the concept of a universal application
    universal components are built to render anywhere. They are platform agnostic components compatible with any renderer that are built with React Native primitives & APIs
    With universal components, you separate the business logic by platform, but compose your features with universal, shared components.
    </p>
    `,
  universal1: `
  To share these components, you would publish them in an NPM package and consume them in each separate application.
  You can think of building universal components as writing once and rendering anywhere.
  This is what we're going to cover in detail today.
  `,
  universal2: `
    in contrast, you can think of developing a universal application as writing it once, and running it anywhere. You will need some kind of intermediate layer between your UI & the platform to determine the renderer
    In a universal application, you share the business logic across platforms.
    Universal applications are built with both universal & platform specific components, so you can think of universal components as more of an incremental approach
    <br />
    <br />
    We're not going to cover universal applications today, but if you're interested, check out create-react-native-web-app & create-react-xp app by Nader Dabit. I'll post the link to his projects in my Github repo for the talk.
  `,
  libraries1: `
    Three libraries have emerged to cover these needs. all of them are excellent.
    <br />
    <br />
    RNW - first cross-platform component library developed by Nicolas Gallagher at Twitter. It's been battle tested with Twitter Lite, their new progressive web app.
    <br />
    Primitives - Developed by Leland Richardson of Airbnb. He gave an excellent talk on it at Chain React that you should check out.
    <br />
    ReactXP - Developed by Microsoft, newest of the three. Used by the Skype team in production.
    <br />
    <br />
    If you'd like to see a comparison of these libraries, explaining how they work and some of their tradeoffs, you should check out the first version of this talk. all of my slides are clickable, so you can follow the link below.
  `,
  libraries2: `
    today, we're going to focus on react native web in order to build our universal components. it has the highest platform parity of all the libraries
    what i mean by platform parity is how similar it is to react native.
    i actually ran the numbers - react native web supports 21 out of 43 react native APIs - that's things like StyleSheet and Dimensions.
    9 of those 43 that are unsupported are actually iOS and Android specific
    for components, RNW supports over half.
    so if you combine them and substract the irrelevant platform specific APIs, react native web supports around 3/4 of what's available in react native.
    i'd like to point out that react native web works by acting as a compatibility layer on top of DOM primitives, so you can write React Native code that will ultimately render to divs and spans.
  `,
  productionReady1: `
    you're probably wondering with a healthy dose of skepticism whether universal components built with RNW are production ready
    or if this is just another javascript fad. my answer to this question is a resounding YES! RNW is already being used in production by large companies today.
  `,
  productionReady2: `twitter uses RNW for their progressive web app, twitter lite.
  in order for twitter to use RNW in production, they had to solve problems like right to left layout & accessibility.
  i'd also like to point out that this architecture is not just for greenfield applications - twitter has been incrementally migrating their component base to RNW,
  so it's entirely possible for your new universal components to render beside your old ones
  `,
  productionReady3: `
  we also used it in production at major league soccer for our realtime match experience
  everything here is built with universal components
  `,
  accessibility: `
  one of the things that might have concerned you is that react native web renders to divs and spans, which is a huge concern for accessibility reasons because there is no way to preserve semantic markup for screenreaders. there are built in accessibility APIs to make sure you can apply the correct ARIA role to your DOM elements
  `,
  perf: `
  react native web is also performant. RNW's StyleSheet implementation is on par or faster than most popular CSS in JS libraries today
  it extracts your styles into CSS, applies a class name for each unique declaration, and memoizes them at runtime to improve performance
  `,
  codeReuse: `
  Adopting this architecture also increases your team's velocity. Instead of developing a feature once * the number of platforms you're supporting,
  you'll only have to write a universal component once, dramatically increasing your code reuse.
  You'll also be able to standardize your third party libraries across platforms - so instead of having a calendar library for web and a separate one for native with another API you have to learn, you can just use one, resulting in less duplication of work
  `,
  webpack4: `
    just by configuring a couple things in your build process, you can use RN libraries on the web!
    The reason why all of this is possible is react-native-web's almost complete feature parity with React Native. let's dive into some code!
  `,
  rnModules: `
    first, you will want to alias react-native-web to react-native in your project. you can achieve this with either webpack or babel-plugin-module-resolver
  `,
  rnModules1: `
    since React Native modules are in ES6, you're going to have to compile them with Babel in your Webpack build.
    To tell the babel-loader to process the RN module, add the module's name as a negative lookahead to the exclusion regex. you'll need to do this for every RN module you use
  `,
  rnModules2: `
    Sometimes your RN module will contain code that has already been compiled. In the case of victory native, victory shares a couple core modules with the web.
    However, the React Native version points to the uncompiled ES6 code.
    If this is the case, point Webpack to the compiled code instead
  `,
  webCompatible: `
    you're probably asking yourself how do I know which libraries are web compatible? surely not all of them can be
  `,
  webCompatible2: `
  the one stop shop for determining web compatibility is native directory. recently, i partnered with the awesome folks at expo to add web compatibility features to native.directory, their curated list of RN libraries
  all you need to do is check the filter to find what you're looking for!
  shoutout to jim lee, who was able to execute this feature super quickly before my talk :)
  in the upcoming weeks, i'm going to perform an audit to add more web compatible libraries to the list
  but i need your help! if you're using react native libraries on the web that aren't listed, PLEASE send a pull request to add it.
  `,
  tweet: `
  alright, so switching gears, i know this architecture is very new, so i wanted to answer some of the questions the community has about universal components.
  recently i posed the question on twitter to see what people were curious about.
  so let's start off by briefly discussing how to write render agnostic components
  `,
  renderAgnostic: `
  a lot of the best practices with react in general apply to universal components.
    you want to keep them as small and focused as possible
    i like to do this with a top level wrapper component that passes its data down to any amount of child components
    we're going to be using a simple moviecard example for this talk that passes down a movie prop to all of its children
  `,
  renderAgnostic2: `
  Think of your universal components as your "primitives" for features in your application that you can compose based on the platform.
  here we're rendering a poster, a title, and a plot inside a card but these could all be standalone components used in other parts of your application.
  think of reusability as your developing
  `,
  platformExt1: `
    it's really difficult to make all of your components universal. sometimes you're going to need an escape hatch
  `,
  platformExt2: `
    that's ok because we have one! for small one off changes, you're going to want to use the Platform module.
    This is great for things like styling differences that don't affect the overall logic of your universal component
  `,
  platformExt3: `
    for bigger, more substantial differences, you can use platform extensions.
    you will need to configure this in your webpack build.
    here's where this comes in handy.
    you can prefix your file extension with your platform. webpack and the RN packager will know where to resolve to depending on the platform
    this is great for things like linking whhere the implementation varies significantly between platforms
  `,
  storybook1: `
  how do we test our universal components?
    a helpful tool is react storybook.
    storybook is an interactive development & testing environment for your react components.
    it removes the platform out of the equation, so you can focus on writing your components quickly
  `,
  storybook2: `
    By developing our components in isolation and keeping them focused, we can iterate faster.
    i like to use the web version of storybook to ensure that my universal components work on the web
  `,
  storybook3: `
  another cool feature is that you can automatically convert your stories to snapshots in Jest
  `,
  styling: `
    ok, so we're developing our components in storybook.
     what about styling your universal components?
     personally, i stick with stylesheet, but you can use libraries like glamorous native too if you're familiar with a styled components like API. it's really up to you, but i would advise to keep the performance benchmarks in mind and run them for yourself.
  `,
  styling2: `
    one of the problems you'll have to tackle right away is the variation of screen sizes.
    luckily, if you're already following responsive design practices, this shouldn't be too bad.
    if you're designing a component for desktop, you can easily port those styles over to Apple TV
    on the flip side, styles for the mobile web can be applied to react native.
    to determine the media size, on web, you can use a library like react-media for media queries and pass down a top level media prop either through context or a higher order component
    on native, you can use dimensions and onLayout to determine whether the phone is in portrait or landscape
  `,
  styling3: `
    then you can pass props like media and orientation into a function that returns the output from stylesheet.create
  `,
  apollo: `
  alright so we can style our components, but what about fetching data?
  `,
  apollo1: `
    i think this is a perfect use case for apollo! and this is not just because i work there, i was a huge fan of apollo for universal components even when i was at major league soccer.
    apollo is a graphQL client that manages data fetching and updating your UI for you.
  `,
  apollo2: `
  you can think of apollo as a universal data solution for your universal components. it's used in production by a number of large companies, ranging from ticketmaster to airbnb
  `,
  apollo3: `
  the reason why it is a universal data solution is because it supports any client, including react native and even sketch, without any additional configuration. i think this sketch example is really cool because designers can fetch and design with real data.
  `,
  apollo4: `
    the other cool thing about apollo is that your components only need to request the data that they need.
    this aligns really nicely with the modular philosophy of universal components, since the goal is to keep them small and focused.
    with apollo, you can write your queries once and run them on any platform.
    you can even publish shared graphql containers to an npm package along with your universal components
  `,
  challenges1: `
    even though universal components are really useful, there are some challenges since the ecosystem is so new.
    flexbox performance is still an issue in webkit and older browsers, however there is a workaround.
    i believe this is fixed in the newest version of webkit but it's still something to keep in mind
  `,
  challenges2: `
  cross platform svgs can be difficult as well for some newer, experimental platforms like sketch.
  luckily a solution exists for web and native. svgs by godaddy is a compat layer that allows you to use the react-native-svg API to render svg elements in the browser.
  this is essential for using libraries like react native vector icons and victory native on the web, which rely upon svg
  `,
  challenges3: `
  VR can also be tough for a number of reasons. units of measurement in VR are meters, not pixels, unless you wrap your 2d components in a cylindricalpanel. it can also be hard to normalize user input events, since there are so many to account for -- gaze tracking, keyboard events, hand held controllers.
  also you're limited to view, image, and text for cross-platform components so just keep that in mind.
  `,
  takeaway: `
    ok that was a lot of information to throw at you at once. if you takeaway one thing from this talk, even if you don't plan on executing a cross-platform strategy any time soon is this:
    be open minded to new platforms and possibilities.
    as our world becomes more connected, new platforms will emerge, possibly as a react custom renderer.
    if you're a maintainer. people may be using your libraries in ways you never expected.
    react is truly becoming a platform for application development, so try to think of the bigger picture 
  `,
  thanks: `
    thank you so much, you've been a fabulous audience. if you have any questions, please feel free to tweet at me or come find me later.
  `,
};

export default notes;
