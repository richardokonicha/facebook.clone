import React from 'react'
import ReactDom from 'react-dom'
// // import { ThemeProvider } from '@material-ui/core/styles'
// // import theme from './theme/theme'
// // import CssBaseline from '@material-ui/core/CssBaseline'
// // import Profile from './components/profile/profile-body'


// const App = () => {
//     const [ value,  setValue ]  = React.useState(0)

//     const handlefunc = () => [
//         console.log("ljljljljklj")
//     ]
//     return (
//     <div>
//         {/* <ThemeProvider theme={theme}> */}
//             {/* <CssBaseline/> */}
//             {/* <Profile /> */}
//             <div>{value}</div>
//         <button onClick={handlefunc}>Click me!</button>


//         {/* </ThemeProvider> */}
//     </div>
//     )
// }

// export default App


export default function App() {
  const handlefunc = () => [console.log("ljljljljklj")];

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <button onClick={handlefunc}>Click me!</button>
    </div>
  );
}
