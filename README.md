# 7.2.7 Activity : Component Lifecycle

## Getting Started
- Hit run
- Explore the code you currently have
- Open the devtools console in your browser (recommended to open the app in a new tab by clicking the button to the right of the Repl.it internal URL bar)

## Mounting
- Import the Timer component on App.jsx, then call it underneath `<h1> Learning Cleanup </h1>`
- At this point, you should notice that the console printed `mounted`!

```js
  return (
    <main>
      <h1>Learning Cleanup!</h1>
      <Timer />
    </main>
  )
```

## Unmounting
- Now to get an unmount to trigger, let's conditionally render `<Timer />` on the state of `toggle`. 
- We will also need a button that inverts the state of toggle `onClick`.

```js
  return (
    <main>
      <h1>Learning Cleanup!</h1>
      <button onClick={
        () => setToggle(!toggle)}>
        Toggle Timer
      </button>
      { toggle ? <Timer /> : null }
    </main>
  )
```

- Great! Now try toggling the "timer" component on and off. We should see the "mount" print when it enters the screen.

- At this point, it may be getting more obvious why we will need cleanup. Let's get that implemented!

## Cleanup
- Inside of Timer.jsx, insert a return value in your useEffect that runs a function.
- This function should first `console.log('unmount')`, then `clearInterval(interval)`.

- Once that is done, try toggling your timer again. Much better!

## Let's see an example of an update
- Add a state variable called `title` to your app, we will be replacing our `Learning Cleanup!` with the value of that variable, so feel free to instantiate the default state value to any string you like.
- Let's now define a function that handles the changing of the title state variable. We will be declaring an input in our return below to call this function onChange.
```js
  const handleChange = (e) => {
    setTitle(e.target.value)
  }
```

```js
  <input type="text" onChange={handleChange} />
```

- Now try typing in your input, while the timer is on. Watch what happens in the console! Because the App-level is re-rendering on title change, we are completely resetting the timer, updating the component, each time we press a key!

```js
  import React, {useEffect, useState} from 'react'
  import Timer from './Timer'

  function App() {
    let [toggle, setToggle] = useState(false)
    let [title, setTitle] = useState('Learning Cleanup!')

    const handleChange = (e) => {
      setTitle(e.target.value)
    }

    return (
      <main>
        <h1>{title}</h1>
        <button onClick={
          () => setToggle(!toggle)}>
          Toggle Timer
        </button>
        {timerToggle ? <Timer /> : null}
        <input type="text" onChange={handleChange} />
      </main>
    )
  }
```

## Taking it further...

- Currently, the title change causes the timer to completely reset. Try to come up with a way to prevent this behavior from happening! *hint: you will need to move existing elements into a new component!*
- Consider how one could dynamically render the value of `count` to the screen. What changes would we need to make in order to cause that render?