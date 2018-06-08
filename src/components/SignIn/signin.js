import React from 'react';
import './signin.css';


class SignIn extends React.Component {
  constructor (props){
    super(props);
    this.state = {
      signInEmail: '',
      signInPassword: ''
    }
  }

  // input field change
  onEmailChange = (event) => {
    this.setState({signInEmail: event.target.value.toLowerCase().trim()})
  }

  onPasswordChange = (event) => {
    this.setState({signInPassword: event.target.value})
  }



// POST fetch
  onSubmitSignIn = () => {
    return fetch('https://damp-forest-34333.herokuapp.com/signin',{
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      mode: 'cors',
      body: JSON.stringify({
        email: this.state.signInEmail,
        password: this.state.signInPassword
      })
    })
    .then(response => response.json())
    .then(user => {
      if(this.state.signInEmail === '' || this.state.signInPassword === ''){
        return alert('Please fill out your credentials to sign in');
      } else if (user.id){
        this.props.loadUser(user);
        return this.props.onRouteChange('home');
      } else {
        return alert('Error logging in!');
      }
    })
  }


  render(){

    return(
      <div>
          <div className = 'form signInModal'>
            <h4 className='signin-header'> Sign In </h4>
            <p> To preview Alpha, login using email: Guest@email.com and password: password (Hint! Try searching climbers located in Bikini Bottom) </p>
              <div>
                <div className='registerLabel'>
                  <label htmlFor="email"> Email: </label>
                </div>
                <div className= 'inputField'>
                  <input type="email" name="email" id = 'email'
                    onChange ={this.onEmailChange} required />
                  </div>
                    <br />
                <div className='registerLabel'>
                  <label htmlFor="password">Password: </label>
                </div>
                <div className= 'inputField'>
                  <input type="password" name="psw" id="password"
                      onChange ={this.onPasswordChange} required />
                    </div>
                       <br />
                  <button className= 'modalButton' onClick={this.onSubmitSignIn} >
                    Submit </button>
                </div>
                </div>
              </div>
            )
          }
}

export default SignIn;
