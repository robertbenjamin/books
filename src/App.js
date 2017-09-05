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

export default App;
