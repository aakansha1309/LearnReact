import React from 'react'
import ReactDOM from 'react-dom/client'
// import {jsx as _jsx} from "react/jsx-runtime.js";
import App from './App.jsx'

function Myapp() {
  return (
    <div>
       <h1>Custom App !</h1>
    </div>
  )
}

// const ReactElement = {           // simulation of how react see the html element of function
//   type: 'a',
//   props: {
//       href: 'https://google.com',
//       target: '_blank'                       // ye custom hai to render kuch expect kr rha hoga jo ise nhi mil rha isilye run nhi ho rha
//   },
//   children: 'Click me to visit google'
// }

const anotherElement = (
  <a href="https://google.com" target='_blank'>Visit Google</a>
)

const anotherUser = "code aur react"

const ReactElement = React.createElement(    // react has its special syntax in which he expect its expected values
  'a', // 1st parameter - tag
  {href: 'https://google.com', target: '_blank'}, // 2nd - object
  'click me to visit google', // 3rd - direct text
  anotherUser // variable inject evaluated expression
)

ReactDOM.createRoot(document.getElementById('root')).render(

  /*<ReactElement/>    // ye ek object hai aur object hai aur ye aise execute nhi hota */
  /*ReactElement*/

  // anotherElement
  ReactElement

  // <App />

)
