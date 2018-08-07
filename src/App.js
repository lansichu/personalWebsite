import React, { Component } from 'react';
// includes
import './Assets/css/default.min.css';
import {
	BrowserRouter as Router,
	Route,
	Link
} from 'react-router-dom';
// Components
import Header from './components/headerComponents/header';
import Footer from './components/footerComponents/footer';
import HomePage from './components/pages/home';
import AboutPage from './components/pages/about';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Header />

          <Route exact path='/' component={HomePage} />
          <Route exact path='/About' component={AboutPage} />

          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
