import React from 'react';
import './navigation.css';

const Navigation = ({onRouteChange, isSignedIn}) => {

  if (isSignedIn) {
    return (
      <div className = 'authenticate' >
        <div >
          <p onClick = {() => onRouteChange('signout')} >
             Sign Out
          </p>
        </div>
      </div>
    );
  } else {
    return (
      <div className = 'authenticate' >
        <div >
          <p onClick = {() => onRouteChange('signin')} >
            Sign In
          </p>
        </div>
        <div>
          <p onClick = {() => onRouteChange('register')} >
            Register
          </p>
        </div> 
      </div>

    );

  }

}

export default Navigation;
