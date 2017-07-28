import React  from 'react';
import { Route } from 'react-router-dom';

import './App.css';

import AppHeader from 'components/AppHeader';
import AppFooter from 'components/AppFooter';

import BookList from 'components/BookList';
import AboutMe from 'components/AboutMe';

function App() {
  return(
    <div>
      <AppHeader />
      <main>
        <Route exact path="/" component={BookList} />
        <Route exact path="/about" component={AboutMe} />
      </main>
      <AppFooter />
    </div>
  )
}
// class App extends Component {
//   render() {
//     return (

//       <div className="App">
//         <div className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <h2>Welcome to React</h2>
//         </div>
//         <p className="App-intro">
//           To get started, edit <code>src/App.js</code> and save to reload.
//         </p>
//       </div>
//     );
//   }
// }

export default App;
