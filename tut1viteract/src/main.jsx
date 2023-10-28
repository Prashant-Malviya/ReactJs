import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

// function MyApp(){
//   return(
//     <div>
//       <h1>myApp : Prashant</h1>
//     </div>
//   )
// }

// const reactElement = {
//   type : 'a',
//   props: {
//       href : 'https://google.com',
//       target: '_blank'
//   },
//   children: 'Click me to visite google'
// }

    // const anotherElement = (
    //   <a href="http://google.come" target="_blank">visite here</a>
    // )

    const anotherUser = 'Krishna'


    const reactElement = React.createElement(
      'a',
      {
        href : 'https://google.com',
        target: '_blank'
      },
      'Click Me to go to google ',
      anotherUser
    )


ReactDOM.createRoot(document.getElementById('root')).render(
    // {/* <MyApp /> */}
    // {/* reactElement */}
    // anotherElement
    // reactElement
    // <App />
    reactElement
)
