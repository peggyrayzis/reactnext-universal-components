const notes = {
  intro1: `
    Tonight we’re going to talk about something really exciting that’s generating a lot of buzz in the community.
    Over the next 30 minutes, I’m going to show you the power of cross-platform component libraries.
    <br />
    <br />
    You’re going to learn how to write a component once & render it anywhere -
    i’m talking web, native, VR, sketch, & more -- without changing any lines of code.
    We're already using this strategy at Major League Soccer and I think it's really cool. Let's get started!
  `,
  intro2: `
    You can find me on Twitter, Github, and all other platforms at my handle below.
    <br />
    <br />
    You can also find me in the open source community working on nteract & react-native-create-bridge
  `,
  mls: `
    I work at Major League Soccer as a software engineer on the UI team.
    We create everything from our realtime match experience on the web to our fire TV app, all written in React.
    We’re also bringing our mobile app in house and rewriting it from the ground up as a greenfield React Native app
  `,
  reactWeb: `
    Before I tell you what cross-platform component libs are and the problems they solve, I want to give you some context first
    <br />
    <br />
    In the beginning, we had React on the web
    We all thought it was awesome - clearly judging by the community in this room tonight!
    React allowed us to build beautiful UIs and iterate upon them quickly
  `,
  reactNative1: `
    Then came the custom renderers that brought React's success on the web to native platforms
    <br />
    <br />
    The first of which was React native
    React Native was so great that it inspired several forks
    More recently, we also have custom renderers for WebVR & Sketch
  `,
  reactNative2: `
    React Native was a hit!
    Who in this room has used React Native?
    <br />
    <br />
    Check out these stats from the last state of JS survey, over 10,000 devs responded
    <br />
    <br />
    92% satisfaction rating for React Native!
    I can't think of the last time that 92% of developers agreed upon anything!
  `,
  reactNative3: `
    There are a lot of reasons why developers are continuing to bet on React Native:
    <br />
    <br />
  `,
  reactNativeWeb: `
    Not too long after React Native was officially released,
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
    <br />
    I know pretty nuts. We're building modern applications with primitives that were around when frosted tips were cool
  `,
  primitives5: `
    Our websites don't look like this anymore!!
  `,
  community1: `
    <p style="font-size:20px;padding-left:40px;">
    Other members of the community share my frustrations.
    <br />
    <br />
    I love this tweet from Ken Wheeler. He rants about this stuff a lot, which is awesome bc we need more attention drawn to this issue.
    We're building modern applications out of toothpicks & glue.
    <br />
    <br />
    James Long gave us some insight here -- people are working on better primitives, but they don't solve a use case like React Native's Scrollview
  </p>
  `,
  community2: `
    You know the situation is bad when even the creator of React himself, Jordan Walke, is weighing in.
    <br />
    <br />
    In his interview with Reactiflux, he was hopeful of the possibility to unify React & React Native for mobile web.
    <br />
    <br />
    This would be really awesome! Uniting these two communities under a common goal - better primitives - is a great thing.
  `,
  crossPlatform: `
    Maybe someday we'll get a React Native renderer in the browser. I've heard this idea thrown around on Twitter, it's pretty cool.
    Until that happens, we have to play the hand we're dealt
    <br />
    <br />
    This is where cross-platform component libraries come in. They aim to bring the same standardization of primitives and APIs from React Native over to the web -- so we don’t have to build modern applications with primitives stuck in the 90s
    They certainly don't solve the problem, at the end of the day, these libs are rendering divs & spans just like everything else
    They do, however, improve the developer experience and make it significantly easier to share code btwn platforms
  `,
  crossPlatformBenefits: `
    <p style="font-size:18px;">
    The first and probably most compelling benefit has been code reuse! Now we can seamlessly share code btwn platforms.
    When we want to introduce a new feature, we only have to write it once - not once times the number of platforms we're supporting
    <br />
    <br />
    As a result, we no longer have to switch between React & React Native when implementing a new component.
    <br />
    <br />
    Now we can standardize libraries between platforms! Instead of, for example, a calendar implementation on web and a different one for native, we can use the same implementation on both
    Later in this talk, I'm going to show you exactly how to use React Native modules on the web
    <br />
    <br />
    You'll also be able to ship faster and iterate quicker. We've been using this strategy for 5 months at MLS and have reaped the benefits of a cross-platform architecture
  </p>
  `,
  universal1: `
    before I dive into the specifics of these libraries & how to implement them, I want to clarify two architectural patterns that have emerged for cross-platform UI.
    <br />
    <br />
    This choice will influence which library you decide to use.
    In a universal application, you share the business logic across platforms.
    With universal components, you separate the business logic by platform, but compose your features with universal, shared components.
    Universal applications are built with both universal & platform specific components, so you can think of universal components as more of an incremental approach
  `,
  universal2: `
    You can think of developing a universal application as writing it once, and running it anywhere. You will need some kind of intermediate layer between your UI & the platform to determine the renderer
    <br />
    <br />
    In contrast, universal components are built to render anywhere. They are compatible with any renderer and can be imported into any application
    This is a subtle but important difference. Universal components can't run anywhere without some initial configuration.
  `,
  universal3: `
    When picturing what this looks like, think of it like this: A universal application often lives in one repository.
    If you are building universal components, your applications will live in repositories separated by platform. All of these repositories will share an external universal components package
  `,
  libraries1: `
    Three libraries have emerged to cover these needs
    <br />
    <br />
    RNW - first cross-platform component library developed by Nicolas Gallagher at Twitter. It's been battle tested with Twitter Lite, their new progressive web app.
    <br />
    Primitives - Developed by Leland Richardson of Airbnb. He just gave an excellent talk on it at React Europe that you should check out.
    <br />
    ReactXP - Developed by Microsoft, newest of the three. Used by the Skype team in production.
    <br />
    <br />
    First, I’m going to give a quick comparison of these libraries, explaining how they work and some of their tradeoffs.
    Then, I’m going to tell you what we ended up choosing for our new progressive web app at Major League Soccer and how we’re using it.
  `,
  libraries2: `
    Before I dive in, I want to be very clear that all of these libraries are excellent.
    The library that is best for you will depend on your project's business requirements and your team's constraints.
  `,
  constraint1: `
    This architecture arose out of necessity for us - our UI team is only 2 people and therefore our biggest constraint is time.
    Code reuse is extremely important to us - we don't have time to rewrite features when we have to ship both a new PWA & greenfield React Native app
  `,
  constraint2: `
    One of the reasons why we chose not to develop a universal app is because the build tooling isn't 100% ready yet.
    The RN packager is not easily customizable, although maybe it will be in the future now that they are moving it to its own repo.
    <br />
    <br />
    We could use Haul. Haul is a RN packager developed by the callstack io team that uses Webpack although it's very new.
    Ram from Microsoft ran some perf tests and found that the build speed of Haul is slower than RN packager.
    We're still monitoring the progress of Haul and will reconsider as it matures.
  `,
  constraint3: `
    Since we are an enterprise, we have third party services for things like user login & our video player that are out of our control
    If their SDKs don't support a run anywhere architecture, neither can we
  `,
  tools: `
    Those were are constraints, but I'm sure you're all dying to know how we're executing this!
    Three tools have been indispensable in executing our universal components strategy - webpack, storybook, and lerna
    Some of the stuff I'm about to show you is a little hacky, but it gets the job done
  `,
  webpack1: `
    To allow for a more seamless experience sharing components across platforms, you're going to need to import from react-native instead of react-native-web
    You can do this by creating an alias in the resolve field of your webpack build
    Another config option I want to draw attention to is the extensions field. You'll need to tell Webpack to resolve from .web.js extensions first to enable platform extensions
  `,
  webpack2: `
    If you're dealing with something like react vr where the internals of the packager aren't as easily accessible, you can alias with babel
    Here, we're telling babel to resolve react-native imports to react-vr so we can render our shared components
  `,
  webpack3: `
    Make sure you let the module name mapper in jest and flow know so you don't get any nasty module not found errors!
  `,
  webpack4: `
    Alright, now here's where it gets a little crazy. This is still very new and experimental, but I'm going to show you how to use RN modules on the web!
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
  featureParity: `
    The reason why all of this works is react-native-web's almost complete feature parity with React Native.
    It even has shims for APIs like NativeModules and polyfills for setNativeProps to make this possible.
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
  lerna1: `
    if you have multiple shared packages, lerna can make your life a lot easier
    we have a shared ui packages repo that holds our react components.
    lerna is used by babel, facebook and others to manage their monorepos with multiple packages
  `,
  lerna2: `
    there's only two commands you need to know:
    bootstrap installs all of your packages dependencies and symlinks any cross dependencies
    publish creates a new release of all of the packages that have been updated, taking care of the git & npm workflow for you
    it's also a really great tool if you're considering a universal application architecture because it hoists all of your common dependencies like react to the top
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
