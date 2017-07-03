# Countdown Champ

Congratulations on finishing countdown champ! You just built your first app with React JS. Here’s an overview of the important concepts that you just learned:

**React Components** - re-usable and independent pieces of React code that comprise the User Interface.

**ES6 importing and exporting** - a new syntax for sharing code between separate files. Used in cases like `import React from ‘react’`

**State** - the pertinent data to an application. Each component has its local state as long as you declare add the constructor to a Component and declare its state object.

**Updating State** - When updating state, make sure to never mutate state directly. Doing so will lead to fatal errors in your application. Instead, re-declare new instances of state arrays or objects and use the setState() function to update state.

**Props** - similar to state, except this data inherits from parent component specifying pieces of state as properties.

**LifeCycle Methods** - events in React components that trigger in cases such as rendering on or off the screen, or during state updates. One example is the `componentDidMount()` lifeCycle hook.


## Challenges:

1. Make a separate component that works like a stopwatch. The user inputs the amount of time for the clock to run, and it starts counting down to 0.

2. Add an alert message that pops up when the timer counts down to 0.

3. Try running `npm build` for a build version and host the code on your website or any other host!
