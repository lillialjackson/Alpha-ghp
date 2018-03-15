import React, { Component } from 'react';
import Navigation from './components/navigation/navigation.js';
import SignIn from './components/signin/signin.js';
import Register from './components/register/register.js';
import PartnerSearch from './components/partnersearch/partnersearch.js';
import Home from './components/home/home.js';
import './App.css';




class App extends Component {
  constructor () {
    super();
    this.state = {
      input : '',
      route: 'signin',
      isSignedIn: false,
      user: {
        username: '',
        email:'',
        location: '',
        experienceLevel: ''
      }
    }
  }

// load user info
loadUser = (data) => {
  this.setState({user: {
    username: data.username,
    email: data.email,
    experienceLevel: data.experiencelevel,
    location: data.location
  }})
}

// form change functions
  // onInputChange = (event) => {
  //   this.setState({input: event.target.value});
  // }

// route change function
  onRouteChange = (route) => {
    if(route === 'signout'){
      this.setState({isSignedIn: false})
    } else if (route === 'home') {
      this.setState({isSignedIn: true})
    }
    this.setState({route: route});
  }

// begin render
  render() {

    const {isSignedIn, route} = this.state;
    return (
      <div className="App">
          <header className="App-header">
            <Navigation isSignedIn = {isSignedIn} onRouteChange = {this.onRouteChange} />
            <h1 className="App-title"><span className = 'alpha'>α</span>lpha</h1>
          </header>
          <h4 className="App-intro">
            Welcome to Alpha for Beta.
          </h4>

          {this.state.route === 'home'
            ? <div>
              <Home
                  username = {this.state.user.username}
                  location = {this.state.user.location}
                  experienceLevel = {this.state.user.experienceLevel}
              />
              <PartnerSearch />
            </div>
            : (
              route === 'signin'
              ? <SignIn loadUser={this.loadUser} onRouteChange = {this.onRouteChange} />
              : <Register loadUser={this.loadUser} onRouteChange = {this.onRouteChange} username = {this.state.user.username} />
            )
          }

      </div>
    );
  }
}

export default App;
