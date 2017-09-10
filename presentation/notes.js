const notes = {
  intro1: `
    Today we’re going to talk about something really exciting that’s generating a lot of buzz in the community.
    Over the next 30 minutes, I’m going to show you the power of cross-platform component libraries.
    <br />
    <br />
    You’re going to learn how to write a component once & render it anywhere -
    i’m talking web, native, VR, sketch, & more -- without changing any lines of code.
    Does that sound cool?
  `,
  intro2: `
    Before we get started, I wanted to introduce myself.
    My name is Peggy Rayzis. You can find me on the internet at my handle there.
    <br />
    <br />
    You can also find me in the open source community working on nteract & react-native-create-bridge
  `,
  apollo: `
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
    There are a lot of reasons why developers are continuing to bet on React Native.
    <br />
    <br />
    You have an intuitive way to handle sophisticated multi touch gestures with PanResponder,
    <br />
    You have StyleSheet, a built in CSS in JS solution that allows you to colocate your styles with your React components
    and dynamically change styling when props change/
    <br />
    It's easy to create performant, declarative animations to enhance your UI with the Animated API
    <br />
    You also have Yoga, Facebook's cross-platform layout engine that uses flexbox by default for positioning your UI.
  `,
  reactNativeWeb: `
    All of this was awesome! Not too long after React Native was officially released,
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
    Advanced touch event support requires rendering into a canvas.
  </p>
  `,
  primitives3: `
    DOM primitives came out in 1998. To put it in perspective...
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
  `,
  crossPlatform2: `
  Who knows, maybe someday we'll get a React Native app browser. Ken Wheeler built an excellent proof of concept for one in this video,
  I highly encourage you to check out his talk if this subject interests you.
    Until that happens, we have to play the hand we're dealt
    <br />
  `,
  universal1: `
    There is a solution that you can start building today -- that's universal components.
    <br />
    <br />
    First, I want to explain what they are and also introduce the concept of a universal application
    universal components are built to render anywhere. They are platform agnostic components compatible with any renderer that are built with React Native primitives & APIs
    With universal components, you separate the business logic by platform, but compose your features with universal, shared components.
    `,
  universal2: `
    You can think of developing a universal application as writing it once, and running it anywhere. You will need some kind of intermediate layer between your UI & the platform to determine the renderer
    In a universal application, you share the business logic across platforms.
    Universal applications are built with both universal & platform specific components, so you can think of universal components as more of an incremental approach
    <br />
    <br />
    This is a subtle but important difference. Universal components can't run anywhere without some initial configuration.
  `,
  libraries1: `
    Three libraries have emerged to cover these needs. all of them are excellent
    <br />
    <br />
    RNW - first cross-platform component library developed by Nicolas Gallagher at Twitter. It's been battle tested with Twitter Lite, their new progressive web app.
    <br />
    Primitives - Developed by Leland Richardson of Airbnb. He gave an excellent talk on it at Chain React that you should check out.
    <br />
    ReactXP - Developed by Microsoft, newest of the three. Used by the Skype team in production.
    <br />
    <br />
    If you'd like to see a comparison of these libraries, explaining how they work and some of their tradeoffs, you should check out the first iteration of this talk.
  `,
  libraries2: `
    today, we're going to focus on react native web. it has the highest platform parity of all the libraries
    that means RNW covers 80% of the components exported from React Native
    it works almost as a compat layer on top of the DOM because it allows you to write react native primitives that render to DOM elements
  `,
  productionReady1: `
    you're probably wondering with a healthy dose of skepticism whether universal components built with RNW are production ready
    or if this is just another javascript fad. RNW is already being used in production by large companies today.
  `,
  productionReady2: `twitter uses RNW for their progressive web app, twitter lite.
  in order for twitter to use RNW in production, they had to solve problems like right to left layout & accessibility.
  i'd also like to point out that this architecture is not just for greenfield applications - twitter has been incrementally migrating their component base to RNW,
  so it's entirely possible for your new universal components to render beside your old ones
  `,
  productionReady3: `
  we also used it in production at major league soccer for our realtime match experience
  everything here is built with RNW and we're even rendering some RN libraries on the web
  `,
  accessibility: `
  RNW covers all of the needs of a modern application. there are built in accessibility APIs to make sure you can apply the correct ARIA role to your DOM elements
  `,
  perf: `
  it's performant too. RNW's StyleSheet implementation is on par or faster than most popular CSS in JS libraries today
  it extracts your styles into css modules and memoizes them to improve performance
  `,
  codeReuse: `
  Adopting this architecture also increases your team's velocity. Instead of developing a feature once * the number of platforms you're supporting,
  you'll only have to write a universal component once.
  You'll also be able to standardize your third party libraries across platforms
  `,
  rnModules: `
  for example, think of a calendar library. without universal components, you have to use a different one for both web and native
  this leads to learning two completely different APIs for the exact same feature
  <br />
  <br />
  what if i told you that you'd only have to pick one?
  `,
  webpack4: `
    just by configuring a couple things in your build process, you can use RN libraries on the web!
    The reason why all of this works is react-native-web's almost complete feature parity with React Native.
    It even has shims for APIs like NativeModules and polyfills for setNativeProps to make this possible.
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
  recently, i partnered with the awesome folks at expo to add web compatibility features to native.directory, their curated list of RN libraries
  all you need to do is check the filter to find what you're looking for!
  shoutout to XX, who was able to execute this feature super quickly before my talk :)
  in the upcoming weeks, i'm going to perform an audit and work w/ maintainers to add more web compatible libraries to the list
  `,
  webpack2: `
    If you're dealing with something like react vr where the internals of the packager aren't as easily accessible, you can alias with babel
    Here, we're telling babel to resolve react-native imports to react-vr so we can render our shared components
  `,
  renderAgnostic: `
    With universal components, you want to keep them as small and focused as possible
    Think of them as your "primitives" for features in your application that you can compose based on the platform
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
    remember when i said you would need to configure this in your webpack build?
    here's where this comes in handy.
    you can prefix your file extension with your platform. webpack and the RN packager will know where to resolve to depending on the platform
    this is great for things like linking which varies significantly between platforms
  `,
  storybook1: `
    another tool i'd like to touch on is react storybook.
    storybook is an interactive development & testing environment for your react components.
    it removes the platform out of the equation, so you can focus on writing your pure components quickly
  `,
  storybook2: `
    By developing our components in isolation and keeping them focused, we can iterate faster.
    As I develop in storybook, I like to think I'm building a set of MLS primitives that I can compose into features on each platform
  `,
  tired: `
    ok that was a lot of information to throw at you at once. i know its monday and youre prob as exhausted as this puppy
  `,
  takeaway: `
    but if you takeaway one thing from this presentation, even if you don't plan on executing a cross-platform strategy any time soon is this:
    be open minded to new platforms and possibilities.
    as our world becomes more connected, new platforms will emerge, possibly as a react custom renderer.
    people may be using your modules or libraries in ways you never expected.
    when RN first came out, did we ever think we would be using RN modules on the web? probably not, but that's what makes the react ecosystem awesome.
  `,
  thanks: `
    thank you so much, you've been a fabulous audience. if you have any questions, please feel free to tweet at me or come find me later.
  `,
};

export default notes;
